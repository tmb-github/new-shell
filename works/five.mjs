var artwork;
var html;
var img;

// 384x384
// 384x292
// 292x384
artwork = {
	slug: "bbb-02",
	title: "Bbb 02",
	image: "b02",
	imageCategory: "gallery",
	img: {
		src: "/images/works/bbb-02/b02.jpg",
		alt: "b02",
		width: "384",
		height: "292",
	},
	year: "2005",
	medium: "acrylic",
	surface: "canvas",
	heightInches: "24",
	widthInches: "32",
	depthInches: "0.5",
	ekphrasis: "<p>FIVE! A internos repellendus quo rerum vero et itaque <a href=https://example.com/>labore</a> aut ipsa unde et inventore consequatur aut aliquam soluta sed tempore maiores. Ut praesentium facere sed nostrum mollitia ut molestias atque cum quae nostrum non neque laudantium quo facilis obcaecati! Ex ullam quia ut autem voluptatem quo temporibus velit qui voluptatem doloribus sed consequuntur placeat ut molestias consequatur 33 officiis esse. Ea omnis dolorem et iure laborum 33 dolor tempore sit omnis ipsam et tenetur earum ut exercitationem quod et praesentium enim.</p>",
	saatchiUrl: "https://example.com/",
	originalAvailable: "true"
};

html = `<h2>Five</h2><p>Five! Rem possimus voluptate qui voluptas consequatur eos officiis fuga. Ut magni quae ut voluptatem quas non optio odio sit galisum facilis et iste quia qui asperiores rerum At atque reiciendis.</p>`;

img = {
	"src": "/images/works/b02.png",
	"alt": "b02",
	"width": "384",
	"height": "384"
};

export default Object.freeze({
  artwork,
  html,
  img
});
