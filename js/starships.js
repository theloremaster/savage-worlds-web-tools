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

var starship_sizes = Array(
	{
		ship_label: "Small",
		examples: "Fighters, shuttles",
		size: 6,
		acc: 50,
		ts: 700,
		climb: 3,
		toughness: 20,
		armor: 5,
		mods: 20,
		crew: 1,
		cost: 2000000,
		energy_capacity: 25,
		provisions: 25
	},
	{
		ship_label: "Medium",
		examples: "Bombers, large shuttles, scout ships",
		size: 8,
		acc: 45,
		ts: 600,
		climb: 2,
		toughness: 25,
		armor: 6,
		mods: 25,
		crew: 5,
		cost: 5000000,
		energy_capacity: 100,
		provisions: 100
	},
	{
		ship_label: "Large",
		examples: "Freighters, corvettes, scientific exploration vessels",
		size: 12,
		acc: 40,
		ts: 500,
		climb: 1,
		toughness: 35,
		armor: 8,
		mods: 30,
		crew: 50,
		cost: 20000000,
		energy_capacity: 300,
		provisions: 300
	},
	{
		ship_label: "Huge",
		examples: "Destroyers, bulk freighters, light cruisers",
		size: 16,
		acc: 35,
		ts: 400,
		climb: 0,
		toughness: 45,
		armor: 10,
		mods: 40,
		crew: 300,
		cost: 50000000,
		energy_capacity: 500,
		provisions: 500
	},
	{
		ship_label: "Giant",
		examples: "Cruisers, small battleships or carriers",
		size: 20,
		acc: 30,
		ts: 300,
		climb: -1,
		toughness: 50,
		armor: 11,
		mods: 50,
		crew: 1000,
		cost: 200000000,
		energy_capacity: 1000,
		provisions: 1000
	},
	{
		ship_label: "Gargantuan",
		examples: "Battleships, carriers",
		size: 24,
		acc: 25,
		ts: 200,
		climb: -2,
		toughness: 55,
		armor: 13,
		mods: 70,
		crew: 3000,
		cost: 1000000000,
		energy_capacity: 2000,
		provisions: 2000
	},
	{
		ship_label: "Behemoth",
		examples: "Dreadnoughts, invasion carriers.",
		size: 28,
		acc: 20,
		ts: 200,
		climb: -3,
		toughness: 60,
		armor: 15,
		mods: 90,
		crew: 8000,
		cost: 5000000000,
		energy_capacity: 2000,
		provisions: 2000
	},
	{
		ship_label: "Leviathan",
		examples: "Super dreadnoughts, super carriers, settlement ships.",
		size: 32,
		acc: 20,
		ts: 200,
		climb: -4,
		toughness: 70,
		armor: 20,
		mods: 120,
		crew: 20000,
		cost: 10000000000,
		energy_capacity: 2000,
		provisions: 2000
	},
	{
		ship_label: "World Killer",
		examples: "Mega dreadnoughts, mega carriers, colony ships.",
		size: 40,
		acc: 20,
		ts: 200,
		climb: -5,
		toughness: 80,
		armor: 25,
		mods: 150,
		crew: 50000,
		cost: 30000000000,
		energy_capacity: 2000,
		provisions: 2000
	}

);



