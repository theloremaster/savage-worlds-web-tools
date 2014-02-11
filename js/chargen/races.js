/* Character Object */
var chargen_races = Array(
	/* Savage Worlds Deluxe */
	{
		name: "Human",
		blurb: Array(),
		book: books_list[0],
		page: "p21",

		edges_included: Array(
			"Extra Edge"
		),
		hindrances_included: Array()
	},
	{
		name: "Elf",
		blurb: Array(),
		book: books_list[0],
		page: "p20",
		edges_included: Array(
			"Agile",
			"Low Light Vision"
		),
		hindrances_included: Array(
			"All Thumbs"
		)
	},


	/*
		Chronicles of Sol
		===============================
		...look ma, inline edges and hindrances! This was the book that created inline edges and hindrances in character.js ;)
	*/
	{
		name: "Mercurian",
		blurb: Array(),
		book: books_list[6],
		page: "pXX",
		edges_included: Array(
			"Rich",
			{
				name: "Hardy",
				description: "+2 bonus to resist all negative environmental effects (heat, cold, pressure, etc.)"
			},
			{
				name: "Handy",
				description: "d6 Skill in Repair, as every noble knows how to service his/her own Solar Collectors",
				char_effects: function( characterObject ) {
					characterObject.race.skills = Array(
						Array("Repair", 1)
					);
				},
			}

		),
		hindrances_included: Array(
			"Clueless"
		)
	},
	{
		name: "Venusian",
		blurb: Array(),
		book: books_list[6],
		page: "pXX",
		edges_included: Array(
			{
				name: "Cold Natured",
				description: "+4 Bonus to Resist Heat"
			},
			{
				name: "Pious",
				description: "Starts with d6 skill in Knowledge: Zorian Law/Dogma",
				char_effects: function( characterObject ) {
					characterObject.race.skills = Array(
						Array("Knowledge", 1, "Zorian Law/Dogma")
					);
				},
			}

		),
		hindrances_included: Array(
		)
	},
	{
		name: "Venusian (In Service)",
		blurb: Array(),
		book: books_list[6],
		page: "pXX",
		edges_included: Array(
			{
				name: "Cold Natured",
				description: "+4 Bonus to Resist Heat"
			},
			{
				name: "Pious",
				description: "Starts with d6 skill in Knowledge: Zorian Law/Dogma",
				char_effects: function( characterObject ) {
					characterObject.race.skills = Array(
						Array("Knowledge", 1, "Zorian Law/Dogma")
					);
				},
			},
			{
				name: "Cold Natured",
				description: "+4 Bonus to Resist Heat"
			},
			{
				name: "Respected",
				description: "+1 Charisma to Venusians"
			},
			"Extra Edge"

		),
		hindrances_included: Array(
			{
				name: "Duties",
				description: "Most Venusians start with a vow to Zor and the Theocracy. A Vowed and bonded Venusian may only take his vow at legal adult age, and when this happens his name gets marked on record as being bonded, and the Zorian badge of service (a green mark of Zor about the size of a thumbnail similar to an Indian Bindi is tattooed on his forehead)."
			}
		)
	},
	{
		name: "Martian",
		blurb: Array(),
		book: books_list[6],
		page: "pXX",
		edges_included: Array(
			{
				name: "Hot Natured",
				description: "+4 Bonus to Resist Cold"
			},
			{
				name: "Well Informed",
				description: "Starts with d6 skill in Investigation due to the amount of information a Martian must consume to remain competitive in his/her field",
				char_effects: function( characterObject ) {
					characterObject.race.skills = Array(
						Array("Investigation", 1)
					);
				},
			}

		),
		hindrances_included: Array(
			{
				name: "Weak",
				description: "Strength requires two points per step to raise during character generation",
				char_effects: function( characterObject ) {
					characterObject.cost_to_raise.strength = 2;
				}
			}

		)
	},
	{
		name: "Jovian",
		blurb: Array(),
		book: books_list[6],
		page: "pXX",
		edges_included: Array(
			"McGyver"

		)
	},
	{
		name: "Titan",
		blurb: Array(),
		book: books_list[6],
		page: "pXX",
		edges_included: Array(
			"Scholar",
			{
				name: "Enlightened",
				description: "Starts with two Knowledge Skills at d6",
				char_effects: function( characterObject ) {
					characterObject.race.skills = Array(
						Array("Knowledge", 1),
						Array("Knowledge", 1)
					);
					characterObject.race.attributes.smarts = 1;
				},
			}
		),
		hindrances_included: Array(
			{
				name: "Slower",
				description: "-1 Pace",
				char_effects: function( characterObject ) {
					characterObject.secondary.pace = characterObject.secondary.pace - 1;
				}
			},
			{
				name: "Small",
				description: "-1 toughness",
				char_effects: function( characterObject ) {
					characterObject.secondary.toughness = characterObject.secondary.toughness - 1;
				}
			},
			{
				name: "Size -1",
				description: "Titans are ironically only 3' - 4’ tall, which can make them harder to hit"
			},
			{
				name: "Small",
				description: "-1 toughness",
				char_effects: function( characterObject ) {
					characterObject.max_attributes.strength = 2;
				}
			}
		)
	}
);