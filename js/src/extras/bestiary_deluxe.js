/*
This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Deluxe and are owned by Pinnacle Entertainment Group.
*/
if(typeof(extraDatabase) == "undefined")
	var extraDatabase = Array();

if(typeof(extraBooks) == "undefined")
	var extraBooks = Array();

var currentBook = books_list[0];

extraBooks = extraBooks.concat(currentBook);
extraDatabase = extraDatabase.concat(Array(
	{
		name: "Alligator/Crocodile",
		tags: "animal,",
		wildcard: 0,
		image: "http://static.ddmcdn.com/gif/alligator-zigzag-1.jpg",
		blurb: "Alligators and crocs are staples of most pulp-genre adventure games. The statistics here represent an average specimen of either species. Much larger versions are often found in more remote areas.",
		attributes: {
			agility: "d4",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			 'Fighting' : "d8",
			 'Notice' : "d6",
			 'Swimming' : "d8"
		},
		charisma: "",
		pace: "3",
		parry: "6",
		toughness: "9",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick skin."
			},
			{
				name: "Aquatic",
				description: "Pace 5"
			},
			{
				name: "Bite",
				description: "Str+d6"
			},
			{
				name: "Rollover	",
				description: "Both gators and crocs are notorious for grasping their prey in their vice-like jaws and rolling over and over with their flailing victims in their mouth. If one of these large amphibians hits with a raise, it causes an extra 2d4 rollover damage to its prey in addition to its regular Strength damage."
			}
		),
		book: currentBook,

		page: "p135"
	},
	{
		name: "Bear, Large",
		wildcard: 0,
		tags: "animal,",
		image: "http://static.comicvine.com/uploads/original/8/85165/1933110-grizzly_bear.jpg",
		blurb: "Large bears covers grizzlies, kodiaks, and massive polar bears.",
		attributes: {
			agility: "d6",
			smarts: "d6 (A)",
			spirit: "d8",
			strength: "d12+4",
			vigor: "d12"
		},
		skills: {
			 'Fighting' : "d8",
			 'Notice' : "d6",
			 'Swimming' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "10",
		armor: "0",
		abilities: Array(
			{
				name: "Bear Hug",
				description: "Bears don’t actually “hug” their victims, but they do attempt to use their weight to pin their prey and rend it with their claws and teeth. A bear that hits with a raise has pinned his foe. The opponent may only attempt to escape the “hug” on his action, which requires a raise on an opposed Strength roll."
			},
			{
				name: "Claws",
				description: "Str+d6"
			},
			{
				name: "Size +2",
				description: "These creatures can standup to 8’tall and weigh over 1000 pounds."
			}
		),
		book: currentBook,

		page: "p135"
	},
	{
		name: "Bull",
		wildcard: 0,
		tags: "animal,",
		image: "http://www.shockingtimes.co.uk/wp-content/uploads/2010/03/Bull.jpg",
		blurb: "Bulls are usually only aggressive toward humans when enraged. Of course, if you’re looking up the statistics here, it’s probably already seeing red.",
		attributes: {
			agility: "d6",
			smarts: "d4 (A)",
			spirit: "d8",
			strength: "d12+2",
			vigor: "d12"
		},
		skills: {
			 'Fighting' : "d4",
			 'Notice' : "d6"
		},
		charisma: "",
		pace: "7",
		parry: "4",
		toughness: "10",
		armor: "0",
		abilities: Array(
			{
				name: "Horns",
				description: "Str+d6"
			},
			{
				name: "Gore",
				description: "Bulls charge maneuver to gore their opponents with their long horns. If they can move at least 6” before attacking, they add +4 to their damage total."
			},
			{
				name: "Size +2",
				description: "Bulls are large creatures."
			}
		),
		book: currentBook,

		page: "p135"
	},
	{
		name: "Cat, Small",
		wildcard: 0,
		tags: "animal,",
		image: "http://www.southbham.cats.org.uk/uploads/images/pages/cat-stalking-crop.jpg",
		blurb: "This is an ordinary house cat, the sort that might be a familiar for a spellcaster, a Beast Master’s animal friend, or an alternate form for the shape change power.",
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d10",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			 'Climbing' : "d6",
			 'Notice' : "d6",
			 'Stealth' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "3",
		toughness: "3",
		armor: "0",
		abilities: Array(
			{
				name: "Acrobat",
				description: "+2 to Agility rolls to perform acrobatic maneuvers; +1 to Parry if unencumbered."
			},
			{
				name: "Bite/Claw",
				description: "Str."
			},
			{
				name: "Low Light Vision",
				description: "Cats ignore penalties for Dim and Dark lighting."
			},
			{
				name: "Size -2",
				description: "Cats are typically less than a foot high."
			},
			{
				name: "Small",
				description: "Attackers subtract 2 from their attacks to hit."
			}
		),
		book: currentBook,

		page: "p135"
	},
	{
		name: "Dog/Wolf",
		wildcard: 0,
		tags: "animal,",
		image: "http://www.green-humanity.com/uploads/8/0/4/1/8041038/9168429_orig.jpg",
		blurb: "The stats below are for large attack dogs, such as Rottweilers and Doberman Pinschers, as well as wolves, hyenas, and the like.",
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			 'Fighting' : "d6",
			 'Notice' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "5",
		toughness: "4",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Fleet-Footed",
				description: "Roll a d10 when running instead of a d6."
			},
			{
				name: "Go for the Throat",
				description: "Dogs instinctively go for an opponent’s soft spots. With a raise on its attack roll, it hits the target’s most weakly armored location."
			},
			{
				name: "Size -1",
				description: "Dogs are relatively small."
			}
		),
		book: currentBook,

		page: "p135"
	},
	{
		name: "Drake",
		wildcard: 1,
		image: "http://img2.wikia.nocookie.net/__cb20080714125534/finalfantasy/images/5/52/Greater_Drake_ffx-2.jpg",
		blurb: "Drakes are non-flying dragons with animal intelligence (rather than the more human-like sentience of true dragons). They are much more aggressive in direct combat than their distant cousins, however.",
		attributes: {
			agility: "d6",
			smarts: "d6 (A)",
			spirit: "d10",
			strength: "d12+6",
			vigor: "d12"
		},
		skills: {
			 'Fighting' : "d10",
			 'Intimidation' : "d12",
			 'Notice' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "7",
		toughness: "17",
		armor: "4",
		abilities: Array(
			{
				name: "Armor+4",
				description: "Scaly hide."
			},
			{
				name: "Claws/Bite",
				description: "Str+d8."
			},
			{
				name: "Fear",
				description: "Drakes are frightening creatures to behold."
			},
			{
				name: "Fiery Breath",
				description: "Drakes breathe fire using the Cone Template. Every target within this cone may make an Agility roll at –2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire (see Fire). A drake may not attack with its claws or bite in the round it breathes fire."
			},
			{
				name: "Large",
				description: "Attackers add +2 to their attack rolls when attacking a drake due to its large size."
			},
			{
				name: "Size +5",
				description: "Drakes are over 20’ long from snout to tail, and weigh in at over 3000 pounds."
			},
			{
				name: "Tail Lash",
				description: "A drake can sweep all opponents in its rear facing in a 3” long by 6” wide rectangle. This is a standard Fighting attack, and damage is equal to the creature’s Strength –2."
			}
		),
		book: currentBook,

		page: "p136"
	},
	{
		name: "Dragon",
		wildcard: 1,
		image: "http://www.gamefront.com/wp-content/uploads/2008/12/red-dragon.jpg",
		blurb: "Dragons are fire-breathing monsters that bring doom and despair to the villages they ravage. Such creatures should not be fought lightly as they are more than a match for even a party of experienced adventurers. These beasts are quite intelligent as well, and use all of their advantages when confronted by would-be dragon- slayers.",
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d10",
			strength: "d12+9",
			vigor: "d12"
		},
		skills: {
			 'Fighting' : "d10",
			 'Intimidation' : "d12",
			 'Notice' : "d12"
		},
		charisma: "",
		pace: "8",
		parry: "7",
		toughness: "20",
		armor: "4",
		abilities: Array(
			{
				name: "Armor+4",
				description: "Scaly hide."
			},
			{
				name: "Claws/Bite",
				description: "Str+d8."
			},
			{
				name: "Fear-2",
				description: "Anyone who sees a mighty dragon must make a Fear check at –2."
			},
			{
				name: "Fiery Breath",
				description: "Dragons breathe fire using the Cone Template. Every target within this cone may make an Agility roll at –2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. A dragon may not attack with its claws or bite in the round it breathes fire."
			},
			{
				name: "Flight",
				description: "Dragons have a Flying Pace of 24” and Climb 0."
			},
			{
				name: "Hardy",
				description: "The creature does not suffer a wound from being Shaken twice."
			},
			{
				name: "Huge",
				description: "Attackers add +4 to their Fighting or Shooting rolls when attacking a dragon due to its massive size."
			},
			{
				name: "Improved Frenzy",
				description: "If a dragon does not use its Fiery Breath ability, it may make two Fighting attacks with no penalty."
			},
			{
				name: "Level Headed",
				description: "Act on best of two cards."
			},
			{
				name: "Size +8",
				description: "Dragons are massive creatures. This version is over 40’ long from nose to tail, and weighs well over 30,000 pounds."
			},
			{
				name: "Tail Lash",
				description: "The dragon can sweep all opponents in its rear facing in a 3” long by 6” wide square. This is a standard Fighting attack, and damage is equal to the dragon’s Strength –2."
			}
		),
		book: currentBook,

		page: "p136"
	},
	{
		name: "Earth Elemental",
		wildcard: 0,
		image: "http://www.elfwood.com/art/o/m/omarmorsy/earth_elemental.jpg",
		blurb: "Earth elementals manifest as five-foot tall, vaguely man-shaped collections of earth and stone. Though amazingly strong, they are also quite slow and ponderous.",
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+3",
			vigor: "d10"
		},
		skills: {
			 'Fighting' : "d8",
			 'Notice' : "d4"
		},
		charisma: "",
		pace: "4",
		parry: "6",
		toughness: "11",
		armor: "4",
		abilities: Array(
			{
				name: "Armor +4",
				description: "Rocky hide."
			},
			{
				name: "Bash",
				description: "Str+d6"
			},
			{
				name: "Elemental",
				description: "No additional damage from called shots;Fearless; Immune to disease and poison."
			}
		),
		book: currentBook,

		page: "p136"
	},
	{
		name: "Fire Elemental",
		wildcard: 0,
		image: "http://th08.deviantart.net/fs70/PRE/f/2010/036/7/d/Fire_elemental_by_javi_ure.jpg",
		blurb: "Fire elementals appear as man-shaped flame.",
		attributes: {
			agility: "d12+1",
			smarts: "d8",
			spirit: "d8",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d10",
			'Notice' : "d6",
			'Shooting' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "7",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Elemental",
				description: "No additional damage from called shots;Fearless; Immune to disease and poison."
			},
			{
				name: "Invulnerability",
				description: "Fire Elementals are immune to all non-magical attacks, but suffer 1d6 damage when doused in at least a gallon of water, +2 per additional gallon."
			},
			{
				name: "Fiery Touch",
				description: "Str+d6; chance of catching fire."
			},

			{
				name: "Flame Strike",
				description: "Fire elementals can project a searing blast of flame using the Cone Template. Characters within the cone must beat the spirit’s Shooting roll with Agility or suffer 2d10 damage, plus the chance of catching fire."
			}

		),
		book: currentBook,

		page: "p136"
	},
	{
		name: "Water Elemental",
		wildcard: 0,
		image: "http://www.santharia.com/pictures/quellion/quellion_pics/water_elemental.jpg",
		blurb: "Water spirits are frothing, man-shaped creatures of water and sea-foam.",
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d6",
			'Shooting' : "d8",
			'Swimming' : "d12+2"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "7",
		armor: "0",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 12"
			},
			{
				name: "Elemental",
				description: "No additional damage from called shots;Fearless; Immune to disease and poison."
			},
			{
				name: "Invulnerability",
				description: "Water elementals are immune to all non-magical attacks except fire. A torch or lantern causes them 1d6 damage but is instantly put out if it hits."
			},
			{
				name: "Seep",
				description: "Water elementals can squeeze through any porous gap as if it were Difficult Ground."
			},
			{
				name: "Slam",
				description: "Str+d6; nonleathal damage."
			},

			{
				name: "Waterspout",
				description: "Water spirits can project a torrent of water using the Cone Template. Those in the area may make an Agility roll opposed by the spirit’s Shooting to avoid it or suffer 2d8 nonlethal damage. This puts out any normal fires."
			}

		),
		book: currentBook,

		page: "p137"
	},
	{
		name: "Air Elemental",
		wildcard: 0,
		image: "http://www.santharia.com/pictures/quellion/quellion_pics/air_elemental.jpg",
		blurb: "Air elementals manifest as sentient whirlwinds.",
		attributes: {
			agility: "d12",
			smarts: "d6",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d8",
			'Shooting' : "d6"
		},
		charisma: "",
		pace: "-",
		parry: "6",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Elemental",
				description: "No additional damage from called shots;Fearless; Immune to disease and poison."
			},
			{
				name: "Ethereal",
				description: "Air Elementals can maneuver through any non-solid surface. They can seep through the cracks in doors, bubble through water, and rush through sails."
			},
			{
				name: "Flight",
				description: "Air Elementals fly at a rate of 6” with a Climb of 3. They may not run."
			},
			{
				name: "Invulnerability:",
				description: " Immune to all non-magical attacks except fire."
			},
			{
				name: "Push",
				description: "The air elemental can use an action to push a single adjacent target 1d6” directly away with a concentrated blast of air. The victim makes a Strength roll, with each success and raise reducing the amount moved by 1” (to a minimum of 0)."
			},
			{
				name: "Wind Blast",
				description: "Air Elementals can send directed blasts of air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d6 points of nonlethal damage."
			},
			{
				name: "Whirlwind",
				description: "As long as the air elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check and if the air elemental wins then its foe is pulled into the swirling maelstrom of its body. While trapped, the target is at –2 on all rolls including damage, to hit and Strength rolls to free himself. The air elemental cannot move as long as it wants to keep foes trapped inside its form."
			}

		),
		book: currentBook,

		page: "p137"
	},
	{
		name: "Giant Worm",
		wildcard: 1,
		image: "",
		blurb: "Massive worms tunneling beneath the earth to gobble up unsuspecting adventurers are sometimes found in lonesome flatlands. The things sense vibrations through the earth, hearing a walking person at about 200 yards. The stats below are for a monster some 50’ long.",
		attributes: {
			agility: "d6",
			smarts: "d6 (A)",
			spirit: "d10",
			strength: "d12+10",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d10",
			'Stealth' : "d10"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "22",
		armor: "4",
		abilities: Array(
			{
				name: "Armor +4",
				description: "Scaly Hide."
			},
			{
				name: "Bite",
				description: "Str+d8."
			},
			{
				name: "Burrow (20\")",
				description: "Giant worms can disappear and reappear on the following action anywhere within 20\"."
			},
			{
				name: "Gargantuan",
				description: " The worms are Huge and thus suffer +4 to ranged attacks against them. Their attacks count as Heavy Weapons, and they add their Size to Strength rolls."
			},
			{
				name: "Hardy",
				description: "The creature does not suffer a wound from being Shaken twice."
			},
			{
				name: "Size +10",
				description: "Giant worms are usually well over 50’long and 10’ or more in diameter."
			},
			{
				name: "Slam",
				description: "Giant worms attempt to rise up and crush their prey beneath their massive bodies. This is an opposed roll of the creature’s Fighting versus the target’s Agility. If the worm wins, the victim suffers 4d6 damage."
			}

		),
		book: currentBook,

		page: "p137"
	},
	{
		name: "Ghost",
		wildcard: 0,
		image: "",
		blurb: "Spectres, shades, and phantoms sometimes return from death to haunt the living or fulfill some lost goal.",
		attributes: {
			agility: "d6",
			smarts: "d6",
			spirit: "d10",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d12+2",
			'Notice' : "d12",
			'Taunt' : "d10",
			'Stealth' : "d12+4",
			'Throwing' : "d12"
		},
		charisma: "",
		pace: "-",
		parry: "5",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Ethereal",
				description: "Ghosts are immaterial and can only be harmed by magical attacks."
			},
			{
				name: "Fear -2",
				description: "Ghosts cause Fear checks at –2 when they let themselves be seen."
			}

		),
		book: currentBook,

		page: "p137"
	},
	{
		name: "Goblin",
		wildcard: 0,
		image: "http://cdn.obsidianportal.com/assets/62147/goblins2.jpg",
		blurb: "Goblins of myth and legend are far more sinister creatures than some games and fiction portray. In the original tales, they were terrifying creatures that stole into homes in the middle of the night to steal and eat unruly children. The statistics here work for both dark “fairy tale” goblins as well as those found alongside orcs in contemporary roleplaying games.",
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d6",
			'Fighting' : "d6",
			'Notice' : "d6",
			'Taunt' : "d6",
			'Shooting' : "d8",
			'Stealth' : "d10",
			'Throwing' : "d6",
			'Swimming' : "d6"
		},
		charisma: "",
		pace: "5",
		parry: "5",
		toughness: "4",
		armor: "0",
		abilities: Array(
			{
				name: "Infravision",
				description: "Goblins halve penalties for dark lighting against living targets (round down)."
			},
			{
				name: "Size -1",
				description: "Goblins stand 3-4’ tall."
			}

		),
		book: currentBook,

		page: "p137-p138"
	},
	{
		name: "Horse, Riding",
		tags: "animal,",
		wildcard: 0,
		image: "http://horsebreedsinfo.com/images/brown_horse.jpg",
		blurb: "Riding horses are medium-sized animals that manage a good compromise between speed and carrying capacity.",
		attributes: {
			agility: "d8",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d12",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "10",
		parry: "4",
		toughness: "8",
		armor: "0",
		abilities: Array(
			{
				name: "Fleet-Footed",
				description: "Horses roll a d8 when running instead of a d6."
			},
			{
				name: "Kick",
				description: "Str."
			},
			{
				name: "Size +2",
				description: "Riding horses weigh between 800 and 1000 pounds."
			}

		),
		book: currentBook,

		page: "p138"
	},
	{
		name: "Horse, War",
		tags: "animal,",
		wildcard: 0,
		image: "http://fc09.deviantart.net/fs44/f/2009/156/0/b/War_Horse_by_BenWootten.jpg",
		blurb: "War horses are large beasts trained for aggression. They are trained to fight with both hooves, either to their front or their rear. In combat, the animal attacks any round its rider doesn’t make a trick maneuver of some kind.",
		attributes: {
			agility: "d6",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d12+2",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d6"
		},
		charisma: "",
		pace: "10",
		parry: "4",
		toughness: "8",
		armor: "0",
		abilities: Array(
			{
				name: "Fleet-Footed",
				description: "Horses roll a d8 when running instead of a d6."
			},
			{
				name: "Kick",
				description: "Str+d4."
			},
			{
				name: "Size +3",
				description: "Warhorses are large creatures bred for their power and stature."
			}

		),
		book: currentBook,

		page: "p138"
	},
	{
		name: "Lich",
		tags: "undead,",
		wildcard: 1,
		image: "",
		blurb: "Perhaps the most diabolical creature in any fantasy land is the lich—a necromancer so consumed with the black arts that he eventually becomes undead himself.",
		attributes: {
			agility: "d6",
			smarts: "d12+2",
			spirit: "d10",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d12",
			'Knowledge (Occult)' : "d12+2",
			'Notice' : "d10",
			'Spellcasting' : "d12"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "15",
		armor: "6",
		gear: "Magical armor(+6), other magical items",
		abilities: Array(
			{
				name: "Death Touch",
				description: "Liches drain the lives of those around them with a touch. Instead of a normal attack, a lich may make a touch attack. Every raise on its Fighting roll automatically inflicts one wound to its target."
			},
			{
				name: "Spells",
				description: "Liches have 50 Power Points and know most every spell available."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; called shots do no extra damage; ignores wound penalties."
			},
			{
				name: "Zombie",
				description: "Liches are necromancers first and foremost. The undead they raise through the zombie spell are permanent, so they are usually surrounded by 4d10 skeletons or zombies as they choose. Some liches have entire armies of the undead at their disposal."
			}

		),
		book: currentBook,

		page: "p138"
	},
	{
		name: "Lion",
		wildcard: 0,
		tags: "animal,",
		image: "http://news.bbcimg.co.uk/media/images/66231000/jpg/_66231792_z9340587-male_african_lion-spl.jpg",
		blurb: "The kings of the jungle are fierce predators, particularly in open grassland where their prey cannot seek refuge.",
		attributes: {
			agility: "d8",
			smarts: "d6 (A)",
			spirit: "d10",
			strength: "d12",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "8",
		armor: "0",
		abilities: Array(
			{
				name: "Bite or Claw",
				description: "Str+d6."
			},
			{
				name: "Improved Frenzy",
				description: "Lions may make two Fighting attacks each action at no penalty."
			},
			{
				name: "Low Light Vision",
				description: "Lions ignore penalties for Dim and Dark lighting."
			},
			{
				name: "Pounce",
				description: "Lions often pounce on their prey to best bring their mass and claws to bear. It can leap 1d6” to gain +4 to its attack and damage. Its Parry is reduced by –2 until its next action when performing the maneuver however."
			},
			{
				name: "Size +2",
				description: "Male lions can weigh over 500 pounds."
			}

		),
		book: currentBook,

		page: "p138"
	},
	{
		name: "Mech (Sentinel)",
		wildcard: 0,
		image: "",
		blurb: "The stats below are for a 12' high mechanized sentinel such as might be found in a typical hard sci-fi campaign. This is a light patrol-style platform with reasonable intelligence, a sensor package, and high maneuverability.",
		blurb_extra: "Larger mechs outfitted for battle have substantially more armor, are larger, and have more specialized weaponry.",
		attributes: {
			agility: "d4",
			smarts: "d6",
			spirit: "d4",
			strength: "d6",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d10",
			'Shooting' : "d8"
		},
		charisma: "",
		pace: "10",
		parry: "5",
		toughness: "10",
		armor: "4",
		gear: "Typically a machine gun or flamethrower.",
		abilities: Array(
			{
				name: "Armor+4",
				description: ""
			},
			{
				name: "Construct",
				description: "+2 to recover from being Shaken; called shots do no extra damage; does not suffer from disease or poison."
			},
			{
				name: "Fearless",
				description: "Mechs are immune to fear and Intimidation, but may be smart enough to react to fear-causing situations appropriately."
			},
			{
				name: "Sensors",
				description: "Sentinel mechs are equipped with sensor packages that halve penalties for darkness, can detect sounds, or record conversations via directional microphones."
			}
		),
		book: currentBook,

		page: "p138"
	},
	{
		name: "Minotaur",
		wildcard: 0,
		image: "",
		blurb: "Minotaurs stand over 7’ tall and have massive, bull-like heads and horns. In many fantasy worlds, they are used as guardians of labyrinths. In others, they are simply another race of creatures occupying a fantastically savage setting. In all cases, they are fierce beasts eager for battle and the taste of their opponents’ flesh.",
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d12+2",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d12",
			'Notice' : "d10",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "8",
		parry: "8",
		toughness: "11",
		armor: "1",
		gear: "Leather armor (+1), spear (Str+d6, Reach 1, Parry+1).",
		abilities: Array(
			{
				name: "Horns",
				description: "Str+d4"
			},
			{
				name: "Fleet-Footed",
				description: "Minotaurs roll d10s instead of d6s when running."
			},
			{
				name: "Gore",
				description: "Minotaurs use this maneuver to gore their opponents with their horns. If they can charge at least 6” before attacking, they add +4 to their damage total."
			},
			{
				name: "Size +2",
				description: "Minotaurs stand over 7’ tall."
			}
		),
		book: currentBook,

		page: "p139"
	},
	{
		name: "Mule",
		tags: "animal,",
		wildcard: 0,
		image: "http://www.lovelongears.com/curly_spring05.jpg",
		blurb: "Mules are a cross between a donkey and a horse, and are usually used to haul heavy goods or pull wagons.",
		blurb_extra: "Like any good pet, the GM should feel free to give the mule a little personality. The expression “stubborn as a mule” certainly comes to mind.",
		attributes: {
			agility: "d4",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Notice' : "d4"
		},
		charisma: "",
		pace: "6",
		parry: "2",
		toughness: "8",
		armor: "0",
		abilities: Array(
			{
				name: "Fleet-Footed",
				description: "Mules roll d10s instead of d6s when running."
			},
			{
				name: "Kick",
				description: "Str."
			},
			{
				name: "Ornery",
				description: "Mules are contrary creatures. Characters must subtract 1 from their Riding rolls when riding them."
			},

			{
				name: "Size +2",
				description: "Mule sare stocky creatures weighing up to 1000 pounds."
			}
		),
		book: currentBook,

		page: "p139"
	},
	{
		name: "Ogre",
		wildcard: 0,
		image: "http://cdn.obsidianportal.com/assets/161371/Ogre_Warlord.jpg",
		blurb: "Ogres are kin to orcs and lesser giants. They are often taken in by orc clans, who respect the dumb brutes for their savagery and strength. Orcs often pit their “pet” ogres in savage combats against their rivals’ ogres.",
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+3",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d4",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "7",
		parry: "6",
		toughness: "12",
		armor: "1",
		gear: "Thick hides (+1), massive club (Str+d8).",
		abilities: Array(
			{
				name: "Size +3",
				description: "Most ogres are over 8’ tall with pot-bellies and massive arms and legs."
			},
			{
				name: "Sweep",
				description: "May attack all adjacent characters at –2."
			}
		),
		book: currentBook,

		page: "p139"
	},
	{
		name: "Orc",
		wildcard: 0,
		image: "https://www.frontlinegaming.org/wp-content/uploads/2013/01/4e_DnD_Orcs_by_RalphHorsley1.jpeg",
		blurb: "Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.",
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Shooting' : "d6",
			'Stealth' : "d6",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "8",
		armor: "1",
		gear: "Leather armor (+1), scimitar (Str+d8).",
		abilities: Array(
			{
				name: "Infravision",
				description: "Halves penalties for poor light vs. warm targets."
			},
			{
				name: "Size +1",
				description: "Orcs are slightly larger than humans."
			}
		),
		book: currentBook,

		page: "p139"
	},
	{
		name: "Orc Chieftan",
		wildcard: 1,
		image: "http://fc09.deviantart.net/fs71/f/2013/098/0/0/orc_chieftain_final_by_director_16-d60veug.jpg",
		blurb: "The leader of small orc clans is always the most deadly brute in the bunch. Orc chieftains generally have a magical item or two in settings where such things are relatively common (most “swords and sorcery” worlds).",
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d12",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Shooting' : "d8",
			'Stealth' : "d6",
			'Throwing' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "8",
		toughness: "11",
		armor: "3",
		gear: "Plate chest plate (+3), chain arms and legs (+2), battle axe (Str+d10).",
		abilities: Array(
			{
				name: "Infravision",
				description: "Halves penalties for poor light vs. warm targets."
			},
			{
				name: "Size +1",
				description: "Orcs are slightly larger than humans."
			},
			{
				name: "Sweep",
				description: "May attack all adjacent characters at –2 penalty."
			}
		),
		book: currentBook,

		page: "p139-p140"
	},
	{
		name: "Shark, Great White",
		tags: "animal,",
		wildcard: 0,
		image: "http://24.media.tumblr.com/b2fb55d2fcc1a2c4a79e86b092ef2724/tumblr_mqogn2Sind1r15h5mo1_500.jpg",
		blurb: "These statistics cover great whites, 18 to 25 feet long. Larger specimens surely exist.",
		attributes: {
			agility: "d8",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d12+4",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d12",
			'Swimming' : "d10"
		},
		charisma: "",
		pace: "-",
		parry: "7",
		toughness: "12",
		armor: "0",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 10."
			},
			{
				name: "Bite",
				description: "Str+d8."
			},
			{
				name: "Hardy",
				description: "The creature does not suffer a wound from being Shaken twice."
			},
			{
				name: "Large",
				description: "Attackers add +2 to their attack rolls when attacking a great white due to its large size."
			},
			{
				name: "Size+4",
				description: "Great whites can grow up to 25' in length."
			}
		),
		book: currentBook,

		page: "p140"
	},
	{
		name: "Shark, Medium Maneater",
		tags: "animal,",
		wildcard: 0,
		image: "http://www.fearbeneath.com/wp-content/gallery/tiger-sharks/Tiger-Shark-Roger-Horrocks.jpg",
		blurb: "These statistics cover most medium sized mankillers, such as tiger sharks an bulls.",
		attributes: {
			agility: "d8",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d12",
			'Swimming' : "d10"
		},
		charisma: "",
		pace: "-",
		parry: "6",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 10."
			},
			{
				name: "Bite",
				description: "Str+d6."
			}
		),
		book: currentBook,

		page: "p140"
	},
	{
		name: "Skeleton",
		wildcard: 0,
		image: "http://wiki.chronicles-of-blood.com/images/thumb/Creatures-Skeleton.jpg/350px-Creatures-Skeleton.jpg",
		tags: "undead,",
		blurb: "The skin has already rotted from these risen dead, leaving them slightly quicker than their flesh laden zombie counterparts. They are often found swarming in vile necromancer legions.",
		attributes: {
			agility: "d8",
			smarts: "d4",
			spirit: "d4",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d6",
			'Notice' : "d4",
			'Swimming' : "d6"
		},
		charisma: "",
		pace: "7",
		parry: "5",
		toughness: "7",
		armor: "0",
		gear: "Varies",
		abilities: Array(
			{
				name: "Bony Claws",
				description: "Str+d4."
			},
			{
				name: "Fearless",
				description: "Skeletons are immune to Fear and Intimidation."
			},
			{
				name: "Undead",
				description: "+2 toughness; +2 to recover from being Shaken; called shots do no extra damage."
			}
		),
		book: currentBook,

		page: "p140"
	},
	{
		name: "Snake, Constrictor",
		tags: "animal,",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Pythons, boa constrictors, and other snakes over 15’ long are rarely deadly to man in the real world because they aren’t particularly aggressive toward such large prey. In games, however, such snakes might be provoked, drugged, or just plain mean.",
		attributes: {
			agility: "d4",
			smarts: "d4 (A)",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d10"
		},
		charisma: "",
		pace: "4",
		parry: "5",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str."
			},
			{
				name: "Constrict",
				description: "Large constrictors have very little chance of entangling active man-sized prey in the real world— they must attack while their victim is sleeping, stunned, paralyzed, and so on. Constrictors in pulp and other fantastic genres might be far more deadly. These creatures bite when they succeed at a Fighting roll, and entangle when they succeed with a raise. The round they entangle and each round thereafter, they cause damage to their prey equal to Str+d6. The prey may attempt to escape on his action by getting a raise on an opposed Strength roll."
			}
		),
		book: currentBook,

		page: "p140"
	},
	{
		name: "Snake, Venomous",
		tags: "animal,",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Here are the stats for Taipans (Australian brown snakes), cobras, and similar medium- sized snakes with extremely deadly poison.",
		attributes: {
			agility: "d8",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d4",
			vigor: "d4"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d12"
		},
		charisma: "",
		pace: "4",
		parry: "6",
		toughness: "2",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str."
			},
			{
				name: "Poison",
				description: "See the Poison rules on " + currentBook + " page 89."
			},
			{
				name: "Quick",
				description: "Snakes are notoriously fast. They may discard Action Cards of 5 or lower and draw another. They must keep the replacement card, however."
			},
			{
				name: "Size-2",
				description: "Most venomous snakes are 4-6’ in length, but only a few inches thick."
			},
			{
				name: "Small",
				description: "Anyone attacking a snake must subtract 2 from his attack rolls."
			}
		),
		book: currentBook,

		page: "p140"
	},
	{
		name: "Spider, Giant",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Giant spiders are about the size of large dogs and live in nests of 1d6+2 arachnids. They frequently go hunting in these packs when prey is scarce in their home lair.",
		blurb_extra: "Their dens are littered with the bones and treasures of their victims, often providing ripe pickings for those brave enough to venture within.",
		attributes: {
			agility: "d10",
			smarts: "d4 (A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d12+2",
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Shooting' : "d10",
			'Stealth' : "d10"
		},
		charisma: "",
		pace: "8",
		parry: "6",
		toughness: "5",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Poison (-4)",
				description: "See the Poison rules on " + currentBook + " page 89."
			},
			{
				name: "Wall Walker",
				description: "Can walk on vertical surfaces at Pace 8."
			},
			{
				name: "Webbing",
				description: "The spiders can cast webs from their thorax that are the size of Small Burst Templates. This is a Shooting roll with a range of 3/6/12. Anything in the web must cut or break their way free (Toughness 7). Webbed characters can still fight, but all physical actions are at –4."
			}
		),
		book: currentBook,

		page: "p140"
	},
	{
		name: "Swarm",
		tags: "animal,",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Sometimes the most deadly foes come in the smallest packages. The swarm described below can be of most anything— from biting ants to stinging wasps to filthy rats.",
		blurb_extra: "The swarm is treated just like a creature. When it is wounded, the swarm is effectively dispersed.",
		blurb_extra_2: "Swarms cover an area equal to a Medium Burst Template and attack everyone within every round.",
		attributes: {
			agility: "d10",
			smarts: "d4 (A)",
			spirit: "d12",
			strength: "d8",
			vigor: "d10"
		},
		skills: {
			'Notice' : "d6"
		},
		charisma: "",
		pace: "10",
		parry: "4",
		toughness: "7",
		armor: "0",
		abilities: Array(
			{
				name: "Bite or Sting",
				description: "Swarms inflict hundreds of tiny bites every round to their victims, hitting automatically and causing 2d4 damage to everyone in the template. Damage is applied to the least armored location (victims in completely sealed suits are immune)."
			},
			{
				name: "Split",
				description: "Some swarms are clever enough to split into two smaller swarms (Small Burst Templates) should their foes split up. The Toughness of these smaller swarms is lowered by –2 (to 5 each)."
			},
			{
				name: "Swarm",
				description: "Parry +2; Because the swarm is composed of scores, hundreds, or thousands of creatures, cutting and piercing weapons do no real damage. Area-effect weapons work normally, and a character can stomp to inflict his damage in Strength each round. Swarms are usually foiled by jumping in water (unless they are aquatic pests, such as piranha)."
			}
		),
		book: currentBook,

		page: "p141"
	},
	{
		name: "Troll",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Trolls in myths and legends are horrid, flesh-eating creatures who live in deep woods, beneath bridges, or in hidden mountain caves. In modern games and fiction, trolls are monsters with the ability to regenerate damage and a weakness to fire. These statistics reflect both backgrounds.",
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d6",
			strength: "d12+2",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d6",
			'Swimming' : "d6",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "7",
		parry: "6",
		toughness: "10",
		armor: "1",
		gear: "Spiked Club (Str+d8)",
		abilities: Array(
			{
				name: "Armor+1",
				description: "Rubbery hide."
			},
			{
				name: "Claws",
				description: "Str+d4."
			},
			{
				name: "Improved Sweep",
				description: "May attack all adjacent foes at no penalty."
			},
			{
				name: "Fast Regeneration",
				description: "Trollsmayattemptanaturalhealing roll every round unless their wounds were caused by fire or flame. This occurs whether the troll is a Wild Card leader or an Extra. If the latter, a downed troll actually returns to action if it heals itself (and is not Shaken—even if it was before being Incapacitated)."
			},
			{
				name: "Size+2",
				description: "Trolls are tall, lanky creatures over 8’ tall."
			}
		),
		book: currentBook,

		page: "p141"
	},
	{
		name: "Vampire, Ancient",
		wildcard: 1,
		image: "http://static.ddmcdn.com/gif/vampire-power-1.jpg",
		tags: "undead,",
		blurb: "Blood-drinkers of lore are common in many fantasy games. The statistics below are for a vampire somewhat below the legendary Dracula, but far above those bloodsuckers fresh from the grave (detailed next). The abilities listed below are standard—the GM may want to add other Edges as befits the vampire’s previous lifestyle.",
		attributes: {
			agility: "d8",
			smarts: "d10",
			spirit: "d10",
			strength: "d12+3",
			vigor: "d12"
		},
		skills: {
			'Fighting' : "d10",
			'Intimidation' : "d12",
			'Notice' : "d8",
			'Shooting' : "d8",
			'Swimming' : "d8",
			'Throwing' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "7",
		toughness: "10",
		armor: "0",
		abilities: Array(
			{
				name: "Change Form",
				description: "As an action, a vampire can change into a wolf or bat with a Smarts roll at –2. Changing back into humanoid form requires a Smarts roll."
			},
			{
				name: "Charm",
				description: "Vampires can use the puppet power on the opposite sex using their Smarts as their arcane skill. They can cast and maintain the power indefinitely, but may only affect one target at a time."
			},
			{
				name: "Children of the Night",
				description: "Ancient vampires have the ability to summon and control wolves or rats. This requires an action and a Smarts roll at –2. If successful, 1d6 wolves or 1d6 swarms of rats (see Swarm) come from the surrounding wilds in 1d6+2 rounds."
			},
			{
				name: "Claws",
				description: "Str +d4."
			},
			{
				name: "Improved Frenzy",
				description: "Vampires may make two attacks per round without penalty."
			},
			{
				name: "Invulnerability",
				description: "Vampires can only be harmed by their Weaknesses. They may be Shaken by other attacks, but never wounded."
			},
			{
				name: "Level Headed",
				description: "Vampires act on the best of two cards."
			},
			{
				name: "Mist",
				description: "Greater vampires have the ability to turn into mist. This requires an action and a Smarts roll at –2."
			},
			{
				name: "Sire",
				description: "Anyone slain by a vampire has a 50% chance of rising as a vampire themselves in 1d4 days."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; called shots do no extra damage (except to the heart—see below). No wound penalties."
			},
			{
				name: "Weakness (Sunlight)",
				description: "Vampires catch fire if any part of their skin is exposed to direct sunlight. After that they suffer 2d10 damage per round until they are dust. Armor does not protect."
			},
			{
				name: "Weakness (Holy Symbol)",
				description: "A character may keep a vampire at bay by displaying a holy symbol. A vampire who wants to directly attack the victim must beat her in an opposed test of Spirit."
			},
			{
				name: "Weakness (Holy Water)",
				description: "A vampire sprinkled with holy water is Fatigued. If immersed, he combusts as if it were direct sunlight (see above)."
			},
			{
				name: "Weakness (Invitation Only)",
				description: "Vampires cannot enter a private dwelling without being invited. They may enter public domains as they please."
			},
			{
				name: "Weakness (Stake Through the Heart)",
				description: "A vampire hit with a called shot to the heart (–4) must make a Vigor roll versus the damage total. If successful, it takes damage normally. If it fails, it disintegrates to dust."
			}

		),
		book: currentBook,

		page: "p141"
	},
	{
		name: "Vampire, Young",
		wildcard: 0,
		image: "http://upload.wikimedia.org/wikipedia/commons/f/f8/VampireE3.jpg",
		tags: "undead,",
		blurb: "Blood-drinkers of lore are common in many fantasy games. This is a relatively young vampire minion.",
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d8",
			strength: "d12+1",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d8",
			'Notice' : "d6",
			'Shooting' : "d6",
			'Swimming' : "d8",
			'Throwing' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "9",
		armor: "0",
		abilities: Array(
			{
				name: "Claws",
				description: "Str +d4."
			},
			{
				name: "Frenzy",
				description: "Vampires can make two attacks per round with a –2 penalty to each attack."
			},
			{
				name: "Level Headed",
				description: "Vampires act on the best of two cards."
			},
			{
				name: "Invulnerability",
				description: "Vampires can only be harmed by their Weaknesses. They may be Shaken by other attacks, but never wounded."
			},
			{
				name: "Sire",
				description: "Anyone slain by a vampire has a 50% chance of rising as a vampire themselves in 1d4 days."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; called shots do no extra damage (except to the heart—see below). No wound penalties."
			},
			{
				name: "Weakness (Sunlight)",
				description: "Vampires catch fire if any part of their skin is exposed to direct sunlight. After that they suffer 2d10 damage per round until they are dust. Armor does not protect."
			},
			{
				name: "Weakness (Holy Symbol)",
				description: "A character may keep a vampire at bay by displaying a holy symbol. A vampire who wants to directly attack the victim must beat her in an opposed test of Spirit."
			},
			{
				name: "Weakness (Holy Water)",
				description: "A vampire sprinkled with holy water is Fatigued. If immersed, he combusts as if it were direct sunlight (see above)."
			},
			{
				name: "Weakness (Invitation Only)",
				description: "Vampires cannot enter a private dwelling without being invited. They may enter public domains as they please."
			},
			{
				name: "Weakness (Stake Through the Heart)",
				description: "A vampire hit with a called shot to the heart (–4) must make a Vigor roll versus the damage total. If successful, it takes damage normally. If it fails, it disintegrates to dust."
			}

		),
		book: currentBook,

		page: "p142"
	},
	{
		name: "Werewolf",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "When a full moon emerges, humans infected with lycanthropy lose control and become snarling creatures bent on murder. Some embrace their cursed state and revel in the destruction they cause.",
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d6",
			strength: "d12+2",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d12+2",
			'Intimidation' : "d10",
			'Notice' : "d12",
			'Swimming' : "d10",
			'Stealth' : "d10",
			'Tracking' : "d10"
		},
		charisma: "",
		pace: "8",
		parry: "9",
		toughness: "7",
		armor: "0",
		abilities: Array(
			{
				name: "Claws",
				description: "Str +d8."
			},
			{
				name: "Infection",
				description: "Anyone slain by a werewolf has a 50% chance of rising as a werewolf themselves. The character involuntarily transforms every full moon. He gains control of his lycanthropy only after 1d6 years as a werewolf."
			},
			{
				name: "Invulnerability",
				description: "Werewolves can only be Shaken by weapons that are not silver—not wounded."
			},
			{
				name: "Infravision",
				description: "Werewolves can see heat and halve penalties for bad lighting when attacking living targets."
			},
			{
				name: "Weakness",
				description: "Werewolves suffer normal damage from silver weapons."
			}

		),
		book: currentBook,

		page: "p142"
	},
	{
		name: "Zombie",
		wildcard: 0,
		image: "http://cdn.foodbeast.com.s3.amazonaws.com/content/wp-content/uploads/2013/02/zombies-620x412.jpeg",
		tags: "undead,",
		blurb: "These walking dead are typical groaning fiends looking for fresh meat.",
		attributes: {
			agility: "d6",
			smarts: "d4",
			spirit: "d4",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Intimidation' : "d6",
			'Notice' : "d4",
			'Shooting' : "d6"
		},
		charisma: "",
		pace: "4",
		parry: "5",
		toughness: "7",
		armor: "0",
		abilities: Array(
			{
				name: "Claws",
				description: "Str."
			},
			{
				name: "Fearless",
				description: "Zombies are immune to Fear and Intimidation."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; called shots do no extra damage (except to the head)."
			},
			{
				name: "Weakness (Head):",
				description: "Shots to a zombie’s head are +2 damage."
			}

		),
		book: currentBook,

		page: "p142"
	}
));