function sw_starship() {
	this.ship_name = "(nameless)";
	this.ship_description = "";

	this.ship_ship_label = "";
	this.examples = "";
	this.size = 0;
	this.object_type = "starship",
	this.acc = 0;
	this.ts = 0;
	this.climb = 0;
	this.toughness = 0;
	this.armor = 0;
	this.mods = 0;
	this.base_mods = 0;
	this.crew = 0;
	this.cost = 0;
	this.energy_capacity =  0;
	this.base_energy_capacity =  0;
	this.provisions = 0;

	this.selected_size = 0;

	this.selected_modifications = Array();
	this.selected_modifications_list = {};

	this.mods_available = 0;

	this.selected_weapons = Array();
	this.selected_weapons_list = Array();

	this.create_stats_block = create_stats_block;
	function create_stats_block() {
		this.calculate_ship();
		html_return = "";

		html_return += "<h4>" + this.ship_name + "</h4>";
		html_return += "<p>" + this.ship_description + "</p><br />";

		if(this.selected_size.ship_label) {
			html_return += "<strong>" + this.selected_size.ship_label + " Starship</strong>:";
			html_return += " Acc/TS " + this.acc + "/" + this.ts + ", ";
			html_return += "Climb " + this.climb + ", ";
			html_return += "Toughness " + this.toughness + " (" + this.armor + "), ";
			html_return += "Crew " + this.crew + ", ";
			html_return += "Cost $" + simplify_cost(this.cost) + "" + "<br />";

			html_return += "<strong>Energy Capacity</strong>: " + this.energy_capacity + "<br />";
			html_return += "<strong>Mods Available</strong>: " + this.mods_available + "<br />";

			html_return += "<strong>Notes</strong>: ";

			this.sort_selected_modifications_list();
			for(var modName in this.selected_modifications_list){
				html_return += modName;
				if(this.selected_modifications_list[modName] > 1)
  					html_return += " x" + this.selected_modifications_list[modName];
  				html_return += ", ";
			}

			html_return += "<br />";

			html_return += "<strong>Weapons</strong>: ";
			this.sort_selected_weapons_list();
			for(var weaponName in this.selected_weapons_list){
				html_return += weaponName;
				if(this.selected_weapons_list[weaponName] > 1)
  					html_return += " x" + this.selected_weapons_list[weaponName];
  				html_return += ", ";
			}

			html_return += "<br />";

			if( this.get_modification_count("Shields") > 0) {
				html_return += "<strong>Shields</strong>: ";
				html_return += this.size * 10;
				html_return += " - may recover  " + this.size + "/round<br />";
			}
		} else {
			html_return += "A ship size must be selected.";
		}

		return html_return;
	}

	this.export_bbcode = export_bbcode;
	function export_bbcode() {
		this.calculate_ship();
		html_return = "";

		html_return += "[b][size=18]" + this.ship_name + "[/size][/b]\n";
		if(this.ship_description)
			html_return += "" + this.ship_description + "\n\n";
		else
			html_return += "\n";

		if(this.selected_size.ship_label) {
			html_return += "[b]" + this.selected_size.ship_label + " Starship[/b]:";
			html_return += " Acc/TS " + this.acc + "/" + this.ts + ", ";
			html_return += "Climb " + this.climb + ", ";
			html_return += "Toughness " + this.toughness + " (" + this.armor + "), ";
			html_return += "Crew " + this.crew + ", ";
			html_return += "Cost $" + simplify_cost(this.cost) + "" + "\n";

			html_return += "[b]Energy Capacity[/b]: " + this.energy_capacity + "\n";
			html_return += "[b]Mods Available[/b]: " + this.mods_available + "\n";

			html_return += "[b]Notes[/b]: ";

			this.sort_selected_modifications_list();
			for(var modName in this.selected_modifications_list){
				html_return += modName;
				if(this.selected_modifications_list[modName] > 1)
  					html_return += " x" + this.selected_modifications_list[modName];
  				html_return += ", ";
			}

			html_return += "\n";

			html_return += "[b]Weapons[/b]: ";
			this.sort_selected_weapons_list();
			for(var weaponName in this.selected_weapons_list){
				html_return += weaponName;
				if(this.selected_weapons_list[weaponName] > 1)
  					html_return += " x" + this.selected_weapons_list[weaponName];
  				html_return += ", ";
			}

			html_return += "\n";

			if( this.get_modification_count("Shields") > 0) {
				html_return += "[b]Shields[/b]: ";
				html_return += this.size * 10;
				html_return += " - may recover  " + this.size + "/round\n";
			}
		} else {
			html_return += "A ship size must be selected.";
		}

		for(removeHideCounter = 1; removeHideCounter < 31; removeHideCounter++)
			html_return = html_return.replace("<span class='hide'>" + removeHideCounter + "</span>", "");

		return html_return;
	}

	this.export_json = export_json;
	function export_json() {
		exportObject = {};
		exportObject.size = this.size;
		exportObject.object_type = "starship";
		exportObject.ship_name = this.ship_name;
		exportObject.ship_description = this.ship_description;
		exportObject.mods = Array();
		for(modCounter = 0; modCounter < this.selected_modifications.length; modCounter++)
			exportObject.mods = exportObject.mods.concat( this.selected_modifications[modCounter].name );
		exportObject.weapons = Array();
		for(weaponCounter = 0; weaponCounter < this.selected_weapons.length; weaponCounter++) {
			weapon_item = {
				name: this.selected_weapons[weaponCounter].name,
				fixed: this.selected_weapons[weaponCounter].fixed,
				linked: this.selected_weapons[weaponCounter].linked,
			};
			exportObject.weapons = exportObject.weapons.concat( weapon_item );
		}

		return JSON.stringify(exportObject);

	}

	this.reset_data = reset_data;
	function reset_data() {
		this.ship_name = "(nameless)";
		this.ship_description = "";

		this.ship_ship_label = "";
		this.examples = "";
		this.size = 0;
		this.acc = 0;
		this.ts = 0;
		this.climb = 0;
		this.toughness = 0;
		this.armor = 0;
		this.mods = 0;
		this.base_mods = 0;
		this.crew = 0;
		this.cost = 0;
		this.energy_capacity =  0;
		this.base_energy_capacity =  0;
		this.provisions = 0;

		this.selected_size = 0;

		this.selected_modifications = Array();
		this.selected_modifications_list = {};

		this.mods_available = 0;

		this.selected_weapons = Array();
		this.selected_weapons_list = Array();
	}

	this.import_json = import_json;
	function import_json(importedShip) {
		try {
			importedShipObj= JSON.parse(importedShip);
		}
		catch(e) {

		}

		if(typeof importedShipObj =='object') {
			this.reset_data();
			this.set_size(importedShipObj.size);
			this.set_ship_name(importedShipObj.ship_name);
			this.set_ship_description(importedShipObj.ship_description);

			for(modCounter = 0; modCounter < importedShipObj.mods.length; modCounter++)
				this.add_mod( importedShipObj.mods[modCounter] );

			for(weaponCounter = 0; weaponCounter < importedShipObj.weapons.length; weaponCounter++) {
				this.add_weapon( importedShipObj.weapons[weaponCounter].name );

				if( importedShipObj.weapons[weaponCounter].fixed > 0)
					this.fix_weapon( this.selected_weapons.length - 1, importedShipObj.weapons[weaponCounter].fixed );

				if( importedShipObj.weapons[weaponCounter].linked > 0)
					this.link_weapon( this.selected_weapons.length - 1, importedShipObj.weapons[weaponCounter].linked);

			}

			refresh_starship_page();
		}
	}

	this.sort_selected_modifications_list = sort_selected_modifications_list;
	function sort_selected_modifications_list() {
		var keyList = Object.keys(this.selected_modifications_list);

		keyList.sort();

    	var newList = {};

		for (var keyCount = 0; keyCount < keyList.length; keyCount++) {
			keyName = keyList[keyCount];
		    newList[keyName] = this.selected_modifications_list[keyName];
		}
		this.selected_modifications_list = newList;
	}

	this.sort_selected_weapons_list = sort_selected_weapons_list;
	function sort_selected_weapons_list() {
		var keyList = Object.keys(this.selected_weapons_list);

		keyList.sort();

    	var newList = {};

		for (var keyCount = 0; keyCount < keyList.length; keyCount++) {
			keyName = keyList[keyCount];
		    newList[keyName] = this.selected_weapons_list[keyName];
		}
		this.selected_weapons_list = newList;
	}

	this.calculate_ship = calculate_ship;
	function calculate_ship() {

		// Get base stats from size
		if( this.selected_size.ship_label ) {
			this.ship_label = this.selected_size.ship_label;
			this.examples = this.selected_size.examples;
			this.size = this.selected_size.size;
			this.acc = this.selected_size.acc;
			this.ts = this.selected_size.ts;
			this.climb = this.selected_size.climb;
			this.toughness = this.selected_size.toughness;
			this.armor = this.selected_size.armor;
			this.mods = this.selected_size.mods;
			this.base_mods = this.selected_size.mods;
			this.crew = this.selected_size.crew;
			this.cost = this.selected_size.cost;
			this.energy_capacity = this.selected_size.energy_capacity;
			this.base_energy_capacity = this.selected_size.energy_capacity;
			this.provisions = this.selected_size.provisions;

			// Modify Ship as per mods
			this.selected_modifications_list = {};
			for(calcModCount = 0; calcModCount < this.selected_modifications.length; calcModCount++) {
				//this.selected_modifications_list += "<li>" + this.selected_modifications[modCount].name + "</li>";
				this.mods = this.mods - this.selected_modifications[calcModCount].get_mod_cost(this);
				this.cost += this.selected_modifications[calcModCount].get_cost(this);
				if( this.selected_modifications[calcModCount].get_mod_effect )
					this.selected_modifications[calcModCount].get_mod_effect(this);

				// Linked weapons are displayed elsewhere...
				if(this.selected_modifications[calcModCount].name != "Linked") {
					if( typeof(this.selected_modifications_list[this.selected_modifications[calcModCount].name]) == "undefined")
						this.selected_modifications_list[this.selected_modifications[calcModCount].name] = 1;
					else
						this.selected_modifications_list[this.selected_modifications[calcModCount].name]++;
				}
			}

			// Weaponise Ship as per weapons
			this.selected_weapons_list = {};
			fixedWeaponModUsage = 0;
			linkedWeaponModUsage = Array();
			otherWeaponModUsage = 0;
			for(calcModCount = 0; calcModCount < this.selected_weapons.length; calcModCount++) {
				//this.selected_modifications_list += "<li>" + this.selected_weapons[modCount].name + "</li>";
				weaponCost = this.selected_weapons[calcModCount].mods;
				if(this.selected_weapons[calcModCount].fixed > 0)
					weaponCost = weaponCost / 2;
				if(this.selected_weapons[calcModCount].linked > 0)
					weaponCost = weaponCost / 2;
				this.mods = this.mods - weaponCost;


				this.cost += this.selected_weapons[calcModCount].cost;

				weaponListName = this.selected_weapons[calcModCount].name;
				if(this.selected_weapons[calcModCount].fixed > 0) {
					if(this.selected_weapons[calcModCount].linked > 0) {
						weaponListName = weaponListName + " (linked<span class='hide'>" + this.selected_weapons[calcModCount].linked + "</span>, fixed)";
					} else {
						weaponListName = weaponListName + " (fixed)";
					}
				} else {
					if(this.selected_weapons[calcModCount].linked > 0) {
						weaponListName = weaponListName + " (linked<span class='hide'>" + this.selected_weapons[calcModCount].linked + "</span>)";
					}
				}
				if( typeof(this.selected_weapons_list[weaponListName]) == "undefined") {
					if( this.selected_weapons[calcModCount].missiles_per )
						this.selected_weapons_list[weaponListName] = this.selected_weapons[calcModCount].missiles_per;
					else
						this.selected_weapons_list[weaponListName] = 1;

				} else {
					if( this.selected_weapons[calcModCount].missiles_per )
						this.selected_weapons_list[weaponListName] += this.selected_weapons[calcModCount].missiles_per;
					else
						this.selected_weapons_list[weaponListName]++;
				}
			}


			this.mods_available = this.mods; // - sort_selected_modifications_list.length;

		}
	}

	this.set_ship_name = set_ship_name;
	function set_ship_name(newValue) {
		this.ship_name = newValue;
	}

	this.set_ship_description = set_ship_description;
	function set_ship_description(newValue) {
		this.ship_description = newValue;
	}

	this.add_mod = add_mod;
	function add_mod(modName) {
		return_value = 0;
		for(addModCount = 0; addModCount < starship_modifications.length; addModCount++) {
			if(modName.toLowerCase() == starship_modifications[addModCount].name.toLowerCase()) {
				newMod = jQuery.extend({}, starship_modifications[addModCount]);
				this.selected_modifications = this.selected_modifications.concat( newMod  );
				return;
			}
		}

		return return_value;
	}

	this.add_weapon = add_weapon;
	function add_weapon(weaponName) {
		return_value = 0;
		for(addWeaponCount = 0; addWeaponCount < vehicle_weapons.length; addWeaponCount++) {
			if(weaponName.toLowerCase() == vehicle_weapons[addWeaponCount].name.toLowerCase()) {
//				newWeapon = new vehicle_weapons[addWeaponCount];
				newWeapon = jQuery.extend({}, vehicle_weapons[addWeaponCount]);
				newWeapon.linked = 0;
				newWeapon.fixed = 0;
				this.selected_weapons = this.selected_weapons.concat( newWeapon );
				return;
			}
		}

		return return_value;
	}

	this.remove_mod = remove_mod;
	function remove_mod(modName) {
		for(removeModCount = 0; removeModCount < this.selected_modifications.length; removeModCount++) {
			if(modName.toLowerCase() == this.selected_modifications[removeModCount].name.toLowerCase()) {
				this.selected_modifications.splice(removeModCount, 1);
				return;
			}
		}
	}

	this.remove_weapon = remove_weapon;
	function remove_weapon(weaponIndex) {
		weaponIndex = weaponIndex / 1;
		this.selected_weapons.splice(weaponIndex, 1);
	}

	this.link_weapon = link_weapon;
	function link_weapon(weaponIndex, linkIndex) {
		weaponIndex = weaponIndex / 1;

		this.selected_weapons[weaponIndex].linked = (linkIndex / 1);
	}

	this.fix_weapon = fix_weapon;
	function fix_weapon(weaponIndex, fixedValue) {
		weaponIndex = weaponIndex / 1;

		this.selected_weapons[weaponIndex].fixed = (fixedValue / 1);
	}

	this.get_linked_weapons = get_linked_weapons;
	function get_linked_weapons() {
		numberOfLinks = this.get_modification_count("Linked");
		returnVal = Array();
		if( numberOfLinks > 0 ){

			for(linked_weapon_count = 0; linked_weapon_count < this.selected_weapons.length; linked_weapon_count++) {
				if(this.selected_weapons[linked_weapon_count].linked > 0) {
					// unset any links that were removed...
					if(this.selected_weapons[linked_weapon_count].linked > numberOfLinks)
						this.selected_weapons[linked_weapon_count].linked  = 0;
					else
						returnVal[this.selected_weapons[linked_weapon_count].linked] = this.selected_weapons[linked_weapon_count].name;
				}
			}
			while(returnVal.length < numberOfLinks + 1) {
				for(linked_weapon_count = returnVal.length; linked_weapon_count < numberOfLinks + 1; linked_weapon_count++) {
					returnVal[linked_weapon_count] = "";
				}
			}
		} else {
			// unlink all weapons as all links have disappeared
			for(linked_weapon_count = 0; linked_weapon_count < this.selected_weapons.length; linked_weapon_count++) {
				this.selected_weapons[linked_weapon_count].linked  = 0;
			}
			returnVal = Array();
		}

		return returnVal;

	}

	this.get_modification_count = get_modification_count;
	function get_modification_count(modName) {
		return_value = 0;
		for(modCount = 0; modCount < this.selected_modifications.length; modCount++) {
			if(modName.toLowerCase() == this.selected_modifications[modCount].name.toLowerCase())
				return_value++;
		}

		return return_value;
	}

	this.set_size = set_size;
	function set_size(sizeNumber) {
		for(sizeCount = 0; sizeCount < starship_sizes.length; sizeCount++) {
			if(sizeNumber == starship_sizes[sizeCount].size) {
				this.selected_size = starship_sizes[sizeCount];
			}
		}
	}
}

