var chargen_skills = Array(
	{
		name: "Boating",
		attribute: "agility",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Climbing",
		attribute: "strength",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Driving",
		attribute: "agility",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Fighting",
		attribute: "agility",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Gambling",
		attribute: "smarts",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Healing",
		attribute: "smarts",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Intimidation",
		attribute: "spirit",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Investigation",
		attribute: "smarts",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Knowledge",
		attribute: "smarts",
		book: books_list[0],
		specify: 1,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Lockpicking",
		attribute: "agility",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Notice",
		attribute: "smarts",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Persuasion",
		attribute: "spirit",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Piloting",
		attribute: "agility",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Repair",
		attribute: "smarts",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Riding",
		attribute: "agility",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Shooting",
		attribute: "agility",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Stealth",
		attribute: "agility",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Streetwise",
		attribute: "smarts",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Survival",
		attribute: "smarts",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Swimming",
		attribute: "agility",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Taunt",
		attribute: "smarts",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Throwing",
		attribute: "agility",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	},
	{
		name: "Tracking",
		attribute: "smarts",
		book: books_list[0],
		specify: 0,
		prereqs: Array(
		),
		page: "p123"
	}

);

/*
chargen_skills.sort(
	function(a, b)
	{
		var attributeA = a.attribute.toLowerCase();
		var attributeB = b.attribute.toLowerCase();

		var nameA = a.name.toLowerCase();
		var nameB = b.name.toLowerCase();

		// sort by attribute
		if (attributeA < attributeB) {
			return -1;
		} else {
			if(attributeA > attributeB) {
				return 1;
			} else {
				// sort by name in attribute
				if (nameA < nameB) {
					return -1;
				} else if(nameA > nameB) {
					return 1;
				} else {
					return 0;
				}
			}
		}
	}
);
*/