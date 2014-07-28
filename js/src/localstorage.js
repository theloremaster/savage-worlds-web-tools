if(!localStorage.vehicles)
	localStorage.vehicles = "";

function localstorage_parse_data() {
	try {
		current_vehicles = JSON.parse(localStorage.vehicles);
	}
	catch(e) {
		current_vehicles = Array();
	}

	return current_vehicles;
}

function save_to_localstorage(saveJSON) {
	itemObj = JSON.parse(saveJSON);
	storageObject = {
		name: itemObj.item_name,
		type: itemObj.object_type,
		size: itemObj.size,
		saved: new Date(),
		data: saveJSON,
	};

	current_vehicles = localstorage_parse_data();

	current_vehicles = current_vehicles.concat(storageObject);

	localStorage.vehicles = JSON.stringify(current_vehicles);
}

function get_data_from_localstorage(itemIndex) {
	current_vehicles = localstorage_parse_data();

	if( typeof(current_vehicles[itemIndex]) != "undefined" ) {
		if( typeof(current_vehicles[itemIndex].data) != "undefined" ) {
			return current_vehicles[itemIndex].data;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function delete_item_from_localstorage(itemIndex) {
	current_vehicles = localstorage_parse_data();

	if( typeof(current_vehicles[itemIndex]) != "undefined" ) {
		if( typeof(current_vehicles[itemIndex].data) != "undefined" ) {
			current_vehicles.splice(itemIndex, 1);
			localStorage.vehicles = JSON.stringify(current_vehicles);
		}
	}
}

// Utility/Debug function...
function get_localstorage_list() {
	current_vehicles = localstorage_parse_data();

	for(lsCounter = 0; lsCounter < current_vehicles.length; lsCounter++) {
		console.log(
			"#" + lsCounter + " - " + current_vehicles[lsCounter].name + " (" + current_vehicles[lsCounter].type + ") - " + current_vehicles[lsCounter].saved
		);
	}
}