function propogate_size_select() {
	selectOptions = "<option value=''>- Select Ship Size -</option>";
	for(sizeCount = 0; sizeCount < starship_sizes.length; sizeCount++) {
		isSelected = "";
		if( current_starship.selected_size.size )
			if(  current_starship.selected_size.size == starship_sizes[sizeCount].size )
				isSelected = " selected='selected'";
		selectOptions += "<option value='" + starship_sizes[sizeCount].size + "'" + isSelected + ">" + starship_sizes[sizeCount].ship_label + " - " + starship_sizes[sizeCount].examples + "</option>";
	}
	$(".js-select-size").html(selectOptions);
}

function propogate_add_mods() {
	modifications_html = "<table>";
	modifications_html += "<thead><tr>";
	modifications_html += "<th>&nbsp;</th>";
	modifications_html += "<th>Name</th>";
	modifications_html += "<th>Used/Max</th>";
	modifications_html += "<th>Mod Cost</th>";
	modifications_html += "<th>Cost</th>";
	modifications_html += "</tr></thead><tbody>";
	for(mod_count = 0; mod_count < starship_modifications.length; mod_count++) {
		starship_mod_count = current_starship.get_modification_count(starship_modifications[mod_count].name);
		mod_cost = starship_modifications[mod_count].get_mod_cost(current_starship);
		if( current_starship.mods_available >= mod_cost || starship_mod_count > 0) {
			modifications_html += "<tr title='" + starship_modifications[mod_count].description + "'>";
			modifications_html += "<td style='white-space: nowrap;'>";

			if(  starship_mod_count > 0 )
				modifications_html += "<span ref='" + starship_modifications[mod_count].name  + "' class='js-remove-mod glyphicon glyphicon-minus color-red'></span>";
			else
				modifications_html += "<span class='glyphicon glyphicon-blank'></span>";

			if( current_starship.mods_available >= mod_cost && ( starship_modifications[mod_count].max == "u" || starship_modifications[mod_count].max > starship_mod_count) )
				modifications_html += " <span ref='" + starship_modifications[mod_count].name  + "' class='js-add-mod glyphicon glyphicon-plus color-green'></span>";

				modifications_html += "</td>";

			if(  starship_mod_count > 0 )
				modifications_html += "<td style='color: green'>" + starship_modifications[mod_count].name + "</td>";
			else
				modifications_html += "<td>" + starship_modifications[mod_count].name + "</td>";
			modifications_html += "<td>" + starship_mod_count + "/" + starship_modifications[mod_count].max  + "</td>";
			modifications_html += "<td>" + mod_cost + "</td>";
			modifications_html += "<td>" + simplify_cost(starship_modifications[mod_count].get_cost(current_starship)) + "</td>";


			modifications_html += "</tr>";
		}
	}
	modifications_html += "</tbody></table>";
	$(".js-select-modifications").html(modifications_html);
}

