/*
Powers
*/

chargen_trappings = Array(
	"Acid",
	"Cold/Ice",
	"Darkness",
	"Electricity",
	"Fire/Heat",
	"Light",
	"Necromantic",
	"Sound",
	"Other"
);

chargen_powers = Array(
	{
		name: "Armor",
		short_name: "armor",
		rank: 0,
		cost: 2,
		range: "Touch",
		duration: "3 (1/round)",
		page: "p125",
		book: books_list[0],
		trappings: "A mystical glow, hardened skin, ethereal armor, a mass of insects or worms.",
		description: Array(
			"Armor creates a field of magical protection around a character or an actual shell of some sort, effectively giving the target Armor. Success grants the recipient 2 points of Armor. A raise grants 4 points of Armor.",
			"Whether the armor is visible or not depends largely on the trapping."
		)
	},
	{
		name: "Banish",
		short_name: "banish",
		rank: 2,
		cost: 3,
		range: "Smarts",
		duration: "Instant",
		trappings: "Holy items, arcane symbols, handful of salt.",
		page: "p125",
		book: books_list[0],
		description: Array(
			"Whether ghosts, elementals, or demons, banish removes them all. This power can affect any creature that is not native to the current plane of existence (GM’s determination).",
			"This spell is an opposed roll of the caster’s arcane skill versus the target’s Spirit. On a success, the target is Shaken. On a raise, it is sent to its proper plane of existence.",
			"If the target is a Wild Card, each casting of banish causes a wound instead. If the target already has three wounds, it is then banished to its native plane—but it is not slain."
		)
	},
	{
		name: "Barrier",
		short_name: "barrier",
		rank: 1,
		cost: "1/section",
		range: "Smarts",
		duration: "3 (1 per section, per round)",
		trappings: "Fire, ice, thorns, force, bones.",
		page: "p125",
		book: books_list[0],
		description: Array(
			"Barrier creates a solid, immobile wall to protect the user against attack or to entrap an opponent.",
			"Regardless of what the barrier is made of (ice, thorns, stone, energy, etc.), it has a Toughness of 10. Every Power Point spent creates a 1” wide section of wall. The barrier ranges in thickness from a few “real world” inches for stone or other hard materials up to a foot for things like bones or ice. (If you’re using a gridded mat to play, draw the barrier between the squares directly along the grid-lines.) The exact placement of each section is defined by the caster, but each section must be connected to at least one other section after the first.",
			"When the spell expires or a section is broken, it crumbles to dust or dissipates. Trappings are never left behind.",
			"Each section of the barrier may be destroyed by an attack that equals its Toughness of 10. Physical walls are treated exactly like inanimate objects; they are considered to have a Parry of 2 (ranged attacks work as normal), but raises on the attack roll do not grant bonus damage nor do damage dice Ace. Opponents may climb the barrier at –2 to their Climbing roll if it is made of something solid. Fiery versions of the barrier cause 2d4 damage to anyone who wishes to leap through instead."
		)
	},
	{
		name: "Beast Friend",
		short_name: "beast-friend",
		rank: 0,
		cost: "Special",
		range: "Smarts x 100 yards",
		duration: "10 minutes",
		trappings: "The mage concentrates and gestures with his hands.",
		page: "p126",
		book: books_list[0],
		description: Array(
			"This spell allows mages to speak with and guide the actions of nature’s beasts. It works only on creatures with animal intelligence, not humanoids. Nor does it work on conjured, magical, or otherwise “unnatural” animals.",
			"The target must be within the sorcerer’s range — it is not conjured.",
			"The cost to control a creature depends on its Size. The base cost is 3, plus twice its Size for creatures with a Size greater than 0. A great white shark (Size +4) costs 3 plus 8 (2x4), or 11 points. A roc (Size +8) costs 19 Power Points to control.",
			"Swarms may also be controlled. Small swarms cost 3, Mediums 5, and Large 8. Thus a single rat costs 3 to control, as does a small swarm of the creatures."
		)
	},
	{
		name: "Blast",
		short_name: "blast",
		rank: 1,
		cost: "2-6",
		range: "24/48/96",
		duration: "Instant",
		trappings: "Balls of fire, ice, light, darkness, colored bolts, swarm of insects.",
		page: "p126",
		book: books_list[0],
		description: Array(
			"Blast is an area effect power that can put down many opponents at once. The caster first picks where he wants to center the blast, then makes the appropriate skill roll. Normal ranged attack modifiers apply.",
			"The area of effect is a Medium Burst Template. If the roll is failed, the blast deviates as a launched projectile.",
			"Targets within the blast suffer 2d6 damage. Blast counts as a Heavy Weapon."
		),
		additional: Array(
			"Additional Effects: For double the Power Points, the blast does 3d6 damage, or the size is increased to a Large Burst Template. For triple the points, it does both."
		)
	},
	{
		name: "Blind",
		short_name: "blind",
		rank: 0,
		cost: "2-6",
		range: "12/24/48",
		duration: "Instant",
		trappings: "Bright flash of light, sand in eyes, sticky shadows.",
		page: "p126",
		book: books_list[0],
		description: Array(
			"This power temporarily blinds a target or targets. Those affected must make an Agility roll at –2 to avert their gaze and avoid the effect (at –4 if the caster got a raise on the attack roll). On a failure, victims are Shaken and –2 to Parry until their next action. If the target rolls a 1 on his Agility die (regardless of the Wild Die), he’s Shaken and fully blind until he recovers from being Shaken. Blinded victims suffer a –6 penalty to all Trait rolls that require vision and have their Parry reduced to 2."
		),
		additional: Array(
			"Additional Effects: For 2 Power Points, the power affects a single target. For 4 Power Points, the power affects everyone in a Medium Burst Template. For 6 points, it affects everyone in a Large Burst Template."
		)
	},
	{
		name: "Bolt",
		short_name: "bolt",
		rank: 0,
		cost: "1 per missile",
		range: "12/24/48",
		duration: "Instant",
		trappings: "Fire, ice, light, darkness, colored bolts, insects.",
		page: "p126",
		book: books_list[0],
		description: Array(
			"Bolt is a standard attack power of wizards, and can also be used for ray guns, bursts of energy, streaks of holy light, and other ranged attacks. The damage of the bolt is 2d6."
		),
		additional: Array(
			"Additional Bolts: The character may cast up to 3 bolts by spending a like amount of Power Points. The bolts may be spread among targets as the character chooses. This is rolled just like fully-automatic weapons fire but without the full- auto penalty—the character rolls a spellcasting die for each bolt and compares each to the Target Number separately. If the caster is a Wild Card, he also rolls a Wild Die, which may replace any of the casting dice.",
			"Additional Damage: The caster may instead cast a single 3d6 bolt for 2 Power Points. He may not cast multiple bolts when using this ability."
		)
	},
	{
		name: "Boost/Lower Trait",
		short_name: "boost-lower-trait",
		rank: 0,
		cost: "2",
		range: "Smarts",
		duration: "3 (1/round)",
		trappings: "Physical change, glowing aura, potions.",
		page: "p127",
		book: books_list[0],
		description: Array(
			"This power allows a character to increase any of a target’s Traits by one die type for a standard success, or by two with a raise. The affected Trait can exceed d12. Each step over d12 adds +1 to his Trait total. For example, a raise on someone who already has a d12 in the affected Trait grants him d12+2 for the duration of the power.",
			"The power can also be used to lower an opponent’s Trait. This is an opposed roll against the victim’s Spirit. Success lowers any Trait of the caster’s choice one step, a raise lowers it two steps. A Trait cannot be lowered below a d4. Multiple castings stack, though the caster must keep track of when each casting expires as usual."
		),
		additional: Array(
			"Additional Targets: The power may affect an additional target for every additional Power Point spent, up to a maximum of five targets. All targets share the same effect and Trait affected."
		)
	},
	{
		name: "Burrow",
		short_name: "burrow",
		rank: 0,
		cost: "3",
		range: "Smarts x 2",
		duration: "3 (2/round)",
		trappings: "Dissolving into the earth and appearing elsewhere.",
		page: "p127",
		book: books_list[0],
		description: Array(
			"Burrow allows a mage standing on raw earth to meld into it. He can remain underground if he wants in a sort of “limbo” or burrow to anywhere with a Pace equal to the power’s Range. A mage with a Smarts of d8 could therefore move up to 16” (32 yards) on the first round, then maintain the spell and stay submerged for the second and move another 16”.",
			"A burrowing earth mage can attempt to surprise a foe (even one who saw him burrow) by making an opposed Stealth versus Notice roll. If the mage wins, he gains +2 to attack and damage that round, or +4 with a raise. Targets on Hold may attempt to interrupt the attack as usual."
		),
		additional: Array(
			"Additional Targets: The power may affect an additional target for every additional Power Point spent, up to a maximum of five targets."
		)
	},
	{
		name: "Burst",
		short_name: "burst",
		rank: 0,
		cost: "2",
		range: "Cone Template",
		duration: "Instant",
		trappings: "A shower of flames, light, or other energy.",
		page: "p127",
		book: books_list[0],
		description: Array(
			"Burst produces a large fan of energy that bathes its targets in red-hot fire or other damaging energy. ",
			"When cast, place the thin end of the Cone Template at the character’s front. Targets within the template may make Agility rolls versus the caster’s arcane skill roll to avoid the blaze. Those who fail suffer 2d10 damage. This counts as a Heavy Weapon."
		),
		additional: Array(
		)
	},
	{
		name: "Confusion",
		short_name: "confusion",
		rank: 0,
		cost: "1",
		range: "Smarts x 2",
		duration: "Instant",
		trappings: "Hypnotic lights, brief illusions, loud noises.",
		page: "p128",
		book: books_list[0],
		description: Array(
			"Instilling confusion in enemies is a powerful aid in combat, and this power provides that ability. On a success, a target must make a Smarts roll at –2 or be Shaken, and on a raise, the roll is made at –4."
		),
		additional: Array(
			"Additional Targets: The character may affect up to five targets by spending a like amount of additional Power Points."
		)
	},
	{
		name: "Damage Field",
		short_name: "damage-field",
		rank: 1,
		cost: "4",
		range: "Touch",
		duration: "3 (2/round)",
		trappings: "Fiery aura, spikes, electrical field.",
		page: "p128",
		book: books_list[0],
		description: Array(
			"Damage field creates an effect around a character that deals damage to anyone who contacts them in close combat. The damage affects any adjacent character who makes a successful attack roll against the subject. It has no effect on non-adjacent attackers (for example, Reach or ranged attacks).",
			"If a character with a damage field strikes someone in unarmed combat, the target takes the field’s damage plus the character’s Strength die (Str+2d6). The character may also simply touch the opponent (+2 to Fighting) and do the field’s damage only. A target who is grappled suffers the field’s damage each round on the attacker’s action; if the attacker chooses on following rounds to actively damage the target, he adds his Strength die to the damage roll as above and may get a bonus die for a raise.",
			"With a success, the power does 2d6 damage. With a raise, damage field causes 2d8 damage."
		),
		additional: Array(
		)
	},
	{
		name: "Darksight",
		short_name: "darksight",
		rank: 1,
		cost: "4",
		range: "Touch",
		duration: "1 hour (1/hour)",
		trappings: "Glowing eyes, dilated pupils, sonic sight.",
		page: "p128",
		book: books_list[0],
		description: Array(
			"Whereas light creates a source of illumination usable by others, darksight affects only a single person and can be much more clandestine.",
			"On a success, this spell halves any darkness penalty for the subject (round down). For example, a character in Dim (–1) lighting would suffer no penalty, and one in Pitch Darkness (–4) would only suffer a –2. On a raise, the spell negates all darkness penalties up to the maximum of –6."
		),
		additional: Array(
			"AdditionalTargets:Thecharactermayaffect up to five targets by spending a like amount of additional Power Points."
		)
	}
);