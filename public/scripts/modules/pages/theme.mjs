var main;
var eventListeners;

main = function () {
  /*
  var o;
  o = this;
*/

  console.log("theme.mjs");
  eventListeners();
};

eventListeners = function () {
  // anchors:
  document.querySelectorAll(".theme .work-anchor").forEach(function (element) {
    if (!element.classList.contains("work-anchor-click-listener")) {
      element.addEventListener("click", function (e) {
        let parts = e.target.href.split("/");
        let theme = parts[parts.length - 2];
        let work = parts[parts.length - 1];

        e.preventDefault();
        window.history.pushState(
          {},
          document.title,
          "/theme/" + theme + "/" + work
        );
        document
          .querySelectorAll(".theme .artwork-json-storage script")
          .forEach(function (script) {
            if (script.dataset.artworkSlug === e.target.dataset.artworkSlug) {
              document
                .querySelectorAll(".theme .artwork-display .selected-work")
                .forEach(function (section) {
                  section.innerHTML = JSON.parse(script.textContent).article;
                });
            }
          });
      });
    } else {
      element.classList.add("work-anchor-click-listener");
    }
  });
};

export default Object.freeze({
  main,
  eventListeners,
});
