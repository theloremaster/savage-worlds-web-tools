var character_class = function() {};
character_class.prototype = {

	init: function() {

		// Fluff
		this.name = "";
		this.race = chargen_races[0];
		this.gender = "";
		this.description = "";

		this.bennies = 0;

		this.attribute_points = 5;
		this.skill_points = 15;

		this.arcane_background = 0;
		this.arcane_background_selected = "";
		this.powers_available = 0;
		this.power_points_available = 0;
		this.selected_powers = Array();

		this.selected_edges = Array();
		this.selected_hindrances = Array();
		this.selected_perks = Array();
		this.selected_skills = Array();


		this.edges_available = 0;
		this.perks_available = 0;
		this.creation_completed = false;

		this.rank = 0; // novice ;)
		this.wild_card = 1; // currently always a wild card
		this.xp = 0;
		this.selected_advancements = Array();
		this.available_advancements = 0;

		// Attributes..
		this.attributes = {
			agility : 1,
			smarts : 1,
			spirit : 1,
			strength : 1,
			vigor : 1
		};

		// Attributes..
		this.attributes_alloc = {
			agility : 0,
			smarts : 0,
			spirit : 0,
			strength : 0,
			vigor : 0
		};

		// Derived Stats..
		this.derived = {
			charisma : 0,
			pace : 0,
			toughness : 0,
			parry : 2,
			size: 1
		};

		this.starting_funds = 500;
		this.base_starting_funds = 500;
		this.current_funds = 0;
		this.selected_gear = Array();

		this.is_valid = true;
		this.validity_messages = Array();
	},

	reset: function() {
		this.init();
	},

	calculate: function() {
		this.attribute_points = 5;
		this.skill_points = 15;

		this.starting_funds = this.base_starting_funds;

		this.is_valid = true;

		if( this.wild_card > 0)
			this.bennies = 3;
		else
			this.bennies = 0;

		this.arcane_background = 0;
		this.powers_available = 0;
		this.power_points_available = 0;

		if(this.gender == "")
			this.gender = "Male";

		this.cost_to_raise = {
			agility : 1,
			smarts : 1,
			spirit : 1,
			strength : 1,
			vigor : 1
		};

		// Attributes..
		this.derived = {
			charisma : 0,
			pace : 0,
			toughness : 0,
			parry : 2,
			size: 1
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

		this.derived.toughness = 0;

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

		for(skill_counter = 0; skill_counter < this.selected_skills.length; skill_counter++){
			double_cost = 0;
			single_cost = 0;
			if( this.selected_skills[skill_counter].value > this.attributes[this.selected_skills[skill_counter].attribute]) {
				double_cost = this.selected_skills[skill_counter].value - this.attributes[this.selected_skills[skill_counter].attribute];
				single_cost = this.selected_skills[skill_counter].value - double_cost;
			}  else {
				single_cost = this.selected_skills[skill_counter].value;
			}
			this.skill_points -= (single_cost + double_cost * 2);
		}

		this.attributes.agility = this.attributes_alloc.agility;
		this.attributes.smarts = this.attributes_alloc.smarts;
		this.attributes.spirit = this.attributes_alloc.spirit;
		this.attributes.strength = this.attributes_alloc.strength;
		this.attributes.vigor = this.attributes_alloc.vigor;

		this.attribute_points = this.attribute_points - (this.attributes.agility - 1) * this.cost_to_raise.agility;
		this.attribute_points = this.attribute_points - (this.attributes.smarts - 1) * this.cost_to_raise.smarts;
		this.attribute_points = this.attribute_points - (this.attributes.spirit - 1) * this.cost_to_raise.spirit;
		this.attribute_points = this.attribute_points - (this.attributes.strength - 1) * this.cost_to_raise.strength;
		this.attribute_points = this.attribute_points - (this.attributes.vigor - 1) * this.cost_to_raise.vigor;

		// Racial Attribute Price Adjustments
		this.attributes.agility += this.race.attributes.agility;
		this.attributes.smarts += this.race.attributes.smarts;
		this.attributes.spirit += this.race.attributes.spirit;
		this.attributes.strength += this.race.attributes.strength;
		this.attributes.vigor += this.race.attributes.vigor;

		// Calculate secondary Attributes
		this.derived.pace = 6;

		if(this.attributes.vigor == 1) // d4
			this.derived.toughness += 4;
		if(this.attributes.vigor == 2) // d6
			this.derived.toughness += 5;
		if(this.attributes.vigor == 3) // d8
			this.derived.toughness += 6;
		if(this.attributes.vigor == 4) // d10
			this.derived.toughness += 7;
		if(this.attributes.vigor == 5) // d12
			this.derived.toughness += 8;
		if(this.attributes.vigor > 5) // d12
			this.derived.toughness += 8 + this.attributes.vigor - 5;

		this.racial_edges.sort();
		this.racial_hindrances.sort();

		minor_perks_selected = 0;
		major_perks_selected = 0;
		this.perks_available = 0;

		this.selected_edges.sort(
			function(a, b)
			{
				var nameA = a.name.toLowerCase();
				var nameB = b.name.toLowerCase();
				return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
			}
		);

		this.selected_hindrances.sort(
			function(a, b)
			{
				var nameA = a.name.toLowerCase();
				var nameB = b.name.toLowerCase();
				return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
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
				this.edges_available--;
				if( current_edge.char_effects )
					current_edge.char_effects( this );
			}
		}

		if( this.arcane_background > 0 ) {
			if(this.arcane_background_selected) {
				if(this.arcane_background_selected.power_points)
					this.power_points_available += this.arcane_background_selected.power_points;
				if(this.arcane_background_selected.starting_powers)
					this.powers_available += this.arcane_background_selected.starting_powers;

				this.powers_available -= this.selected_powers.length;
			}
		} else {
			// remove any arcane items
			this.arcane_background_selected = "";
			this.selected_powers = Array();
		}


		// calculate parry
		this.derived.parry = 2;
		if(this.has_skill("Fighting")) {
			fighting_skill = this.get_skill("Fighting");
			if(fighting_skill.value == 1) // d4
				this.derived.parry = 3;
			if(fighting_skill.value == 2) // d6
				this.derived.parry = 5;
			if(fighting_skill.value == 3) // d8
				this.derived.parry = 6;
			if(fighting_skill.value == 4) // d10
				this.derived.parry = 7;
			if(fighting_skill.value == 5) // d12
				this.derived.parry = 8;

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


		/* Advancements */
		if( this.is_complete() ) {

			if(this.xp < 20 ) {
				this.rank = 0; // novice
			} else {
				if (this.xp <= 20 && this.xp < 40 ) {
					this.rank = 1; // seasoned
				} else
				{
					if (this.xp <= 40 && this.xp < 60) {
						this.rank = 2; // veteran
					} else
					{
						if ( this.xp <= 60 && this.xp < 80  ) {
							this.rank = 3; // heroic
						} else
						{
							this.rank = 4; // legen---waitforit--dary
						}
					}
				}
			}

			// this.selected_advancements;
			this.available_advancements = Math.floor(this.xp / 5);

			// TODO - run through advancements, make effects on character

		} else {
			//reset xp and advancements and rank to 0
			this.xp = 0;
			this.rank = 0;
			this.selected_advancements = Array();
		}

		/* Equipment */
		this.current_funds = this.starting_funds;
		for( eq_count = 0; eq_count < this.selected_gear.length; eq_count++) {
			this.current_funds -= this.selected_gear[eq_count].cost * this.selected_gear[eq_count].count;
		}

	},


	set_base_starting_funds: function (new_value) {
		new_value = new_value / 1;
		if( new_value == 0 )
			new_value = 500;
		this.base_starting_funds = new_value;
	},

	set_xp: function ( new_value ) {
		this.xp = new_value / 1;
	},

	set_skill: function(skill_name, new_value) {

		if(skill_name.indexOf(":") > -1) {
			skill_base_name = skill_name.substring(0, skill_name.indexOf(":") ).trim();
			skill_specify_name = skill_name.substring(skill_name.indexOf(":") +1).trim();
		} else {
			skill_base_name = skill_name.trim();
			skill_specify_name = "";
		}

		// if value = 0 remove it entirely
		if(new_value == 0) {
			this.remove_skill(skill_base_name, skill_specify_name);
		} else {
			// if skill is not listed in the selected_skills list, add it
			if( !this.has_skill(skill_base_name, skill_specify_name) ) {
				var new_skill = this.get_raw_skill(skill_base_name);
				if( new_skill.name ) {
					if(skill_specify_name != "")
						new_skill.specify_text = skill_specify_name;
					new_skill.value = new_value;
					this.selected_skills.push( new_skill );
					return true;
				} else {
					return false;
				}
			} else {
				// set the value to requested value
				for(set_skill_counter = 0; set_skill_counter < this.selected_skills.length; set_skill_counter++) {
					if(skill_specify_name == "") {

						if( this.selected_skills[set_skill_counter].name.toLowerCase().trim() == skill_base_name.toLowerCase().trim()) {
							this.selected_skills[set_skill_counter].value = new_value;
							return true;
						}
					} else {

						if( this.selected_skills[set_skill_counter].name.toLowerCase().trim() == skill_base_name.toLowerCase().trim()) {
							if( this.selected_skills[set_skill_counter].specify_text.toLowerCase().trim() == skill_specify_name.toLowerCase().trim()) {
								this.selected_skills[set_skill_counter].value = new_value;
								return true;
							}
						}
					}
				}
			}
		}

		return false;
	},


	is_incompatible_with: function ( edge_object ){
		if( edge_object.incompatible) {

			if( edge_object.incompatible.edges ) {

				for(is_incompatible_with_counter = 0; is_incompatible_with_counter < edge_object.incompatible.edges.length; is_incompatible_with_counter++) {
					if( this.has_edge( edge_object.incompatible.edges[is_incompatible_with_counter] )) {
						return true;
					}
				}
	//			return false;
			}
			if( edge_object.incompatible.hindrances ) {
				for(is_incompatible_with_counter = 0; is_incompatible_with_counter < edge_object.incompatible.hindrances.length; is_incompatible_with_counter++) {
					if( this.has_hindrance( edge_object.incompatible.hindrances[is_incompatible_with_counter] )) {
						return true;

					}
				}
	//			return false;
			}
		}
		return false;
	},

	get_raw_skill: function(skill_name) {
		for(get_raw_skill_counter = 0; get_raw_skill_counter < chargen_skills.length; get_raw_skill_counter++) {
			if( chargen_skills[get_raw_skill_counter].name.toLowerCase().trim() == skill_name.toLowerCase().trim())
				return clone_object( chargen_skills[get_raw_skill_counter] );
		}

		if( this.arcane_background_selected ) {
			return clone_object( this.arcane_background_selected.skill );
		}
		return false;
	},

	get_skill: function(skill_name) {
		for(get_skill_counter = 0; get_skill_counter < this.selected_skills.length; get_skill_counter++) {
			if( this.selected_skills[get_skill_counter].name.toLowerCase().trim() == skill_name.toLowerCase().trim())
				return this.selected_skills[get_skill_counter];
		}
	},

	get_skills_of: function(skill_name) {

		return_value = Array();
		for(get_skill_counter = 0; get_skill_counter < this.selected_skills.length; get_skill_counter++) {
			if( this.selected_skills[get_skill_counter].name.toLowerCase().trim() == skill_name.toLowerCase().trim())
				return_value.push(  this.selected_skills[get_skill_counter] );
		}

		return_value.sort(
			function(a, b)
			{
				var nameA = a.name.toLowerCase();
				var nameB = b.name.toLowerCase();
				return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
			}
		);

		return return_value;
	},

	has_skill: function(skill_name, skill_specify_name) {
		for(has_skill_counter = 0; has_skill_counter < this.selected_skills.length; has_skill_counter++) {
			if(skill_specify_name) {
				if( this.selected_skills[has_skill_counter].name.toLowerCase().trim() == skill_name.toLowerCase().trim()) {
					if( this.selected_skills[has_skill_counter].specify_text.toLowerCase().trim() == skill_specify_name.toLowerCase().trim()) {
						return true;
					}
				}
			} else {
				if( this.selected_skills[has_skill_counter].name.toLowerCase().trim() == skill_name.toLowerCase().trim()) {
					return true;
				}
			}

		}

		return false;
	},

	remove_skill: function(skill_name, skill_specify_name ) {
		for(remove_skill_counter = 0; remove_skill_counter < this.selected_skills.length; remove_skill_counter++) {
			if(skill_specify_name) {
				if( this.selected_skills[remove_skill_counter].name.toLowerCase().trim() == skill_name.toLowerCase().trim()) {
					if( this.selected_skills[remove_skill_counter].specify_text.toLowerCase().trim() == skill_specify_name.toLowerCase().trim()) {
						this.selected_skills.splice(remove_skill_counter, 1);
					}
				}
			} else {
				if( this.selected_skills[remove_skill_counter].name.toLowerCase().trim() == skill_name.toLowerCase().trim()) {
					this.selected_skills.splice(remove_skill_counter, 1);
				}
			}

		}

	},

	set_attribute: function(attribute_name, new_value) {
		attribute_name = attribute_name.toLowerCase().trim();
		if(new_value == "")
			new_value = 0;
		new_value = new_value / 1;
		if( new_value == 0)
			new_value = 1;

		if(typeof(this.attributes_alloc[attribute_name]) != "undefined") {
			this.attributes_alloc[attribute_name] = new_value;
		}
	},

	has_edge: function( edge_name, retakable, this_rank_only ) {

		if( !retakable )
			retakable = false;
		if( !this_rank_only )
			this_rank_only = false;

		if( edge_name ) {
			if(this.race.edges_included) {
				if( this.racial_edges)
					for(get_all_edges_count = 0; get_all_edges_count < this.racial_edges.length; get_all_edges_count++ )
						if( this.racial_edges[get_all_edges_count].name.toLowerCase().trim() == edge_name.toLowerCase().trim() )
							return true;
			}

			if(this.selected_edges.length > 0) {
				for(get_all_edges_count = 0; get_all_edges_count < this.selected_edges.length; get_all_edges_count++ ) {
					current_edge = this.selected_edges[get_all_edges_count];
					if(current_edge) {
						if(retakable && this_rank_only) {

							if( current_edge.name.toLowerCase().trim() == edge_name.toLowerCase().trim() ){
								if( current_edge.selected_rank == this.rank ) {
									return true;
								}
							}

						} else {
							if( current_edge.name.toLowerCase().trim() == edge_name.toLowerCase().trim() ) {
								if(!retakable)
									return true;
							}
						}
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
					if( this.racial_hindrances[get_all_hindrances_count].name.toLowerCase().trim() == hindrance_name.toLowerCase().trim() )
						return true;
			}

			if(this.selected_hindrances.length > 0) {
				for(get_all_hindrances_count = 0; get_all_hindrances_count < this.selected_hindrances.length; get_all_hindrances_count++ ) {
					current_hindarance = this.selected_hindrances[get_all_hindrances_count];
					if(current_hindarance) {
						if( current_hindarance.name.toLowerCase().trim() == hindrance_name.toLowerCase().trim() )
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
				if(edge_name.toLowerCase().trim() == chargen_edges[edge_counter].name.toLowerCase().trim() )
					return chargen_edges[edge_counter];
			}
		}
		return 0;
	},

	set_arcane_bg: function( background_shortname ) {
		return_value = false
		for(set_arcane_count = 0; set_arcane_count < chargen_arcane_backgrounds.length; set_arcane_count++) {
			if( chargen_arcane_backgrounds[set_arcane_count].short_name == background_shortname ) {

				this.arcane_background_selected = chargen_arcane_backgrounds[set_arcane_count];
				return_value = true;
			}

			if( background_shortname != chargen_arcane_backgrounds[set_arcane_count].short_name ) {
				//remove any other arcane skills to restore skill points
				if(chargen_arcane_backgrounds[set_arcane_count].skill)
					this.remove_skill( chargen_arcane_backgrounds[set_arcane_count].skill.name );
			}
		}
		return return_value;
	},

	add_power: function( power_shortname, trapping, description ) {

		for( add_power_counter = 0; add_power_counter < chargen_powers.length; add_power_counter++ ) {
			if( power_shortname.toLowerCase().trim() == chargen_powers[add_power_counter].short_name.toLowerCase().trim() ) {
				new_power = clone_object( chargen_powers[add_power_counter] );
				new_power.description = description;
				new_power.trapping = trapping;
				this.selected_powers.push(new_power);
				return true;
			}
		}
		return false;
	},


	add_advancement: function( short_name, option1, option2) {
		if( !option1 )
			option1 = "";
		if( !option2 )
			option2 = "";

		for(add_advancement_count = 0; add_advancement_count < chagen_advancements.length; add_advancement_count++) {
			if(chagen_advancements[add_advancement_count].short_name.toLowerCase().trim == short_name.toLowerCase().trim() ) {
				new_advancement = clone_object( chagen_advancements[add_advancement_count] );
				new_advancement.option1 = option1;
				new_advancement.option1 = option2;
				this.selected_advancements.push( new_advancement );
			}
		}
	},

	remove_power: function( power_shortname, trapping ) {
		if(!trapping)
			trapping= "";
		if(power_shortname) {
			found_index = -1;
			for( remove_power_counter = 0; remove_power_counter < this.selected_powers.length; remove_power_counter++ ) {
				if(this.selected_powers[remove_power_counter] && this.selected_powers[remove_power_counter].short_name) {
					if(power_shortname.toLowerCase().trim() == this.selected_powers[remove_power_counter].short_name.toLowerCase().trim() ) {
						// double check trapping match just in case there are multiple powers of same type
						if( trapping != "" && this.selected_powers[remove_power_counter].trapping ){
							if(trapping.toLowerCase().trim() == this.selected_powers[remove_power_counter].trapping.toLowerCase().trim() ) {
								this.selected_powers.splice(found_index, 1);
								return true;
							}
						} else {
							this.selected_powers.splice(found_index, 1);
							return true;
						}
					}
				}
			}
		}
		return false;
	},

	remove_edge: function( edge_name ) {
		if(edge_name) {
			for( edge_counter = 0; edge_counter < this.selected_edges.length; edge_counter++ ) {
				if(this.selected_edges[edge_counter] && this.selected_edges[edge_counter].name) {
					if(edge_name.toLowerCase().trim() == this.selected_edges[edge_counter].name.toLowerCase().trim() ) {
						this.selected_edges.splice(edge_counter, 1);
						return true;
					}
				}
			}
		}

		return false;
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
					if(hindrance_name.toLowerCase().trim() == this.selected_hindrances[hindrance_counter].name.toLowerCase().trim() ) {
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
					if(hindrance_name.toLowerCase().trim() == chargen_hindrances[hindrance_counter].name.toLowerCase().trim())
						return chargen_hindrances[hindrance_counter];
				}
			}
		}
		return 0;
	},

	add_edge: function(edge_name, during_rank) {
		if(!during_rank)
			during_rank = 0;
		if(edge_name) {
			for( edge_counter = 0; edge_counter < chargen_edges.length; edge_counter++ ) {
				if(edge_name.toLowerCase().trim() == chargen_edges[edge_counter].name.toLowerCase().trim() ) {
					found_edge = clone_object( chargen_edges[edge_counter] );
					found_edge.selected_rank = during_rank;
					this.selected_edges.push( found_edge );
					return found_edge;
				}
			}
		}
		return 0;
	},

	power_available: function ( power_object ) {

		if( power_object.rank ) {

			if( power_object.rank > 0 ) {
				if( power_object.rank > this.rank )
					return false;
			}
		}

		return true;

	},

	edge_available: function ( edge_object ){
		return_value = true;
	 	if( edge_object.prereqs ) {

			if( edge_object.prereqs.rank ) {

				if( edge_object.prereqs.rank > 0 ) {
					if( edge_object.prereqs.rank > this.rank )
						return false;
				}
			}

			if( edge_object.prereqs.wild_card ) {
				if( edge_object.prereqs.wild_card > 0 ) {
					if( this.wild_card == 0 )
						return false;
				}
			}

			if( edge_object.prereqs.arcane_background ) {
				if( edge_object.prereqs.arcane_background > 0 ) {
					if(  this.arcane_background == 0 )
						return false;

					if( edge_object.prereqs.arcane_background_selected ) {
						if( edge_object.prereqs.arcane_background_selected != ""  && this.arcane_background_selected.short_name ) {
							if( edge_object.prereqs.arcane_background_selected.toLowerCase().trim() != this.arcane_background_selected.short_name.toLowerCase().trim() )
								return false;
						}
					}
				}
			}

			if( edge_object.prereqs.edges ) {
				return_value = false;
				for(edge_available_counter = 0; edge_available_counter < edge_object.prereqs.edges.length; edge_available_counter++) {
					if( this.has_edge( edge_object.prereqs.edges[edge_available_counter] )) {
						return_value = true;
					}
				}

				if(return_value == false)
					return false;

			}

			if( edge_object.prereqs.attributes ) {
				return_value = false;
				if( edge_object.prereqs.attributes.agility ) {
					if( this.attributes.agility >= edge_object.prereqs.attributes.agility)
						return_value = true;
				}

				if( edge_object.prereqs.attributes.smarts ) {
					if( this.attributes.smarts >= edge_object.prereqs.attributes.smarts)
						return_value = true;
				}

				if( edge_object.prereqs.attributes.spirit ) {
					if( this.attributes.spirit >= edge_object.prereqs.attributes.spirit)
						return_value = true;
				}

				if( edge_object.prereqs.attributes.strength ) {
					if( this.attributes.strength >= edge_object.prereqs.attributes.strength)
						return_value = true;
				}

				if( edge_object.prereqs.attributes.vigor ) {
					if( this.attributes.vigor >= edge_object.prereqs.attributes.vigor)
						return_value = true;
				}

				if(return_value == false)
					return false;
			}

			if( edge_object.prereqs.skills ) {
				if(edge_object.prereqs.skills.length > 0 ) {
					return_value = false;
					for(edge_available_skill_counter = 0;edge_available_skill_counter < edge_object.prereqs.skills.length ; edge_available_skill_counter++ ) {
						if( edge_object.prereqs.skills[edge_available_skill_counter].name ) {

							// Check for an "Or" skill, like Trademark Weapon ;)
							if( edge_object.prereqs.skills[edge_available_skill_counter].name.indexOf("||") > 0) {
								items = edge_object.prereqs.skills[edge_available_skill_counter].name.split("||");
								for(itemcount = 0; itemcount < items.length; itemcount++ ) {
									verify_skill = this.get_skill( items[itemcount] );
									if( verify_skill && verify_skill.value >= edge_object.prereqs.skills[edge_available_skill_counter].required) {
										return_value = true;
									}
								}
							} else {
								// see if the character's skills are up to snuff
								verify_skill = this.get_skill( edge_object.prereqs.skills[edge_available_skill_counter].name );
								if( verify_skill && verify_skill.value >= edge_object.prereqs.skills[edge_available_skill_counter].required) {
									return_value = true;
								}

							}

						}
					}

					if(return_value == false)
						return false;
				}
			}

		}

		return return_value;
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
				if( chargen_perks[add_perk_counter].short_name.toLowerCase().trim() == perk_short_name.toLowerCase().trim() ) {
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
			if(hindrance_name.toLowerCase().trim() == chargen_hindrances[hindrance_counter].name.toLowerCase().trim()) {
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
	is_complete: function() {
		return this.creation_completed;
	},

	export_json: function(selector_name) {
		export_object = {
			name: this.name,
			description: this.description,
			gender: this.gender,
			attributes : {
				agility : this.attributes.agility - this.race.attributes.agility,
				smarts : this.attributes.smarts - this.race.attributes.smarts,
				spirit : this.attributes.spirit - this.race.attributes.spirit,
				strength : this.attributes.strength - this.race.attributes.strength,
				vigor : this.attributes.vigor - this.race.attributes.vigor
			},
			race : this.race.name,
			complete: 0,
			starting_funds: this.base_starting_funds,
			edges: Array(),
			hindrances: Array(),
			advancements: Array(),
			perks: Array(),
			skills: Array(),
			gear: Array(),
			arcane: {
				type : this.arcane_background_selected.short_name,
				powers: Array()
			}
		}

		if(this.creation_completed == true)
			export_object.complete = 1;

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

		if(this.selected_powers.length > 0) {
			for(get_all_powers_count = 0; get_all_powers_count < this.selected_powers.length; get_all_powers_count++ ) {
				current_power = this.selected_powers[get_all_powers_count];
				if(current_power) {
					export_power = {
						short: current_power.short_name,
						trap: current_power.trapping,
						desc: current_power.description,
					}
					export_object.arcane.powers.push( export_power );
				}
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

		export_object.wild_card = this.wild_card;
		export_object.xp = this.xp;

		if(this.selected_skills.length > 0) {

			for(get_skills_count = 0; get_skills_count < this.selected_skills.length; get_skills_count++ ) {
				if( this.selected_skills[get_skills_count].specify_text && this.selected_skills[get_skills_count].specify_text != "" ) {
					export_skill = {
						name: this.selected_skills[get_skills_count].name + ": " + this.selected_skills[get_skills_count].specify_text,
						value: this.selected_skills[get_skills_count].value
					}
				} else {
					export_skill = {
						name: this.selected_skills[get_skills_count].name,
						value: this.selected_skills[get_skills_count].value
					}
				}

				export_object.skills.push( export_skill );
			}
		}

		if(this.selected_advancements.length > 0) {
			for(get_advancements_count = 0; get_advancements_count < this.selected_advancements.length; get_advancements_count++ ) {
				export_advancement = {
					name: this.selected_advancements[get_advancements_count].short_name,
					opt1: this.selected_advancements[get_advancements_count].option1,
					opt2: this.selected_advancements[get_advancements_count].option2
				}

				export_object.advancements.push( export_advancement );
			}
		}

		if(this.selected_gear.length > 0) {
			for(gear_count = 0; gear_count < this.selected_gear.length; gear_count++ ) {
				export_gear = {
					name: this.selected_gear[gear_count].name,
					cost: this.selected_gear[gear_count].cost,
					count: this.selected_gear[gear_count].count
				}

				export_object.gear.push( export_gear );
			}
		}

		export_string = JSON.stringify(export_object)
		if(selector_name)
			$(selector_name).val(export_string);

		return export_string;
	},

	set_wild_card: function( new_value ) {
		this.wild_card = new_value / 1;
	},

	set_xp: function( new_value ) {
		this.xp = new_value / 1;
	},

	export_bbcode: function(selector_name) {

		html_return = this.export_html(false);

		while(html_return.indexOf("<br />") > -1)
			html_return = html_return.replace("<br />", "\n");
		while(html_return.indexOf("<h3>") > -1)
			html_return = html_return.replace("<h3>", "[size=18]");
		while(html_return.indexOf("</h3>") > -1)
			html_return = html_return.replace("</h3>", "[/size]");

		while(html_return.indexOf("<strong>") > -1)
			html_return = html_return.replace("<strong>", "[b]");
		while(html_return.indexOf("</strong>") > -1)
			html_return = html_return.replace("</strong>", "[/b]");

		while(html_return.indexOf("<em>") > -1)
			html_return = html_return.replace("<em>", "[i]");
		while(html_return.indexOf("</em>") > -1)
			html_return = html_return.replace("</em>", "[/i]");



		while(html_return.indexOf("8)") > -1)
			html_return = html_return.replace("8)", " 8 )");

		if(selector_name)
			$(selector_name).val( html_return );

		return html_return;
	},

	add_gear: function( gear_name, gear_cost, gear_count ) {

		if(!gear_count)
			gear_count = 1;

		gear_count = gear_count / 1;




		for( gear_counter = 0; gear_counter < this.selected_gear.length; gear_counter++) {
			if( this.selected_gear[gear_counter].name.trim().toLowerCase() == gear_name.trim().toLowerCase() )  {
				this.selected_gear[gear_counter].count += gear_count;
				return this.selected_gear[gear_counter];
			}
		}

		gear_cost = gear_cost / 1;

		for( gear_counter = 0; gear_counter < chargen_gear.length; gear_counter++) {
			if(gear_name.trim().toLowerCase() == chargen_gear[gear_counter].name.trim().toLowerCase() ) {
				gear_object = clone_object(chargen_gear[gear_counter])
				gear_object.count = gear_count;
			}
		}

		if( !gear_object ) {
			gear_object = {
				name: gear_name,
				cost: gear_cost,
				count: gear_count
			};
		}


		this.selected_gear.push( gear_object );
		return gear_object;
	},

	remove_gear: function( gear_index ) {
		// TODO add_gear
		gear_index = gear_index / 1;

		if( this.selected_gear[gear_index] ) {
			if( this.selected_gear[gear_index].count > 1 ) {
				this.selected_gear[gear_index].count--;
				return true;
			} else {
				if( this.selected_gear[gear_index].count < 2 ) {
					this.selected_gear.splice(gear_index, 1);
					return true;
				}
			}
		}
		return false;
	},

	export_html: function(selector_name) {

		html_return = "<strong><h3>" +  this.name + "</h3></strong><br />";
		html_return += this.race.name + " " + this.gender + " - <em>" +  chargen_ranks[this.rank] + " ( " + this.xp + " xp)</em><br />";
		html_return += "" +  this.description + "<br />";

		html_return += "<strong>Attributes</strong>: ";
		html_return += "Agility " + attribute_labels[this.attributes.agility];
		html_return += ", Smarts " + attribute_labels[this.attributes.smarts];
		html_return += ", Spirit " + attribute_labels[this.attributes.spirit];
		html_return += ", Strength " + attribute_labels[this.attributes.strength];
		html_return += ", Vigor " + attribute_labels[this.attributes.vigor];
		html_return += "<br />";

		html_return += "<strong>Pace</strong>: " + this.derived.pace;
		html_return += ", <strong>Parry</strong>: " + this.derived.parry;

		if(this.armor && this.armor > 0) {
			html_return += ", <strong>Toughness</strong>: " + this.derived.toughness + this.armor;
			html_return += "(" + this.armor + ")";
		} else {
			html_return += ", <strong>Toughness</strong>: " + this.derived.toughness;
		}

		if(this.derived.charisma > 0)
			html_return += ", <strong>Charisma</strong>: " + this.derived.charisma;


		html_return += "<br />";

		if(this.selected_skills.length > 0 ) {
			html_return += "<strong>Skills</strong>: ";
			for(sk_c = 0; sk_c < this.selected_skills.length; sk_c++) {
				if(sk_c > 0)
					html_return += ", ";
				if(this.selected_skills[sk_c].specify_text && this.selected_skills[sk_c].specify_text != "")
					html_return += this.selected_skills[sk_c].name + " (" + this.selected_skills[sk_c].specify_text + ")";
				else
					html_return += this.selected_skills[sk_c].name;
				html_return += " " + attribute_labels[this.selected_skills[sk_c].value]
			}
			html_return += "<br />";
		}


		current_edges = this.get_all_edges();
		if(current_edges.length > 0 ) {
			html_return += "<strong>Edges</strong>: ";
			for(sk_c = 0; sk_c < current_edges.length; sk_c++) {
				if(sk_c > 0)
					html_return += ", ";
				html_return += current_edges[sk_c];

			}
			html_return += "<br />";
		}



		current_hindrances = this.get_all_hindrances();
		if(current_hindrances.length > 0) {
			html_return += "<strong>Hindrances</strong>: ";
			for(sk_c = 0; sk_c < current_hindrances.length; sk_c++) {
				if(sk_c > 0)
					html_return += ", ";
				html_return += current_hindrances[sk_c];
			}
			html_return += "<br />";
		}



		if( this.arcane_background > 0 ) {
			html_return += "<strong>Arcane Background</strong>: " + this.arcane_background_selected.name + "<br />\n";
			html_return += "<strong>Power Points</strong>: " + this.power_points_available + "<br />\n";
			html_return += "<strong>Powers</strong>: ";
			for(sk_c = 0; sk_c < this.selected_powers.length; sk_c++) {
				if(sk_c > 0)
					html_return += ", ";
				if( this.selected_powers[sk_c].description != "") {
					html_return += this.selected_powers[sk_c].description + " (" + this.selected_powers[sk_c].name;
						if( this.selected_powers[sk_c].trapping != "" )
							html_return += ", " + this.selected_powers[sk_c].trapping  + ")";
						else
							html_return += ")";

				} else {
					if( this.selected_powers[sk_c].trapping != "" )
						html_return += this.selected_powers[sk_c].name + " (" + this.selected_powers[sk_c].trapping  + ")";
					else
						html_return += this.selected_powers[sk_c].name;
				}
			}
			html_return += "<br />";
		}


		if(this.selected_gear.length > 0 ) {
			html_return += "<strong>Gear</strong>: ";
			for(sk_c = 0; sk_c < this.selected_gear.length; sk_c++) {
				if(sk_c > 0)
					html_return += ", ";
				if( this.selected_gear[sk_c].count > 1 )
					html_return += this.selected_gear[sk_c].name + " x" + this.selected_gear[sk_c].count;
				else
					html_return += this.selected_gear[sk_c].name;

			}
			html_return += "<br />";
		}

		html_return = html_return.replace("8)", " 8 )");

		if(selector_name)
			$(selector_name).val(html_return);

		return html_return;
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

			if( imported_object.starting_funds )
				this.set_base_starting_funds( imported_object.starting_funds );
			if( imported_object.wild_card )
				this.set_wild_card( imported_object.wild_card );
			else
				this.set_wild_card( 1 );

			if( imported_object.wild_card )
				this.set_xp( imported_object.xp );
			else
				this.set_xp( 0 );

			this.creation_completed = false;
			if( imported_object.complete )
				if( imported_object.complete > 0)
					this.creation_completed = true;

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

			if( imported_object.advancements ) {
				for( import_advancement_counter = 0; import_hindrance_counter < imported_object.advancements.length; import_advancement_counter++) {
					this.add_advancement (
						imported_object.advancements[import_advancement_counter].name,
						imported_object.advancements[import_hindrance_counter].opt1,
						imported_object.advancements[import_hindrance_counter].opt1
					);
				}
			}

			if( imported_object.arcane ) {

				if( imported_object.arcane.type && this.has_edge("Arcane Background")) {
					this.set_arcane_bg( imported_object.arcane.type );
					if( imported_object.arcane.powers.length > 0 ) {
						for( import_power_counter = 0; import_power_counter < imported_object.arcane.powers.length; import_power_counter++)
							this.add_power(
								imported_object.arcane.powers[import_power_counter].short,
								imported_object.arcane.powers[import_power_counter].trap,
								imported_object.arcane.powers[import_power_counter].desc
							);
					}
				}
			}

			if( imported_object.skills ) {
				for( import_skill_counter = 0; import_skill_counter < imported_object.skills.length; import_skill_counter++) {
					this.set_skill( imported_object.skills[import_skill_counter].name, imported_object.skills[import_skill_counter].value );
				}
			}

			if( imported_object.gear ) {
				for( import_gear_counter = 0; import_gear_counter < imported_object.gear.length; import_gear_counter++) {
					this.add_gear(
						imported_object.gear[import_gear_counter].name,
						imported_object.gear[import_gear_counter].cost,
						imported_object.gear[import_gear_counter].count
					);
				}
			}

			this.calculate();

			return true;
		}

		return false;
	},

}