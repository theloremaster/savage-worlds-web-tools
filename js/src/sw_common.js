var attribute_labels = Array(
	"no value",
	"d4",
	"d6",
	"d8",
	"d10",
	"d12",
	"d12+1",
	"d12+2",
	"d12+3",
	"d12+4",
	"d12+5",
	"d12+6",
	"d12+7",
	"d12+8",
	"d12+9",
	"d12+10",
	"d12+11",
	"d12+12",
	"d12+13",
	"d12+14",
	"d12+15",
	"d12+16",
	"d12+17",
	"d12+18",
	"d12+19",
	"d12+20"
);

var attribute_images = Array(
	"<img src='img/dice/blank.png' title='no value' />",
	"<img src='img/dice/d4.png' title='d4' />",
	"<img src='img/dice/d6.png' title='d6' />",
	"<img src='img/dice/d8.png' title='d8' />",
	"<img src='img/dice/d10.png' title='d10' />",
	"<img src='img/dice/d12.png' title='d12' />",
	"<img src='img/dice/d12.png' title='d12' />",
	"<img src='img/dice/d12.png' title='d12' />",
	"<img src='img/dice/d12.png' title='d12' />",
	"<img src='img/dice/d12.png' title='d12' />",
	"<img src='img/dice/d12.png' title='d12' />",
	"<img src='img/dice/d12.png' title='d12' />",
	"<img src='img/dice/d12.png' title='d12' />"
);

function format_pace_realworld(pace_value) {
	// never take things at pace value. /groan
	return pace_value + " (" + Math.floor(pace_value * 2.4)+ " mph, " + Math.floor(pace_value * 3.862416) + " kph)";
}


function stripslashes (str) {

  return (str + '').replace(/\\(.?)/g, function (s, n1) {
    switch (n1) {
    case '\\':
      return '\\';
    case '0':
      return '\u0000';
    case '':
      return '';
    default:
      return n1;
    }
  });
}


String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};