function propogate_weapon_mods() {
	available_links = current_starship.get_linked_weapons();
	weapon_mods_html = "<h4>Installed Weapons</h4>";
	if(available_links.length > 0)
		weapon_mods_html += "Available Links: " + (available_links.length - 1) + "<br />";


	if(current_starship.selected_weapons.length > 0) {
		weapon_mods_html += "<table><thead><tr>";
		weapon_mods_html += "<th>Name</th>";
		weapon_mods_html += "<th colspan='3'>&nbsp;</th>";
		weapon_mods_html += "</tr></thead><tbody>";
		for(weapon_count = 0; weapon_count < current_starship.selected_weapons.length; weapon_count++) {
			weapon_mods_html += "<tr>";
			weapon_mods_html += "<td>";
			weapon_mods_html += current_starship.selected_weapons[weapon_count].name;
			weapon_mods_html += "</td>";
			weapon_mods_html += "<td>";
			fixedcheck = "";
		//	if(current_starship.selected_weapons[weapon_count].linked == 0) {
				if(current_starship.selected_weapons[weapon_count].fixed > 0)
					fixedcheck = "checked='checked'";
				weapon_mods_html += "<label style='display: inline;font-weight: normal;'><input type='checkbox' class='js-fix-weapon' ref='" + weapon_count + "' " + fixedcheck + "/> Fixed</label>";
		//	}

			if(available_links.length > 0) { // && current_starship.selected_weapons[weapon_count].fixed == 0) {
				weapon_mods_html += "<select class='js-link-weapon' ref='" + weapon_count + "'>";
				weapon_mods_html += "<option value='0'>Unlinked</option>";
				for(link_count = 1; link_count < available_links.length; link_count++) {
					linkedcheck = "";
					if(current_starship.selected_weapons[weapon_count].linked == link_count)
						linkedcheck = "selected='selected'";

					if(typeof(available_links[link_count]) == "undefined" || available_links[link_count] == "undefined" || available_links[link_count] == "" || available_links[link_count] == current_starship.selected_weapons[weapon_count].name)
						weapon_mods_html += "<option value='" + link_count + "' " + linkedcheck + ">Link #" + link_count + "</option>";
				}
				weapon_mods_html += "</select>";
			} else {
				weapon_mods_html += "&nbsp;";
			}
			weapon_mods_html += "</td>";
			weapon_mods_html += "<td>";
			weapon_mods_html += "<button type='button' class='js-remove-weapon btn btn-danger  btn-xs' ref='" + weapon_count + "'>Remove</button>";
			weapon_mods_html += "</td>";
			weapon_mods_html += "</td>";
			weapon_mods_html += "</tr>";
		}
		weapon_mods_html += "</tbody></table>";
	} else {
		weapon_mods_html += "No installed weapons<br />";
	}
	weapon_mods_html += "<h4>Available Weapons</h4>";

	currentWeaponClass = "";
	weaponCount = 0;
	for(mod_count = 0; mod_count < vehicle_weapons.length; mod_count++) {
		if(currentWeaponClass != vehicle_weapons[mod_count].classification) {
			if(weaponCount > 0) {
				if(currentWeaponClass != vehicle_weapons[mod_count].classification) {
					weapon_mods_html += "</tbody></table>";
				}
			}
			weaponCount = 0;
			weapon_mods_html += "<h5>" + vehicle_weapons[mod_count].classification + "</h5><table><thead><tr>";
			weapon_mods_html += "<th>Name</th>";
			weapon_mods_html += "<th>Mod Cost</th>";
			weapon_mods_html += "<th>Cost</th>";
			weapon_mods_html += "</tr></thead><tbody>";
		}

		mod_cost = vehicle_weapons[mod_count].mods;
		if( current_starship.mods_available >= mod_cost ) {
			weapon_mods_html += "<tr title='" + vehicle_weapons[mod_count].description + "'>";
			if(  starship_mod_count > 0 )
				weapon_mods_html += "<td style='color: green'>";
			else
				weapon_mods_html += "<td>";

			if( current_starship.mods_available >= mod_cost )
				weapon_mods_html += "<button style='height: 25px; display: inline-block;' ref='" + vehicle_weapons[mod_count].name  + "' class='js-add-weapon  btn btn-success btn-xs' type='button'>Install</button> ";
			weapon_mods_html += vehicle_weapons[mod_count].name + "</td>";

			weapon_mods_html += "<td>" + mod_cost + "</td>";
			weapon_mods_html += "<td>" + simplify_cost(vehicle_weapons[mod_count].cost ) + "</td>";


			weapon_mods_html += "</tr>";
		}


		currentWeaponClass = vehicle_weapons[mod_count].classification;
		weaponCount++;
	}


	$(".js-select-weapons").html(weapon_mods_html);
}

