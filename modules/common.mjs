let customStyle;

customStyle = function (page, generatedNonce) {
  //console.log(page);

  // remove any previous .custom-style element from DOM:
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
      let page;
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
      styleElement.setAttribute("nonce", generatedNonce);
      styleElement.setAttribute("class", "custom-style");
      styleElement.setAttribute("data-page", page);
      styleElement.innerHTML = customStyleElement.innerHTML;
      headElement.appendChild(fragment);

      if (customStyleElement.parentNode) {
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

export default Object.freeze({
  customStyle,
});
