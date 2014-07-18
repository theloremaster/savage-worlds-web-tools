/* TODO:
Need to sort all installed power_armor mods during power_armor calculation by calc_weight,
if calc_weight is empty or undefined, it should be assumed 5 */


var power_armor_sizes = Array(
	{
		power_armor_label: "Light",
		examples: "",
		size: 1,
		acc: 0,
		ts: 0,
		climb: 0,
		pace: 8,
		toughness: 0,
		armor: 8,
		mods: 5,
		crew: 1,
		cost: 500000,
		weight: 100,
		energy_capacity: 0,
		provisions: 0
	},
	{
		power_armor_label: "Medium",
		examples: "",
		size: 2,
		acc: 0,
		ts: 0,
		climb: 0,
		pace: 6,
		toughness: 0,
		armor: 10,
		mods: 8,
		crew: 1,
		cost: 1000000,
		weight: 200,
		energy_capacity: 0,
		provisions: 0
	},
	{
		power_armor_label: "Heavy",
		examples: "",
		size: 3,
		acc: 0,
		ts: 0,
		climb: 0,
		pace: 4,
		toughness: 0,
		armor: 12,
		mods: 12,
		crew: 1,
		cost: 2000000,
		weight: 300,
		energy_capacity: 0,
		provisions: 0
	}

);

