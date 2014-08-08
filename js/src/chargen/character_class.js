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

		// Attributes..
		this.attributes = {
			agility : 1,
			smarts : 1,
			spirit : 1,
			strength : 1,
			vigor : 1
		};

	},

	reset: function() {
		this.init();
	},

	calculate: function() {

	},

	set_attribute: function(attribute_name, new_value) {
		if(this.attributes[attribute_name]) {
			this.attributes[attribute_name] = new_value / 1;
		}
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
				agility : this.attributes.agility - this.race.attributes.agility,
				smarts : this.attributes.smarts - this.race.attributes.smarts,
				spirit : this.attributes.spirit - this.race.attributes.spirit,
				strength : this.attributes.strength - this.race.attributes.strength,
				vigor : this.attributes.vigor - this.race.attributes.vigor
			},
			race : this.race.name,
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

			return true;
		}

		return false;
	},


}