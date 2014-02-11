var showDebug = true;
var alertFallback = true;
function debugConsole(message) {
	if(showDebug) {

		if (typeof console === "undefined" || typeof console.log === "undefined") {
			console = {};
			if (alertFallback) {
				console.log = function(msg) {
				alert(msg);
			};
			} else {
				console.log = function() {};
			}
		}

		console.log(message);
	}

}

