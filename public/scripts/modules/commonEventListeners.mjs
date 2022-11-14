var maxWidth759px;
var commonEventListeners;
var windowEvents;
var highlightMenuItem;
var currentHref;

windowEvents = {
	hashchange: false,
	keydown: false,
	load: false,
	popstate: false,
// onResizeEdits in siteWideEditsClosure.mjs:
	resize1: false,
// initializeWindowOnResizeRoutines in common.mjs:
	resize2: false,
};

maxWidth759px = true;

currentHref = window.location.href;

commonEventListeners = function () {
	var hamburgerLabelClick;
	var mainElement;
	var o;
//var onKeydown;
	var mainContentID;
	var skipToMainContentKeyupListener;
	var makeTransparentMaskClickable;
	var closeDrawerOnAnchorClick;
	
	var fauxPopstate;

// 'this' is the outer 'o' via .bind(o), so the outer 'o' === inner 'o':
	o = this;

	mainContentID = "#main-content";
	skipToMainContentKeyupListener = "skip-to-main-content-keyup-listener";

// For testing and debugging tabbing/entering drawer items:
// document.body.addEventListener('keyup', function (e) {
//	 console.log('active element: ', document.activeElement);
// });
	/*
// toggle useServiceWorker:
	onKeydown = function (zEvent) {
		if (zEvent.ctrlKey && zEvent.altKey && zEvent.key === "s") {
			console.log(
				"Ctrl+Alt+s: Delete caches, unregister service worker, clear session storage"
			);
			o.deleteCachesUnregisterServiceWorkerAndClearSessionStorage();
		}
		if (zEvent.ctrlKey && zEvent.altKey && zEvent.key === "l") {
			console.log("Ctrl+Alt+l: Go to login");
			location.replace(o.baseHref + "login");
		}
	};
*/

	makeTransparentMaskClickable = function () {
		var headerTransparentMask;
		var transparentMaskClick;

		headerTransparentMask = document.querySelector(".header .transparent-mask");

		transparentMaskClick = function () {
			document.querySelectorAll("#hamburger").forEach(function (hamburger) {
				hamburger.click();
			});
		};

		if (headerTransparentMask) {
			/*
			if (
				!headerTransparentMask.classList.contains(
					"transparent-mask-click-listener"
				)
			) {
				headerTransparentMask.classList.add("transparent-mask-click-listener");
				headerTransparentMask.addEventListener(
					"click",
					transparentMaskClick,
					false
				);
			}
			*/
			if (
				!headerTransparentMask.hasAttribute(
					"data-transparent-mask-click-listener"
				)
			) {
				headerTransparentMask.setAttribute(
					"data-transparent-mask-click-listener",
					"true"
				);
				headerTransparentMask.addEventListener(
					"click",
					transparentMaskClick,
					false
				);
			}
		}
	};

	closeDrawerOnAnchorClick = function () {
	// SAVE:
	// 'this' is the outer 'o' via .bind(o), so the outer 'o' === inner 'o':
	//	var o = this;

		function internalAnchorClick() {
			var mediaQueryString;
			var mqList;
			mediaQueryString = "(max-width: 759px)";
			mqList = window.matchMedia(mediaQueryString);
			if (mqList.matches === true) {
				window.setTimeout(function () {
					document.querySelectorAll("#hamburger").forEach(function (hamburger) {
						hamburger.click();
					});
				}, 1000);
			}
		}

	// The selector MUST be a.internal-anchor because the home button is duplicated
	// as a DIV as well as an A, so only listen on the anchors!

		document
			.querySelectorAll(".nav a.internal-anchor")
			.forEach(function (element) {
/*
			if (element.dataset.drawerInternalAnchorClickListener !== 'true') {
				element.setAttribute('data-drawer-internal-anchor-click-listener', 'true');
*/
				if (
					!element.classList.contains("drawer-internal-anchor-click-listener")
				) {
					element.classList.add("drawer-internal-anchor-click-listener");
					element.addEventListener("click", internalAnchorClick);
				}
			});
	};

	/* qwer */
	hamburgerLabelClick = function () {
		var match;
		var pageSlug;

	// To see if we're on a secondary UL page, check for .secondary-ul.selected:

		document.querySelectorAll(".secondary-ul.selected").forEach(function (ul) {
		// The selected anchor within the UL will have .selected
			ul.querySelectorAll("a.selected").forEach(function (a) {
			// Its data-page will be the page-slug, without a trailing slash:
				pageSlug = a.parentElement.dataset.page;
			});
		});

	// The MAIN element will have the page slug as one of its classes.
	// If there's a match between them, we need to display the corresponding
	// secondary menu when opening it with the hamburger:
		match = false;
		mainElement = document.querySelector("MAIN");
		if (pageSlug && mainElement.classList.contains(pageSlug)) {
			match = true;
		}

	// Select all of the side-switchers:
		document
			.querySelectorAll("[id^=side-switcher]")
			.forEach(function (sideSwitcher) {
			// assume that none of them should be checked (thus clearing out old check, if present):
				sideSwitcher.checked = false;
				if (match) {
				// But if we have a match, determined above, check the sideSwitcher that is a sibling
				// to the selected secondary UL:
					if (
						sideSwitcher.parentElement.querySelector(
							"#" + sideSwitcher.id + " ~ .secondary-ul.selected"
						)
					) {
						sideSwitcher.checked = true;
					}
				}
			});
	};



// To show the blue focus ring around tabbable anchors ONLY when tabbing:
	document.addEventListener("keydown", function (e) {
		if (e.code === "Tab") {
			document.body.classList.add("show-focus-outlines");
		}
	});
// To revert back to standard behavior:
	document.addEventListener("click", function (ignore) {
		document.body.classList.remove("show-focus-outlines");
	});
	/*
	if (o.windowEvents.keydown === false) {
		window.addEventListener("keydown", onKeydown);
		o.windowEvents.keydown = true;
	}
*/
// Ensure the correct side of the drawer is displayed based on which page is in view:
	document.querySelectorAll("label[for=hamburger]").forEach(function (element) {


		if (!element.classList.contains("label-for-hamburger-click-listener")) {
			element.classList.add("label-for-hamburger-click-listener");
/*
		if (element.dataset["label-for-hamburger-click-listener"] !== 'true') {
			element.setAttribute("data-label-for-hamburger-click-listener", 'true');
*/
			element.addEventListener("click", hamburgerLabelClick);
		}
	});

// When hamburger is first clicked, the tabindex on the items active side
// should be set to 0 (initially, they're all set to -1, i.e., inactive)
//
// .menu-side-one should show when it is being tabbed
// .menu-side-two should show when it is being tabbed
//
// Each side should be accessible to tabbing only after the LABEL list item is
// ENTERED
// This may require toggling the tabindex of each side on and off
// The mechanism should continue to work if the user switches between tabbing
// and clicking with the mouse.

// When .header-mobile is on the HEADER element, place the initial focus on
// either the hamburger or the element before the "Skip to main content" link.
// That should be done in the corner of the code handling what to do when the
// page first loads (via SPA mechanism or not); it doesn't belong in this
// routine:

// Also, use same strategy as found here to ensure duplicate event listeners
// are not added to the same element, elsewhere in the code (perhaps in
// JSCarousel, too).

//////////////////////////
// SKIP TO MAIN CONTENT //
//////////////////////////

	document
		.querySelectorAll("#skip-to-main-content")
		.forEach(function (element) {
			var windowLocationHref = window.location.href;
		// Add '#main-content' to URL unless it's already there:
			if (
				windowLocationHref.slice(
					windowLocationHref.length - mainContentID.length
				) !== mainContentID
			) {
				element.setAttribute("href", window.location.href + mainContentID);
			}


/*
			if (element.dataset.skipToMainContentKeyupListener !== 'true') {
				element.setAttribute("data-skip-to-main-content-keyup-listener", 'true');
*/
			if (!element.classList.contains(skipToMainContentKeyupListener)) {
				element.classList.add(skipToMainContentKeyupListener);
				element.addEventListener("keyup", function (e) {
					e.preventDefault();
					if (e.code === "Enter") {
						document
							.querySelectorAll(mainContentID)
							.forEach(function (mainContent) {
								mainContent.focus();
							// close the drawer if skipping to the main content:
								document.getElementById("hamburger").checked = false;
							});
					}
				});
			}
		});

///////////////
// HAMBURGER //
///////////////

	document
/*
		.querySelectorAll("label[for=hamburger]:not(.keyup-listener)")
*/
		.querySelectorAll("label[for=hamburger]:not([data-keyup-listener])")

		.forEach(function (element) {

			element.classList.add("keyup-listener");
//			element.dataset.keyupListener = "";

			element.addEventListener("keyup", function (e) {
			//console.log('hamburger: keyup -----');
			// Enter key:
				if (e.code === "Enter") {
				//console.log('Enter');
					e.preventDefault();
					if (o.maxWidth759px) {
					//console.log('menu-side-one ALL LI: tabIndex = 0');
						document
							.querySelectorAll(".header .menu-side-one")
							.forEach(function (element) {
								element.tabIndex = 0;
							});
					//console.log('menu-side-two ALL LI: tabIndex = -1');
						document
							.querySelectorAll(".header .menu-side-two")
							.forEach(function (element) {
								element.tabIndex = -1;
							});
					}
				//console.log('click');
					document.querySelectorAll("#hamburger").forEach(function (hamburger) {
						hamburger.click();
					});
				}
			//console.log('hamburger: keyup ^^^^^');
			});
		});

///////////////////
// MENU SIDE ONE //
///////////////////

	document.querySelectorAll(".menu-side-one").forEach(function (li) {
/*
		if (!li.dataset.keyupListener || !li.dataset.keyupListener !== 'true') {
			li.dataset.keyupListener = 'true'
*/
		if (!li.classList.contains("keyup-listener")) {
			li.classList.add("keyup-listener");
		// keyup events on the internal UL LI should not be registered on the "See the Art" LI that contains them!

			li.addEventListener("keyup", function (e) {
				if (!e.target.classList.contains("menu-side-two")) {
				//console.log('menu-side-one li: keyup -----');
					e.preventDefault();
				// Tab key:
					if (e.code === "Tab") {
					//console.log('Tab');
						if (o.maxWidth759px) {
							document
								.querySelectorAll("#hamburger")
								.forEach(function (hamburger) {
									hamburger.checked = true;
								});
							document
								.querySelectorAll("[id^=side-switcher]")
								.forEach(function (sideSwitcher) {
								//console.log('#side-switcher unchecked');
									sideSwitcher.checked = false;
								});
						}
					}
				// Escape key:
					if (e.code === "Escape") {
					//console.log('Escape');
						document
							.querySelectorAll("#hamburger")
							.forEach(function (hamburger) {
							//console.log('#hamburger click');
								hamburger.click();
							});
					// NB: The BODY element must have 'tabfocus=0' for this to work:
					//console.log('body focus');
						document.querySelector("body").focus();
					}
				// Enter key:
					if (e.code === "Enter") {
					//console.log('Enter');
					// If the first child is an anchor:
						if (li.firstElementChild.tagName === "A") {
						//console.log('a click');
							li.firstElementChild.click();
						// If the first child is input#side-switcher:
							/* qwer */
						//						} else if (li.firstElementChild.id === 'side-switcher') {
						} else if (li.firstElementChild.id.startsWith("side-switcher")) {
						//console.log('#side-switcher: REVERSE CHECKED STATE');
							li.firstElementChild.checked = !li.firstElementChild.checked;
						// The data-switcher-target attribute will have the name of the switcher target ('Main Menu' or 'See the Art');
							document
								.querySelectorAll(
									'.header .nav li[data-span="' +
										li.firstElementChild.dataset.switcherTarget +
										'"]'
								)
								.forEach(function (target) {
								//console.log(li.firstElementChild.dataset.switcherTarget + ': click, focus; #side-switcher: blur');
								// #side-swicher:
									e.target.blur();
								// "Main Menu" DIV or "See the Art" DIV:
									target.click();
									target.focus();
								});
						// reverse all tab indexes:
						//console.log('REVERSE ALL TABINDEXES ON BOTH SIDES');
							document
								.querySelectorAll(".header .nav ul li[tabindex]")
								.forEach(function (item) {
									if (item.tabIndex === 0) {
										item.tabIndex = -1;
									} else {
										item.tabIndex = 0;
									}
								});
						}
					}
				//console.log('menu-side-one li: keyup ^^^^^');
				}
			});
		}
	});

///////////////////
// MENU SIDE TWO //
///////////////////

	document.querySelectorAll(".menu-side-two").forEach(function (li) {
/*
		if (!li.dataset.keyupListener || !li.dataset.keyupListener !== 'true') {
			li.dataset.keyupListener = 'true'
*/
		if (!li.classList.contains("keyup-listener")) {
			li.classList.add("keyup-listener");
			li.addEventListener("keyup", function (e) {
				if (!e.target.classList.contains("menu-side-one")) {
				//console.log('menu-side-two li: keyup -----');
					e.preventDefault();
				// Tab key:
					if (e.code === "Tab") {
					//console.log('Tab');
						if (o.maxWidth759px) {
							document
								.querySelectorAll("#hamburger")
								.forEach(function (hamburger) {
									hamburger.checked = true;
								});
							document
								.querySelectorAll("[id^=side-switcher]")
								.forEach(function (sideSwitcher) {
								//console.log('#side-switcher checked');
									sideSwitcher.checked = true;
								});
						}
					}
				// Escape key:
					if (e.code === "Escape") {
					//console.log('Escape');
						document
							.querySelectorAll("#hamburger")
							.forEach(function (hamburger) {
							//console.log('#hamburger click');
								hamburger.click();
							});
					// NB: The BODY element must have 'tabfocus=0' for this to work:
					//console.log('body focus');
						document.querySelector("body").focus();
					}
				// Enter key:
					if (e.code === "Enter") {
					//console.log('Enter');
					// If the first child is an anchor:
						if (li.firstElementChild.tagName === "A") {
						//console.log('a click');
							li.firstElementChild.click();
						// If the first child is input#side-switcher:
							/* qwer */
						} else if (
							li.firstElementChild.matches("div[data-for^=side-switcher]")
						) {
						//console.log('#side-switcher: REVERSE CHECKED STATE');
							document
								.querySelectorAll("[id^=side-switcher]")
								.forEach(function (sideSwitcher) {
									sideSwitcher.checked = !sideSwitcher.checked;
								});
						// The data-switcher-target attribute will have the name of the switcher target ('Main Menu' or 'See the Art');
							document
								.querySelectorAll(
									'.header .nav li[data-span="' +
										li.firstElementChild.dataset.switcherTarget +
										'"]'
								)
								.forEach(function (target) {
								//console.log(li.firstElementChild.dataset.switcherTarget + ': click, focus; #side-switcher: blur');
								// #side-swicher:
									e.target.blur();
								// "Main Menu" DIV or "See the Art" DIV:
									target.click();
									target.focus();
								});
						// reverse all tab indexes:
						//console.log('REVERSE ALL TABINDEXES ON BOTH SIDES');
							document
								.querySelectorAll(".header .nav ul li[tabindex]")
								.forEach(function (item) {
									if (item.tabIndex === 0) {
										item.tabIndex = -1;
									} else {
										item.tabIndex = 0;
									}
								});
						}
					}
				//console.log('menu-side-two li: keyup ^^^^^');
				}
			});
		}
	});

// Specific to side-switcher in header:
//
// To satisfy accessibility requirements:
// * I can't have two LABEL elements that reference the same INPUT element.
// * Using 'aria-labelledby' is meant to reference non-LABEL elements.
// * I can't use a custom element, because the Wiersch Validator can't
// associate the 'aria-labelledby' values on the INPUT with the IDs on the
// custom element.
// * Lastly, 'for' can only be used on LABELs.
//
// So, I'm using a DIV with a custom attribute of 'data-for=side-switcher'
// to reference the #side-switcher ID of the INPUT element.
//
// NB: different kinds of listeners are being tested for:
// mouse-clicks: .side-switcher-click-listener
// tabbing: side-switcher-keyup-listener

////////////////////
// SIDE SWITCHERS //
////////////////////

	document
		.querySelectorAll("div[data-for^=side-switcher]")
		.forEach(function (element) {
		// For mouse-clicks
			/* qwer */

			if (
				!element.classList.contains(element.dataset.for + "-click-listener")
			) {
				element.classList.add(element.dataset.for + "-click-listener");
/*
			if (element.dataset[element.dataset.for + "-click-listener"] !== 'true') {
				element.setAttribute(["data-" + element.dataset.for + "-click-listener"], 'true');
*/
				element.addEventListener("click", function (ignore) {
				//console.log('div[data-for=side-switcher]: click -----');
				// Find the element whose ID matches the 'data-for' attribute of the side-switcher DIV:
					/* qwer */
					document
						.querySelectorAll("#" + element.dataset.for)
						.forEach(function (sideSwitcher) {
							sideSwitcher.click();
						});
				//console.log('div[data-for=side-switcher]: click ^^^^^');
				});
			}
		// For entering:
			/* qwer */
			if (!element.classList.contains('side-switcher-keyup-listener')) {
				element.classList.add('side-switcher-keyup-listener');
/*
			if (
				element.dataset[element.dataset.for + "-keyup-listener"] !== 'true'
			) {
				element.setAttribute("data-" + element.dataset.for + "-keyup-listener", 'true');
*/
				element.addEventListener("keyup", function (e) {
				//console.log('div[data-for=side-switcher]: keyup -----');
				// Enter key:
					if (e.code === "Enter") {
					//console.log('Enter');
						if (o.maxWidth759px) {
							document
								.querySelectorAll(".header .menu-side-one")
								.forEach(function (element) {
									if (element.tabIndex === 0) {
									//console.log('menu-side-one tabIndex = -1');
										element.tabIndex = -1;
									} else {
									//console.log('menu-side-one tabIndex = 0');
										element.tabIndex = 0;
									}
								});
							document
								.querySelectorAll(".header .menu-side-two")
								.forEach(function (element) {
									if (element.tabIndex === 0) {
									//console.log('menu-side-two tabIndex = -1');
										element.tabIndex = -1;
									} else {
									//console.log('menu-side-one tabIndex = 0');
										element.tabIndex = 0;
									}
								});
						}
						document
							.querySelectorAll("[id^=side-switcher]")
							.forEach(function (sideSwitcher) {
								sideSwitcher.click();
							});
					}
				//console.log('div[data-for=side-switcher]: keyup ^^^^^');
				});
			}
		});

// We need to add click listeners on the gallery image links
// on the home page every time we return to it, as they are not present
// when the MAIN content is loaded:

	if (navigator.onLine && o.useSpa) {
		o.anchorIntercept();
	}

//	highlightMenuItem();
	makeTransparentMaskClickable();
	closeDrawerOnAnchorClick();

	window.addEventListener('fauxPopstate', function () {
		window.setTimeout(highlightMenuItem, 0);
	});
// Run this once now to ensure first page opened is highlighted:
	highlightMenuItem();

	document.querySelectorAll('#skip-to-main-content').forEach(function (element) {
		element.setAttribute('href', window.location.origin + window.location.pathname + '#main-content');
	});


// See:
// https://philipwalton.com/articles/idle-until-urgent/
// Prevent long-running tasks by using setTimeout() to break tasks up:
	window.setTimeout(function () {

/*
		metaElements.forEach(function (element) {
			element.setAttribute('content', content);
		});
*/

// 2022-07-12
// Used as trigger in numberUp.mjs
// Perhaps use it as trigger in artwork social share revision rather than the method used now?

//		window.dispatchEvent(new Event('commonMetaDescriptionsSet'));

// 2019-12-29:
// This solves the brief flashing of the anchor bottom borders on the menu
// as well as the brief flashing of the drop-down gallery menu when the
// page first loads. Having the rule in place on the .header-* selector
// in each case causes the problem. Adding after the page has been loaded
// eliminates the problem.

		o.appendToCSS(':root', '{ --background-color-500ms-ease--border-bottom-color-500ms-ease: background-color 500ms ease, border-bottom-color 500ms ease; }');
		o.appendToCSS(':root', '{ --background-color-500ms-ease--border-bottom-color-500ms-ease--color-500ms-ease: background-color 500ms ease, border-bottom-color 500ms ease, color 500ms ease; }');
		o.appendToCSS(':root', '{ --header-li-not-first-child-a-transition: border-color 0.5s ease, background 0.5s ease; }');
		o.appendToCSS(':root', '{ --opacity-500ms-ease: opacity 500ms ease; }');
		o.appendToCSS(':root', '{ --opacity-500ms-ease-in-out: opacity 500ms ease-in-out; }');
		o.appendToCSS(':root', '{ --transform-500ms-ease: transform 500ms ease; }');

// Moved to commonRoutines() in callback:
//			document.body.focus();
		window.dispatchEvent(new Event('innerFunctionFinished'));

	}, 0);



};


