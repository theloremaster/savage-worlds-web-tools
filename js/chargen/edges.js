/* Edges List */

var chargen_edges = Array(
	{
		name: "Extra Edge",
		category: "racial",
		unlisted: 1,
		description: "Character gains an extra edge",
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		char_effects: function( characterObject ) {
			characterObject.edges_available++;
		},
		page: ""
	},
	{
		name: "Agile",
		category: "attributes",
		unlisted: 1,
		description: "base d6 Agility",
		book: books_list[0],
		char_effects: function( characterObject ) {
			characterObject.race.attributes.agility = 1;
		},
		prereqs: {},
		incompatible: {},
		page: ""
	},
	{
		name: "Low Light Vision",
		category: "racial",
		description: "Your eyes amplify light like a cat’s, allowing them to see in the dark. You ignore attack penalties for Dim and Dark lighting.",
		book: books_list[0],
		prereqs: {},
		unlisted: 1,
		incompatible: {},
		page: ""
	},
	{
		name: "Alertness",
		category: "Background",
		description: "Not much gets by your hero. He’s very observant and perceptive, and adds +2 to his Notice rolls to hear, see, or otherwise sense the world around him.",
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		page: ""
	},
	{
		name: "Ambidextrous",
		category: "Background",
		description: "Your hero is as deft with his left hand as he is with his right. Characters normally suffer a –2 penalty when performing physical tasks with the off-hand (characters are assumed to be right-handed). With this Edge, your warrior ignores the –2 penalty for using his off-hand (see page 75).",
		book: books_list[0],
		prereqs: {
			attributes: {
				agility: 2
			}
		},
		incompatible: {},
		page: "p32"
	},
	{
		name: "Arcane Background",
		category: "Background",
		description: "This is the Edge your character must purchase to have any sort of magical, psionic, or other supernatural ability. See Chapter Five for a complete description of Arcane Backgrounds.",
		book: books_list[0],
		prereqs: {
		},
		incompatible: {},
		page: "p32"
	},
	{
		name: "Arcane Resistance",
		category: "Background",
		description: "This individual is particularly resistant to magic (including psionics, weird science, etc.), whether by nature or by heritage. He acts as if he had 2 points of Armor when hit by damage-causing arcane powers, and adds +2 to his Trait rolls when resisting opposed powers. Even friendly arcane powers must subtract this modifier to affect the resistant hero.",
		book: books_list[0],
		prereqs: {
			attributes: {
				spirit: 2
			}
		},
		incompatible: {},
		page: "p32"
	},
	{
		name: "Arcane Resistance, Improved",
		category: "Background",
		description: "As above but Armor and resistance are increased to 4.",
		book: books_list[0],
		prereqs: {
			edges: Array("Arcane Resistance")
		},
		incompatible: {},
		page: "p32"
	},
	{
		name: "Attractive",
		category: "Background",
		description: "It’s no secret that beautiful people have an easier time getting their way in life. This Edge grants your beautiful or handsome character +2 to Charisma.",
		book: books_list[0],
		prereqs: {
			attributes: {
				vigor: 1
			}
		},
		char_effects: function( characterObject ) {
			characterObject.secondary.charisma = characterObject.secondary.charisma + 2;
		},
		incompatible: {},
		page: "p32"
	},
	{
		name: "Attractive, Very",
		category: "Background",
		description: "Your hero is drop-dead gorgeous. His Charisma is increased to +4.",
		book: books_list[0],
		prereqs: {
			edges: Array("Attractive")
		},
		char_effects: function( characterObject ) {
			characterObject.secondary.charisma = characterObject.secondary.charisma + 2;
		},
		incompatible: {},
		page: "p32"
	},
	{
		name: "Berserk",
		category: "Background",
		description: "Immediately after suffering a wound (including a Shaken result from physical damage), your hero must make a Smarts roll or go Berserk. While Berserk, his Parry is reduced by 2 but he adds +2 to all Fighting, Strength, melee damage rolls, and Toughness. The warrior ignores all wound modifiers while Berserk, but cannot use any skills, Edges, or maneuvers that require concentration, including Shooting and Taunt, but not Intimidation. Berserkers attack with reckless abandon. Anytime his Fighting die is a 1 (regardless of his Wild Die), he hits a random adjacent target (not the original target). The attack may hit friend as well as foe. If there are no other adjacent targets, the blow simply misses. The Berserker may end his rage by doing nothing (not even moving) for one full action and making a Smarts roll at –2.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p32"
	},
	{
		name: "Brave",
		category: "Background",
		description: "Those with this Edge have learned to master their fear. Or perhaps are so jaded or emotionally distant they’ve just lost their normal “fight or flight” responses. Either way, your hero adds +2 to Fear tests. If the character is in a setting that uses Guts as a Setting Rule, it adds to that as well.",
		book: books_list[0],
		prereqs: {
			attributes: {
				spirit: 1
			}
		},
		char_effects: function( characterObject ) {

		},
		incompatible: {},
		page: "p32"
	},
	{
		name: "Brawny",
		category: "Background",
		description: "Your bruiser is very large or perhaps just very fit. His bulk resists damage better than most and adds +1 to his Toughness. In addition, the character can carry more than most proportional to his Strength. He can carry 8 times his Strength in pounds without penalty instead of the usual 5 times his Strength.",
		book: books_list[0],
		prereqs: {
			attributes: {
				vigor: 1,
				strength: 1
			}
		},
		char_effects: function( characterObject ) {

		},
		incompatible: {},
		page: "p32-p33"
	},
	{
		name: "Fast Healer",
		category: "Background",
		description: "Some individuals just seem to heal faster than others. Those with this blessing add +2 to Vigor rolls when checking for natural healing. See page 78 for complete rules on Healing.",
		book: books_list[0],
		prereqs: {
			attributes: {
				vigor: 2
			}
		},
		char_effects: function( characterObject ) {

		},
		incompatible: {},
		page: "p32-p33"
	},
	{
		name: "Fleet-Footed",
		category: "Background",
		description: "The hero’s Pace is increased by +2 and he rolls a d10 instead of a d6 when running.",
		book: books_list[0],
		prereqs: {
			attributes: {
				agility: 1
			}
		},
		char_effects: function( characterObject ) {

		},
		incompatible: {},
		page: "p33"
	},
	{
		name: "Linguist",
		category: "Background",
		description: "The character has an ear for languages and a rare talent for recognizing similarities between them. A character with this Edge starts with a number of languages equal to his Smarts die, and can make a Smarts roll at –2 to make herself understood in any language or dialect she has heard spoken for at least a week.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( characterObject ) {
			attributes: {
				smarts: 1
			}
		},
		incompatible: {},
		page: "p33"
	},
	{
		name: "Luck",
		category: "Background",
		description: "The adventurer seems to be blessed by fate, karma, the gods, or whatever external forces he believes in (or believe in him!) He draws one extra Benny at the beginning of each game session, allowing him to succeed at important tasks more often than most, and survive incredible dangers.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p33"
	},
	{
		name: "Great Luck",
		category: "Background",
		description: "The player draws two extra Bennies instead of one at the start of each session.",
		book: books_list[0],
		prereqs: {
			edges: Array("Luck")
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p33"
	},
	{
		name: "Noble",
		category: "Background",
		description: "Those born of noble blood have many perks in life, but often have just as many responsibilities. Nobles have high status in their societies, are entitled to special treatment from their foes, gain +2 Charisma, and also have the Rich Edge. This gives the hero several Edges for the price of one, but the responsibilities more than offset the additional perks. Nobles often have troops under their control, as well as land, a family home, and other assets. All of this must be determined by the GM, and balanced by the grave responsibilities the character faces. As an example, a character in a fantasy campaign might have a company of swordsmen, a small keep, and even a magical sword he inherited from his father. But he also has an entire region to manage, criminals to judge, justice to mete out, and a jealous neighbor who covets his lands and constantly plots against him at court.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p33"
	},
	{
		name: "Quick",
		category: "Background",
		description: "Quick characters have lightning-fast reflexes and a cool head. Whenever you are dealt a 5 or lower in combat, you may discard and draw again until you get a card higher than 5. Characters with both the Level Headed and Quick Edges draw their additional card and take the best as usual. If that card is a Five or less, the Quick Edge may be used to draw a replacement until it’s Six or higher.",
		book: books_list[0],
		prereqs: {
			attributes: {
				agility: 2
			}
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Rich",
		category: "Background",
		description: "Whether the individual was born with a silver spoon in his mouth or earned it through hard work, he’s got more money than most. Rich heroes start with three times the normal starting funds for the setting. If a regular income is appropriate for this setting, the hero receives the modern day equivalent of a $150,000 annual salary.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Filthy Rich",
		category: "Background",
		description: "This character is very wealthy. He has five times the starting funds for the setting and, if appropriate, a yearly income of around $500,000. Wealthier characters should have a very complete background as well. This needs to be worked out with the GM, and comes with many more assets as well as onerous responsibilities.",
		book: books_list[0],
		prereqs: {
			edges: Array("Rich|Noble")
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Block",
		category: "Combat",
		description: "Warriors who engage in frequent hand-to-hand combat are far more skilled in personal defense than most others. They’ve learned not only how to attack, but how to block their opponent’s blows as well. A fighter with this Edge adds +1 to his Parry.",
		book: books_list[0],
		prereqs: {
			attributes: {
				agility: 2
			},
			rank: "seasoned"
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Improved Block",
		category: "Combat",
		description: "As above, but the hero adds +2 to his Parry.",
		book: books_list[0],
		prereqs: {
			edges: Array("Block")
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Brawler",
		category: "Combat",
		description: "Frequent fights with his bare hands have given this thug a powerful punch. When he hits a foe with a successful bare-handed Fighting roll, he adds +2 to his damage.",
		book: books_list[0],
		prereqs: {
			attributes: {
				strength: 2
			}
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Bruiser",
		category: "Combat",
		description: "When the bruiser gets a raise on his bare-handed Fighting attack, he rolls a d8 instead of a d6.",
		book: books_list[0],
		prereqs: {
			edges: Array("Brawler"),
			rank: "seasoned"
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Combat Reflexes",
		category: "Combat",
		description: "Your adventurer recovers quickly from shock and trauma. He adds +2 to his Spirit roll when attempting to recover from being Shaken.",
		book: books_list[0],
		prereqs: {
			rank: "seasoned"
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Counterattack",
		category: "Combat",
		description: "Fighters with this Edge know how to respond instantly to an enemy’s mistakes. Once per round (if not Shaken), the character receives one free Fighting attack against one adjacent foe who failed a Fighting attack against him. This attack is made at –2, and the Counterattack must be a normal attack (no Disarm, Wild Attack, or other maneuvers), and may not be combined with Frenzy or Sweep. It may be used with the Defend maneuver, but not Full Defense.",
		book: books_list[0],
		prereqs: {
			rank: "seasoned",
			skills: Array( Array("Fighting", 2 ) ),
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Improved Counterattack",
		category: "Combat",
		description: "As above but the character may ignore the –2 penalty.",
		book: books_list[0],
		prereqs: {
			edges: Array("Counterattack"),
			rank: "veteran"
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Dodge",
		category: "Combat",
		description: "Some crafty types know how to get out of harm’s way. This Edge allows them to use cover, movement, and concealment to make them harder to hit. Unless they are the victim of a surprise attack and taken completely unaware, attackers must subtract 1 from their ranged attack rolls when targeting them (even in close combat). Characters who attempt to evade area effect attacks may add +1 to their Agility roll as well (when allowed).",
		book: books_list[0],
		prereqs: {
			rank: "seasoned",
			attributes: {
				agility: 2
			}
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	},
	{
		name: "Improved Dodge",
		category: "Combat",
		description: "As above but attackers subtract 2 from their attack rolls, and the character adds +2 to evade area effect weapons when allowed.",
		book: books_list[0],
		prereqs: {
			edges: Array("Dodge"),
			rank: "veteran"
		},
		char_effects: function( characterObject ) {
		},
		incompatible: {},
		page: "p34"
	}
);


/* chargen_edges.sort(
	function(a, b)
	{
		var textA = a.name.toUpperCase();
		var textB = b.name.toUpperCase();
		return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
	}
);
*/