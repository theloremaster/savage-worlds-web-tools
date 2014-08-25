/* Character Object */

var chargen_genders = Array(
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
					character_object.derived.toughness += 1;
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
					character_object.derived.toughness -= 1;
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
					character_object.derived.pace = 5;
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
					character_object.derived.toughness -= 1;
					character_object.derived.size -= 1;
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
	},
	{
		name: "Angel",
		blurb: Array(
			"Angels are servants of powerful deities who sometimes help the “primitive” races far below. They also serve as avengers of their master—destroying entire towns or cities to purge them of their wickedness."
		),
		book: books_list[2],
		page: "p9",
		edges_included: Array(
			{
				name: "Armor of the Lord",
				description: "Angels are protected by a mystical aura that grants them +4 Toughness. It cannot be negated by Armor Piercing weapons.",
				char_effects: function( character_object) {
					character_object.derived.toughness += 4;
				}
			},
			{
				name: "Faith",
				description: "Angels start with a d6 in Faith for free.",
				char_effects: function( character_object) {
					character_object.race.skills = Array(
						Array("Faith", 1)
					);
				}
			},
			{
				name: "Flight",
				description: "Angels can materialize great feathery wings when they so choose. This gives them Flight of 24” with a Climb of 2."
			},
			{
				name: "Divine Strength",
				description: "Angels start with a d12 as their Strength.",
				char_effects: function( character_object) {
					character_object.race.attributes.strength = 4;
				}
			},
			{
				name: "Healing",
				description: "The touch of an angel can heal a number of wounds equal to its Faith roll. It may do this once every seven days per individual."
			}
		),
		hindrances_included: Array(
			{
				name: "Warriors of Heaven",
				description: "Angels receive commands from a distant and mysterious God. They have no one to question should they dislike such an order. If they disobey, they are stripped of their powers and become mortal."
			}
		)
	},
	{
		name: "Demon",
		blurb: Array(
			"Your character is a minor demon or has demonic blood—perhaps due to mixed parentage or an infusion of demonic blood.",
			"Player character demons are evil for purposes of game mechanics (such as the Champion Edge), but their actions and will may not be evil in certain settings. For example, demons might simply be opposed to “self-righteous” angels and the distant divinity who commands them. In these settings, demons probably see humans as useful pawns in the great “war on Heaven.”",
			"Demons should be selfish, mean, and less- than-loyal companions even in such “gray” stories."
		),
		book: books_list[2],
		page: "p9",
		edges_included: Array(
			{
				name: "Immunity",
				description: "Demons are immune to poison and disease."
			},
			{
				name: "Infernal Stamina",
				description: "Demons gain a +2 bonus to recover from being Shaken."
			},
			{
				name: "Resistant to Normal Weapons",
				description: "Demons suffer only half damage from nonmagical attacks except for cold iron (see below)."
			}
		),
		hindrances_included: Array(
			{
				name: "Weakness (Cold Iron)",
				description: "Demons take normal damage from pure iron weapons. “Cold” refers to their relative purity—not their temperature."
			}
		)
	},
	{
		name: "Dhampyr",
		blurb: Array(
			"Dhampyrs are the offspring of a vampire and a human, and only possible in certain settings. Most either serve their dark fathers or mothers—or hunt them for the travesty they inflicted on them."
		),
		book: books_list[2],
		page: "p10",
		edges_included: Array(
			{
				name: "Sense Vampire",
				description: "Dhampyrs can detect vampires (and other dhampyrs) up to 20 yards distant. If masked by conceal arcana, the dhampyr opposes it with his Notice skill."
			},
			{
				name: "Sire's Strength",
				description: "Dhampyr player characters start with a d6 in Strength rather than a d4.",
				char_effects: function( character_object) {
					character_object.race.attributes.strength = 1;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Weakness (Sunlight)",
				description: "Dhampyrs don’t catch fire like vampires, but they do find it extremely uncomfortable. All physical tasks made in sunlight (or UV lighting) are made at –2."
			}
		)
	},
	{
		name: "Patchwork Man",
		blurb: Array(
			"Your hero wasn’t born—he was created.",
			"Stitched in a laboratory from the parts of others, a patchwork man is much like the monster depicted in Mary Shelley’s Frankenstein."
		),
		book: books_list[2],
		page: "p10",
		edges_included: Array(
			{
				name: "Parts",
				description: "Your body was built from the strongest parts. He begins play with a d10 in Strength and Vigor. If a patchwork man ever loses a body part, it can be reattached with an Arcane Background (Weird Science) roll at –4.",
				char_effects: function( character_object) {
					character_object.race.attributes.strength = 3;
					character_object.race.attributes.vigor = 3;
				}
			},
			"Berzerk",
			{
				name: "Undead",
				description: "2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties.",
				char_effects: function( character_object ) {
					character_object.derived.toughness += 2;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Weakness (Electricity)",
				description: "You were born of lightning—and shall likely die by it. Patchwork men suffer double damage from electrical attacks."
			}
		)
	},
	{
		name: "Phantom",
		blurb: Array(
			"Phantoms are ghosts of the dead who can—with some exertion of will—affect the mortal world."
		),
		book: books_list[2],
		page: "p10",
		edges_included: Array(
			{
				name: "Affect the Physical World",
				description: "Phantoms can affect the physical world by making a Spirit roll for each action. This grants them ability equal to their Agility and Strength as usual."
			},
			{
				name: "Ethereal",
				description: "Cannot be harmed by normal attacks; takes normal damage from magic items, weapons, and supernatural powers; may pass through solid objects."
			},
			{
				name: "Invisible",
				description: "Phantoms are spirits and cannot be seen by the naked eye unless they want to be."
			}
		),
		hindrances_included: Array(
			{
				name: "Weakness (Salt)",
				description: "Phantoms cannot abide salt. They cannot cross a barrier of salt and are Shaken if forced into contact with it."
			}
		)
	},
	{
		name: "Vampire",
		blurb: Array(
			"This character was bitten by a vampire and became one in turn. She must have blood to survive, but whether it is human blood or not is a matter of conscience."
		),
		book: books_list[2],
		page: "p11",
		edges_included: Array(
			{
				name: "Claws",
				description: "Str+d6"

			},
			{
				name: "Strength of the Damned",
				description: "Vampires start with a d8 Strength and Vigor rather than a d4 ",
				char_effects: function( character_object) {
					character_object.race.attributes.strength = 2;
					character_object.race.attributes.vigor = 2;
				}
			},
			{
				name: "Undead",
				description: "2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties.",
				char_effects: function( character_object ) {
					character_object.derived.toughness += 2;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Feed",
				description: "The vampire must drink at least a pint of fresh blood once per day. This is treated like the Habit (Major) Hindrance."
			},
			{
				name: "Weakness (Garlic)",
				description: "Vampires suffer a –2 penalty to Fighting attacks against anyone who carries garlic."
			},
			{
				name: "Weakness (Sunlight)",
				description: "Vampires catch fire if any part of their skin is exposed to sunlight. After that they suffer 2d10 damage per round. Armor does not protect."
			},
			{
				name: "Weakness (Unwelcome Guest)",
				description: "Vampires cannot enter a home unless invited."
			},
			{
				name: "Weakness (Wood)",
				description: "Vampires take +4 damage from wooden weapons."
			}
		)
	},
	{
		name: "Werewolf",
		blurb: Array(
			"Player character werewolves can control their transformation—except on the night of the full moon when they rage.",
			"Transforming requires an action and a Spirit roll (at –4 if no moon is in the sky or indoors). If Incapacitated, the lycanthrope instantly returns to his mortal form."
		),
		book: books_list[2],
		page: "p11",
		edges_included: Array(
			{
				name: "Bite",
				description: "Str+d4"

			},{
				name: "Claws",
				description: "Str+d8"

			},
			{
				name: "Fear -2",
				description: "Werewolves chill the blood of all who see them."
			},
			{
				name: "Invulnerability",
				description: "Werewolves can only be Shaken by weapons that are not silver—not wounded."
			},
			{
				name: "Infravision",
				description: "Werewolves can see heat and halve penalties for bad lighting when attacking living targets."
			}
		),
		hindrances_included: Array(
			{
				name: "Full Moon Madness",
				description: Array(
					"When the last of the sun disappears and the full moon rises, your character becomes a bloodthirsty monster under the control of the Game Master. In this state werewolves must feed.",
					"If given a choice they will attack strangers or foes over friends, but otherwise they must sate their eternal hunger by killing and feasting on mortal flesh."
				)
			},
			{
				name: "Infection",
				description: "Anyone bitten by a werewolf who suffers a wound or greater must make a Vigor roll. Failure means the character becomes a werewolf at the next full moon (assuming he survives the attack)."
			},
			{
				name: "Weakness (Silver)",
				description: "Werewolves suffer normal damage from silver weapons"
			}
		)
	},
	{
		name: "Zombie",
		blurb: Array(
			"Once your hero walked among the living. But death called and the flesh passed into the earth. Somehow, some way, he returned. Your character is a walking corpse but still retains his will and conscience."
		),
		book: books_list[2],
		page: "p11",
		edges_included: Array(
			{
				name: "Undead",
				description: "2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties.",
				char_effects: function( character_object ) {
					character_object.derived.toughness += 2;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Feast of the Flesh",
				description: "Zombies must eat raw meat to survive. Most require about a pound a day. This is treated as the Habit (Major) Hindrance. “Death” causes the zombie to fall into a stupor. It then seeks out any flesh it can find—friend or foe— and gorges itself until sated. At that point it regains its will and all Fatigue is eliminated."
			}
		)
	}

);