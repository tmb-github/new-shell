(function () {
  let callback;
  let config;
  let customStyle;
  let observer;
  let prevTitle;
  let prevTitleText;
  let target;
  let titles;

  // SEE: https://stackoverflow.com/questions/55284360/mutationobserver-detecting-element-appereance-and-changing-of-elements-value

  target = document.querySelector("HEAD");
  // this is a live collection - when the node is added the [0] element will be defined
  titles = target.getElementsByTagName("TITLE");

  callback = () => {
    let title = titles[0];
    //  the element was added/replaced entirely or just its internal text node
    if (title && (title !== prevTitle || title.textContent !== prevTitleText)) {
      prevTitle = title;
      prevTitleText = title.textContent;
      customStyle();
    }
  };

  observer = new MutationObserver(callback);

  config = { subtree: true, childList: true };
  observer.observe(target, config);

  customStyle = function () {
    //const title = titles[0];
    //console.log(title, title.textContent);
    document.querySelectorAll(".custom-style").forEach(function (element) {
      if (element.parentNode) {
        // remove element from the DOM:
        element.parentNode.removeChild(element);
        // Remove reference to element so it can be garbage-collected:
        // (Set each element in the loop to null, as not all elements will
        // have parents, so not all of them will deleted, so we can't simply
        // test for the last element returned by the forEach loop)
        element = null;
      }
    });

    // Select <custom-style> element:
    document
      .querySelectorAll("CUSTOM-STYLE")
      .forEach(function (customStyleElement) {
        let fragment;
        let headElement;
        let styleElement;

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

        document
          .querySelector(".main.visibility-hidden")
          ?.classList.remove("visibility-hidden");
        /*
// Leaving this in causes warning in console: "Expected server HTML to contain a matching <custom-style> in <main>."
        if (customStyleElement.parentNode) {
          // remove element from the DOM:
          customStyleElement.parentNode.removeChild(customStyleElement);
          // Remove reference to element so it can be garbage-collected:
          // (Set each element in the loop to null, as not all elements will
          // have parents, so not all of them will deleted, so we can't simply
          // test for the last element returned by the forEach loop)
          customStyleElement = null;
        }
*/
      });
  };
})();
