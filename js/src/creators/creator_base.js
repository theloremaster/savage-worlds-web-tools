var creator_base = function() {};
creator_base.prototype = {

	init: function(object_type, object_label, available_sizes, available_mods) {
		this.item_name = "(nameless)";
		this.object_description = "";

		this.object_label = object_label;
		this.object_label = object_label;
		this.examples = "";
		this.size = 0;
		this.object_type = object_type,
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
		this.has_weapon_mounts = 0;
		this.requires_mount_point = 0;
		this.flying_pace = 0;
		this.cost = 0;
		this.vehicle_weapon_mod_points = 0;
		this.energy_capacity =  0;
		this.base_energy_capacity =  0;
		this.provisions = 0;

		this.has_torpedo_tube = 0;
		this.has_missile_launcher = 0;

		this.aircraft = 0;

		this.selected_size = 0;

		if(available_sizes)
			this.available_sizes = available_sizes;
		else
			this.available_sizes = Array();

		if(available_mods)
			this.available_mods = available_mods;
		else
			this.available_mods = Array();

		this.selected_modifications = Array();
		this.selected_modifications_list = {};

		this.mods_available = 0;

		this.selected_weapons = Array();
		this.selected_weapons_list = Array();

		if(this.object_type == "power_armor") {
			this.requires_mount_point = 1;
			this.has_weapon_mounts = 1;
		} else {
			this.requires_mount_point = 0;
			this.has_weapon_mounts = 0;
		}
	},

	reset: function() {
		this.init(this.object_type, this.object_label, this.available_sizes, this.available_mods);
	},

	set_sizes: function(available_sizes) {
		this.available_sizes = available_sizes
	},

	create_stats_block: function(jquery_selector) {
		html_return = "";

		html_return += "<h4>" + this.item_name + "</h4>";
		html_return += "<p>";

		html_return += this.object_description + "</p><br />";

		if(this.selected_size && this.selected_size.size_label) {
			html_return += "<strong>" + this.selected_size.size_label + " " + this.object_label + "</strong>: ";
			html_return += "Size " + this.size + ", ";
			if(this.acc > 0)
				html_return += "Acc/TS " + this.acc + "/" + format_pace_realworld(this.ts) + ", ";
			if(this.aircraft)
				html_return += "Climb " + this.climb + ", ";
			if(this.flying_pace > 0)
				html_return += "Flying Pace " + format_pace_realworld(this.flying_pace) + ", ";
			if(this.toughness > 0) {
				html_return += "Toughness " + this.toughness + " (" + this.armor + "), ";
			} else {
				if(this.armor) {
					html_return += "Armor +" + this.armor + ", ";
				}
			}

			if(this.pace > 0)
				html_return += "Pace " + format_pace_realworld(this.pace) + ", ";
			if(this.crew > 0)
				html_return += "Crew " + this.crew + ", ";

			if(this.strength > 0)
				html_return += "Strength " + this.get_strength_label( this.strength ) + ", ";

			html_return += "Cost $" + simplify_cost(this.cost) + "<br />";

			if(this.energy_capacity > 0)
				html_return += "<strong>Energy Capacity</strong>: " + this.energy_capacity + "<br />";
			html_return += "<strong>Mods Available</strong>: " + this.mods_available + "<br />";
			if( this.has_weapon_mounts )
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
			html_return += "A size must be selected.";
		}
		if(jquery_selector)
			$(jquery_selector).html(html_return);

		return html_return;
	},

	export_bbcode: function(jquery_selector) {
		html_return = "";

		html_return += "[b][size=18]" + this.item_name + "[/size][/b]\n";
		if(this.object_description)
			html_return += "" + this.object_description + "\n\n";
		else
			html_return += "\n";

		if(this.selected_size && this.selected_size.size_label) {
			html_return += "[b]" + this.selected_size.size_label + " " + this.object_label + "[/b]: ";
			html_return += "Size " + this.size + ", ";
			if(this.acc > 0)
				html_return += "Acc/TS " + this.acc + "/" + format_pace_realworld(this.ts) + ", ";
			if(this.aircraft)
				html_return += "Climb " + this.climb + ", ";
			if(this.flying_pace > 0)
				html_return += "Flying Pace " + format_pace_realworld(this.flying_pace) + ", ";
			if(this.toughness > 0) {
				html_return += "Toughness " + this.toughness + " (" + this.armor + "), ";
			} else {
				if(this.armor) {
					html_return += "Armor +" + this.armor + ", ";
				}
			}

			if(this.pace > 0)
				html_return += "Pace " + format_pace_realworld(this.pace) + ", ";
			if(this.crew > 0)
				html_return += "Crew " + this.crew + ", ";

			if(this.strength > 0)
				html_return += "Strength " + this.get_strength_label( this.strength ) + ", ";

			html_return += "Cost $" + simplify_cost(this.cost) + "\n";

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
			html_return += "A size must be selected.";
		}



		for(removeHideCounter = 1; removeHideCounter < 31; removeHideCounter++) {
			html_return = html_return.replace("<span class='hide'>" + removeHideCounter + "</span>", "");

			// fix for bb code sunglasses when posting some vehicles and walkers to a bb forum.
			html_return = html_return.replace("8)", " 8 )");
		}



		if(jquery_selector)
			$(jquery_selector).val(html_return);

		return html_return;
	},

	export_json: function(jquery_selector) {
		exportObject = {};
		exportObject.size = this.size;
		exportObject.object_type = this.object_type;
		exportObject.item_name = this.item_name;
		exportObject.object_description = this.object_description;
		exportObject.mods = Array();
		for(modCounter = 0; modCounter < this.selected_modifications.length; modCounter++)
			exportObject.mods = exportObject.mods.concat( this.selected_modifications[modCounter].name );
		exportObject.weapons = Array();
		for(local_weapon_counter = 0; local_weapon_counter < this.selected_weapons.length; local_weapon_counter++) {
			weapon_item = {
				name: this.selected_weapons[local_weapon_counter].name,
				fixed: this.selected_weapons[local_weapon_counter].fixed,
				linked: this.selected_weapons[local_weapon_counter].linked,
			};
			exportObject.weapons = exportObject.weapons.concat( weapon_item );
		}

		export_string = JSON.stringify(exportObject);
		if(jquery_selector)
			$(jquery_selector).val(export_string);

		return export_string;

	},

	import_json: function(importedObjectString) {
		try {
			importedObjectString = stripslashes(importedObjectString);
			importedObj= JSON.parse(importedObjectString);
		}
		catch(e) {
			// JSON Import error
			return false;
		}

		if(typeof importedObj =='object') {
			this.reset();
			this.set_size(importedObj.size);
			this.set_name(importedObj.item_name);
			if( typeof(importedObj.object_description) != "undefined")
				this.set_description(importedObj.object_description);

			// legacy version description checks
			if( typeof(importedObj.ship_description) != "undefined")
				this.set_description(importedObj.ship_description);
			if( typeof(importedObj.power_armor_description) != "undefined")
				this.set_description(importedObj.power_armor_description);
			if( typeof(importedObj.walker_description) != "undefined")
				this.set_description(importedObj.walker_description);
			if( typeof(importedObj.vehicle_description) != "undefined")
				this.set_description(importedObj.vehicle_description);


			for(modCounter = 0; modCounter < importedObj.mods.length; modCounter++)
				this.add_mod( importedObj.mods[modCounter] );

			for(local_weapon_counter = 0; local_weapon_counter < importedObj.weapons.length; local_weapon_counter++) {
				this.add_weapon( importedObj.weapons[local_weapon_counter].name );

				if( importedObj.weapons[local_weapon_counter].fixed )
					this.fix_weapon( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].fixed );

				if( importedObj.weapons[local_weapon_counter].linked > 0)
					this.link_weapon( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].linked);

			}
			this.calculate();
			refresh_creator_page();
			return true;
		}
		// Wasn't an object (or was empty)
		return false;
	},

	sort_selected_modifications_list: function() {
		var keyList = Object.keys(this.selected_modifications_list);

		keyList.sort();

    	var newList = {};

		for (var keyCount = 0; keyCount < keyList.length; keyCount++) {
			keyName = keyList[keyCount];
		    newList[keyName] = this.selected_modifications_list[keyName];
		}
		this.selected_modifications_list = newList;
	},

	sort_selected_weapons_list: function() {
		var keyList = Object.keys(this.selected_weapons_list);

		keyList.sort();

    	var newList = {};

		for (var keyCount = 0; keyCount < keyList.length; keyCount++) {
			keyName = keyList[keyCount];
		    newList[keyName] = this.selected_weapons_list[keyName];
		}
		this.selected_weapons_list = newList;
	},

	calculate: function() {


		if( this.selected_size && this.selected_size.size_label ) {
			// Flush Stats for recalulation
			this.strength = 0;

			this.strength_bonus = 0;
			this.aircraft = 0;
			this.watercraft = 0;
			this.has_weapon_mounts = 0;
			this.vehicle_weapon_mod_points = 0;

			this.has_torpedo_tube = 0;
			this.has_missile_launcher = 0;

			this.examples = this.selected_size.examples;
			this.size = this.selected_size.size;
			this.acc = this.selected_size.acc;
			this.ts = this.selected_size.ts;
			this.aircraft = 0;
			this.strength_bonus = 0;
			this.climb = this.selected_size.climb;
			if(this.selected_size.strength)
				this.strength = this.selected_size.strength;
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

			this.mods_available = this.mods;

			// Starship is always an aircraft for these purposes ;)
			if(this.object_type == "starship")
				this.aircraft = 1;

			// Go through Mods for availability, calculation and listings
			this.selected_modifications.sort( sort_mods );
			// Sort mods
			this.selected_modifications_list = {};
			for(calcModCount = 0; calcModCount < this.selected_modifications.length; calcModCount++) {
				//this.selected_modifications_list += "<li>" + this.selected_modifications[modCount].name + "</li>";
				this.mods = this.mods - this.selected_modifications[calcModCount].get_mod_cost(this);
				this.cost += this.selected_modifications[calcModCount].get_cost(this);

				// attempt to see if mod is still availble - remove if it's not.
				if( this.selected_modifications[calcModCount].is_available ) {
					if(this.selected_modifications[calcModCount].is_available(this) == false) {
						this.remove_mod(this.selected_modifications[calcModCount].name);
						refresh_creator_page();
						// stop all processing as the page is recalcuating anyways
						return;
					}
				}

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

			// Go through Weapons for availability, calculation and listings
			// Sort weapons
			this.selected_weapons.sort( sort_mods );

			this.selected_weapons_list = {};
			fixedWeaponModUsage = 0;
			linkedWeaponModUsage = Array();
			otherWeaponModUsage = 0;
			for(calcModCount = 0; calcModCount < this.selected_weapons.length; calcModCount++) {

				// attempt to see if weapon is still availble - remove if it's not.
				if( this.selected_weapons[calcModCount].is_available ) {
					if(this.selected_weapons[calcModCount].is_available(this) == false) {
						this.remove_weapon(calcModCount);
						refresh_creator_page();
						// stop all processing as the page is recalcuating anyways
						return;
					}
				}

				// Continue on....
				weaponModCost = this.selected_weapons[calcModCount].mods;
				if(this.selected_weapons[calcModCount].fixed > 0)
					weaponModCost = weaponModCost / 2;
				if(this.selected_weapons[calcModCount].linked > 0)
					weaponModCost = weaponModCost / 2;
				this.vehicle_weapon_mod_points = this.vehicle_weapon_mod_points - weaponModCost;

				if(this.requires_mount_point > 0)
					this.mods_available -= weaponModCost;
				else
					this.mods -= weaponModCost;

				if( this.selected_weapons[calcModCount].get_weight )
					this.weight += this.selected_weapons[calcModCount].get_weight(this);

				this.cost += this.selected_weapons[calcModCount].cost;

				weaponListName = this.selected_weapons[calcModCount].name;
				if(this.selected_weapons[calcModCount].fixed) {
					fixedLabel = "fixed";
					if( this.selected_weapons[calcModCount].fixed != 1)
						fixedLabel = "fixed - " + this.selected_weapons[calcModCount].fixed;
					if(this.selected_weapons[calcModCount].linked) {
						weaponListName = weaponListName + " (linked<span class='hide'>" + this.selected_weapons[calcModCount].linked + "</span>, " + fixedLabel +")";
					} else {
						weaponListName = weaponListName + " (" + fixedLabel + ")";
					}
				} else {
					if(this.selected_weapons[calcModCount].linked) {
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
	},

	set_name: function(newValue) {
		this.item_name = newValue;
	},

	set_description: function(newValue) {
		this.object_description = newValue;
	},

	add_mod: function(modName) {
		return_value = 0;
		for(addModCount = 0; addModCount < this.available_mods.length; addModCount++) {
			if(modName.toLowerCase() == this.available_mods[addModCount].name.toLowerCase()) {
				newMod = jQuery.extend({}, this.available_mods[addModCount]);
				this.selected_modifications = this.selected_modifications.concat( newMod  );
				return;
			}
		}

		return return_value;
	},

	get_strength_label: function( strength_value ) {
		strength_value = strength_value / 1;
		if( attribute_labels[strength_value] )
			return attribute_labels[strength_value];
		else
			return "UNKNOWN VALUE";
	},

	add_weapon: function(weaponName) {
		return_value = 0;
		for(addlocal_weapon_count = 0; addlocal_weapon_count < vehicle_weapons.length; addlocal_weapon_count++) {
			if(weaponName.toLowerCase() == vehicle_weapons[addlocal_weapon_count].name.toLowerCase()) {
//				newWeapon = new vehicle_weapons[addlocal_weapon_count];
				newWeapon = jQuery.extend({}, vehicle_weapons[addlocal_weapon_count]);
				newWeapon.linked = 0;
				newWeapon.fixed = 0;
				this.selected_weapons = this.selected_weapons.concat( newWeapon );
				return;
			}
		}

		return return_value;
	},

	remove_mod: function(modName) {
		for(removeModCount = 0; removeModCount < this.selected_modifications.length; removeModCount++) {
			if(modName.toLowerCase() == this.selected_modifications[removeModCount].name.toLowerCase()) {
				this.selected_modifications.splice(removeModCount, 1);
				return;
			}
		}
	},

	remove_weapon: function(weaponIndex) {
		weaponIndex = weaponIndex / 1;
		this.selected_weapons.splice(weaponIndex, 1);
	},

	link_weapon: function(weaponIndex, linkIndex) {
		weaponIndex = weaponIndex / 1;

		this.selected_weapons[weaponIndex].linked = (linkIndex / 1);
	},

	fix_weapon: function(weaponIndex, fixedValue) {
		weaponIndex = weaponIndex / 1;

		this.selected_weapons[weaponIndex].fixed = (fixedValue);
	},

	get_linked_weapons: function() {
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

	},

	get_modification_count: function(modName) {
		return_value = 0;
		for(modCount = 0; modCount < this.selected_modifications.length; modCount++) {
			if(modName.toLowerCase() == this.selected_modifications[modCount].name.toLowerCase())
				return_value++;
		}

		return return_value;
	},

	set_size: function(sizeNumber) {
		for(sizeCount = 0; sizeCount < this.available_sizes.length; sizeCount++) {
			if(sizeNumber == this.available_sizes[sizeCount].size) {
				this.selected_size = this.available_sizes[sizeCount];
			}
		}
	},
	propogate_size_select: function(jquery_selector) {
		if(jquery_selector)
			jquery_selector = ".js-select-size";
		selectOptions = "<option value=''>- Select " + this.object_label + " Size -</option>";
		for(sizeCount = 0; sizeCount < this.available_sizes.length; sizeCount++) {
			isSelected = "";
			if( this.selected_size && this.selected_size.size )
				if(  this.selected_size.size == this.available_sizes[sizeCount].size )
					isSelected = " selected='selected'";
			selectOptions += "<option value='" + this.available_sizes[sizeCount].size + "'" + isSelected + ">" + this.available_sizes[sizeCount].size_label + " - Size " + this.available_sizes[sizeCount].size;
			if( this.available_sizes[sizeCount].examples )
				selectOptions += " - " + this.available_sizes[sizeCount].examples;
			selectOptions += "</option>";
		}
		$(jquery_selector).html(selectOptions);
	}
};