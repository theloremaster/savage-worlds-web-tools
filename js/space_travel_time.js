auDistance = 149597870700; // meters
speedOfLight = 299792458; // m/s
gSpeed = 9.81; // m/s/s


var speedList = Array(
	0.10,
	0.25,
	0.33,
	0.5,
	0.67,
	0.75,
	1,
	1.25,
	1.33,
	1.5,
	1.67,
	1.75,
	2,
	2.25,
	2.33,
	2.5,
	2.67,
	2.75,
	3,
	5,
	10,
	25,
	50,
	100
);

var distanceList = Array(
	0.00000257,
	0.1,
	0.25,
	0.5,
	0.75,
	0.8,
	1,
	1.25,
	1.5,
	1.75,
	2,
	2.25,
	2.5,
	2.75,
	3,
	3.5,
	4,
	4.5,
	5,
	5.5,
	6,
	7,
	8,
	9,
	10,
	15,
	20,
	25,
	30,
	35,
	40,
	45,
	50
);


function propogateDistanceOptions() {
	html = ""
	for(counter = 0; counter < distanceList.length; counter++) {
		distanceLabel = distanceList[counter] + " AU";
		if(distanceList[counter] == 0.00000257)
			distanceLabel = "Earth to Moon";
		html += "<option value=\"" + distanceList[counter] + "\">" + distanceLabel + "</option>";
	}
	$(".js-select-distance").html(html);
}

function propogateSpeedOptions() {
	html = ""
	for(counter = 0; counter < speedList.length; counter++) {
		speedLabel = speedList[counter] + " G";

		html += "<option value=\"" + speedList[counter] + "\">" + speedLabel + "</option>";
	}
	$(".js-select-speed").html(html);
}

$(".js-select-speed, .js-select-distance").change( function() {
	calculateTime();
});


function calculateTime() {
	speedSelect = $(".js-select-speed option:selected").val();
	distanceSelect = $(".js-select-distance option:selected").val();
	communicationTime = estimateCommunicationTime(distanceSelect);
	travelTime = estimateTravelTime(distanceSelect, speedSelect);
	maxSpeed = estimateMaxSpeed(distanceSelect, speedSelect);
	percentSpeedOfLight = Math.round( (maxSpeed / speedOfLight ) * 100 ) / 100;

	$(".js-time-results").html(
		"Distance: " + distanceSelect + " AU (" + Math.round(distanceSelect * auDistance).toLocaleString() + " Km)<br />" +
		"It takes " + humanifyTime(communicationTime) + " for a radio message to travel this distance<br />" +
		"A ship with an AD Rating of " + speedSelect + "G will have a travel time of " + humanifyTime(travelTime) + "<br />"
		+ "That ship reaches a speed of " + ( maxSpeed ).toLocaleString() + " m/s or " + percentSpeedOfLight + "% the speed of light<br />"
	);
}
propogateDistanceOptions();
propogateSpeedOptions()
calculateTime();

function estimateCommunicationTime(distanceInAU) {
	return Math.round( (distanceInAU * auDistance / speedOfLight) ); // in seconds
}

function estimateTravelTime(distanceInAU, accRatingInG) {
	timeTaken = Math.sqrt( distanceInAU  * auDistance / (gSpeed * accRatingInG) ) * 2;

	return Math.round(timeTaken) ; // in seconds
}

function estimateMaxSpeed(distanceInAU, accRatingInG) {
	maxSpeed = Math.sqrt( distanceInAU  * auDistance * (gSpeed * accRatingInG) );

	return Math.round(maxSpeed); // in meters per second
}

function humanifyTime(timeInSeconds) {

	days = 0;
	hours = 0;
	minutes = 0;
	seconds = 0;

	// Count Days...
	while (timeInSeconds > 86400) {
		timeInSeconds -= 86400;
		days++;
	}

	// Count Hours...
	while (timeInSeconds > 3600) {
		timeInSeconds -= 3600;
		hours++;
	}

	// Count Minutes...
	while (timeInSeconds > 60) {
		timeInSeconds -= 60;
		minutes++;
	}

	seconds = timeInSeconds;

	returnString = "";
	if (days > 0)
		returnString += days + " days, ";
	if (hours > 0)
		returnString += hours + " hours, ";
	if (minutes > 0)
		returnString += minutes + " minutes, ";
	if (seconds > 0)
		returnString += seconds + " seconds ";

	if ( returnString == "")
		returnString = "less than a second.";

	return returnString;

}