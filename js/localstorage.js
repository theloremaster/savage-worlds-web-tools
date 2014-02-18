if(!localStorage.vehicles)
	localStorage.vehicles = "";

function localstorage_parse_data() {
	try {
		currentVehicles = JSON.parse(localStorage.vehicles);
	}
	catch(e) {
		currentVehicles = Array();
	}

	return currentVehicles;
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

	currentVehicles = localstorage_parse_data();

	currentVehicles = currentVehicles.concat(storageObject);

	localStorage.vehicles = JSON.stringify(currentVehicles);
}

function get_data_from_localstorage(itemIndex) {
	currentVehicles = localstorage_parse_data();

	if( typeof(currentVehicles[itemIndex]) != "undefined" ) {
		if( typeof(currentVehicles[itemIndex].data) != "undefined" ) {
			return currentVehicles[itemIndex].data;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function delete_item_from_localstorage(itemIndex) {
	currentVehicles = localstorage_parse_data();

	if( typeof(currentVehicles[itemIndex]) != "undefined" ) {
		if( typeof(currentVehicles[itemIndex].data) != "undefined" ) {
			currentVehicles.splice(itemIndex, 1);
			localStorage.vehicles = JSON.stringify(currentVehicles);
		}
	}
}

// Utility/Debug function...
function get_localstorage_list() {
	currentVehicles = localstorage_parse_data();

	for(lsCounter = 0; lsCounter < currentVehicles.length; lsCounter++) {
		console.log(
			"#" + lsCounter + " - " + currentVehicles[lsCounter].name + " (" + currentVehicles[lsCounter].type + ") - " + currentVehicles[lsCounter].saved
		);
	}
}