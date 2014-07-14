// world-maker.js
var table_defs = Array();

table_defs[0] = {
	name: "Planetary Gravity",
	options: Array(
		{
			rollfrom: 1,
			rollto: 2,
			value: "Zero",
			label: "Zero"
		},
		{
			rollfrom: 3,
			rollto: 6,
			value: "Low",
			label: "Low"
		},
		{
			rollfrom: 7,
			rollto: 14,
			value: "Normal",
			label: "Normal"
		},
		{
			rollfrom: 15,
			rollto: 18,
			value: "Heavy",
			label: "Heavy"
		},
		{
			rollfrom: 19,
			rollto: 20,
			value: "Super Heavy",
			label: "Super Heavy"
		}
	)
};

table_defs[1] = {
	name: "Dominant Terrain",
	options: Array(
		{
			rollfrom: 1,
			rollto: 3,
			value: "Arctic",
			label: "Arctic",
			average_temperature: 22,
		},
		{
			rollfrom: 4,
			rollto: 5,
			value: "Temperate Plains",
			label: "Temperate Plains",
			average_temperature: 50,
		},
		{
			rollfrom: 6,
			rollto: 8,
			value: "Temperate Forests",
			label: "Temperate Forests",
			average_temperature: 60,
		},
		{
			rollfrom: 9,
			rollto: 11,
			value: "Jungle",
			label: "Jungle",
			average_temperature: 70,
		},
		{
			rollfrom: 12,
			rollto: 14,
			value: "Marsh/Swamp",
			label: "Marsh/Swamp",
			average_temperature: 65,
		},
		{
			rollfrom: 15,
			rollto: 17,
			value: "Desert",
			label: "Desert",
			average_temperature: 85,
		},
		{
			rollfrom: 18,
			rollto: 19,
			value: "Water",
			label: "Water",
			average_temperature: 50,
		},
		{
			rollfrom: 20,
			rollto: 20,
			value: "Artificial",
			label: "Artificial",
			average_temperature: 70,
		}
	)
};

table_defs[2] = {
	name: "Atmosphere",
	options: Array(
		{
			rollfrom: 1,
			rollto: 2,
			value: "None",
			label: "None",
			temperature_adjustment: "-100 + (-25 x 1d10 )"
		},
		{
			rollfrom: 3,
			rollto: 6,
			value: "Thin",
			label: "Thin",
			temperature_adjustment: "-5 x 1d20"
		},
		{
			rollfrom: 7,
			rollto: 14,
			value: "Normal",
			label: "Normal",
			temperature_adjustment: "-10 + 1d20"
		},
		{
			rollfrom: 15,
			rollto: 18,
			value: "Heavy",
			label: "Heavy",
			temperature_adjustment: "5 x 1d20"
		},
		{
			rollfrom: 19,
			rollto: 20,
			value: "Hazardous",
			label: "Hazardous",
			temperature_adjustment: "-"
		}
	)
};


table_defs[3] = {
	name: "Population Density",
	options: Array(
		{
			rollfrom: 1,
			rollto: 1,
			value: "Extremely Sparse",
			label: "Extremely Sparse"
		},
		{
			rollfrom: 2,
			rollto: 2,
			value: "Very Sparse",
			label: "Very Sparse"
		},
		{
			rollfrom: 3,
			rollto: 5,
			value: "Sparse",
			label: "Sparse"
		},
		{
			rollfrom: 6,
			rollto: 8,
			value: "Below Average",
			label: "Below Average"
		},
		{
			rollfrom: 9,
			rollto: 12,
			value: "Average",
			label: "Average"
		},
		{
			rollfrom: 13,
			rollto: 15,
			value: "Above Average",
			label: "Above Average"
		},
		{
			rollfrom: 16,
			rollto: 18,
			value: "Dense",
			label: "Dense"
		},
		{
			rollfrom: 19,
			rollto: 19,
			value: "Very Dense",
			label: "Very Dense"
		},
		{
			rollfrom: 20,
			rollto: 20,
			value: "Extremely Dense",
			label: "Extremely Dense"
		}
	)
};

function propogate_selects() {
	for(table_count = 0; table_count < table_defs.length; table_count++) {
		html = "";
		for(field_count = 0; field_count < table_defs[table_count].options.length; field_count++) {
			html += "<option value=\"" + table_defs[table_count].options[field_count].value + "\">" + table_defs[table_count].options[field_count].label + "</option>";
		}
		$(".js-table" + table_count ).html( html );
		$(".js-table" + table_count  + "-label").html( "Table " + ( table_count + 1 )+ ": " + table_defs[table_count].name );
	}
}

function calculate_temperature() {

	average_temperature = 0;
	temperature_adjustment = "";

	// get average_temperature
	table_count = 1;
	for(field_count = 0; field_count < table_defs[table_count].options.length; field_count++) {
		if(table_defs[table_count].options[field_count].value == $(".js-table" + table_count ).val()) {
			average_temperature = table_defs[table_count].options[field_count].average_temperature;
		}
	}

	// get temperature_adjustment
	table_count = 2;
	for(field_count = 0; field_count < table_defs[table_count].options.length; field_count++) {
		if(table_defs[table_count].options[field_count].value == $(".js-table" + table_count ).val()) {
			temperature_adjustment = table_defs[table_count].options[field_count].temperature_adjustment;
		}
	}
	temperature_adjustment_roll = parseRoll(temperature_adjustment);
	console.log("average_temperature: " + average_temperature);
	console.log("temperature_adjustment: " + temperature_adjustment);
	console.log("temperature_adjustment_roll: " + temperature_adjustment_roll);
}

function create_world_from_selections() {
	html = "";
	for(table_count = 0; table_count < table_defs.length; table_count++) {
		html += table_defs[table_count].name;
		html += ": ";
		html += $(".js-table" + table_count ).val() + "\n";
	}
	return html;
}
propogate_selects();