highlightMenuItem = function () {
	var href;
	var o;
	var url;

// 'this' is the outer 'o' via .bind(o), so the outer 'o' === inner 'o':
	o = this;

	//url = o.fenestra.location.origin + o.fenestra.location.pathname;
	url = window.location.href;

// 2020-03-10:
// ensure the url has a trailing slash:
// 2022-07-31:
// ...unless it ends with a hash!
	if ((url.slice(-1) !== '/') && (url.slice(-1) !== '#')) {
		url += '/';
	}

/* qwer */
// Clear-out .selected on all .secondary-ul ULs:
	document.querySelectorAll('.secondary-ul').forEach(function (element) {
		element.classList.remove('selected');
	});

	document.querySelectorAll('header ul li a').forEach(function (element) {
		href = element.href;
// ensure the href has a trailing slash:
		if (href.slice(-1) !== '/') {
			href += '/';
		}
		if (href === url) {
			element.classList.add('selected');
/* qwer */
// Add .selected to any .secondary-ul UL ancestor:
//			element.closest('.secondary-ul')?.classList.add('selected');
		} else {
// THIS IS SPECIFIC TO NEXT.JS -- ORIGINAL SITE DIDN'T NEED THIS:
			element.classList.remove('selected');
		}
	});

/* asdf */
	if (!document.querySelector('.secondary-ul.selected')) {
		document.querySelector('.primary-ul').classList.add('selected');
	} else {
		document.querySelector('.primary-ul').classList.remove('selected');
	}

	document.querySelectorAll('div[data-for^=side-switcher] span').forEach(function (element) {
		element.classList.remove('selected');
	});

/*
// EVENTUALLY WE'LL NEED THIS
			document.querySelectorAll('#header-nav ul a').forEach(function (anchor) {
console.log(anchor.getAttribute('href'));
console.log(window.location.pathname.slice(0, -1));

				if (anchor.getAttribute('href') !== window.location.pathname.slice(0, -1)) {
					if (anchor.classList.contains('selected')) {
						anchor.classList.remove('selected');
						anchor.closest('.secondary-ul')?.classList.remove('selected');
					}
				}
			});

			document.activeElement.blur();
*/

};


