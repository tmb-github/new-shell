var customStyle;

customStyle = function () {
  var callback;
  var config;
  var convertCustomStyle;
  var deleteCustomStyleElement;
  var elements;
  var o;
  var observer;
  var prevElement;
  var prevElementText;
  var target;

  o = this;

  // Deleting CUSTOM-STYLE element causes warning in console:
  // "Expected server HTML to contain a matching <custom-style> in <main>."
  deleteCustomStyleElement = false;

  // SEE: https://stackoverflow.com/questions/55284360/mutationobserver-detecting-element-appereance-and-changing-of-elements-value

  convertCustomStyle = function () {
    // Delete previously created <style> elements with .custom-style class:
    document.querySelectorAll("STYLE.custom-style").forEach(function (style) {
      if (style.parentNode) {
        // remove element from the DOM:
        style.parentNode.removeChild(style);
        // Remove reference to element so it can be garbage-collected:
        // (Set each element in the loop to null, as not all elements will
        // have parents, so not all of them will deleted, so we can't simply
        // test for the last element returned by the forEach loop)
        style = null;
      }
    });

    // Select <custom-style> element and copy its contents to new <style> element
    document
      .querySelectorAll("CUSTOM-STYLE")
      .forEach(function (customStyleElement) {
        var fragment;
        var headElement;
        var styleElement;

        // Select <head>:
        headElement = document.querySelector("HEAD");
        // Create fragment:
        fragment = document.createDocumentFragment();
        // Create <style> element to be inserted into the DOM:
        styleElement = document.createElement("STYLE");
        // Append it to the fragment:
        fragment.appendChild(styleElement);
        // Modify the properties of the element now that it's attached to the fragment:
        //styleElement.setAttribute("nonce", generatedNonce);
        styleElement.setAttribute("class", "custom-style");
        //styleElement.setAttribute("data-page", page);
        styleElement.innerHTML = customStyleElement.innerHTML;
        headElement.appendChild(fragment);

        o.appendToCSS(":root", "{ --main-opacity: 1; }");

        // Ensure it is not converted again:
        //customStyleElement.classList.add("converted");

        if (deleteCustomStyleElement && customStyleElement.parentNode) {
          // remove element from the DOM:
          customStyleElement.parentNode.removeChild(customStyleElement);
          // Remove reference to element so it can be garbage-collected:
          // (Set each element in the loop to null, as not all elements will
          // have parents, so not all of them will deleted, so we can't simply
          // test for the last element returned by the forEach loop)
          customStyleElement = null;
        }
      });
  };

  callback = function () {
    var element = elements[0];
    //  the element was added/replaced entirely or just its internal text node
    if (
      element &&
      (element !== prevElement || element.textContent !== prevElementText)
    ) {
      prevElement = element;
      prevElementText = element.textContent;
      convertCustomStyle();
    }
  };

  window.setTimeout(function () {
    target = document.querySelector("BODY");
    // this is a live collection - when the node is added the [0] element will be defined
    elements = target.getElementsByTagName("CUSTOM-STYLE");
    observer = new MutationObserver(callback);
    config = { subtree: true, childList: true };
    observer.observe(target, config);
    // Do this explicitly once, in case the DOM mutations are finished before this script is run:
    convertCustomStyle();
  }, 0);
};

export default Object.freeze({
  customStyle,
});
