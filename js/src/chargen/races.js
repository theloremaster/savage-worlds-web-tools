/* Character Object */

var cargen_genders = Array(
	{
		name: "Male"
	},
	{
		name: "Female"
	},
	{
		name: "Other"
	}
);

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
		name: "Android",
		blurb: Array("Androids are sentient machines with a variety of appearances depending on the setting. Some appear almost human, some are purely mechanical. The android presented here is a basic version with normal human knowledge and emotions. Particular settings may alter, remove, or add other abilities based on their role and function in that world."),
		book: books_list[0],
		page: "p20",
		edges_included: Array(
			{
				name: "Construct",
				description: "Androids add +2 to recover from being Shaken, don’t suffer wound modifiers, and are immune to poison and disease. Androids cannot heal naturally. To heal an android requires the Repair skill—which is used like the Healing skill only with no 'Golden Hour.'"
			},
			{
				name: "Programming",
				description: "Androids begin with a free d6 in one skill, representing their original programmed role.",
				char_effects: function( character_object ) {
					// TODO kludge
					character_object.skill_points = character_object.skill_points + 2;
				},
			},
			{
				name: "Unnatural",
				description: "Arcane powers, both detrimental and beneficial, suffer a –2 penalty to affect androids. This has no effect on damaging powers, which affect them normally."
			}
		),
		hindrances_included: Array(
			{
				name: "Asimov Circuits",
				description: "The android cannot harm, or by inaction bring harm to sentient beings. This gives him the Pacifist Hindrance (Major)."
			},
			"Outsider",
			{
				name: "Recharge",
				description: "During character creation, the player must determine the android’s power source. If the android cannot access his power source at least once per day, he’s automatically Fatigued each day until he’s Incapacitated. The day after that, he goes “off-line” and must be revived with a Repair roll and a four-hour charge of energy. The power source replaces the need for food and water, unless they are the chosen power source."
			}
		)
	},
	{
		name: "Atlantean",
		blurb: Array(),
		book: books_list[0],
		page: "p20",
		edges_included: Array(
			{
				name: "Advanced Civilization",
				description: "Atlanteans are generally more intelligent than the other races of their world. They start with a d6 in Smarts rather than a d4.",
				char_effects: function( character_object ) {
					character_object.race.attributes.smarts = 1;
				}
			},
			{
				name: "Aquatic",
				description: "Atlanteans live in and breathe water. They cannot drown in water, move at full Swimming skill, and get a free d6 Swimming.",
				char_effects: function(character_object) {
					character_object.race.skills = Array(
						Array("Swim", 1)
					);
				}
			},
			{
				name: "Tough",
				description: "The pressure of their deep homes make Atlanteans tougher than most. Increase Toughness by 1",
				char_effects: function( character_object ) {
					character_object.secondary.toughness += 1;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Dehydration",
				description: "Atlanteans must immerse themselves in water one hour out of every 24 or become automatically Fatigued each day until they are Incapacitated. The day after that, they perish.",

			}
		)
	},
	{
		name: "Avion",
		blurb: Array("Avions are any basically human race with wings. They tend to be very slight of build owing to their hollow bones."),
		book: books_list[0],
		page: "p20",

		edges_included: Array(
			{
				name: "Flight",
				description: "Avions can fly at their basic Pace and even “run” while flying. It costs 2” of Pace to gain 1” of height."
			},
			"Extra Edge"
		),
		hindrances_included: Array(
			{
				name: "Hollow-Boned",
				description: "Avions have –1 Toughness",
				char_effects: function( character_object ) {
					character_object.secondary.toughness -= 1;
				}
			}
		)
	},
	{
		name: "Dwarves",
		blurb: Array(
			"Dwarves are short, stout, hardy people who come from massive caverns in the high mountains. They are a proud, warlike race, usually made so by frequent contact with savage races such as orcs and goblins.",
			"Dwarves usually live upwards of 200 years. In most fantasy campaigns, they have ruddy skin and all human hair colors."
		),
		book: books_list[0],
		page: "p20",

		edges_included: Array(
			"Low Light Vision",
			{
				name: "Tough",
				description: "Dwarves are stout and tough. They start with a d6 Vigor instead of a d4",
				char_effects: function( character_object) {
					character_object.race.attributes.vigor = 1;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Slow",
				description: "Dwarves have a Pace of 5”",
				char_effects: function( character_object ) {
					character_object.secondary.pace = 5;
				}
			}
		)
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
	{
		name: "Half-Elves (Elf)",
		blurb: Array(),
		book: books_list[0],
		page: "p20",
		edges_included: Array(
			"Agile",
			"Low Light Vision"
		),
		hindrances_included: Array(
			"Outsider"
		)
	},
	{
		name: "Half-Elves (Human)",
		blurb: Array(),
		book: books_list[0],
		page: "p20",
		edges_included: Array(
			"Extra Edge",
			"Low Light Vision"
		),
		hindrances_included: Array(
			"Outsider"
		)
	}

	/*
		Chronicles of Sol
		===============================
		...look ma, inline edges and hindrances! This was the book that created inline edges and hindrances in character.js ;)

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
				char_effects: function( character_object ) {
					character_object.race.skills = Array(
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
				char_effects: function( character_object ) {
					character_object.race.skills = Array(
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
				char_effects: function( character_object ) {
					character_object.race.skills = Array(
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
				char_effects: function( character_object ) {
					character_object.race.skills = Array(
						Array("Investigation", 1)
					);
				},
			}

		),
		hindrances_included: Array(
			{
				name: "Weak",
				description: "Strength requires two points per step to raise during character generation",
				char_effects: function( character_object ) {
					character_object.cost_to_raise.strength = 2;
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
				char_effects: function( character_object ) {
					character_object.race.skills = Array(
						Array("Knowledge", 1),
						Array("Knowledge", 1)
					);
					character_object.race.attributes.smarts = 1;
				},
			}
		),
		hindrances_included: Array(
			{
				name: "Slower",
				description: "-1 Pace",
				char_effects: function( character_object ) {
					character_object.secondary.pace = character_object.secondary.pace - 1;
				}
			},
			{
				name: "Small",
				description: "-1 toughness",
				char_effects: function( character_object ) {
					character_object.secondary.toughness = character_object.secondary.toughness - 1;
				}
			},
			{
				name: "Size -1",
				description: "Titans are ironically only 3' - 4’ tall, which can make them harder to hit"
			},
			{
				name: "Small",
				description: "-1 toughness",
				char_effects: function( character_object ) {
					character_object.max_attributes.strength = 2;
				}
			}
		)
	}
	*/
);