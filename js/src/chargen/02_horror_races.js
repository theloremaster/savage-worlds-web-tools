if(!chargen_races)
	var chargen_races = Array();

chargen_races = chargen_races.concat(Array(
	/* Horror Companion */
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

			},
			{
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
) );