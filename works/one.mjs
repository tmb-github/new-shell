var artwork;
var html;
var img;

// 384x384
// 384x292
// 292x384
artwork = {
	slug: "aaa-01",
	title: "Aaa 01",
	image: "a01",
	imageCategory: "gallery",
	img: {
		src: "/images/works/aaa-01/a01.jpg",
		alt: "a01",
		width: "384",
		height: "384",
	},
	year: "2001",
	medium: "acrylic",
	surface: "canvas",
	heightInches: "32",
	widthInches: "32",
	depthInches: "1.0",
	ekphrasis: "<p>ONE! Lorem ipsum dolor sit amet. Et totam eaque aut quae <a href='https://example.com/'>veritatis</a> non perspiciatis ipsum et quis cupiditate qui enim facere. Sed corrupti voluptates et dolorem reiciendis aut autem asperiores quo ducimus galisum 33 neque voluptas et galisum dolor. Vel internos porro 33 culpa internos ut reiciendis cumque qui quas molestiae At earum voluptatem aut obcaecati soluta.</p>",
	saatchiUrl: "https://example.com/",
	originalAvailable: "true"
};


html = `<h2>One</h2><p>One! Rem possimus voluptate qui voluptas consequatur eos officiis fuga. Ut magni quae ut voluptatem quas non optio odio sit galisum facilis et iste quia qui asperiores rerum At atque reiciendis.</p>`;

// <Image src="/images/works/a01.png" alt="a01" width="384" height="384" priority />

img = {
  src: "/images/works/a01.png",
  alt: "a01",
  width: "384",
  height: "384",
};

export default Object.freeze({
  artwork,
  html,
  img,
});
