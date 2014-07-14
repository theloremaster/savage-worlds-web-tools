/* Character Object */
var chargen_die_levels = Array( "4", "6", "8", "10", "12" );

var chargen_ranks = Array( "Novice", "Seasoned", "Veteran", "Heroic", "Legendary" );

var chargen_advancements = Array (
	{
		name: "Gain a new Edge.",
		short_name: "edge",
		char_effects: function (characterObject) {
			characterObject.edges_available++;
		}
	},
	{
		name: "Skill Points",
		short_name: "skill_points",
		char_effects: function (characterObject) {
			characterObject.skill_points++;
			characterObject.skill_points++;
		}
	},
	{
		name: "New Skill",
		short_name: "new_skill",
		char_effects: function (characterObject) {
			characterObject.skill_points++;
		}
	},
	{
		name: "Raise an Attribute",
		short_name: "attribute",
		cost: 2,
		char_effects: function (characterObject) {
			characterObject.attribute_points++;
		},
		once_per_rank: 1
	}
);
function chargen_char() {
	this.name = "";
	this.race = chargen_races[0];

	this.attributes = {
		agility: 0,
		smarts: 0,
		spirit: 0,
		strength: 0,
		vigor: 0
	}

	this.secondary = {
		charisma: 0,
		toughness: 0,
		parry: 0,
		pace: 0
	}

	this.perk_points = 0;
	this.power_points = 0;

	this.max_attributes = {
		agility: 4,
		smarts: 4,
		spirit: 4,
		strength: 4,
		vigor: 4
	}

	this.selected_attributes = {
		agility: 0,
		smarts: 0,
		spirit: 0,
		strength: 0,
		vigor: 0
	}

	this.cost_to_raise = {
		agility: 1,
		smarts: 1,
		spirit: 1,
		strength: 1,
		vigor: 1
	}

	this.perks_selected = Array();
	this.perks = Array();

	this.hindrances_major = 0;
	this.hindrances_minor = 0;

	this.starting_funds = 500;

	this.attribute_points = 5;
	this.skill_points = 15;
	this.bennies_total = 3;
	this.edges_available = 0;

	this.edges = Array(),
	this.hindrances = Array(),
	this.skills = Array(),

	this.edges_selected = Array();
	this.edges_racial = Array();
	this.hindrances_selected = Array();
	this.hindrances_racial = Array();

	this.powers_selected = Array();
	this.powers_racial = Array();

	this.set_race = set_race;
	function set_race(raceName) {
		for(raceCount = 0; raceCount < chargen_races.length; raceCount++) {
			if(raceName == chargen_races[raceCount].name) {
				this.race = chargen_races[raceCount];
				this.race.attributes = {
					agility: 0,
					smarts: 0,
					spirit: 0,
					strength: 0,
					vigor: 0
				};

				this.max_attributes = {
					agility: 4,
					smarts: 4,
					spirit: 4,
					strength: 4,
					vigor: 4
				};

				this.cost_to_raise = {
					agility: 1,
					smarts: 1,
					spirit: 1,
					strength: 1,
					vigor: 1
				};
			}
		}
	}

	this.set_name = set_name;
	function set_name(newName) {
		this.name = newName;
	}

	this.rank_is_at_least = rank_is_at_least;
	function rank_is_at_least(rankName) {
		rankLevel = this.get_rank(rankName);
		if(this.rank >= rankLevel)
			return true;
		else
			return false;
	}

	this.get_rank = get_rank;
	function get_rank(rankName) {

		for(get_rank_count = 0; get_rank_count < chargen_ranks.length; get_rank_count++) {
			if (chargen_ranks[get_rank_count].toLowerCase() == rankName.toLowerCase() ) {
				return get_rank_count;
			}
		}
		return -1;
	}

	this.set_rank = set_rank;
	function set_rank(rankName) {
		this.rank = this.get_rank(rankName);
	}

	this.qualifies_for = qualifies_for;
	function qualifies_for(edgeOrHindrance) {
		does_qualify = true;
		if( edgeOrHindrance.prereqs	) {

			if( edgeOrHindrance.prereqs.attributes) {
				if ( edgeOrHindrance.prereqs.attributes.agility )
					if( edgeOrHindrance.prereqs.attributes.agility > this.attributes.agility + this.race.attributes.agility )
						does_qualify = false;
				if ( edgeOrHindrance.prereqs.attributes.smarts )
					if( edgeOrHindrance.prereqs.attributes.smarts > this.attributes.smarts + this.race.attributes.smarts )
						does_qualify = false;
				if ( edgeOrHindrance.prereqs.attributes.spirit )
					if( edgeOrHindrance.prereqs.attributes.spirit > this.attributes.spirit + this.race.attributes.spirit )
						does_qualify = false;
				if ( edgeOrHindrance.prereqs.attributes.strength )
					if( edgeOrHindrance.prereqs.attributes.strength > this.attributes.strength + this.race.attributes.strength )
						does_qualify = false;
				if ( edgeOrHindrance.prereqs.attributes.vigor )
					if( edgeOrHindrance.prereqs.attributes.vigor > this.attributes.vigor + this.race.attributes.vigor )
						does_qualify = false;
			}

			if( edgeOrHindrance.prereqs.rank) {
				if( !this.rank_is_at_least(edgeOrHindrance.prereqs.rank) )
					does_qualify = false;
			}

			requires_edge = false;
			if( edgeOrHindrance.prereqs.edges) {
				requires_edge = true;
				found_edge = false;
				for(qualifyCount = 0; qualifyCount < edgeOrHindrance.prereqs.edges.length; qualifyCount++ ) {
					if( this.has_edge(edgeOrHindrance.prereqs.edges[qualifyCount]) )
						found_edge = true;
				}
			}

			if( requires_edge && !found_edge )
				does_qualify = false;

			requires_hindrance = false;
			if( edgeOrHindrance.prereqs.hindrances) {
				requires_hindrance = true;
				found_hindrance = true;
				for(qualifyCount = 0; qualifyCount < edgeOrHindrance.prereqs.hindrances.length; qualifyCount++ ) {
					if( this.has_hindrance(edgeOrHindrance.prereqs.hindrances[qualifyCount]) )
						found_hindrance = true;
				}
			}

			if( requires_hindrance && !found_hindrance )
				does_qualify = false;

		}

		if( edgeOrHindrance.incompatible ) {

			if( edgeOrHindrance.incompatible.edges) {
				for(qualifyCount = 0; qualifyCount < edgeOrHindrance.incompatible.edges.length; qualifyCount++ ) {
					if( this.has_edge(edgeOrHindrance.incompatible.edges[qualifyCount]) ) {
						does_qualify = false;
					}
				}
			}
			if( edgeOrHindrance.incompatible.hindrances) {
				for(qualifyCount = 0; qualifyCount < edgeOrHindrance.incompatible.hindrances.length; qualifyCount++ ) {
					if( this.has_hindrance(edgeOrHindrance.incompatible.hindrances[qualifyCount]) ) {
						does_qualify = false;
					}
				}
			}

		}

		return does_qualify;
	}

	this.set_attribute = set_attribute;
	function set_attribute(attributeName, attributeValue) {
		selectedValue = -1;
		for(attributeCount = 0; attributeCount < chargen_die_levels.length; attributeCount++) {
			if(chargen_die_levels[attributeCount] == attributeValue)
				selectedValue = attributeCount;
		}
		this.selected_attributes[attributeName] = selectedValue - this.race.attributes[attributeName];
	}

	this.add_edge = add_edge;
	function add_edge(edgeName, edgeSpecify) {
		for(edgeCount = 0; edgeCount < chargen_edges.length; edgeCount++) {

			if(edgeName.toLowerCase() == chargen_edges[edgeCount].name.toLowerCase() ) {

				this.edges_selected = this.edges_selected.concat( chargen_edges[edgeCount] );

				if(edgeSpecify)
					this.edges_selected[this.edges_selected.length - 1].specified = edgeSpecify;
				return;
			}

		}
	}

	this.add_perk = add_perk;
	function add_perk(perkShortName) {

		for(perkCount = 0; perkCount < chargen_perks.length; perkCount++) {

			if(perkShortName.toLowerCase() == chargen_perks[perkCount].short_name.toLowerCase() ) {

				this.perks_selected = this.perks_selected.concat( chargen_perks[perkCount] );
				return;
			}

		}
	}

	this.remove_perk = remove_perk;
	function remove_perk(perkIndex) {
		this.perks_selected.splice(perkIndex, 1);
	}

	this.add_hindrance = add_hindrance;
	function add_hindrance(hindranceName, hindranceSpecify) {
		isMinor = 0;
		isMajor = 0;
		if( hindranceName.indexOf(" (Minor)") > 0 )
			isMinor = 1;
		if( hindranceName.indexOf(" (Major)") > 0 )
			isMajor = 1;
		hindranceName = hindranceName.replace(" (Minor)", "").replace(" (Major)", "");

		for(hindCount = 0; hindCount < chargen_hindrances.length; hindCount++) {
			foundIt = false;
			if(chargen_hindrances[hindCount].name == hindranceName) {
				if(
					chargen_hindrances[hindCount].major == isMajor
						&&
					chargen_hindrances[hindCount].minor == isMinor
				) {
					this.hindrances_selected = this.hindrances_selected.concat( chargen_hindrances[hindCount] );

					if(hindranceSpecify)
						this.hindrances_selected[this.hindrances_selected.length - 1].specified = hindranceSpecify;
					return;
				}
			}
		}

	}

	this.set_hindrance_specification = set_hindrance_specification;
	function set_hindrance_specification(hindranceIndex, specifiedBlurb)	{
		if(this.hindrances_selected[hindranceIndex]) {
			this.hindrances_selected[hindranceIndex].specified = specifiedBlurb;
		}
	}

	this.add_skill = add_skill;
	function add_skill(skillName) {

	}

	this.get_hindrance = get_hindrance;
	function get_hindrance(hindranceName) {
		foundHindrance = {
			name: "NOT FOUND: " + hindranceName
		}

		for(hindCount = 0; hindCount < chargen_hindrances.length; hindCount++)
			if(chargen_hindrances[hindCount].name.toLowerCase() == hindranceName.toLowerCase())
				foundHindrance = chargen_hindrances[hindCount];
		return foundHindrance;
	}

	this.get_edge = get_edge;
	function get_edge(edgeName) {
		foundEdge = {
			name: "NOT FOUND: " + edgeName
		}

		for(edgeCount = 0; edgeCount < chargen_edges.length; edgeCount++)
			if(chargen_edges[edgeCount].name.toLowerCase() == edgeName.toLowerCase())
				foundEdge = chargen_edges[edgeCount];

		return foundEdge;
	}

	this.has_edge = has_edge;
	function has_edge(edgeName) {
		bReturn = false;

		for(edgeIndex = 0; edgeIndex < this.edges_racial.length; edgeIndex++) {
			if(
				this.edges_racial[edgeIndex].name.toLowerCase() == edgeName.toLowerCase() ||
				edgeName.toLowerCase().indexOf(this.edges_racial[edgeIndex].name.toLowerCase() + "|") > -1 ||
				edgeName.toLowerCase().indexOf("|" + this.edges_racial[edgeIndex].name.toLowerCase()) > -1
			)
				bReturn = true;
		}
		for(edgeIndex = 0; edgeIndex < this.edges_selected.length; edgeIndex++) {
			if(
				this.edges_selected[edgeIndex].name.toLowerCase() == edgeName.toLowerCase() ||
				edgeName.toLowerCase().indexOf(this.edges_selected[edgeIndex].name.toLowerCase() + "|") > -1 ||
				edgeName.toLowerCase().indexOf("|" + this.edges_selected[edgeIndex].name.toLowerCase()) > -1
			)
				bReturn = true;
		}

		return bReturn;
	}

	this.has_hindrance = has_hindrance;
	function has_hindrance(hindranceName) {
		bReturn = false;

		for(hindIndex = 0; hindIndex < this.hindrances_racial.length; hindIndex++){
			if(this.hindrances_racial[hindIndex].name.toLowerCase() == hindranceName.toLowerCase())
				bReturn = true;
		}
		for(hindIndex = 0; hindIndex < this.hindrances_selected.length; hindIndex++) {
			if(this.hindrances_selected[hindIndex].name.toLowerCase() == hindranceName.toLowerCase())
				bReturn = true;
		}

		return bReturn;
	}

	this.remove_hindrance = remove_hindrance;
	function remove_hindrance(hindranceIndex) {
		this.hindrances_selected.splice(hindranceIndex, 1);
	}

	this.remove_edge = remove_edge;
	function remove_edge(edgeIndex) {
		this.edges_selected.splice(edgeIndex, 1);
	}

	this.has_skill = has_skill;
	function has_skill(skillName) {
		bReturn = false;

		for(skillIndex = 0; skillIndex < this.skills_racial.length; skillIndex++)
			if(this.skills_racial[skillIndex].name.toLowerCase() == skillName.toLowerCase())
				bReturn = true;
		for(skillIndex = 0; skillIndex < this.skills_selected.length; skillIndex++)
			if(this.skills_selected[skillIndex].name.toLowerCase() == skillName.toLowerCase())
				bReturn = true;

		return bReturn;
	}

	this.calc = calc;
	function calc() {
		this.edges_racial = Array();
		this.hindrances_racial = Array();

		this.edges = Array();
		this.hindrances = Array();

		this.attributes.agility = this.selected_attributes.agility;
		this.attributes.smarts = this.selected_attributes.smarts;
		this.attributes.spirit = this.selected_attributes.spirit;
		this.attributes.strength = this.selected_attributes.strength;
		this.attributes.vigor = this.selected_attributes.vigor;

		if(this.race.char_effects)
			this.race.char_effects(this);

		this.secondary.toughness = Math.floor(chargen_die_levels[this.attributes.vigor].replace("d", "") / 2) + 2;

		this.secondary.pace = 6;
		this.secondary.charisma = 0;
		this.power_points = 0;

		this.attribute_points = 5;
		this.edges_available = 0;
		this.hindrances_major = 0;
		this.hindrances_minor = 0;
		this.perk_points = 0;

		if(this.race.char_effects)
			this.race.char_effects(this);;

		if(this.race.hindrances_included) {
			for(raceHindCount = 0; raceHindCount < this.race.hindrances_included.length; raceHindCount++){
				if( typeof(this.race.hindrances_included[raceHindCount]) == "string")
					newHindtrance = this.get_hindrance( this.race.hindrances_included[raceHindCount]);
				else
					newHindtrance = this.race.hindrances_included[raceHindCount];

				this.hindrances_racial = this.hindrances_racial.concat( newHindtrance );

				if( newHindtrance.char_effects ) {
					newHindtrance.char_effects(this);
				}
			}
		}

		if(this.race.edges_included) {
			for(raceEdgeCount = 0; raceEdgeCount < this.race.edges_included.length; raceEdgeCount++){
				if( typeof(this.race.edges_included[raceEdgeCount]) == "string")
					newEdge = this.get_edge( this.race.edges_included[raceEdgeCount] );
				else
					newEdge = this.race.edges_included[raceEdgeCount];

				this.edges_racial = this.edges_racial.concat( newEdge  );
				if( newEdge.char_effects ) {
					newEdge.char_effects(this);
				}
			}
		}

		this.hindrances = Array();
		for(hindCount = 0; hindCount < this.hindrances_selected.length; hindCount++){
			majorMinor = "";
			if( this.hindrances_selected[hindCount].major) {
				majorMinor = " (Major)";
				this.hindrances_major++;
				if(this.hindrances_major < 2)
					this.perk_points = this.perk_points + 2;

			}
			if( this.hindrances_selected[hindCount].minor) {
				majorMinor = " (Minor)";
				this.hindrances_minor++;
				if(this.hindrances_minor < 3)
					this.perk_points = this.perk_points + 1;

			}

			specified = "";

			if(this.hindrances_selected[hindCount].specified )
				specified = this.hindrances_selected[hindCount].specified;

			hindranceAdd = { name: this.hindrances_selected[hindCount].name + majorMinor, specify: specified };
			this.hindrances = this.hindrances.concat( hindranceAdd );

			if ( this.hindrances_selected[hindCount].char_effects )
				this.hindrances_selected[hindCount].char_effects(this);
		}

		for(edgeCount = 0; edgeCount < this.edges_selected.length; edgeCount++) {
			if ( this.edges_selected[edgeCount].char_effects )
				this.edges_selected[edgeCount].char_effects(this);

			specified = "";

			if(this.edges_selected[edgeCount].specified )
				specified = this.edges_selected[edgeCount].specified;

			edgeAdd = { name: this.edges_selected[edgeCount].name, specify: specified };
			this.edges = this.edges.concat( edgeAdd );
		}

		this.perks = Array();

		for(perkCount = 0; perkCount < this.perks_selected.length; perkCount++) {
			if( this.perks_selected[perkCount].char_effects ) {
				this.perks_selected[perkCount].char_effects(this);
			}
			this.perks = this.perks.concat(this.perks_selected[perkCount].short_name);
			this.perk_points = this.perk_points - this.perks_selected[perkCount].cost;
		}

		// TODO After Skills
		this.secondary.parry = 0;

	}

	this.exportChar = exportChar;
	function exportChar() {
		var exportCharObj = {
			name: this.name,
			rank: chargen_ranks[this.rank],
			race: this.race.name,
			attributes: this.attributes,
			edges: this.edges,
			hindrances: this.hindrances,
			perks: this.perks,
			skills: this.skills,
			equipment: this.equipment
		}

		return JSON.stringify(exportCharObj);
	}

	this.importChar = importChar;
	function importChar(importString) {
		if( importCharObj = JSON.parse(importString) ) {
				this.name = importCharObj.name;
				this.set_race( importCharObj.race );
				this.set_rank( importCharObj.rank );
				this.selected_attributes = importCharObj.attributes;
				for(importEdgeCount = 0; importEdgeCount < importCharObj.edges.length; importEdgeCount++) {
					this.add_edge(
						importCharObj.edges[importEdgeCount].name,
						importCharObj.edges[importEdgeCount].specify
					);
				}
				for(importHindCount = 0; importHindCount < importCharObj.hindrances.length; importHindCount++) {
					this.add_hindrance(
						importCharObj.hindrances[importHindCount].name,
						importCharObj.hindrances[importHindCount].specify
					);
				}

				for(importPerkCount = 0; importPerkCount < importCharObj.perks.length; importPerkCount++) {
					this.add_perk( importCharObj.perks[importPerkCount] );
				}
				for(importSkillCount = 0; importSkillCount < importCharObj.skills.length; importSkillCount++) {
					this.add_skill( importCharObj.perks[importSkillCount].name, importCharObj.perks[importSkillCount].rating  );
				}
				this.equipment = importCharObj.equipment;
				this.calc();
				return true;
		}
	}
	return false;
}