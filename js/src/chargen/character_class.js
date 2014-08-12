var character_class = function() {};
character_class.prototype = {

	init: function() {

		// Fluff
		this.name = "";
		this.race = chargen_races[0];
		this.gender = "";
		this.description = "";

		this.attribute_points = 5;
		this.skill_points = 15;

		this.selected_edges = Array();
		this.selected_hindrances = Array();
		this.selected_perks = Array();

		this.edges_available = 0;
		this.perks_available = 0;

		// Attributes..
		this.attributes = {
			agility : 1,
			smarts : 1,
			spirit : 1,
			strength : 1,
			vigor : 1
		};

		this.starting_funds = 500;
		this.base_starting_funds = 500;

		this.is_valid = true;
		this.validity_messages = Array();
	},

	reset: function() {
		this.init();
	},

	calculate: function() {
		this.attribute_points = 5;
		this.skill_points = 15;

		this.is_valid = true;

		this.cost_to_raise = {
			agility : 1,
			smarts : 1,
			spirit : 1,
			strength : 1,
			vigor : 1
		};

		this.race.attributes = {
			agility : 0,
			smarts : 0,
			spirit : 0,
			strength : 0,
			vigor : 0
		};

		this.edges_available = 0;

		this.racial_edges = Array();
		this.racial_hindrances = Array();




		// Add Racial Edges
		if(this.race.edges_included) {
			for(racial_edge_counter = 0; racial_edge_counter < this.race.edges_included.length; racial_edge_counter++) {
				if( typeof(this.race.edges_included[racial_edge_counter]) == "string") {
					current_edge = this.get_edge( this.race.edges_included[racial_edge_counter] );
				} else {
					current_edge = this.race.edges_included[racial_edge_counter];
				}

				if( current_edge ) {
					this.racial_edges.push ( current_edge );
					if( current_edge.char_effects )
						current_edge.char_effects( this );
				}
			}
		}

		// Add Racial Hindrances (this gives no bonuses to perks_available)
		if(this.race.hindrances_included) {
			for(racial_hindarance_counter = 0; racial_hindarance_counter < this.race.hindrances_included.length; racial_hindarance_counter++) {
				if( typeof(this.race.hindrances_included[racial_hindarance_counter]) == "string") {
					current_hindarance = this.get_hindrance( this.race.hindrances_included[racial_hindarance_counter] );

				} else {
					current_hindarance = this.race.hindrances_included[racial_hindarance_counter];
				}

				if( current_hindarance ) {
					this.racial_hindrances.push ( current_hindarance );
					if( current_hindarance.char_effects )
						current_hindarance.char_effects( this );
				}
			}
		}

		this.attribute_points = this.attribute_points - (this.attributes.agility - 1) * this.cost_to_raise.agility;
		this.attribute_points = this.attribute_points - (this.attributes.smarts - 1) * this.cost_to_raise.smarts;
		this.attribute_points = this.attribute_points - (this.attributes.spirit - 1) * this.cost_to_raise.spirit;
		this.attribute_points = this.attribute_points - (this.attributes.strength - 1) * this.cost_to_raise.strength;
		this.attribute_points = this.attribute_points - (this.attributes.vigor - 1) * this.cost_to_raise.vigor;

		// Racial Attribute Price Adjustments
		this.attribute_points += this.race.attributes.agility;
		this.attribute_points += this.race.attributes.smarts;
		this.attribute_points += this.race.attributes.spirit;
		this.attribute_points += this.race.attributes.strength;
		this.attribute_points += this.race.attributes.vigor;


		this.racial_edges.sort();
		this.racial_hindrances.sort();

		minor_perks_selected = 0;
		major_perks_selected = 0;
		this.perks_available = 0;

		this.selected_edges.sort(
			function(a, b)
			{
				var textA = a.name.toLowerCase();
				var textB = b.name.toLowerCase();
				return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			}
		);

		this.selected_hindrances.sort(
			function(a, b)
			{
				var textA = a.name.toLowerCase();
				var textB = b.name.toLowerCase();
				return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			}
		);

		// Add Selected Hindrances (these give perks available up to 1 major and 2 minor, rest are ignored)
		for(selected_hindarance_counter = 0; selected_hindarance_counter < this.selected_hindrances.length; selected_hindarance_counter++) {
			current_hindarance = this.selected_hindrances[selected_hindarance_counter];
			if( current_hindarance ) {
				if( current_hindarance.major > 0 ) {
					major_perks_selected++;
					if(major_perks_selected < 2)
						this.perks_available = this.perks_available + 2;
				}

				if( current_hindarance.minor > 0) {
					minor_perks_selected++;
					if(minor_perks_selected < 3)
						this.perks_available++;
				}

				if( current_hindarance.char_effects )
					current_hindarance.char_effects( this );
			}
		}

		// Apply Selected Perks
		for(selected_perk_counter = 0; selected_perk_counter < this.selected_perks.length; selected_perk_counter++) {
			this.perks_available -= this.selected_perks[selected_perk_counter].cost;
			if( this.selected_perks[selected_perk_counter].char_effects )
				this.selected_perks[selected_perk_counter].char_effects( this );
		}

		// Add Selected Edges
		for(selected_edges_counter = 0; selected_edges_counter < this.selected_edges.length; selected_edges_counter++) {
			current_edge = this.selected_edges[selected_edges_counter];
			if( current_edge ) {
				if( current_edge.char_effects )
					current_edge.char_effects( this );
			}
		}

		this.validity_messages = Array();
		if( this.perks_available < 0) {
			this.is_valid = false;
			this.validity_messages.push("Overspent perk points");
		}

		if( this.attribute_points < 0) {
			this.is_valid = false;
			this.validity_messages.push("Overspent attribute points");
		}


		if( this.edges_available < 0) {
			this.is_valid = false;
			this.validity_messages.push("Too many edges selected");
		}


		if( this.skill_points < 0) {
			this.is_valid = false;
			this.validity_messages.push("Overspent skill points");
		}

	},

	set_attribute: function(attribute_name, new_value) {
		if(this.attributes[attribute_name]) {
			this.attributes[attribute_name] = new_value / 1;
		}
	},

	has_edge: function( edge_name ) {
		if( edge_name ) {
			if(this.race.edges_included) {
				for(get_all_edges_count = 0; get_all_edges_count < this.racial_edges.length; get_all_edges_count++ )
					if( this.racial_edges[get_all_edges_count].name.toLowerCase() == edge_name.toLowerCase() )
						return true;
			}

			if(this.selected_edges.length > 0) {
				for(get_all_edges_count = 0; get_all_edges_count < this.selected_edges.length; get_all_edges_count++ ) {
					current_edge = this.selected_edges[get_all_edges_count];
					if(current_edge) {
						if( current_edge.name.toLowerCase() == edge_name.toLowerCase() )
							return true;
					}
				}
			}
		}
		return false;
	},

	has_hindrance: function( hindrance_name ) {
		if(hindrance_name) {
			hindrance_name = hindrance_name.replace(" (Racial)", "");
			hindrance_name = hindrance_name.replace(" (major)", "");
			hindrance_name = hindrance_name.replace(" (minor)", "");
			hindrance_name = hindrance_name.replace("(major)", "");
			hindrance_name = hindrance_name.replace("(minor)", "");
			if(this.race.hindrances_included) {
				for(get_all_hindrances_count = 0; get_all_hindrances_count < this.racial_hindrances.length; get_all_hindrances_count++ )
					if( this.racial_hindrances[get_all_hindrances_count].name.toLowerCase() == hindrance_name.toLowerCase() )
						return true;
			}

			if(this.selected_hindrances.length > 0) {
				for(get_all_hindrances_count = 0; get_all_hindrances_count < this.selected_hindrances.length; get_all_hindrances_count++ ) {
					current_hindarance = this.selected_hindrances[get_all_hindrances_count];
					if(current_hindarance) {
						if( current_hindarance.name.toLowerCase() == hindrance_name.toLowerCase() )
							return true;
					}
				}
			}
		}
		return false;
	},

	get_edge: function(edge_name) {
		if(edge_name) {
			for( edge_counter = 0; edge_counter < chargen_edges.length; edge_counter++ ) {
				if(edge_name.toLowerCase() == chargen_edges[edge_counter].name.toLowerCase())
					return chargen_edges[edge_counter];
			}
		}
		return 0;
	},

	remove_hindrance: function(hindrance_name) {
		look_for_major = false;
		look_for_minor = false;
		specify_text = "";

		if(hindrance_name.indexOf(":") > - 1) {
			specify_text = hindrance_name.substring(hindrance_name.indexOf(":") + 2).trim();
			hindrance_name = hindrance_name.substring(0, hindrance_name.indexOf(":")).trim();
		}

		if( hindrance_name.toLowerCase().endsWith("(major)")) {
			look_for_major = true;
			hindrance_name = hindrance_name.substring(0, hindrance_name.length - 7);
			hindrance_name = hindrance_name.trim();
		}
		if( hindrance_name.toLowerCase().endsWith("(minor)")) {
			look_for_minor = true;
			hindrance_name = hindrance_name.substring(0, hindrance_name.length - 7);
			hindrance_name = hindrance_name.trim();
		}


		found_index = -1;
		if(hindrance_name) {

			for( hindrance_counter = 0; hindrance_counter < this.selected_hindrances.length; hindrance_counter++ ) {
				if(this.selected_hindrances[hindrance_counter] && this.selected_hindrances[hindrance_counter].name) {
					if(hindrance_name.toLowerCase() == this.selected_hindrances[hindrance_counter].name.toLowerCase()) {
						if( specify_text != "") {
							if(specify_text.toLowerCase().trim() == this.selected_hindrances[hindrance_counter].specify_text.toLowerCase().trim()) {
								found_index = hindrance_counter;
							}
						} else {
							found_index = hindrance_counter;
						}

					}
				}
			}
			if( found_index > -1 ) {
				this.selected_hindrances.splice(found_index, 1);
			}
		}

		return 0;
	},

	get_hindrance: function(hindrance_name) {
		if(hindrance_name) {
			for( hindrance_counter = 0; hindrance_counter < chargen_hindrances.length; hindrance_counter++ ) {
				if(chargen_hindrances[hindrance_counter] && chargen_hindrances[hindrance_counter].name) {
					if(hindrance_name.toLowerCase() == chargen_hindrances[hindrance_counter].name.toLowerCase())
						return chargen_hindrances[hindrance_counter];
				}
			}
		}
		return 0;
	},

	add_edge: function(edge_name) {
		if(edge_name) {
			for( edge_counter = 0; edge_counter < chargen_edges.length; edge_counter++ ) {
				if(edge_name.toLowerCase() == chargen_edges[edge_counter].name.toLowerCase()){
					this.selected_edges.push( chargen_edges[edge_counter] );
					return chargen_edges[edge_counter];
				}
			}
		}
		return 0;
	},

	get_all_edges: function() {
		racial_edges = Array();
		selected_edges = Array();
		if(this.race.edges_included) {
			for(get_all_edges_count = 0; get_all_edges_count < this.racial_edges.length; get_all_edges_count++ )
				racial_edges.push( this.racial_edges[get_all_edges_count].name  + " (Racial)");
		}

		if(this.selected_edges.length > 0) {
			for(get_all_edges_count = 0; get_all_edges_count < this.selected_edges.length; get_all_edges_count++ ) {
				current_edge = this.selected_edges[get_all_edges_count];
				if(current_edge)
					selected_edges.push( current_edge.name + "");
			}
		}

		all_edges = racial_edges.concat(selected_edges);
		return all_edges;
	},

	get_all_hindrances: function() {
		racial_hindrances = Array();
		selected_hindrances = Array();
		if(this.race.hindrances_included) {
			for(get_all_hindrances_count = 0; get_all_hindrances_count < this.racial_hindrances.length; get_all_hindrances_count++ )
				racial_hindrances.push( this.racial_hindrances[get_all_hindrances_count].name + " (Racial)");
		}

		if(this.selected_hindrances.length > 0) {
			for(get_all_hindrances_count = 0; get_all_hindrances_count < this.selected_hindrances.length; get_all_hindrances_count++ ) {
				current_hindarance = this.selected_hindrances[get_all_hindrances_count];
				if(current_hindarance) {
					specify = "";
					if( current_hindarance.specify_text )
						specify = ": " + current_hindarance.specify_text;
					if(current_hindarance.major > 0)
						selected_hindrances.push( current_hindarance.name + " (Major)" + specify);
					if(current_hindarance.minor > 0)
						selected_hindrances.push( current_hindarance.name + " (Minor)" + specify);
				}
			}
		}

		all_hindrances = racial_hindrances.concat(selected_hindrances);
		return all_hindrances;
	},

	remove_perk: function(selected_perk_index) {
		selected_perk_index = selected_perk_index / 1;
		if(this.selected_perks[selected_perk_index]) {
			this.selected_perks.splice(selected_perk_index, 1);
			return true;
		} else {
			return false;
		}
	},

	add_perk: function(perk_short_name) {
		if(perk_short_name) {
			for(add_perk_counter = 0; add_perk_counter < chargen_perks.length; add_perk_counter++) {
				if( chargen_perks[add_perk_counter].short_name.toLowerCase() == perk_short_name.toLowerCase() ) {
					this.selected_perks.push( chargen_perks[add_perk_counter] );
					return true;
				}
			}
		}
		return false;
	},

	list_perks: function() {
		return_array = Array();

		for(list_perks_counter = 0; list_perks_counter < this.selected_perks.length; list_perks_counter++) {
			return_array.push( this.selected_perks[list_perks_counter].name );
		}

		return return_array;
	},

	add_hindrance: function(hindrance_name, specify_field_text) {
		look_for_major = false;
		look_for_minor = false;
		if(!specify_field_text)
			specify_field_text = "";


		if( hindrance_name.toLowerCase().endsWith("(major)")) {
			look_for_major = true;
			hindrance_name = hindrance_name.substring(0, hindrance_name.length - 7);
			hindrance_name = hindrance_name.trim();
		}
		if( hindrance_name.toLowerCase().endsWith("(minor)")) {
			look_for_minor = true;
			hindrance_name = hindrance_name.substring(0, hindrance_name.length - 7);
			hindrance_name = hindrance_name.trim();
		}

		for( hindrance_counter = 0; hindrance_counter < chargen_hindrances.length; hindrance_counter++ ) {
			if(hindrance_name.toLowerCase() == chargen_hindrances[hindrance_counter].name.toLowerCase()) {
				add_hindrance = false;
				if(look_for_major == true) {
					if( chargen_hindrances[hindrance_counter].major > 0) {
						add_hindrance = true;
					}
				} else{
					if(look_for_minor == true) {
						if( chargen_hindrances[hindrance_counter].minor > 0) {
							add_hindrance = true;
						}
					} else {
						add_hindrance = true;
					}
				}

				if(add_hindrance) {
					new_hindrance = chargen_hindrances[hindrance_counter];
					if( typeof(specify_field_text) != "undefined" && new_hindrance.specify_field > 0 )
						new_hindrance.specify_text = specify_field_text;
					this.selected_hindrances.push( new_hindrance );
					return new_hindrance;
				}
			}
		}
		return 0;
	},

	set_race: function(race_name) {
		for(race_counter = 0; race_counter < chargen_races.length; race_counter++) {
			if(race_name == chargen_races[race_counter].name){
				this.race = chargen_races[race_counter];
				return true;
			}
		}
		return false;
	},

	set_description: function(new_description) {
		this.description = new_description;
	},

	set_gender: function(new_gender) {
		this.gender = new_gender;
	},

	set_name: function(new_name) {
		this.name = new_name;
	},

	export_json: function() {
		export_object = {
			name: this.name,
			description: this.description,
			gender: this.gender,
			attributes : {
				agility : this.attributes.agility,
				smarts : this.attributes.smarts,
				spirit : this.attributes.spirit,
				strength : this.attributes.strength,
				vigor : this.attributes.vigor
			},
			race : this.race.name,
			edges: Array(),
			hindrances: Array(),
			perks: Array(),
			skills: Array()
		}

		if(this.selected_edges.length > 0) {
			for(get_all_edges_count = 0; get_all_edges_count < this.selected_edges.length; get_all_edges_count++ ) {
				current_edge = this.selected_edges[get_all_edges_count];
				if(current_edge)
					export_object.edges.push( current_edge.name );
			}
		}

		if(this.selected_perks.length > 0) {
			for(get_all_perks_count = 0; get_all_perks_count < this.selected_perks.length; get_all_perks_count++ ) {
				current_perk = this.selected_perks[get_all_perks_count];
				if(current_perk)
					export_object.perks.push( current_perk.short_name );
			}
		}

		if(this.selected_hindrances.length > 0) {
			for(get_all_hindrances_count = 0; get_all_hindrances_count < this.selected_hindrances.length; get_all_hindrances_count++ ) {
				current_hindarance = this.selected_hindrances[get_all_hindrances_count];
				if(current_hindarance) {
					hindrance_name = current_hindarance.name;
					if(current_hindarance.major > 0)
						hindrance_name += " (major)";
					if(current_hindarance.minor > 0)
						hindrance_name += " (minor)";

					export_object.hindrances.push( {
						name: hindrance_name,
						specify: current_hindarance.specify_text
					} );
				}
			}
		}

		return JSON.stringify(export_object);
	},



	import_json: function( import_string ) {
		try {
			import_string = stripslashes(import_string);
			imported_object = JSON.parse(import_string);
		}
		catch(e) {
			// JSON Import error
			return false;
		}

		if(typeof imported_object =='object') {
			this.reset();

			this.set_name( imported_object.name );
			this.set_gender( imported_object.gender );
			this.set_description( imported_object.description );

			this.set_race(imported_object.race);
			this.set_attribute("agility",imported_object.attributes.agility);
			this.set_attribute("smarts",imported_object.attributes.smarts);
			this.set_attribute("spirit",imported_object.attributes.spirit);
			this.set_attribute("strength",imported_object.attributes.strength);
			this.set_attribute("vigor",imported_object.attributes.vigor);

			if( imported_object.edges ) {
				for( import_edge_counter = 0; import_edge_counter < imported_object.edges.length; import_edge_counter++)
					this.add_edge( imported_object.edges[import_edge_counter] );
			}

			if( imported_object.perks ) {
				for( import_perk_counter = 0; import_perk_counter < imported_object.perks.length; import_perk_counter++)
					this.add_perk( imported_object.perks[import_perk_counter] );
			}

			if( imported_object.hindrances ) {
				for( import_hindrance_counter = 0; import_hindrance_counter < imported_object.hindrances.length; import_hindrance_counter++) {
					if( !imported_object.hindrances[import_hindrance_counter].specify )
						imported_object.hindrances[import_hindrance_counter].specify = "";
					this.add_hindrance( imported_object.hindrances[import_hindrance_counter].name, imported_object.hindrances[import_hindrance_counter].specify );
				}
			}

			return true;
		}

		return false;
	},

}