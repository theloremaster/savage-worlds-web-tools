if(!chargen_gear)
	var chargen_gear = Array();

chargen_gear = chargen_gear.concat( Array(
	/* Hand Weapons */
	{
		name: "Dagger",
		damage: "Str+d4",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Blades",
		weight: 1,
		cost: 25,
		notes: Array(),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Great Sword",
		damage: "Str+d10",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Blades",
		weight: 12,
		cost: 400,
		notes: Array(
			"Parry -1",
			"2 hands"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Flail",
		damage: "Str+d6",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Blades",
		weight: 8,
		cost: 200,
		notes: Array(
			"Ignores Shield Parry and Cover bonus"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Katana",
		damage: "Str+d6+2",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Blades",
		weight: 6,
		cost: 1000,
		ap: 2,
		notes: Array(
			"AP 2"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Long Sword",
		damage: "Str+d8",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Blades",
		weight: 8,
		cost: 300,
		ap: 0,
		notes: Array(
			"Includes Scimitars"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Rapier",
		damage: "Str+d4",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Blades",
		weight: 3,
		cost: 150,
		ap: 0,
		notes: Array(
			"Parry +1"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Short Sword",
		damage: "Str+d6",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Blades",
		weight: 4,
		cost: 200,
		ap: 0,
		notes: Array(
			"Includes Calvary Sabers"
		),
		book: books_list[0],
		page: "p60",
	},

	/* Axes and Mauls */
	{
		name: "Axe",
		damage: "Str+d6",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Axes and Mauls",
		weight: 2,
		cost: 200,
		ap: 0,
		notes: Array(
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Battle Axe",
		damage: "Str+d8",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Axes and Mauls",
		weight: 10,
		cost: 300,
		ap: 0,
		notes: Array(
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Great Axe",
		damage: "Str+d10",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Axes and Mauls",
		weight: 15,
		cost: 500,
		ap: 1,
		notes: Array(
			"AP 1",
			"Parry -1",
			"2 hands"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Maul",
		damage: "Str+d8",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Axes and Mauls",
		weight: 20,
		cost: 400,
		ap: 0,
		notes: Array(
			"AP 2 vs rigid armor",
			"Parry -1",
			"2 hands"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Warhammer",
		damage: "Str+d6",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Axes and Mauls",
		weight: 8,
		cost: 250,
		ap: 0,
		notes: Array(
			"AP 1 vs rigid armor"
		),
		book: books_list[0],
		page: "p60",
	},
	/* Pole Arms */
	{
		name: "Halberd",
		damage: "Str+d8",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Pole Arms",
		weight: 15,
		cost: 250,
		ap: 0,
		notes: Array(
			"Reach 1",
			"2 hands"
		),
		book: books_list[0],
		page: "p60",
	},

	{
		name: "Lance",
		damage: "Str+d8",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Pole Arms",
		weight: 10,
		cost: 300,
		ap: 0,
		notes: Array(
			"Reach 2",
			"AP 2 when charging",
			"mounted combat only"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Pike",
		damage: "Str+d8",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Pole Arms",
		weight: 25,
		cost: 400,
		ap: 0,
		notes: Array(
			"Reach 2",
			"2 hands"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Staff",
		damage: "Str+d4",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Pole Arms",
		weight: 8,
		cost: 10,
		ap: 0,
		notes: Array(
			"Parry + 1",
			"Reach 1",
			"2 hands"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Spear",
		damage: "Str+d6",
		class: "Medieval Hand Weapons",
		general: "Hand Weapons",
		type: "Pole Arms",
		weight: 5,
		cost: 100,
		ap: 0,
		notes: Array(
			"Parry + 1",
			"Reach 1",
			"2 hands"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Bangstick",
		damage: "3d6",
		class: "Modern Hand Weapons",
		general: "Hand Weapons",
		type: "",
		weight: 2,
		cost: 5,
		ap: 0,
		notes: Array(
			"Basically a shotgun shell on a stick used in melee; must be reloaded with a fresh shell (1 action)"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Bayonet",
		damage: "Str+d4",
		class: "Modern Hand Weapons",
		general: "Hand Weapons",
		type: "",
		weight: 1,
		cost: 25,
		ap: 0,
		notes: Array(
			"A bayonet affixed to a rifle increases the damage to Str+d6, Parry +1, Reach 1, 2 hands"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Billy Club/Baton",
		damage: "Str+d4",
		class: "Modern Hand Weapons",
		general: "Hand Weapons",
		type: "",
		weight: 1,
		cost: 20,
		ap: 0,
		notes: Array(
			"Carried by most law-enforcement officials"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Brass Knuckles",
		damage: "Str+d4",
		class: "Modern Hand Weapons",
		general: "Hand Weapons",
		type: "",
		weight: 1,
		cost: 10,
		ap: 0,
		notes: Array(
			"A hero wearing brass knuckles is considered to be an Unarmed Attacker"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Switchblade",
		damage: "Str+d4",
		class: "Modern Hand Weapons",
		general: "Hand Weapons",
		type: "",
		weight: 1,
		cost: 10,
		ap: 0,
		notes: Array(
			"–2 to be Noticed if hidden"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Survival Knife",
		damage: "Str+d4",
		class: "Modern Hand Weapons",
		general: "Hand Weapons",
		type: "",
		weight: 3,
		cost: 50,
		ap: 0,
		notes: Array(
			"Contains supplies that add +1 to Survival rolls"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Molecular Knife",
		damage: "Str+d4+2",
		class: "Futuristic Hand Weapons",
		general: "Hand Weapons",
		type: "",
		weight: 1,
		cost: 250,
		ap: 2,
		notes: Array(
			"AP 2, Cannot be thrown"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Molecular Sword",
		damage: "Str+d8+2",
		class: "Futuristic Hand Weapons",
		general: "Hand Weapons",
		type: "",
		weight: 8,
		cost: 500,
		ap: 4,
		notes: Array(
			"AP 4"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Laser Sword",
		damage: "Str+d6+8",
		class: "Futuristic Hand Weapons",
		general: "Hand Weapons",
		type: "",
		weight: 5,
		cost: 1000,
		ap: 12,
		notes: Array(
			"AP 12, laser swords aren’t terribly realistic, but
are staples in many space-opera campaigns"
		),
		book: books_list[0],
		page: "p60",
	},
	{
		name: "Leather",
		class: "Medieval Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 15,
		cost: 50,
		armor: 1,
		notes: Array(
			"Covers torso, arms, legs"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Chain Hauberk (long coat)",

		class: "Medieval Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 25,
		cost: 300,
		armor: 2,
		notes: Array(
			"Covers torso, arms, legs"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Plate Corselet",
		class: "Medieval Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 25,
		cost: 400,
		armor: 3,
		notes: Array(
			"Covers torso"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Plate Arms (vambrace)",
		class: "Medieval Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 10,
		cost: 200,
		armor: 3,
		notes: Array(
			"Covers arms"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Plate Leggings (greaves)",
		class: "Medieval Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 15,
		cost: 300,
		armor: 3,
		notes: Array(
			"Covers legs"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Pot Helm",
		class: "Medieval Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 4,
		cost: 75,
		armor: 3,
		notes: Array(
			"50% vs. head shot"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Steel Helmet (enclosed)",
		class: "Medieval Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 8,
		cost: 150,
		armor: 3,
		notes: Array(
			"Covers head"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Plate Barding",
		class: "Medieval Armor",
		general: "Armor",
		type: "Barding",
		weight: 30,
		cost: 1250,
		armor: 3,
		notes: Array(
			"For horses"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Small Shield (buckler)",
		class: "Medieval Armor",
		general: "Armor",
		type: "Shields",
		weight: 8,
		cost: 25,
		armor: 0,
		parry: 1,
		notes: Array(
			"+1 Parry"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Medium Shield",
		class: "Medieval Armor",
		general: "Armor",
		type: "Shields",
		weight: 12,
		cost: 50,
		armor: 0,
		parry: 1,
		notes: Array(
			"+1 Parry, +2 Armor to ranged shots that hit"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Large Shield (kite, pavise)",
		class: "Medieval Armor",
		general: "Armor",
		type: "Shields",
		weight: 20,
		cost: 200,
		armor: 0,
		parry: 2,
		notes: Array(
			"+2 Parry, +2 Armor to ranged shots that hit"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Flak Jacket",
		class: "Modern Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 12,
		cost: 80,
		armor: "+2/+4",
		notes: Array(
			"Covers torso"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Kevlar Vest",
		class: "Modern Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 8,
		cost: 250,
		armor: "+2/+4",
		notes: Array(
			"Covers torso only, negates 4 AP, see notes"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Kevlar Vest w/inserts",
		class: "Modern Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 12,
		cost: 2500,
		armor: "+4/+8",
		notes: Array(
			"As Kevlar, but ceramic inserts are +8 vs. bullets"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Motorcycle Helmet",
		class: "Modern Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 5,
		cost: 75,
		armor: 3,
		notes: Array(
			"50% chance vs. head shot"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Steel Pot (helmet)",
		class: "Modern Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 5,
		cost: 80,
		armor: 4,
		notes: Array(
			"50% chance vs. head shot"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Infantry Battle Suit",
		class: "Future Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 20,
		cost: "Mil",
		armor: 6,
		notes: Array(
			"Covers entire body, near-future military, bomb suit"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Hard Armor",
		class: "Future Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 30,
		cost: "Mil",
		armor: 8,
		notes: Array(
			"Covers entire body, future military"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Powered Armor (Scout Suit)",
		class: "Future Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 0,
		cost: "Mil",
		armor: 10,
		notes: Array(
			"Covers entire body, future military"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Powered Armor (Battle Suit)",
		class: "Future Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 0,
		cost: "Mil",
		armor: 12,
		notes: Array(
			"Covers entire body, future military"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Powered Armor (Heavy Suit)",
		class: "Future Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 0,
		cost: "Mil",
		armor: 14,
		notes: Array(
			"Covers entire body, future military"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Reflective Vest",
		class: "Future Armor",
		general: "Armor",
		type: "Personal Armor",
		weight: 5,
		cost: 200,
		armor: 10,
		notes: Array(
			"Covers torso, far future, works against lasers only"
		),
		book: books_list[0],
		page: "p61",
	},
	{
		name: "Axe, Throwing",
		damage: "Str+d6",
		class: "Medieval Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "3/6/12",
		weight: 2,
		cost: 75,
		notes: Array(
			""
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "Bow",
		damage: "2d6",
		class: "Medieval Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "12/24/48",
		weight: 2,
		min_str: 2,
		rof: 1,
		cost: 250,
		notes: Array(
			""
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "Crossbow",
		damage: "2d6",
		class: "Medieval Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "15/30/60",
		weight: 2,
		rof: 1,
		min_str: 2,
		ap: 2,
		cost: 250,
		notes: Array(
			"AP 2, 1 action to reload"
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "English Long Bow",
		damage: "2d6",
		class: "Medieval Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "15/30/60",
		weight: 5,
		rof: 1,
		min_str: 3,
		cost: 200,
		notes: Array(
			""
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "Knife/Dagger",
		damage: "Str+d4",
		class: "Medieval Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "3/6/12",
		weight: 1,
		cost: 25,
		notes: Array(
			""
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "Sling",
		damage: "Str+d4",
		class: "Medieval Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "4/8/16",
		weight: 1,
		cost: 10,
		notes: Array(
			""
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "Spear",
		damage: "Str+d6",
		class: "Medieval Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "3/6/12",
		weight: 5,
		min_str: 2,
		cost: 100,
		notes: Array(
			""
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "Brown Bess (.75)",
		damage: "2d8",
		class: "Black Powder",
		general: "Ranged Weapons",
		type: "",
		range: "10/20/40",
		weight: 15,
		min_str: 2,
		cost: 300,
		notes: Array(
			"2 actions to reload"
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "Blunderbuss (8G)",
		damage: "3d6/2d6/1d6",
		class: "Black Powder",
		general: "Ranged Weapons",
		type: "",
		range: "10/20/40",
		weight: 12,
		min_str: 2,
		cost: 300,
		notes: Array(
			"2 actions to reload"
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "Flintlock Pistol (.60)",
		damage: "2d6+1",
		class: "Black Powder",
		general: "Ranged Weapons",
		type: "",
		range: "5/10/20",
		weight: 3,
		min_str: 0,
		cost: 150,
		notes: Array(
			"2 actions to reload"
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "Kentucky Rifle (.45)",
		damage: "2d8",
		class: "Black Powder",
		general: "Ranged Weapons",
		type: "",
		range: "15/30/60",
		weight: 8,
		min_str: 2,
		ap: 2,
		cost: 300,
		notes: Array(
			"3 actions to reload"
		),
		book: books_list[0],
		page: "p62",
	},
	{
		name: "Springfield (.52)",
		damage: "2d8",
		class: "Black Powder",
		general: "Ranged Weapons",
		type: "",
		range: "15/30/60",
		weight: 11,
		min_str: 2,
		ap: 0,
		cost: 250,
		notes: Array(
			"2 actions to reload"
		),
		book: books_list[0],
		page: "p62",
	}


));