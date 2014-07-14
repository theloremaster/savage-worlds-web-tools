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

var currentBook = books_list[2];

extraBooks = extraBooks.concat(currentBook);

/*
extraDatabase = extraDatabase.concat(Array(
	{
		name: "Alligator/Crocodile",
		wildcard: 0,
		image: "",
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
	}
));
*/

extraDatabase = extraDatabase.concat(Array(
	{
		name: "Ama-No-Jaku",
		wildcard: 0,
		image: "",
		blurb: Array(
			"Translating roughly as \"imp of heaven,\" ama-no-jaku are small demons found in Japan that tempt and provoke mischief into mortals. They often do this by pretending to be something they’re not—such as a human child or a beneficent spirit.",
			"Ama-no-jaku (sometimes amanojaku) do not have a magical power to obscure their looks, so they must wear natural disguises, such as shrouds or the skin of their victims."
		),
		attributes: {
			agility: "d10",
			smarts: "d10",
			spirit: "d6",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d6",
			'Knowledge (Disguise)' : "d10",
			'Notice' : "d8",
			'Persuasion' : "d12",
			'Stealth' : "d10",
			'Taunt' : "d12"
		},
		charisma: "",
		pace: "10",
		parry: "5",
		toughness: "5",
		armor: "0",
		gear: "The demons prefer to lure victims into death traps (see below), but also take great delight in slashing with nasty (often infected) knives and retreating into the shadows (see Hit-and-Run, below).",
		abilities: Array(
			{
				name: "Blur",
				description: "Ama-no-jaku move with supernatural speed. Physical attacks against them are made at –4."
			},
			{
				name: "Defender",
				description: "Some ama-no-jaku keep their most deluded victims nearby as guardians when working with more observant groups. Such a person is typically an ordinary man or woman who has been tricked into believing the demon is the ghost of a child, a friendly spirit, etc, and that any new intruders wish it harm."
			},
			{
				name: "Hit-And-Run",
				description: "Ama-no-jaku are experts at using their preternatural speed to run at a victim’s blind-side, slash at his lower extremities, and then retreat before he can react. In most situations, the ama-no-jaku can only be hit by a victim who was on Hold. In situations where this isn’t possible, the ama-no-jaku typically retreats."
			},
			{
				name: "Traps",
				description: "Ama-no-jaku take great delight into luring their victims into numerous traps they’ve placed around their lairs. Anytime a character draws a black card in combat, on his action he must make an opposed roll of Smarts versus the ama-no-jaku’s Taunt. If the creature wins, the character is maneuvered into a trap. He loses his turn and consults the Traps Table at left (p54)"
			}
		),
		book: currentBook,

		page: "p53-p54"
	}
));