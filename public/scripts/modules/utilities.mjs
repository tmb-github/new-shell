var camelCase;
var initialUppercase;
var kebabCase;
var pageNameVariations;

camelCase = function (str) {
	return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/gm, function (ltr, idx) {
		return (
			idx === 0
			? ltr.toLowerCase()
			: ltr.toUpperCase()
		);
	}).replace(/\s+/g, '');
};

initialUppercase = function (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

kebabCase = function (string) {
	return string.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase();
};

pageNameVariations = function (pageName) {

	const obj = {};

	obj.dataMjs = camelCase(pageName);
	obj.pageCssName = kebabCase(pageName);

	return obj;

};

export default Object.freeze({
	camelCase,
	initialUppercase,
	kebabCase,
	pageNameVariations
});
