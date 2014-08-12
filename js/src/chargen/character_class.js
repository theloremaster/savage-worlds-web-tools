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

	},

	reset: function() {
		this.init();
	},

	calculate: function() {
		this.attribute_points = 5;
		this.skill_points = 15;

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

//		this.selected_hindrances.sort();
//		this.selected_edges.sort();
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

		// Add Selected Edges
		for(selected_edges_counter = 0; selected_edges_counter < this.selected_edges.length; selected_edges_counter++) {
			current_edge = this.selected_edges[selected_edges_counter];
			if( current_edge ) {
				if( current_edge.char_effects )
					current_edge.char_effects( this );
			}
		}

	},

	set_attribute: function(attribute_name, new_value) {
		if(this.attributes[attribute_name]) {
			this.attributes[attribute_name] = new_value / 1;
		}
	},

	get_edge: function(edge_name) {
		for( edge_counter = 0; edge_counter < chargen_edges.length; edge_counter++ ) {
			if(edge_name.toLowerCase() == chargen_edges[edge_counter].name.toLowerCase())
				return chargen_edges[edge_counter];
		}
		return 0;
	},

	get_hindrance: function(hindrance_name) {
		for( hindrance_counter = 0; hindrance_counter < chargen_hindrances.length; hindrance_counter++ ) {
			if(hindrance_name.toLowerCase() == chargen_hindrances[hindrance_counter].name.toLowerCase())
				return chargen_hindrances[hindrance_counter];
		}
		return 0;
	},

	add_edge: function(edge_name) {
		for( edge_counter = 0; edge_counter < chargen_edges.length; edge_counter++ ) {
			if(edge_name.toLowerCase() == chargen_edges[edge_counter].name.toLowerCase()){
				this.selected_edges.push( chargen_edges[edge_counter] );
				return chargen_edges[edge_counter];
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
				current_hindarance = this.get_hindrance(this.selected_hindrances[get_all_hindrances_count]);
				if(current_hindarance) {
					if(current_hindarance.major > 0)
						selected_hindrances.push( current_hindarance.name + " (Major)");
					if(current_hindarance.minor > 0)
						selected_hindrances.push( current_hindarance.name + " (Minor)");
				}
			}
		}

		all_hindrances = racial_hindrances.concat(selected_hindrances);
		return all_hindrances;
	},

	add_hindrance: function(hindrance_name, specify_field_text) {
		look_for_major = false;
		look_for_minor = false;

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
			skills: Array()
		}

		if(this.selected_edges.length > 0) {
			for(get_all_edges_count = 0; get_all_edges_count < this.selected_edges.length; get_all_edges_count++ ) {
				current_edge = this.selected_edges[get_all_edges_count];
				if(current_edge)
					export_object.edges.push( current_edge.name );
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

			for( edge_counter = 0; edge_counter < imported_object.edges.length; edge_counter++)
				this.add_edge( imported_object.edges[edge_counter] );

			for( hindrance_counter = 0; hindrance_counter < imported_object.hindrances.length; hindrance_counter++) {
				this.add_hindrance( imported_object.hindrances[hindrance_counter].name, imported_object.hindrances[hindrance_counter].specify );
			}

			return true;
		}

		return false;
	},


}