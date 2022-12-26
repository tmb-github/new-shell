var artwork;
var html;
var img;

// 384x384
// 384x292
// 292x384
artwork = {
	slug: "aaa-03",
	title: "Aaa 03",
	image: "a03",
	imageCategory: "gallery",
	img: {
		src: "/images/works/aaa-03/a03.jpg",
		alt: "a03",
		width: "292",
		height: "384",
	},
	year: "2003",
	medium: "acrylic",
	surface: "canvas",
	heightInches: "32",
	widthInches: "24",
	depthInches: "0.33",
	ekphrasis: "<p>THREE! Lorem ipsum dolor sit amet. Et totam eaque aut quae <a href='https://example.com/'>veritatis</a> non perspiciatis ipsum et quis cupiditate qui enim facere. Sed corrupti voluptates et dolorem reiciendis aut autem asperiores quo ducimus galisum 33 neque voluptas et galisum dolor. Vel internos porro 33 culpa internos ut reiciendis cumque qui quas molestiae At earum voluptatem aut obcaecati soluta.</p>",
	saatchiUrl: "https://example.com/",
	originalAvailable: "true"
};

html = `<h2>Three</h2><p>Three! Rem possimus voluptate qui voluptas consequatur eos officiis fuga. Ut magni quae ut voluptatem quas non optio odio sit galisum facilis et iste quia qui asperiores rerum At atque reiciendis.</p>`;

img = {
	"src": "/images/works/a03.png",
	"alt": "a03",
	"width": "384",
	"height": "384"
};

export default Object.freeze({
  artwork,
  html,
  img
});
