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
		blurb: Array("Elves are tall, thin souls with pointed ears and deep- set eyes of various colors. Whether they hail from the forests or hidden valleys, they are all born more graceful than humans, though somewhat slighter. Most elves live upwards of 300 years. They have fair skin and their hair includes all human colors, plus shades of silver and blue."),
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
		blurb: Array("Half-elves are usually a solid mix of their two parents. They gain the elves’ grace but none of their elegant frailty. Most half-elves are well-adjusted, but some are shunned by one side of the family or the other and grow resentful. Others may even be mistreated. Their lifespans are closer to their human parent than those of their elven kin. Most half-elves live only to about 100 years."),
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
		blurb: Array("Half-elves are usually a solid mix of their two parents. They gain the elves’ grace but none of their elegant frailty. Most half-elves are well-adjusted, but some are shunned by one side of the family or the other and grow resentful. Others may even be mistreated. Their lifespans are closer to their human parent than those of their elven kin. Most half-elves live only to about 100 years."),
		book: books_list[0],
		page: "p20",
		edges_included: Array(
			"Extra Edge",
			"Low Light Vision"
		),
		hindrances_included: Array(
			"Outsider"
		)
	},
	{
		name: "Half-Folk",
		blurb: Array(
			"Half-folk are small, nimble creatures with fuzzy brown or black hair. Though they are frail compared to most other races, their cheerful optimism (or wily cunning) gives them a “never say die” attitude that makes them more than a match for creatures twice their size.",
			"Half-folk see no reason to invite trouble, and tend to live in their own little communities far off the beaten path."
		),
		book: books_list[0],
		page: "p21",
		edges_included: Array(
			{
				name: "Fortunate",
				description: "Half-folk draw one additional Benny per game session. This may be combined with the Luck and Great Luck Edges."
			},
			{
				name: "Spirited",
				description: "Half-folk are generally optimistic beings. They start with a d6 Spirit instead of a d4",
				char_effects: function( character_object) {
					character_object.race.attributes.spirit = 1;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Short",
				description: "Half-folk average only about 4’ tall. This gives them a Size of –1 and subtracts 1 from their Toughness",
				char_effects: function( character_object ) {
					character_object.secondary.toughness -= 1;
					character_object.secondary.size -= 1;
				}
			}
		)
	},
	{
		name: "Half-Orc",
		blurb: Array(
			"Half-orcs are the offspring of either a human and an orc or an orc and another half-orc. Rarely is such a mating willingly accepted, so the character’s “family tree” is likely more than a little troublesome to him or her.",
			"Half-orcs are usually accepted by orcish communities, but are shunned by most other races, including humans, elves, and dwarves. Some half-orcs choose to join the “civilized” races, turning their backs on their barbaric roots, and are often looking to redeem themselves. Many are heroic souls trying to prove their worth.",
			"Half-orcs have light-colored human skin with just a tinge of orcish coloration, with black hair and small eyes. Their features are harsh and angular, like that of orcs. Their natural life-span is the same as humans, though it is rare when one dies of old age."
		),
		book: books_list[0],
		page: "p21",
		edges_included: Array(
			{
				name: "Infravision",
				description: "Half-orcs can see in the infrared spectrum, halving attack penalties (round down) for bad lighting"
			},
			{
				name: "Strong",
				description: "Half-orcs have some of the strength of their ancestry. They start with a d6 Strength attribute instead of a d4.",
				char_effects: function( character_object) {
					character_object.race.attributes.strength = 1;
				}
			}
		),
		hindrances_included: Array(
			"Outsider"
		)
	},
	{
		name: "Rakashans",
		blurb: Array(
			"Rakashans have the form of humans with the features of felines. They come in a wide variety: the bright colors of tigers, the speckled hides of leopards, and the exotic look of Siamese cats are all appropriate. They have sharp claws and teeth and a cruel nature when it comes to dealing with their prey.",
			"Rakashans can be found in their own remote and exotic cities or as fringe elements of normal society. While they are too beautiful to be shunned, they are too foreign to be easily accepted."
		),
		book: books_list[0],
		page: "p21",
		edges_included: Array(
			{
				name: "Agile",
				description: "Rakashans have the feline grace of their ancestors. They start with a d6 Agility attribute instead of a d4.",
				char_effects: function( character_object) {
					character_object.race.attributes.strength = 1;
				}
			},
			{
				name: "Claws",
				description: "Rakashans have retractable claws that do Str+d6 damage and grant +2 to Climbing rolls on all but completely sheer surfaces."
			},
			"Low Light Vision"
		),
		hindrances_included: Array(
			{
				name: "Bloodthirsty",
				description: "Rakashans can be cruel to their foes, often toying with them for simple amusement. They rarely take prisoners and feel little compunction about punishing captured foes. This causes a –4 Charisma penalty among more “civilized” types.",
				char_effects: function( character_object) {
					character_object.race.attributes.charisma -= 4;
				}
			},
			{
				name: "Racial Enemy",
				description: "Rakashan society rose at the expense of another. Pick a common race in your setting. Members of each culture suffer a –4 Charisma when dealing with each other. Unless fettered by other authorities or common goals, individuals of the two races typically attack each other on sight."
			}
		)
	},
	{
		name: "Saurians",
		blurb: Array(
			"Lizard men typically come from steaming jungles or deep deserts where they have unique civilizations unknown to other sentient races.",
			"Few outsiders have penetrated their society, and persistent rumors that Saurian religion requires sentient sacrifices remain unconfirmed."
		),
		book: books_list[0],
		page: "p21",
		edges_included: Array(
			{
				name: "Saurian Senses",
				description: "Saurians’ lizard tongues can “taste” the air, giving them +2 to Notice rolls. They are always considered active guards for Stealth checks."
			},
			{
				name: "Natural Weapons",
				description: "The tails, claws, and teeth of saurians allow them to tail slap, claw, or bite in combat for Str+d4 damage."
			}
		),
		hindrances_included: Array(
			"Outsider",
			{
				name: "Warm Natured",
				description: "Though not truly cold-blooded, saurians are not comfortable in cold environments. They suffer a –4 penalty to resist cold environmental effects."
			}
		)
	}

);