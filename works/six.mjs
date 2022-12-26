var artwork;
var html;
var img;

// 384x384
// 384x292
// 292x384
artwork = {
	slug: "bbb-03",
	title: "Bbb 03",
	image: "b03",
	imageCategory: "gallery",
	img: {
		src: "/images/works/bbb-03/b03.jpg",
		alt: "b03",
		width: "292",
		height: "384",
	},
	year: "2006",
	medium: "oil",
	surface: "canvas",
	heightInches: "32",
	widthInches: "24",
	depthInches: "0.33",
	ekphrasis: "<p>SIX! At sapiente quae sed voluptas sunt non nostrum esse ut <a href=https://example.com/>consequuntur</a> voluptate aut fugiat nihil ab galisum dicta. Ut illum autem qui dolor dolorem a ipsum ratione id tempora enim ea ullam esse id vitae omnis. Eum praesentium impedit ut nulla tempora vel sapiente tenetur?",
	saatchiUrl: "https://example.com/",
	originalAvailable: "true"
};

html = `<h2>Six</h2><p>Six! Rem possimus voluptate qui voluptas consequatur eos officiis fuga. Ut magni quae ut voluptatem quas non optio odio sit galisum facilis et iste quia qui asperiores rerum At atque reiciendis.</p>`;

img = {
	"src": "/images/works/b03.png",
	"alt": "b03",
	"width": "384",
	"height": "384"
};

export default Object.freeze({
  artwork,
  html,
  img
});
