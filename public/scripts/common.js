var commonRoutines;
var loadModules;
var modules;
var o;

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
  var module = modules.shift();
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
  }
};

loadModules();
