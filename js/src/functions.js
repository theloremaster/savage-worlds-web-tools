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

$(".ios_app_click").click( function(event) {
	event.preventDefault();
	url = $(this).attr("href");
	if($(this).hasClass("btn-danger"))
		alert("This function is still under development and will not work as expected");
    window.location.assign(url);
    return false;
});

$("input.numeric-only").keypress(function(event) {
	console.log("...");
	return /\d/.test(String.fromCharCode(event.keyCode));
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

function bootstrap_alert(messageText, alertClass) {
	if( !alertClass )
		alertClass = "info";
	dismissButton = '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
	html = "<div class='alert fade in alert-" + alertClass + "'>" + dismissButton + messageText+ "</div>";

	$(".js-alert-container").html( html );
	window.setTimeout(function() { $(".alert").alert('close'); }, 2000);
}


function clone_object(originalObject) {
	return jQuery.extend({}, originalObject);
}

function uc_words(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this web app is available. Load it?')) {
        window.location.reload();
      }
    }
  }, false);

}, false);