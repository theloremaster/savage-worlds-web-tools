var showDebug = false;
var alertFallback = false;
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

function sort_mods(a,b) {
	if( typeof(a.calc_weight) == "undefined")
		a.calc_weight = 5;
	if( typeof(b.calc_weight) == "undefined")
		b.calc_weight = 5;

	if (a.calc_weight < b.calc_weight){
		return -1;
	} else {
		if (a.calc_weight > b.calc_weight) {
			return 1;
		} else {
			return a.name > b.name;
		}
	}
}

function simplify_cost(input_price) {
	if(input_price > 1000000000) {
		// it's a billion+
		return input_price / 1000000000 + 'B';
	} else if(input_price > 1000000) {
		// it's a million+
		return input_price / 1000000 + 'M';
	} else if(input_price > 1000){
		// it's a thousand+
		return input_price / 1000 + 'K';
	} else {
		return input_price;
	}
}