function sw_power_armor() {
	this.item_name = "(nameless)";
	this.power_armor_description = "";

	this.power_armor_power_armor_label = "";
	this.examples = "";
	this.size = 0;
	this.object_type = "power_armor",
	this.acc = 0;
	this.ts = 0;
	this.climb = 0;
	this.toughness = 0;
	this.base_toughness = 0;
	this.base_cost = 0;
	this.armor = 0;
	this.mods = 0;
	this.base_mods = 0;
	this.crew = 0;
	this.has_weapon_mount = 0;
	this.flying_pace = 0;
	this.cost = 0;
	this.vehicle_weapon_mod_points = 0;
	this.energy_capacity =  0;
	this.base_energy_capacity =  0;
	this.provisions = 0;

	this.aircraft = 0;

	this.selected_size = 0;

	this.selected_modifications = Array();
	this.selected_modifications_list = {};

	this.mods_available = 0;

	this.selected_weapons = Array();
	this.selected_weapons_list = Array();

	this.create_stats_block = create_stats_block;
	function create_stats_block() {
		this.calculate_power_armor();
		html_return = "";

		html_return += "<h4>" + this.item_name + "</h4>";
		html_return += "<p>";

		html_return += this.power_armor_description + "</p><br />";

		if(this.selected_size.power_armor_label) {
			html_return += "<strong>" + this.selected_size.power_armor_label + " Power Armor</strong>: ";
			html_return += "Size " + this.size + ", ";
			if(this.acc > 0)
			html_return += "Acc/TS " + this.acc + "/" + this.ts + ", ";
			if(this.aircraft)
				html_return += "Climb " + this.climb + ", Flying Pace " + this.flying_pace + ", ";
			html_return += "Toughness +" + this.armor + ", ";
			html_return += "Pace " + this.pace + ", ";
//			html_return += "Crew " + this.crew + ", ";

			html_return += "Cost $" + simplify_cost(this.cost) + "<br />";


			if(this.energy_capacity > 0)
				html_return += "<strong>Energy Capacity</strong>: " + this.energy_capacity + "<br />";
			html_return += "<strong>Mods Available</strong>: " + this.mods_available + "<br />";
			if( this.has_weapon_mount )
				html_return += "<strong>Weapon Mods Available</strong>: " + this.vehicle_weapon_mod_points + "<br />";

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
			html_return += "A power_armor size must be selected.";
		}

		return html_return;
	}

	this.export_bbcode = export_bbcode;
	function export_bbcode() {
		this.calculate_power_armor();
		html_return = "";

		html_return += "[b][size=18]" + this.item_name + "[/size][/b]\n";
		if(this.power_armor_description)
			html_return += "" + this.power_armor_description + "\n\n";
		else
			html_return += "\n";

		if(this.selected_size.power_armor_label) {
			html_return += "[b]" + this.selected_size.power_armor_label + " Power Armor[/b]: ";
			html_return += "Size " + this.size + ", ";
			html_return += "Acc/TS " + this.acc + "/" + this.ts + ", ";
			html_return += "Climb " + this.climb + ", ";
			html_return += "Toughness " + this.toughness + " (" + this.armor + "), ";
			html_return += "Crew " + this.crew + ", ";

			html_return += "Cost $" + simplify_cost(this.cost) + "" + "\n";

			if(this.energy_capacity > 0)
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
			html_return += "A power_armor size must be selected.";
		}

		for(removeHideCounter = 1; removeHideCounter < 31; removeHideCounter++)
			html_return = html_return.replace("<span class='hide'>" + removeHideCounter + "</span>", "");

		return html_return;
	}

	this.export_json = export_json;
	function export_json() {
		exportObject = {};
		exportObject.size = this.size;
		exportObject.object_type = "power_armor";
		exportObject.item_name = this.item_name;
		exportObject.power_armor_description = this.power_armor_description;
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
		this.item_name = "(nameless)";
		this.power_armor_description = "";

		this.power_armor_power_armor_label = "";
		this.examples = "";
		this.size = 0;
		this.acc = 0;
		this.ts = 0;
		this.climb = 0;
		this.toughness = 0;
		this.base_toughness = 0;
		this.armor = 0;
		this.mods = 0;
		this.base_mods = 0;
		this.crew = 0;
		this.cost = 0;
		this.flying_pace = 0;
		this.strength_bonus = 0;
		this.aircraft = 0;
		this.has_weapon_mount = 0;
		this.vehicle_weapon_mod_points = 0;
		this.base_cost = 0;
		this.energy_capacity =  0;
		this.base_energy_capacity =  0;
		this.provisions = 0;

		this.weight = 0;
		this.pace = 0;


		this.selected_size = 0;

		this.selected_modifications = Array();
		this.selected_modifications_list = {};

		this.mods_available = 0;

		this.selected_weapons = Array();
		this.selected_weapons_list = Array();
	}

	this.import_json = import_json;
	function import_json(importedPowerArmor) {
		try {
			importedPowerArmorObj= JSON.parse(importedPowerArmor);
		}
		catch(e) {

		}

		if(typeof importedPowerArmorObj =='object') {
			this.reset_data();
			this.set_size(importedPowerArmorObj.size);
			this.set_item_name(importedPowerArmorObj.item_name);
			this.set_power_armor_description(importedPowerArmorObj.power_armor_description);

			for(modCounter = 0; modCounter < importedPowerArmorObj.mods.length; modCounter++)
				this.add_mod( importedPowerArmorObj.mods[modCounter] );

			for(weaponCounter = 0; weaponCounter < importedPowerArmorObj.weapons.length; weaponCounter++) {
				this.add_weapon( importedPowerArmorObj.weapons[weaponCounter].name );

				if( importedPowerArmorObj.weapons[weaponCounter].fixed > 0)
					this.fix_weapon( this.selected_weapons.length - 1, importedPowerArmorObj.weapons[weaponCounter].fixed );

				if( importedPowerArmorObj.weapons[weaponCounter].linked > 0)
					this.link_weapon( this.selected_weapons.length - 1, importedPowerArmorObj.weapons[weaponCounter].linked);

			}

			refresh_power_armor_page();
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

	this.calculate_power_armor = calculate_power_armor;
	function calculate_power_armor() {

		// Get base stats from size
		if( this.selected_size.power_armor_label ) {

			this.strength_bonus = 0;
			this.aircraft = 0;
			this.has_weapon_mount = 0;
			this.vehicle_weapon_mod_points = 0;

			this.power_armor_label = this.selected_size.power_armor_label;
			this.examples = this.selected_size.examples;
			this.size = this.selected_size.size;
			this.acc = this.selected_size.acc;
			this.ts = this.selected_size.ts;
			this.aircraft = 0;
			this.strength_bonus = 0;
			this.climb = this.selected_size.climb;
			this.toughness = this.selected_size.toughness;
			this.base_toughness = this.selected_size.toughness;
			this.armor = this.selected_size.armor;
			this.mods = this.selected_size.mods;
			this.base_mods = this.selected_size.mods;
			this.crew = this.selected_size.crew;
			this.cost = this.selected_size.cost;
			this.base_cost =  this.selected_size.cost;
			this.energy_capacity = this.selected_size.energy_capacity;
			this.base_energy_capacity = this.selected_size.energy_capacity;
			this.provisions = this.selected_size.provisions;
			this.weight = this.selected_size.weight;
			this.pace = this.selected_size.pace;

			this.selected_modifications.sort( sort_mods );
			// Modify Power Armor as per mods
			this.selected_modifications_list = {};
			for(calcModCount = 0; calcModCount < this.selected_modifications.length; calcModCount++) {
				//this.selected_modifications_list += "<li>" + this.selected_modifications[modCount].name + "</li>";
				this.mods = this.mods - this.selected_modifications[calcModCount].get_mod_cost(this);
				this.cost += this.selected_modifications[calcModCount].get_cost(this);

				if( this.selected_modifications[calcModCount].get_weight )
					this.weight += this.selected_modifications[calcModCount].get_weight(this);

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

			// Weaponise Power Armor as per weapons
			this.selected_weapons.sort( sort_mods );

			this.selected_weapons_list = {};
			fixedWeaponModUsage = 0;
			linkedWeaponModUsage = Array();
			otherWeaponModUsage = 0;
			for(calcModCount = 0; calcModCount < this.selected_weapons.length; calcModCount++) {
				//this.selected_modifications_list += "<li>" + this.selected_weapons[modCount].name + "</li>";
				weaponModCost = this.selected_weapons[calcModCount].mods;
				if(this.selected_weapons[calcModCount].fixed > 0)
					weaponModCost = weaponModCost / 2;
				if(this.selected_weapons[calcModCount].linked > 0)
					weaponModCost = weaponModCost / 2;
				this.vehicle_weapon_mod_points = this.vehicle_weapon_mod_points - weaponModCost;

				this.mods_available += weaponModCost; // I assume that weapons on a mount don't cost any more mod points that the mount point itself

				if( this.selected_weapons[calcModCount].get_weight )
					this.weight += this.selected_weapons[calcModCount].get_weight(this);

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

	this.set_item_name = set_item_name;
	function set_item_name(newValue) {
		this.item_name = newValue;
	}

	this.set_power_armor_description = set_power_armor_description;
	function set_power_armor_description(newValue) {
		this.power_armor_description = newValue;
	}

	this.add_mod = add_mod;
	function add_mod(modName) {
		return_value = 0;
		for(addModCount = 0; addModCount < power_armor_modifications.length; addModCount++) {
			if(modName.toLowerCase() == power_armor_modifications[addModCount].name.toLowerCase()) {
				newMod = jQuery.extend({}, power_armor_modifications[addModCount]);
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
		for(sizeCount = 0; sizeCount < power_armor_sizes.length; sizeCount++) {
			if(sizeNumber == power_armor_sizes[sizeCount].size) {
				this.selected_size = power_armor_sizes[sizeCount];
			}
		}
	}
}

function propogate_size_select() {
	selectOptions = "<option value=''>- Select Power Armor Size -</option>";
	for(sizeCount = 0; sizeCount < power_armor_sizes.length; sizeCount++) {
		isSelected = "";
		if( current_power_armor.selected_size.size )
			if(  current_power_armor.selected_size.size == power_armor_sizes[sizeCount].size )
				isSelected = " selected='selected'";
		selectOptions += "<option value='" + power_armor_sizes[sizeCount].size + "'" + isSelected + ">" + power_armor_sizes[sizeCount].power_armor_label + " - Size " + power_armor_sizes[sizeCount].size;
		if( power_armor_sizes[sizeCount].examples )
			selectOptions += " - " + power_armor_sizes[sizeCount].examples;
		selectOptions += "</option>";
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
	for(mod_count = 0; mod_count < power_armor_modifications.length; mod_count++) {
		power_armor_mod_count = current_power_armor.get_modification_count(power_armor_modifications[mod_count].name);
		mod_cost = power_armor_modifications[mod_count].get_mod_cost(current_power_armor);
		if( current_power_armor.mods_available >= mod_cost || power_armor_mod_count > 0) {
			modifications_html += "<tr title='" + power_armor_modifications[mod_count].description + "'>";
			modifications_html += "<td style='white-space: nowrap;'>";

			if(  power_armor_mod_count > 0 )
				modifications_html += "<span ref='" + power_armor_modifications[mod_count].name  + "' class='js-remove-mod glyphicon glyphicon-minus color-red'></span>";
			else
				modifications_html += "<span class='glyphicon glyphicon-blank'></span>";

			if( current_power_armor.mods_available >= mod_cost && ( power_armor_modifications[mod_count].get_max(current_power_armor) == "u" || power_armor_modifications[mod_count].get_max(current_power_armor) > power_armor_mod_count) )
				modifications_html += " <span ref='" + power_armor_modifications[mod_count].name  + "' class='js-add-mod glyphicon glyphicon-plus color-green'></span>";

				modifications_html += "</td>";

			if(  power_armor_mod_count > 0 )
				modifications_html += "<td style='color: green'>" + power_armor_modifications[mod_count].name + "</td>";
			else
				modifications_html += "<td>" + power_armor_modifications[mod_count].name + "</td>";
			modifications_html += "<td>" + power_armor_mod_count + "/" + power_armor_modifications[mod_count].get_max(current_power_armor)  + "</td>";
			modifications_html += "<td>" + mod_cost + "</td>";
			modifications_html += "<td>" + simplify_cost(power_armor_modifications[mod_count].get_cost(current_power_armor)) + "</td>";

			modifications_html += "</tr>";
		}
	}
	modifications_html += "</tbody></table>";
	$(".js-select-modifications").html(modifications_html);
}

function propogate_weapon_mods() {
	available_links = current_power_armor.get_linked_weapons();
	weapon_mods_html = "<fieldset><legend>Installed Weapons</legend>";
	if(available_links.length > 0)
		weapon_mods_html += "Available Links: " + (available_links.length - 1) + "<br />";

	if(current_power_armor.selected_weapons.length > 0) {
		weapon_mods_html += "<table><thead><tr>";
		weapon_mods_html += "<th>Name</th>";
		weapon_mods_html += "<th colspan='3'>&nbsp;</th>";
		weapon_mods_html += "</tr></thead><tbody>";
		for(weapon_count = 0; weapon_count < current_power_armor.selected_weapons.length; weapon_count++) {
			weapon_mods_html += "<tr>";
			weapon_mods_html += "<td>";
			weapon_mods_html += current_power_armor.selected_weapons[weapon_count].name;
			weapon_mods_html += "</td>";
			weapon_mods_html += "<td>";
			fixedcheck = "";
		//	if(current_power_armor.selected_weapons[weapon_count].linked == 0) {
				if(current_power_armor.selected_weapons[weapon_count].fixed > 0)
					fixedcheck = "checked='checked'";
				weapon_mods_html += "<label style='display: inline;font-weight: normal;'>";
		//	}

			if(available_links.length > 0) { // && current_power_armor.selected_weapons[weapon_count].fixed == 0) {
				weapon_mods_html += "<select class='js-link-weapon' ref='" + weapon_count + "'>";
				weapon_mods_html += "<option value='0'>Unlinked</option>";
				for(link_count = 1; link_count < available_links.length; link_count++) {
					linkedcheck = "";
					if(current_power_armor.selected_weapons[weapon_count].linked == link_count)
						linkedcheck = "selected='selected'";

					if(typeof(available_links[link_count]) == "undefined" || available_links[link_count] == "undefined" || available_links[link_count] == "" || available_links[link_count] == current_power_armor.selected_weapons[weapon_count].name)
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
	weapon_mods_html += "</fieldset><fieldset><legend>Available Weapons</legend>";

	currentWeaponClass = "";
	weaponCount = 0;
	if(current_power_armor.has_weapon_mount == 0) {
		weapon_mods_html += "<p>To add a vehicle weapon, you'll require a Weapon Mount</p>";
	} else {
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
			if( current_power_armor.vehicle_weapon_mod_points >= mod_cost ) {
				weapon_mods_html += "<tr title='" + vehicle_weapons[mod_count].description + "'>";
				if(  power_armor_mod_count > 0 )
					weapon_mods_html += "<td style='color: green'>";
				else
					weapon_mods_html += "<td>";

				if( current_power_armor.vehicle_weapon_mod_points >= mod_cost )
					weapon_mods_html += "<button style='height: 25px; display: inline-block;' ref='" + vehicle_weapons[mod_count].name  + "' class='js-add-weapon  btn btn-success btn-xs' type='button'>Install</button> ";
				weapon_mods_html += vehicle_weapons[mod_count].name + "</td>";

				weapon_mods_html += "<td>" + mod_cost + "</td>";
				weapon_mods_html += "<td>" + simplify_cost(vehicle_weapons[mod_count].cost ) + "</td>";

				weapon_mods_html += "</tr>";
			}

			currentWeaponClass = vehicle_weapons[mod_count].classification;
			weaponCount++;
		}
	}
	weapon_mods_html += "</fieldset>";

	$(".js-select-weapons").html(weapon_mods_html);
}

function refresh_power_armor_page() {
	$(".js-info-stats").html( current_power_armor.create_stats_block() );

	$(".js-bb-code").val( current_power_armor.export_bbcode() );

	$(".js-json-code").val( current_power_armor.export_json() );

	//$(".js-set-power_armor-name").val(current_power_armor.item_name);
	//$(".js-set-power_armor-description").val(current_power_armor.power_armor_description);

	$('.js-set-power_armor-name').unbind('keyup');
	$(".js-set-power_armor-name").keyup( function() {
		current_power_armor.set_item_name( $(".js-set-power_armor-name").val() );
		refresh_power_armor_page();
	});

	$('.js-set-power_armor-description').unbind('keyup');
	$(".js-set-power_armor-description").keyup( function() {
		current_power_armor.set_power_armor_description( $(".js-set-power_armor-description").val() );
		refresh_power_armor_page();
	});

	propogate_size_select();
	$('.js-select-size').unbind('change');
	$(".js-select-size").change( function() {
		current_power_armor.set_size( $(".js-select-size option:selected").val() );
		refresh_power_armor_page();
	});

	if( current_power_armor.selected_size.power_armor_label ) {

		propogate_add_mods();
		$('.js-add-mod').unbind('click');
		$(".js-add-mod").click( function() {
			current_power_armor.add_mod( $(this).attr("ref") );
			refresh_power_armor_page();
		});

		$('.js-remove-mod').unbind('click');
		$(".js-remove-mod").click( function() {
			current_power_armor.remove_mod( $(this).attr("ref") );
			refresh_power_armor_page();
		});

		propogate_weapon_mods();
		$('.js-add-weapon').unbind('click');
		$(".js-add-weapon").click( function() {
			current_power_armor.add_weapon( $(this).attr("ref") );
			refresh_power_armor_page();
		});

		$('.js-remove-weapon').unbind('click');
		$(".js-remove-weapon").click( function() {
			current_power_armor.remove_weapon( $(this).attr("ref") );
			refresh_power_armor_page();
		});

		$('.js-link-weapon').unbind('change');
		$(".js-link-weapon").change( function() {
			weaponIndex = $(this).attr("ref");
			linkIndex =  $(this).val();
			current_power_armor.link_weapon( weaponIndex, linkIndex );
			refresh_power_armor_page();
		});

		$('.js-fix-weapon').unbind('click');
		$(".js-fix-weapon").click( function() {
			weaponIndex = $(this).attr("ref");
			if($(this).is(":checked")) {
				current_power_armor.fix_weapon( weaponIndex, 1 );
			} else {
				current_power_armor.fix_weapon( weaponIndex, 0 );
			}
			refresh_power_armor_page();
		});

		$(".js-select-modifications-container").fadeIn();
	} else {
		$(".js-select-modifications-container").fadeOut();
	}
}

$(".js-import-data").click( function() {
	if( $(".js-import-code").val() != "" ) {
		current_power_armor.import_json( $(".js-import-code").val() );
		$(".js-set-power_armor-name").val(current_power_armor.item_name);
		$(".js-set-power_armor-description").val(current_power_armor.power_armor_description);
		$(".js-import-code").val('');
		createAlert( "Your power_armor has been imported.", "success" );
	}
});

$(".js-save-item").click( function() {
	if( current_power_armor.size > 0 && current_power_armor.item_name != "" && current_power_armor.item_name != "(nameless)") {
		save_to_localstorage( current_power_armor.export_json() );
		propogateLoadList();
		createAlert( "Your power_armor has been saved.", "success" );
	} else {
		createAlert( "Please name your power_armor and select a size before saving", "danger"  );
	}
} );

function propogateLoadList() {
	currentPowerArmors = localstorage_parse_data();
	html = "<ul class='list-unstyled'>";
	for(lsCounter = 0; lsCounter < currentPowerArmors.length; lsCounter++) {
		if(currentPowerArmors[lsCounter].type == "power_armor") {
			html += "<li style='display:block;overflow:hidden; padding: 2px; margin: 2px; border-bottom: 1px solid #dedede;'>";
			html += "<label style='display: inline; font-weight: normal'>";
			html += "<input type='radio' name='selected_load' value='" + lsCounter + "' /> ";
			html += currentPowerArmors[lsCounter].name + " (Size " + currentPowerArmors[lsCounter].size + ")"; //  - " + currentPowerArmors[lsCounter].saved;
			html += "</label>";
			html += "<button ref='" + lsCounter + "' class='js-delete-data btn btn-danger pull-right btn-xs' type='button'>Delete</button>";
			html += "</li>";
		}
	}
	html += "</ul>";

	$(".js-load-list").html( html );

	$(".js-delete-data").click( function() {
		if( confirm("Are you sure you want to delete this item?") ) {
			selectedItemIndex = $(this).attr("ref");
			delete_item_from_localstorage(selectedItemIndex);

			propogateLoadList();
		}

	} );


}

function loadSelectedItem() {
	selectedItemIndex = $("input[name=selected_load]:checked").val();

	if(selectedItemIndex != "") {
		selectedItem = get_data_from_localstorage(selectedItemIndex);
		current_power_armor.import_json( selectedItem );
		$(".js-set-power_armor-name").val(current_power_armor.item_name);
		$(".js-set-power_armor-description").val(current_power_armor.ship_description);
		createAlert( "Your power_armor has been loaded.", "success" );
	}
}

$(".js-load-data").click( function() {
	loadSelectedItem();
	propogateLoadList();
} );



$(".js-new-item").click( function() {
	if( confirm("Are you sure you want to clear your current power_armor?")) {
		current_starship = new sw_starship();
		refresh_starship_page();
		$(".js-set-power_armor-name").val("");
		$(".js-set-power_armor-description").val("");
		propogateLoadList();
	}
} );

var current_power_armor;
$(window).load(
	function(){
		current_power_armor = new sw_power_armor();
		refresh_power_armor_page();
		propogateLoadList();
	}
);