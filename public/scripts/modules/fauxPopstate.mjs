var fauxPopstate;

fauxPopstate = function () {

	// Next.js blocks the default window popstate event.
	// So, fake it here:
	// From: https://stackoverflow.com/questions/4570093/how-to-get-notified-about-changes-of-the-history-via-history-pushstate

	var pushState = window.history.pushState;

	window.history.pushState = function (state) {
		if (typeof window.history.onpushstate == "function") {
			window.history.onpushstate({state: state});
		}
		return pushState.apply(window.history, arguments);
	};

	window.onpopstate = history.onpushstate = function (e) {
		window.dispatchEvent(new Event('fauxPopstate'));
	}

};

export default Object.freeze({
  fauxPopstate,
});
