var showDebug = true;
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

$(".ios_app_click").click( function(event) {
	event.preventDefault();
	url = $(this).attr("href");
    window.location.assign(url);
    return false;
});

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

function createAlert(messageText, alertClass) {
	if( !alertClass )
		alertClass = "info";
	dismissButton = '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
	html = "<div class='alert fade in alert-" + alertClass + "'>" + dismissButton + messageText+ "</div>";

	$(".js-alert-container").html( html );
	window.setTimeout(function() { $(".alert").alert('close'); }, 2000);
}

