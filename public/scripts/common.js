var commonRoutines;
var loadModules;
var modules;
var o;
var observer;
var failsafeInterval;

// common object:
o = {};

modules = [
  "./modules/fauxPopstate.mjs",
  "./modules/customStyle.mjs",
  "./modules/appendToCSS.mjs",
  "./modules/pageModuleLoader.mjs",
  "./modules/commonEventListeners.mjs",
];

o.assignToCommonObject = function (object) {
  Object.keys(object).forEach(function (key) {
    if (typeof object[key] === "function") {
      o[key] = object[key].bind(o);
    } else {
      o[key] = object[key];
    }
  });
};

commonRoutines = function () {
  o.fauxPopstate();
  o.customStyle();
  o.pageModuleLoader();
  o.commonEventListeners();
};

loadModules = function () {
  var module;

  // Either failsafeInterval or observer will still be defined:

  if (failsafeInterval !== undefined) {
    // It will equal undefined going forward:
    failsafeInterval = window.clearInterval(failsafeInterval);
  }

  if (observer !== undefined) {
    // It will equal undefined going forward:
    observer = observer.disconnect();
  }

  module = modules.shift();
  if (module) {
    import(module)
      .then(function ({ default: object }) {
        o.assignToCommonObject(object);
      })
      .catch(function (error) {
        console.log(error);
      })
      // repeatedly call this function until no modules are left to load:
      .finally(loadModules);
  } else {
    // Call common routines when done:
    commonRoutines();
    //window.removeEventListener("load", loadModules);
  }
};

// We must wait before setting any classes, etc., on elements
// that were not present on the components.
// Sadly, this doesn't work in all cases, especially after running app
// the first time after starting server:
//
// window.addEventListener("load", loadModules);
//
// So, use mutationObserver to look for changes to the TITLE element.
// It seems that changes to the head happen AFTER the main element is composed.
// This is hackish, but it works for now.

observeTitle = function () {
  var callback;
  var config;
  var elements;
  //var observer;
  var target;
  var titleChange;

  // run the loadModules() function after the title is changed 3 times
  titleChange = 0;
  callback = function () {
    titleChange += 1;
    if (titleChange === 2) {
      loadModules();
      if (observer !== undefined) {
        observer = observer.disconnect();
      }
    }
  };

  target = document.querySelector("HEAD");
  // this is a live collection - when the node is added the [0] element will be defined
  elements = target.getElementsByTagName("TITLE");
  config = { subtree: true, childList: true };
  observer = new MutationObserver(callback);
  observer.observe(target, config);
};

observeTitle();
// In case there are not at least 2 changes to TITLE, run loadModules() after 3 seconds:
failsafeInterval = setInterval(loadModules, 3000);

// Do this explicitly once, in case the DOM mutations are finished before this script is run:
//}, 0);

//window.addEventListener("load", loadModules);
//window.setTimeout(loadModules, 167);

// NB: To monitor all window events in console:
// monitorEvents(window);
// See: https://developer.chrome.com/blog/quickly-monitor-events-from-the-console-panel-2/
