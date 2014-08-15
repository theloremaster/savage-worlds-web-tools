var chargen_perks = Array(
	{
		name: "Raise an Attribute",
		short_name: "attribute",
		cost: 2,
		char_effects: function (character_object) {
			character_object.attribute_points++;
		}
	},
	{
		name: "Choose an Edge",
		short_name: "edge",
		cost: 2,
		char_effects: function (character_object) {
			character_object.edges_available++;
		}
	},
	{
		name: "Add skill point",
		short_name: "skill",
		cost: 1,
		char_effects: function (character_object) {
			character_object.skill_points++;
		}
	},
	{
		name: "Add starting funds",
		short_name: "cash",
		cost: 1,
		char_effects: function (character_object) {
			character_object.starting_funds = character_object.starting_funds + character_object.base_starting_funds;
		}
	}
);

var chargen_hindrances = Array(
	{
		name: "All Thumbs",
		category: "",
		description: Array ("Some people just aren’t good with modern devices. Characters with this drawback suffer a –2 penalty to the Repair skill at all times. In addition, when a hero uses a mechanical or electronic device, a roll of 1 on his skill die (regardless of his Wild Die) means the device is broken. The damage usually requires a Repair roll at –2 and 1d6 hours to fix."),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p28"
	},
	{
		name: "Anemic",
		category: "",
		description: Array("An anemic character is particularly susceptible to sickness, disease, environmental effects, and fatigue. He subtracts 2 from all Fatigue checks such as those made to resist poison and disease. (See page 86 for more information on Fatigue and the various hazards that lead to it.)"),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p28"
	},
	{
		name: "Arrogant",
		category: "",
		description: Array(
			"Your hero doesn’t think he’s the best—he knows he is. Whatever it is—swordsmanship, kung fu, running—few compare to his skills and he flaunts it every chance he gets.",
			"Winning just isn’t enough for your hero. He must completely dominate his opponent. Anytime there is even a shadow of a doubt as to who is better, he must humiliate his opponent and prove he can snatch victory any time he wishes. He is the kind of man who disarms an opponent in a duel just so he can pick the sword up and hand it back with a smirk.",
			"Arrogant heroes always look for the \“boss\” in battle, attacking lesser minions only if they get in the way."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p28"
	},
	{
		name: "Bad Eyes",
		category: "",
		description: Array(
			"Your hero’s eyes just aren’t what they used to be. With glasses, there’s no penalty and the Hindrance is only Minor. Should he lose his glasses (generally a 50% chance when he’s wounded, or no chance with a “nerd-strap”), he suffers a –2 penalty to any Trait roll made to shoot or Notice something more than 5\" (10 yards) distant.",
			"In low-tech settings where the hero cannot wear glasses, Bad Eyes is a Major Hindrance. He must subtract 2 from Trait rolls made to attack or notice things 5\" or more away."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p28"
	},
	{
		name: "Bad Eyes",
		category: "",
		description: Array(
			"Your hero’s eyes just aren’t what they used to be. With glasses, there’s no penalty and the Hindrance is only Minor. Should he lose his glasses (generally a 50% chance when he’s wounded, or no chance with a “nerd-strap”), he suffers a –2 penalty to any Trait roll made to shoot or Notice something more than 5\" (10 yards) distant.",
			"In low-tech settings where the hero cannot wear glasses, Bad Eyes is a Major Hindrance. He must subtract 2 from Trait rolls made to attack or notice things 5\" or more away."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p28"
	},
	{
		name: "Bad Luck",
		category: "",
		description: Array(
			"Your hero is a little less lucky than most. He gets one less Benny per game session than normal. A character cannot have both Bad Luck and the Luck Edge."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {
			edges: 	Array(
				"luck"
			)
		},
		major: 1,
		minor: 0,
		page: "p28"
	},
	{
		name: "Big Mouth",
		category: "",
		description: Array(
			"Loose lips sink ships, the saying goes. Your hero’s mouth could drown an armada.",
			"Your character can’t keep a secret very well. He reveals plans and gives away things best kept among friends, usually at the worst possible times."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p28"
	},
	{
		name: "Blind",
		category: "",
		description: Array(
			"The individual is completely without sight. He suffers a –6 to all physical tasks that require vision (which is most everything) and –2 to most social tasks as he can’t “read” those he’s interacting with as well as others.",
			"On the plus side, Blind characters gain their choice of a free Edge to compensate for this particularly difficult Hindrance."
			),
		extra_edge: 1,
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p28"
	},
	{
		name: "Bloodthirsty",
		category: "",
		description: Array(
			"Your hero never takes prisoners unless under the direct supervision of a superior. This can cause major problems in a military campaign unless his superiors condone that sort of thing. Your killer suffers –4 to his Charisma, but only if his cruel habits are known."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p28"
	},
	{
		name: "Cautious",
		category: "",
		description: Array(
			"Some folks gather too much intelligence. This character personifies over-cautiousness. He never makes rash decisions and likes to plot things out in detail long before any action is taken."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p28"
	},
	{
		name: "Clueless",
		category: "",
		description: Array(
			"Your hero isn’t as aware of his world as most others. He suffers –2 to Common Knowledge rolls."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p28"
	},
	{
		name: "Code of Honor",
		category: "",
		description: Array(
			"Honor is very important to your character. He keeps his word, won’t abuse or kill prisoners, and generally tries to operate within his world’s particular notion of proper gentlemanly or ladylike behavior."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p29"
	},
	{
		name: "Curious",
		category: "",
		description: Array(
			"It killed the cat, and it might kill your hero as well. Curious characters are easily dragged into any adventure. They have to check out everything and always want to know what’s behind a potential mystery."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p29"
	},
	{
		name: "Deathwish",
		category: "",
		description: Array(
			"Having a death wish doesn’t mean your adventurer is suicidal—but he does want to die after completing some important goal. Maybe he wants revenge for the murder of his family, or maybe he’s dying from disease and wants to go out in a blaze of glory. He won’t throw his life away for no reason, but when there’s a chance to complete his goal, he’ll do anything—and take any risk—to achieve it.",
			"This hindrance is usually Minor unless the goal is relatively easily fulfilled (very rare)"
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p29"
	},
	{
		name: "Delusion",
		category: "",
		description: Array(
			"Your hero believes something that is considered quite strange by everyone else. Minor Delusions are harmless or the character generally keeps it to himself (the government puts sedatives in soft drinks, dogs can talk, we’re all just characters in some bizarre game, etc.)."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p29"
	},
	{
		name: "Delusion",
		category: "",
		description: Array(
			"Your hero believes something that is considered quite strange by everyone else. Minor Delusions are harmless or the character generally keeps it to himself (the government puts sedatives in soft drinks, dogs can talk, we’re all just characters in some bizarre game, etc.).",
			"With a Major Delusion, he expresses his view on the situation frequently and it can occasionally lead to danger (the) government is run by aliens, hospitals are deadly, I’m allergictoarmor,zombiesare my friends)."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p29"
	},
	{
		name: "Doubting Thomas",
		category: "",
		description: Array(
			"Some people don’t believe in the supernatural until they’re halfway down some creature’s gullet. Doubting Thomases are skeptics who try their best to rationalize supernatural events. Even once a Doubting Thomas realizes the supernatural exists, he still tries to rationalize weird events, following red herrings or ignoring evidence.",
			"Doubting Thomases suffer –2 to their Fear checks when confronted with undeniable supernatural horror."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p29"
	},
	{
		name: "Elderly",
		category: "",
		description: Array(
			"Your adventurer is getting on in years, but he’s not quite ready for the nursing home. His Pace is reduced by 1, and his Strength and Vigor drop a die type to a minimum of d4, and cannot be raised thereafter.",
			"On the plus side, the wisdom of his years grants the hero 5 extra skill points that may be used for any skills linked to Smarts."
			),
		char_effects: function(character_object) {
			character_object.derived.pace--;
			character_object.attributes.strength--;
			character_object.attributes.vigor--;

			if(character_object.attributes.strength < 1)
				character_object.attributes.strength = 1;
			if(character_object.attributes.vigor < 1)
				character_object.attributes.vigor = 1;

			character_object.skill_points = character_object.skill_points + 5;
		},
		book: books_list[0],
		prereqs: {},
		incompatible: {
			hindrances: Array ( "Young")
		},
		major: 1,
		minor: 0,
		page: "p29"
	},
	{
		name: "Enemy",
		category: "",
		description: Array(
			"Someone out there hates the character and wants him dead. The value of the Hindrance depends on how powerful the enemy is and how often he might show up. A Minor Enemy might be a lone gunslinger out for vengeance. A Major Enemy might be a supernatural gunslinger who wants your hero dead.",
			"If the enemy is one day defeated, the GM should gradually work in a replacement, or the hero may buy off the Hindrance by sacrificing an Advance."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		specify_field: 1,
		minor: 1,
		page: "p29"
	},
	{
		name: "Enemy",
		category: "",
		description: Array(
			"Someone out there hates the character and wants him dead. The value of the Hindrance depends on how powerful the enemy is and how often he might show up. A Minor Enemy might be a lone gunslinger out for vengeance. A Major Enemy might be a supernatural gunslinger who wants your hero dead.",
			"If the enemy is one day defeated, the GM should gradually work in a replacement, or the hero may buy off the Hindrance by sacrificing an Advance."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		specify_field: 1,
		minor: 0,
		page: "p29"
	},
	{
		name: "Greedy",
		category: "",
		description: Array(
			"Your miserly hero measures his worth in treasure. If a Minor Hindrance, he argues bitterly over any loot acquired during play. If a Major Hindrance, he fights over anything he considers unfair, and may even kill for his \"fair share.\""
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p29"
	},
	{
		name: "Greedy",
		category: "",
		description: Array(
			"Your miserly hero measures his worth in treasure. If a Minor Hindrance, he argues bitterly over any loot acquired during play. If a Major Hindrance, he fights over anything he considers unfair, and may even kill for his \"fair share.\""
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p29"
	},
	{
		name: "Habit",
		category: "",
		description: Array(
			"Your warrior has an annoying and constant habit of some sort. Maybe she picks her nose, says \“y’know\” in every sentence, or chews gum like it’s going out of style.",
			"A Minor Habit irritates those around her but isn’t dangerous. Your hero suffers a –1 Charisma."
			),
		specify_field: 1,
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p29"
	},
	{
		name: "Habit",
		category: "",
		description: Array(
			"Your warrior has an annoying and constant habit of some sort. Maybe she picks her nose, says \“y’know\” in every sentence, or chews gum like it’s going out of style.",
			"A Minor Habit irritates those around her but isn’t dangerous. Your hero suffers a –1 Charisma."
			),
		specify_field: 1,
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p29"
	},
	{
		name: "Hard of Hearing",
		category: "",
		description: Array(
			"Characters who have lost some or all of their hearing have this disadvantage. As a Minor Hindrance, it subtracts 2 from all Notice rolls made to hear, including awaking due to loud noises."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p29"
	},
	{
		name: "Hard of Hearing",
		category: "",
		description: Array(
			"Characters who have lost some or all of their hearing have this disadvantage. A Major Hindrance means the character is deaf. She cannot hear and automatically fails all Notice rolls that depend on hearing."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p29"
	},
	{
		name: "Heroic",
		category: "",
		description: Array(
			"This noble soul never says no to a person in need. She doesn’t have to be happy about it, but she always comes to the rescue of those she feels can’t help themselves. She’s the first one to run into a burning building, usually agrees to hunt monsters for little or no pay, and is generally a pushover for a sob story."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p30"
	},
	{
		name: "Illiterate",
		category: "",
		description: Array(
			"Your hero cannot read. He can probably sign his name and knows what a STOP sign says, but can do little else. He also doesn’t know much about math either. He can probably do 2+2=4, but multiplication and the like are beyond him.",
			"Illiterates can’t read or write in any language, by the way, no matter how many they actually speak."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p30"
	},
	{
		name: "Lame",
		category: "",
		description: Array(
			"A past wound has nearly crippled your hero. His basic Pace is reduced by 2 and he rolls only a d4 for running rolls. A character’s Pace may never be reduced below 1."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p30"
	},
	{
		name: "Loyal",
		category: "",
		description: Array(
			"Your character may not be a hero, but he’d give his life for his friends. This character can never leave a man behind if there’s any chance at all he could help."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p30"
	},
	{
		name: "Mean",
		category: "",
		description: Array(
			"This fellow is ill-tempered and disagreeable. No one really likes him, and he has trouble doing anything kind for anyone else. He must be paid for his troubles and doesn’t even accept awards graciously. Your character suffers –2 to his Charisma."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p30"
	},
	{
		name: "Obese",
		category: "",
		description: Array(
			"Particularly large people often have great difficulty in dangerous physical situations. Those who carry their weight well have the Brawny Edge. Those who don’t handle it very well are Obese. A character cannot be both Brawny and Obese.",
			"An Obese hero adds 1 to his Toughness, but his Pace is decreased by 1 and his running die is a d4. Obese characters may also have difficulty finding armor or clothing that fits, squeezing into tight spaces, or even riding in confined spaces such as coach airplane seats or compact cars."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p30"
	},
	{
		name: "One Arm",
		category: "",
		description: Array(
			"Whether by birth or battle, your hero has lost an arm. Fortunately, his other arm is (now) his “good” one. Tasks that require two hands, such as Climbing, suffer a –4 modifier."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p30"
	},
	{
		name: "One Eye",
		category: "",
		description: Array(
			"Your hero lost an eye for some unfortunate reason. If he doesn’t wear a patch or buy a glass replacement (typically $500), he suffers –1 to his Charisma for the grotesque wound.",
			"He suffers –2 to any Trait rolls that require depth perception, such as Shooting or Throwing, jumping a ravine or rooftop, and so on."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p30"
	},
	{
		name: "One Leg",
		category: "",
		description: Array(
			"With a prosthetic, One Leg acts exactly like the Lame Hindrance, reducing Pace by 2 and running rolls are now a d4. Without a prosthetic, the character’s Pace is 2 and he can never run. He also suffers –2 to Traits that require mobility, such as Climbing and Fighting. A character with one leg also suffers a –2 penalty to his Swimming skill (and Pace)."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p30"
	},
	{
		name: "Outsider",
		category: "",
		description: Array(
			"In a society made up of only a few types of people, your hero isn’t one of them. An Indian in a Western town, an alien in a sci-fi game of human marines, or a half-orc in a party of elves, dwarves, and humans are all examples of outsiders. Locals are likely to raise prices on the Outsider, ignore pleas for help, and generally treat him as if he’s of a lower class than the rest of their society.",
			"In addition to the roleplaying effects above, your hero’s Charisma suffers a –2 modifier among all but his own people."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p30"
	},
	{
		name: "Overconfident",
		category: "",
		description: Array(
			"There’s nothing out there your hero can’t defeat. At least that’s what he thinks. He believes he can do most anything and never wants to retreat from a challenge. He’s not suicidal, but he certainly takes on more than common sense dictates."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p30"
	},
	{
		name: "Pacifist",
		category: "",
		description: Array(
			"Your hero absolutely despises violence. Minor pacifism means he only fights when given no other choice, and never allows the killing of prisoners or other defenseless victims."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p30"
	},
	{
		name: "Pacifist",
		category: "",
		description: Array(
			"Major Pacifists won’t fight living characters under any circumstances. They may defend themselves, but won’t do anything to permanently harm sentient, living creatures. Note that undeniably evil creatures, undead, demons, and the like are fair game. A Major Pacifist might also fight with nonlethal methods, such as with his fists. Such characters only do so when obviously threatened, however."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p30"
	},
	{
		name: "Phobia",
		category: "",
		description: Array(
			"Phobias are overwhelming and irrational fears that stay with a hero for the rest of his life. Whenever a character is in the presence of his phobia, he subtracts 2 from all his Trait tests as a Minor Hindrance, and 4 if the fear is a Major Phobia.",
			"Phobias shouldn’t be too obvious—everyone should be afraid of vampires, for example, so it’s not a phobia—it’s common sense. Instead, the phobia usually centers on some random element the mind focused on during whatever encounter caused such a fright. Remember, phobias are irrational fears."
			),
		specify_field: 1,
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p30"
	},
	{
		name: "Phobia",
		category: "",
		description: Array(
			"Phobias are overwhelming and irrational fears that stay with a hero for the rest of his life. Whenever a character is in the presence of his phobia, he subtracts 2 from all his Trait tests as a Minor Hindrance, and 4 if the fear is a Major Phobia.",
			"Phobias shouldn’t be too obvious—everyone should be afraid of vampires, for example, so it’s not a phobia—it’s common sense. Instead, the phobia usually centers on some random element the mind focused on during whatever encounter caused such a fright. Remember, phobias are irrational fears."
			),
		specify_field: 1,
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p30"
	},
	{
		name: "Poverty",
		category: "",
		description: Array(
			"It’s said a fool and his money are soon parted. Your hero is that fool. He starts with half the usual money for your setting and just can’t seem to hang onto funds acquired after play begins. In general, the player halves his total funds every game week."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p30"
	},
	{
		name: "Quirk",
		category: "",
		description: Array(
			"Your hero has some minor foible that is usually humorous, but can occasionally cause him trouble. A swashbuckler may always try to first slash his initials on his foes before attacking, a dwarf may brag constantly about his culture, or a snobby debutante might not eat, drink, or socialize with the lower class."
			),
		specify_field: 1,
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p30"
	},
	{
		name: "Small",
		category: "",
		description: Array(
			"Your character is either very skinny, very short, or both relative to his particular race. Subtract 1 from his Toughness for his reduced stature."
			),
		toughness_mod: -1,
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p31"
	},
	{
		name: "Stubborn",
		category: "",
		description: Array(
			"This stubborn individual always wants his way and never admits he’s wrong. Even when it’s painfully obvious he’s made a mistake he tries to justify it with half-truths and rationalizations."
			),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p31"
	},
	{
		name: "Ugly",
		category: "",
		description: Array(
			"Unfortunately, this individual hit more than a few ugly sticks on his way down the tree of life. His Charisma is lowered by 2, and he is generally shunned by members of the opposite sex."
			),
		char_effects: function(character_object) {
			character_object.derived.charisma = character_object.derived.charisma - 2;
		},
		book: books_list[0],
		prereqs: {},
		incompatible: {
			edges: Array( "Attractive", "Attractive, Very" )
		},
		major: 0,
		minor: 1,
		page: "p31"
	},
	{
		name: "Vengeful",
		category: "",
		description: Array(
			"Your character always attempts to right a wrong he feels was done to him. If this is a Minor Hindrance, he usually seeks vengeance legally. The type and immediacy of his vengeance varies by character, of course. Some plot and scheme for months to extract what they see as justice. Others demand immediate results."
			),
		charisma_mod: -2,
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p31"
	},
	{
		name: "Vengeful",
		category: "",
		description: Array(
			"Your character always attempts to right a wrong he feels was done to him. If this is a Minor Hindrance, he usually seeks vengeance legally. The type and immediacy of his vengeance varies by character, of course. Some plot and scheme for months to extract what they see as justice. Others demand immediate results.",
			"If this is a Major Hindrance, your character will kill to rectify his perceived injustice."
		),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p31"
	},
	{
		name: "Vow",
		category: "",
		description: Array(
			"The character has a vow of some sort. Whether it’s Major or Minor depends on the Vow itself. Some may have Vows to particular orders or causes, to the Hippocratic Oath, to rid the world of evil, and so on. The danger in fulfilling the Vow and how often it might occur determines the level of the Hindrance. Whatever the Vow, it’s only a Hindrance if it actually comes into play from time to time and causes the character some discomfort."
		),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p31"
	},
	{
		name: "Vow",
		category: "",
		description: Array(
			"The character has a vow of some sort. Whether it’s Major or Minor depends on the Vow itself. Some may have Vows to particular orders or causes, to the Hippocratic Oath, to rid the world of evil, and so on. The danger in fulfilling the Vow and how often it might occur determines the level of the Hindrance. Whatever the Vow, it’s only a Hindrance if it actually comes into play from time to time and causes the character some discomfort."
		),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p31"
	},
	{
		name: "Wanted",
		category: "",
		description: Array(
			"Your hero has committed some crime in his past and will be arrested if discovered by the authorities. This assumes the setting actually has laws and police officers to enforce them.",
			"The level of the Hindrance depends on how serious the crime was. A hero with numerous unpaid parking tickets (in a game where he might have to drive occasionally) has a Minor Hindrance, as does someone wanted for more serious crimes away from the main campaign area. Being accused of murder is a Major Hindrance in almost any setting."
		),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p31"
	},
	{
		name: "Wanted",
		category: "",
		description: Array(
			"Your hero has committed some crime in his past and will be arrested if discovered by the authorities. This assumes the setting actually has laws and police officers to enforce them.",
			"The level of the Hindrance depends on how serious the crime was. A hero with numerous unpaid parking tickets (in a game where he might have to drive occasionally) has a Minor Hindrance, as does someone wanted for more serious crimes away from the main campaign area. Being accused of murder is a Major Hindrance in almost any setting."
		),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p31"
	},
	{
		name: "Yellow",
		category: "",
		description: Array(
			"Not everyone has ice water in his veins. Your hero is squeamish at the sight of blood and gore and terrified of coming to harm. He subtracts 2 from all of his fear-based Spirit checks."
		),
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p31"
	},
	{
		name: "Young",
		category: "",
		description: Array(
			"Children are sometimes forced to go on dangerous adventures through unfortunate circumstances. Think carefully before choosing this Hindrance, for your youngster starts at a significant disadvantage.",
			"Young heroes are generally 8–12 years old (in human years—adjust this for races with different aging paradigms). They have only 3 points to adjust their attributes and 10 skill points. On the plus side, youths like these have a fair amount of luck. They draw one extra Benny at the beginning of each game session in addition to any additional Bennies gained from such things as the Luck or Great Luck Edges.",
			"If the character should live long enough to mature, the Hindrance doesn’t have to be bought off, he’s already paid the price for the Hindrance by starting at a disadvantage. He stops getting the extra Benny when he reaches 18 years of age however (or the age of adulthood in your particular setting)."
		),
		char_effects: function (character_object) {
			character_object.attribute_points = 3;
			character_object.skill_points = 10;
			character_object.bennies_total += 1;
		},
		book: books_list[0],
		prereqs: {},
		incompatible: {
			hindrances: Array ( "Elderly" )
		},
		major: 1,
		minor: 0,
		page: "p31"
	}
);

/*
chargen_hindrances.sort(
	function(a, b)
	{
		var nameA = a.name.toLowerCase();
		var nameB = b.name.toLowerCase();
		return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
	}
);
*/