var pageModuleLoader;

pageModuleLoader = function () {
  var assignToModulePropertyOnCommonObject;
  var callback;
  var config;
  var elements;
  var loadPageModule;
  var o;
  var observer;
  var prevElement;
  var prevElementText;
  var target;

  o = this;

  // SEE: https://stackoverflow.com/questions/55284360/mutationobserver-detecting-element-appereance-and-changing-of-elements-value

  assignToModulePropertyOnCommonObject = function (pageName, object) {
    if (!o.hasOwnProperty(pageName)) {
      o[pageName] = {};
    }
    Object.keys(object).forEach(function (key) {
      if (typeof object[key] === "function") {
        o[pageName][key] = object[key].bind(o);
      } else {
        o[pageName][key] = object[key];
      }
    });
  };

  loadPageModule = function () {
    //console.log("loadPageModule");
    observer.disconnect;
    document.querySelectorAll("MAIN.main").forEach(function (element) {
      if (element.dataset.mjs && element.dataset.mjs !== "") {
        // look for "data-[pageName]" on MAIN element, e.g.
        // <main class="main" data-mjs="dummy3">
        // ^ the data-mjs attribute indicates that dummy3.mjs should be loaded for this page!
        import("./pages/" + element.dataset.mjs + ".mjs")
          .then(function ({ default: object }) {
            assignToModulePropertyOnCommonObject(element.dataset.mjs, object);
          })
          .catch(function (error) {
            console.log(error);
          })
          // run main() method in page module:
          .finally(function () {
            o[element.dataset.mjs].main();
          });
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
      loadPageModule();
    }
  };

  window.setTimeout(function () {
    target = document.querySelector("HTML");
    // this is a live collection - when the node is added the [0] element will be defined
    elements = target.getElementsByTagName("HEAD");
    observer = new MutationObserver(callback);
    config = { subtree: true, childList: true };
    observer.observe(target, config);
  }, 0);
};

export default Object.freeze({
  pageModuleLoader,
});