/*
initializeWindowOnResizeRoutines = function () {

	var o;
	var currentDeviceIsDesktop;
	var previousDeviceWasMobile;
	var windowResize;

// 'this' is the outer 'o' via .bind(o), so the outer 'o' === inner 'o':
	o = this;

	windowResize = o.debounce(function () {

// uncheck hamburger when in desktop mode:
		if (window.matchMedia('(min-width: 760px)').matches) {
// 2021-12-5:
// OLD:			document.getElementById('hamburger').checked = false;
			document.querySelectorAll('#hamburger').forEach(function (hamburger) {
				hamburger.checked = false;
			});
		}

// reset variable and soft-reload the page if switching the device (in
// DevTools, etc.) This solves the problem with the carousel not resizing
// when switching between devices.

		previousDeviceWasMobile = o.isMobile;

		o.isMobile = (
			navigator.userAgentData
			? navigator.userAgentData.mobile
			: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
		);


currentDeviceIsDesktop = !o.isMobile;

// reload if going from mobile to desktop mode:
		if (previousDeviceWasMobile && currentDeviceIsDesktop) {
			console.log('Switching from mobile view to desktop view');
			window.location.reload();
		}

	}, 250, false);

	if (o.windowEvents.resize2 === false) {
		window.addEventListener('resize', windowResize, true);
		o.windowEvents.resize2 = true;
	}
};
*/
export default Object.freeze({
	maxWidth759px,
	windowEvents,
	commonEventListeners,
	highlightMenuItem,
	currentHref
});
