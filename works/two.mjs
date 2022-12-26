var artwork;
var html;
var img;

// 384x384
// 384x292
// 292x384
artwork = {
	slug: "aaa-02",
	title: "Aaa 02",
	image: "a02",
	imageCategory: "gallery",
	img: {
		src: "/images/works/aaa-02/a02.jpg",
		alt: "a02",
		width: "292",
		height: "384",
	},
	year: "2002",
	medium: "oil",
	surface: "canvas",
	heightInches: "24",
	widthInches: "32",
	depthInches: "0.5",
	ekphrasis: "<p>TWO! Aut quis libero eos doloremque <a href=https://example.com/>blanditiis</a> eos odit natus quo delectus consequatur rem vitae laboriosam? Id omnis error sed autem repellendus id recusandae nemo sed voluptas consequuntur ab fugit nihil? Ut vitae tenetur est maxime officia 33 dolore rerum qui fugiat dolor. Nam ipsa fuga in harum nemo aut libero debitis est rerum explicabo ut omnis pariatur cum repellendus neque.",
	saatchiUrl: "https://example.com/",
	originalAvailable: "false"
};

html = `<h2>Two</h2><p>Two! Rem possimus voluptate qui voluptas consequatur eos officiis fuga. Ut magni quae ut voluptatem quas non optio odio sit galisum facilis et iste quia qui asperiores rerum At atque reiciendis.</p>`;

img = {
  src: "/images/works/a02.png",
  alt: "a02",
  width: "384",
  height: "384",
};

export default Object.freeze({
  artwork,
  html,
  img,
});
