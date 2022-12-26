var artwork;
var html;
var img;

// 384x384
// 384x292
// 292x384
artwork = {
	slug: "bbb-01",
	title: "Bbb 01",
	image: "b01",
	imageCategory: "gallery",
	img: {
		src: "/images/works/bbb-01/b01.jpg",
		alt: "b01",
		width: "384",
		height: "384",
	},
	year: "2004",
	medium: "oil",
	surface: "canvas",
	heightInches: "32",
	widthInches: "32",
	depthInches: "1.0",
	ekphrasis: "<p>FOUR! Hic soluta modi et magnam molestiae id consequatur <a href=https://example.com/>eligendi</a> sed odio quasi. Sit quia galisum in iusto voluptas est iusto dolore aut odio voluptates id accusantium explicabo. Et illum possimus non nostrum similique qui quibusdam reiciendis aut quaerat dolorem. Nam molestiae adipisci aut deleniti rerum sit quis internos.</p>",
	saatchiUrl: "https://example.com/",
	originalAvailable: "false"
};

html = `<h2>Four</h2><p>Four! Rem possimus voluptate qui voluptas consequatur eos officiis fuga. Ut magni quae ut voluptatem quas non optio odio sit galisum facilis et iste quia qui asperiores rerum At atque reiciendis.</p>`;

img = {
	"src": "/images/works/b01.png",
	"alt": "b01",
	"width": "384",
	"height": "384"
};

export default Object.freeze({
  artwork,
  html,
  img
});