function refresh_starship_page() {
	$(".js-info-stats").html( current_starship.create_stats_block() );


	$(".js-bb-code").val( current_starship.export_bbcode() );

	$(".js-set-ship-name").val(current_starship.ship_name);
	$(".js-set-ship-description").val(current_starship.ship_description);

	$('.js-set-ship-name').unbind('keyup');
	$(".js-set-ship-name").keyup( function() {
		current_starship.set_ship_name( $(".js-set-ship-name").val() );
		refresh_starship_page();
	});

	$('.js-set-ship-description').unbind('keyup');
	$(".js-set-ship-description").keyup( function() {
		current_starship.set_ship_description( $(".js-set-ship-description").val() );
		refresh_starship_page();
	});


	propogate_size_select();
	$('.js-select-size').unbind('change');
	$(".js-select-size").change( function() {
		current_starship.set_size( $(".js-select-size option:selected").val() );
		refresh_starship_page();
	});

	if( current_starship.selected_size.ship_label ) {
		propogate_add_mods();
		$('.js-add-mod').unbind('click');
		$(".js-add-mod").click( function() {
			current_starship.add_mod( $(this).attr("ref") );
			refresh_starship_page();
		});

		$('.js-remove-mod').unbind('click');
		$(".js-remove-mod").click( function() {
			current_starship.remove_mod( $(this).attr("ref") );
			refresh_starship_page();
		});

		propogate_weapon_mods();
		$('.js-add-weapon').unbind('click');
		$(".js-add-weapon").click( function() {
			current_starship.add_weapon( $(this).attr("ref") );
			refresh_starship_page();
		});

		$('.js-remove-weapon').unbind('click');
		$(".js-remove-weapon").click( function() {
			current_starship.remove_weapon( $(this).attr("ref") );
			refresh_starship_page();
		});

		$('.js-link-weapon').unbind('change');
		$(".js-link-weapon").change( function() {
			weaponIndex = $(this).attr("ref");
			linkIndex =  $(this).val();
			current_starship.link_weapon( weaponIndex, linkIndex );
			refresh_starship_page();
		});

		$('.js-fix-weapon').unbind('click');
		$(".js-fix-weapon").click( function() {
			weaponIndex = $(this).attr("ref");
			if($(this).is(":checked")) {
				current_starship.fix_weapon( weaponIndex, 1 );
			} else {
				current_starship.fix_weapon( weaponIndex, 0 );
			}
			refresh_starship_page();
		});

		$(".js-select-modifications-container").fadeIn();
	} else {
		$(".js-select-modifications-container").fadeOut();
	}
}


var current_starship;
$(window).load(
	function(){
		current_starship = new sw_starship();
		refresh_starship_page();
	}
);