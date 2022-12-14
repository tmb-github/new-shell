const CustomStyle = () => {
  return (
    <custom-style class="display-none">{`

/* To 463px (next query overtakes 464px): */
@media all and (max-width: 464px) {
	.theme.main {
		margin: calc(1em + var(--header-height)) 1em 3em 1em;
	}
}
/* From 464px: */
@media all and (min-width: 464px) {
	.theme.main {
		margin: calc(1em + var(--header-height)) auto 3em auto;
		width: 432px;
	}
}

.theme a:link {
	background: transparent;
}

.theme p {
	margin-top: 1em;
}

.theme h2 {
	font-size: 1.5em;
	margin: .25em 0 0 0;
	text-align: center;
}

/*
.theme h2 > p,
.theme p ~ p {
	margin: 0;
	padding: 0;
}
*/

/* Limit paragraph width to @62 characters (ch unit wouldn't work here): */
/* We have to chain .main to .theme to increase the specificity to make the styling work */
.theme.main p {
	max-width: 27em;
}

.theme .tmb-alert .tmb-alert-dialog {
	margin: 60px auto;
}

/* 2022-07-25 */
.theme .artwork-nav-button span {
	font-style: italic;
	font-size: 16px;
	color: var(--menu-text-color);
	display: inline-block;
	transform: translateY(-22%);
}

.theme .artwork-nav-button.forward span {
	margin-right: 5px;
}

.theme .artwork-nav-button.back span {
	margin-left: 5px;
}

/* To 463px (next query overtakes 464px): */
@media all and (max-width: 464px) {
	.theme-listing.main {
		margin: calc(1em + var(--header-height)) 1em 3em 1em;
	}
}
/* From 464px: */
@media all and (min-width: 464px) {
	.theme-listing.main {
		margin: calc(1em + var(--header-height)) auto 3em auto;
		width: 432px;
	}
}

.theme-listing a:link {
	background: transparent;
}

.theme-listing ul {
	display: table;
	margin: 0 auto;
}

/****************************************
**** END THEME-LISTING PAGE ONLY ****
****************************************/


/* Limit paragraph width to @62 characters (ch unit wouldn't work here): */
/* We have to chain .main to .theme-listing to increase the specificity to make the styling work */
.theme-listing.main p {
	max-width: 27em;
}

/*
// For use with old carousel-gallery thumbnails, whose background was #eeeeee
// We want #fafafa to match rest of site:
.body {
	background-color: var(--theme-body-background-color);
}
*/

.theme .scroll-list {
	display: flex; /* wrapping flexbox */
	flex-wrap: wrap;
	padding: 0;
	margin: 0;
}

/*
NB: This rule is canceled by the following rule in page-artwork.css:
.artwork.artwork .artwork-nav { [...] }
*/

.theme .artwork-nav {
	display: none;
}


/*
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
*/

.theme .theme-display h2 {
	/* margin: calc(var(--header-height) + 12px) 0 6px 0; */
	margin: 12px 0 6px 0;
	font-size: 1.5rem;
	font-style: italic;
	letter-spacing: .15rem;
	text-align: center;
	text-shadow: 0 0 1px #fff, 0 0 0 #adadad, 1px 1px 0 #adadad, 1px 1px 1px #adadad;
	word-spacing: 0.15rem;
}

/*
apparently alot 17px for standard Scrollbar
*/
@media all and (max-width: 720px) {
	:root {
		--slide-size: calc(100vw / 3);
	}
	.theme .scroll-list {
		width: 100vw;
/*		margin: var(--header-height) 0 16px 0; */
		margin: 0 0 16px 0;
	}
}

/* Transition the margins to 16px by increasing by 1px for each single px viewport width size between 720px and 736px: */
@media all and (min-width: 720px) and (max-width: 736px) {
	:root {
		--t: calc(100vw - 720px);
		--slide-size: calc((100vw - (var(--t) * 2)) / 3);
	}
	.theme .scroll-list {
		width: calc(100vw - (var(--t) * 2));
/*		margin: calc(var(--header-height) + var(--t)) 0 var(--t) var(--t); */
		margin: 0 0 var(--t) var(--t);
	}
}


/* starting at 736px or so, perhaps start to add fixed margin of 16px more on each side? */
@media all and (min-width: 736px) and (max-width: 932px) {
	:root {
		--slide-size: calc((100vw - 32px) / 3);
	}
	.theme .scroll-list {
		width: calc(100vw - 32px);
/*		margin: calc(var(--header-height) + 16px) 0 16px 16px; */
		margin: 0 0 16px 16px;
	}
}

@media all and (min-width: 932px) {
	:root {
		--slide-size: 300px;
	}
	.theme .scroll-list {
		width: 900px;
/*		margin: calc(var(--header-height) + 16px) 0 16px calc((100vw - 900px) / 2); */
		margin: 0 0 16px calc((100vw - 900px) / 2);
	}
}

.theme .scroll-list li {
	display: inline-block;
	flex: 0 0 var(--slide-size);
/* To suppress white space in between LI items: */
	font-size: 0;
	height: var(--slide-size);
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: center;
	text-indent: 0;
/* For image rise on hover: */
	transition: transform 200ms linear;
	width: var(--slide-size);
}

.theme .scroll-list img {
	height: var(--slide-size);
	width: var(--slide-size);
}

.theme .scroll-list::after {
	content: '';
	display: block;
	flex: 999; /* grow by a large number */
}


/********************************
*** Make images rise on hover ***
********************************/

.theme .scroll-list li:hover {
	transform: scale(1.05);
}

  `}</custom-style>
  );
};

export default CustomStyle;
