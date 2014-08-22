/*
Powers
*/

chargen_trappings = Array(
	{
		name: "Acid",
		page: "p122",
		book: books_list[0]
	},
	{
		name: "Cold/Ice",
		page: "p122",
		book: books_list[0]
	},
	{
		name: "Darkness",
		page: "p122",
		book: books_list[0]
	},
	{
		name: "Electricity",
		page: "p122",
		book: books_list[0]
	},
	{
		name: "Fire/Heat",
		page: "p123",
		book: books_list[0]
	},
	{
		name: "Light",
		page: "p123",
		book: books_list[0]
	},
	{
		name: "Necromantic",
		page: "p124",
		book: books_list[0]
	},
	{
		name: "Sound",
		page: "p124",
		book: books_list[0]
	},
	{
		name: "Other",
		page: "",
		book: books_list[0]
	}
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
		rank: 0,
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
			"Additional Targets: The character may affect up to five targets by spending a like amount of additional Power Points."
		)
	},
	{
		name: "Deflection",
		short_name: "deflection",
		rank: 0,
		cost: "2",
		range: "Touch",
		duration: "3 (1/round)",
		trappings: "Mystical shield, gust of wind, phantom servant that intercepts the missiles.",
		page: "p128",
		book: books_list[0],
		description: Array(
			"Deflection powers work in a variety of ways. Some actually deflect incoming attacks, others blur the target’s form or produce other illusionary effects. The end result is always the same however — to misdirect incoming melee and missile attacks from the user.",
			"With a standard success, attackers must subtract 2 from any Fighting, Shooting, or other attack rolls directed at the user. A raise increases the penalty to –4. This also acts as Armor against area effect weapons."
		),
		additional: Array(

		)
	},
	{
		name: "Detect/Conceal Arcana",
		short_name: "detect-conceal-arcana",
		rank: 0,
		cost: "2",
		range: "Sight",
		duration: "3 (1/round) or 1 hour (1/hour)",
		trappings: "Waving hands, whispered words.",
		page: "p128",
		book: books_list[0],
		description: Array(
			"Detect/conceal arcana allows a character to sense supernatural persons, objects, or effects within sight. This includes invisible foes, enchantments on people or items, mad science devices, and so on.",
			"The power can also be reversed to conceal a single supernatural item, being, or effect. This has the same cost, but the duration is much longer — 1 hour with a maintenance cost of 1 per hour. When used in this way, those who wish to see through the ruse with detect arcana use their arcane skill roll as an opposed roll against the concealer’s skill (rolled anew each time detect arcana is cast). The detecting character may only attempt to see through concealed powers once per fresh casting."
		),
		additional: Array(

		)
	},
	{
		name: "Disguise",
		short_name: "disguise",
		rank: 1,
		cost: "3-5",
		range: "Touch",
		duration: "10 minutes (1/10 minutes)",
		trappings: "Malleable features, illusionary appearance, hair of new form.",
		page: "p129",
		book: books_list[0],
		description: Array(
			"Disguise allows the character to assume the appearance (but none of the abilities) of another person. The base cost is 3 Power Points, plus 1 point per level of Size difference between the character and the person she is impersonating. The character cannot emulate someone more than 2 Size levels different from themselves. It requires a Notice roll at –2 to see through disguise if someone is familiar with the specific person mimicked; the penalty increases to –4 with a raise. If unfamiliar, the penalties are –4 and –6 respectively."
		),
		additional: Array(

		)
	},
	{
		name: "Dispel",
		short_name: "dispel",
		rank: 1,
		cost: "3",
		range: "Smarts",
		duration: "Instant",
		trappings: "Waving hands, whispered words.",
		page: "p129",
		book: books_list[0],
		description: Array(
			"Dispel allows a hero to negate enemy spells, miracles, mad science, or super powers. It has no effect on innate powers, such as a dragon’s breath or a banshee’s scream. Neither does dispel work on magic items or permanent enchantments unless the specific item or enchantment says otherwise.",
			"Dispel can be used on a power already in effect or to counter an enemy power as it’s being used. The latter requires the countering mage to be on Hold and interrupt his foe’s action as usual.",
			"In either case, dispelling the opponent’s power is an opposed roll of arcane skills. The dispelling character suffers a –2 modifier if the target power is of another type (magic vs. miracles, superpowers vs. mad science, etc)."
		),
		additional: Array(

		)
	},
	{
		name: "Divination",
		short_name: "divination",
		rank: 3,
		cost: "5",
		range: "Self",
		duration: "1 Minute",
		trappings: "Contact spirits of dead, commune with deity, demonic interrogation.",
		page: "p129",
		book: books_list[0],
		description: Array(
			"This power allows the caster to contact an otherworldly being to gain information. Due to the extraplanar nature of this power, it is very draining to the caster.",
			"On a success, the caster may ask one question that can be answered by “Yes,” “No,” or “Possibly” (if there is no absolute answer). On a raise, the question may be answered in five words or less (the GM may allow a longer, more detailed answer in cryptic form).",
			"The spell’s duration is one minute, during which the caster may take no other actions or movement. If the caster is Shaken during that time, he must make a Smarts roll or the power is disrupted.",
			"If the question relates to a living being (including beings who may “live” by mystical means such as undead, constructs, elementals, etc.), then the arcane skill roll is opposed by their Spirit. Divination is also opposed by conceal arcana. In the case of conceal arcana on a being, the divination must first beat the conceal arcana, and then if successful, the subject may roll Spirit against the divination result."
		),
		additional: Array(

		)
	},
	{
		name: "Divination",
		short_name: "divination",
		rank: 3,
		cost: "3",
		range: "Smarts",
		duration: "Instant",
		trappings: "Prayer, whispered words, gestures.",
		page: "p130",
		book: books_list[0],
		description: Array(
			"This spell removes a spellcaster’s source of power, limiting his ability to cast magic.",
			"The caster picks a single target within range and makes an opposed arcane skill roll. The caster suffers a –2 modifier if the target power is of another type (magic vs. miracles, superpowers vs. mad science, for example).",
			"With a success, he drains 1d6+1 Power Points from the victim. On a raise, the victim loses 1d8+2 Power Points. These rolls don’t Ace. Targets with Arcane Background: Weird Science lose the Power Points from all “gizmos” on their person equally.",
			"The victim cannot be reduced below zero Power Points. Drained Power Points are not taken by the caster — they are simply lost to the victim. Drained Power Points recharge as normal. The spell works only on creatures with an Arcane Background — it has no effect on magic items except those created through Arcane Background: Weird Science as noted above."
		),
		additional: Array(

		)
	},
	{
		name: "Elemental Manipulation",
		short_name: "elemental-manipulation",
		rank: 0,
		cost: "1",
		range: "Smarts x 2",
		duration: "3 (1/round)",
		trappings: "A few simple gestures.",
		page: "p130",
		book: books_list[0],
		description: Array(
			"A character who chooses this power can perform basic “tricks” using the four elements: air, earth, fire, and water (these elements may vary depending on the setting). The GM is the final arbiter on what effects can be performed (nothing that mimics another power), but some examples are listed below."
		),
		additional: Array(
			"Air: The caster can create lesser air currents to blow out a candle, fan a flame, lift a skirt, or cool his body in oppressive heat (+1 to a single Fatigue roll caused by heat).",
			"Earth: A wave of the hand can open a one-foot square hole in soft earth (or half that in stone), or cause a spray of sand that might blind an opponent (+1 to a Trick roll).",
			"Fire: The caster can snap his fingers to create a small flame (about the size of a hot match). With existing fire, he can urge it to spread (+1 to see if a fire spreads), cause it to flare (perhaps as part of a Trick maneuver), or slowly light an object over the course of a few rounds (as if holding a match to it).",
			"Water: The caster can conjure up to a pint of water somewhere within his sight (not “inside” objects or people). A wave of his hand also purifies one gallon of water, whether it be poisoned or simply salt-water. Those who have been poisoned within the last minute also get a second chance to resist any remaining effects."
		)
	},
	{
		name: "Entangle",
		short_name: "entangle",
		rank: 0,
		cost: "2-4",
		range: "Smarts",
		duration: "Special",
		trappings: "Glue bomb, vines, handcuffs, webs.",
		page: "p130",
		book: books_list[0],
		description: Array(
			"This power allows the character to restrain a target with snaking vines, lengths of hair, spider webs, or some other vine-like trapping.",
			"The arcane skill roll is opposed by the target’s Agility. Success indicates partial restraint so that the target suffers a –2 penalty to Pace and skills linked to Agility and Strength. A raise restrains the target fully. He cannot move or use any skills linked to Agility or Strength.",
			"Each following action, an entangled target may make a Strength or Agility roll to break free. Other characters may also attempt to free the ensnared person by making a Strength roll at –2.",
			"For 2 Power Points entangle targets a single opponent. For 4 points it affects everyone in a Medium Burst Template."
		),
		additional: Array(

		)
	},
	{
		name: "Elemental Protection",
		short_name: "elemental-protection",
		rank: 0,
		cost: "2",
		range: "Touch",
		duration: "1 Hour (1/hour)",
		trappings: "A mark on the forehead, potions, gills.",
		page: "p130",
		book: books_list[0],
		description: Array(
			"Adventurers sometimes travel beneath the waves, in space, or other hazardous environments. This power protects them from the crushing depths or blazing sun as they do.",
			"This power allows the target to breathe, speak, and move at his normal Pace while in one normally harmful environment, such as underwater, a zero-G vacuum, the lava of a volcano, or even the heat of the sun. Pressure, atmosphere, air, etc, are all provided for.",
			"The power does not protect against attacks with similar trappings though. A fire attack still causes normal damage, for example. With a raise on the casting roll, maintaining the power becomes 1 Power Point per two hours."
		),
		additional: Array(
			"Additional Targets: The character may affect up to five targets by spending a like amount of additional Power Points."
		)
	},
	{
		name: "Farsight",
		short_name: "farsight",
		rank: 1,
		cost: "3",
		range: "Touch",
		duration: "3 (1/round)",
		trappings: "Invisibly marked targets, guiding winds, eagle eyes.",
		page: "p131",
		book: books_list[0],
		description: Array(
			"This spell endows the recipient to see over great distances. With a success, ranged penalties are halved for the subject (–1 at Medium and –2 at Long). If a raise is achieved, all range increments for the subject are doubled in addition (12/24/48 becomes 24/48/96)."
		),
		additional: Array(

		)
	},
	{
		name: "Fear",
		short_name: "fear",
		rank: 0,
		cost: "2",
		range: "Smarts x 2",
		duration: "Instant",
		trappings: "Gestures, eldritch energy, cold chills.",
		page: "p131",
		book: books_list[0],
		description: Array(
			"This power causes the target overwhelming dread and horror. The area of effect is the Large Burst Template. Every creature beneath the template must make a Fear check, at –2 if the caster got a raise. Wild Cards who fail roll on the Fear Table. Extras are Panicked instead."
		),
		additional: Array(

		)
	},
	{
		name: "Fly",
		short_name: "fly",
		rank: 2,
		cost: "3/6",
		range: "Touch",
		duration: "3 (1/round)",
		trappings: "Gusty winds, wings, broomsticks.",
		page: "p131",
		book: books_list[0],
		description: Array(
			"Fly allows a character to fly at his basic Pace with a Climb of 0. He may double his Pace by spending twice the number of Power Points."
		),
		additional: Array(
			"Additional Targets: The character may affect up to five targets by spending a like amount of additional Power Points."
		)
	},
	{
		name: "Greater Healing",
		short_name: "greater-healing",
		rank: 2,
		cost: "10/20",
		range: "Touch",
		duration: "Instant",
		trappings: "Laying on hands, touching the victim with a holy symbol, praying, giving a drink of water.",
		page: "p131",
		book: books_list[0],
		description: Array(
			"Greater healing restores wounds more than one hour old. This use of the power requires 10 Power Points and otherwise works exactly like the healing power. It can also be used to neutralize any poison, disease, or sickness.",
			"Greater healing can also heal Permanent Crippling Injuries. This requires an arcane skill roll at –4, 1d6 hours of time, and 20 Power Points. Only one casting is permitted per injury — if it fails, the injury really is permanent."
		),
		additional: Array(

		)
	},
	{
		name: "Growth/Shrink",
		short_name: "growth-shrink",
		rank: 1,
		cost: "2+",
		range: "Smarts",
		duration: "3 (2/round)",
		trappings: "Gestures, words of power, potions.",
		page: "p132",
		book: books_list[0],
		description: Array(
			"Growth doubles the overall size of the target. The subject gains +1 Size for each 2 Power Points invested when the spell is cast. Each step of Size grants the target a one-step increase to Strength and a point of Toughness. This spell may be cast multiple times on the same target, though the caster must track each casting separately.",
			"Shrink reduces the Size of the subject by one step for each 2 Power Points, down to a minimum of Size –2 (approximately the size of a rat). Each level of Size reduction reduces the target’s Strength by one die type (minimum of d4) and his Toughness by 1 (minimum of 2).",
			"Subjects from Size +4 to +7 have the Large ability and fill a 2” square on the table-top. From Size +8 to +10, they are Huge and occupy an area 3” square. If the target is +11 or more, he is considered Gargantuan and occupies a 4” square area. Creatures of Size –2 have the Small ability.",
			"For unwilling targets, the caster’s arcane skill roll is opposed by their Spirit."
		),
		additional: Array(

		)
	},
	{
		name: "Havoc",
		short_name: "havoc",
		rank: 1,
		cost: "2-4",
		range: "Smarts x 2",
		duration: "Instant",
		trappings: "Whirlwind, chaotic poltergeists, repulsion field.",
		page: "p132",
		book: books_list[0],
		description: Array(
			"While unpredictable, this spell allows a wizard to change the field of battle in an instant as targets are thrown in every direction.",
			"With a success, the caster places a Medium Burst Template anywhere within range. Any character touched by the template must make a Strength roll (at –2 if the caster gets a raise). Any target that fails is knocked 2d6” in a random direction (roll a d12 and read the result as a clock facing) and becomes prone. If the target strikes an inanimate object, he is Shaken as well. Targets with cover may subtract the cover modifier from the total distance moved (to a minimum of 0), and flying targets suffer an additional –2 to their Strength roll. Additionally, roll a d6 to see if the flyer is moved toward the ground (1 – 2), stays level (3 – 4), or is moved away from the ground (5 – 6)."


		),
		additional: Array(
			"Additional Effects: For double the Power Points, havoc affects a Large Burst Template."
		)
	},
	{
		name: "Healing",
		short_name: "healing",
		rank: 0,
		cost: "3",
		range: "Touch",
		duration: "Instant",
		trappings: "Laying on hands, touching the victim with a holy symbol, prayer.",
		page: "p133",
		book: books_list[0],
		description: Array(
			"Healing repairs recent bodily damage. It must be used within the “Golden Hour,” though, for it has no effect on wounds more than one hour old.",
			"For Wild Cards, each use of the healing spell removes a wound with a success, two with a raise. The roll suffers a penalty equal to the victim’s wounds (in addition to any the caster might be suffering himself).",
			"For Extras, the GM must first determine if the ally is dead (see Aftermath on page 88). If so, no healing may be attempted. If not, a successful arcane skill roll returns the ally to the game Shaken.",
			"Healing can also cure poison and disease if used within 10 minutes of the event."
		),
		additional: Array(

		)
	},
	{
		name: "Intangibility",
		short_name: "intangibility",
		rank: 3,
		cost: "5",
		range: "Touch",
		duration: "3 (2/round)",
		trappings: "Ghost form, body of shadow, gaseous transformation.",
		page: "p133",
		book: books_list[0],
		description: Array(
			"With a successful arcane skill roll, the user becomes incorporeal. He is unable to affect the physical world, and it in turn cannot affect him. He can travel through walls, and non-magical weapons pass straight through him. Any items carried at the time of casting are also incorporeal.",
			"While incorporeal, the mage may affect other incorporeal beings (including himself), and he is still susceptible to magic attacks, including physical powers, such as bolt, and magic items.",
			"The character may not become corporeal while within someone or something. If that occurs, the caster is instantly shunted to the nearest open space, and he is Shaken."
		),
		additional: Array(

		)
	},
	{
		name: "Invisibility",
		short_name: "invisibility",
		rank: 1,
		cost: "5",
		range: "Self",
		duration: "3 (1/round)",
		trappings: "Powder, potion, iridescent lights.",
		page: "p133",
		book: books_list[0],
		description: Array(
			"Being invisible is a powerful aid in combat and useful for spying on maidens’ changing rooms as well.",
			"With a success, the character is transparent, but a vague outline is visible. A character may detect the invisible presence if he has a reason to look and makes a Notice roll at –4. Once detected, he may attack the foe at –4 as well. With a raise, the character is completely invisible. The penalty to Notice or hit him is –6.",
			"In either case, the power affects the character and his personal items. Anything picked up after the power was cast remains visible."
		),
		additional: Array(
			"Additional Targets: The character may affect up to five targets by spending a like amount of additional Power Points."
		)
	},
	{
		name: "Light/Obscure",
		short_name: "light-obscure",
		rank: 0,
		cost: "2",
		range: "Smarts",
		duration: "30 minutes (1/10 minutes) or 3 (1/ round)",
		trappings: "Illusionary torch, sunlight, darkness, thick fogs.",
		page: "p133",
		book: books_list[0],
		description: Array(
			"The ability to affect visibility (create or remove obscurement) is a pretty simple but very effective power.",
			"Light/obscure can be cast on an inanimate object, but if the item is in an opponent’s possession, the arcane skill roll is opposed by Agility.",
			"Light negates any darkness/obscurement penalty up to –6 in an area equal to a Large Burst Template for 30 minutes (1/10 minutes). The reverse of the power, obscure, creates a –6 obscurement penalty of the same size lasting for 3 (1/round)."
		),
		additional: Array(

		)
	},
	{
		name: "Mind Reading",
		short_name: "mind-reading",
		rank: 0,
		cost: "3",
		range: "Smarts",
		duration: "1",
		trappings: "Psionic invasion, soulsight",
		page: "p133",
		book: books_list[0],
		description: Array(
			"Mind reading allows a character to read another’s thoughts. This is an opposed roll versus the target’s Smarts. A success allows the character to gain one truthful answer from the subject. The target is aware of the mental intrusion unless the mind reader gets a raise. The GM may apply modifiers based on the subject’s mental Hindrances or current state of mind. "
		),
		additional: Array(

		)
	},
	{
		name: "Pummel",
		short_name: "pummel",
		rank: 0,
		cost: "2",
		range: "Cone Template",
		duration: "Instant",
		trappings: "Rippling earth, buffeting winds, rushing waters.",
		page: "p134",
		book: books_list[0],
		description: Array(
			"Pummel allows a character to knock down multiple foes. The caster makes an arcane skill roll and then places a Cone Template in front of him. Any friend or foe touched by the template must make a Strength roll (at –2 if the caster gets a raise). Any target that fails is knocked back 2d6” and becomes prone. If the target strikes an inanimate object, he is Shaken as well. Targets with cover may subtract the cover modifier from the total distance moved (to a minimum of 0), and flying targets suffer an additional –2 to their Strength roll."
		),
		additional: Array(

		)
	},
	{
		name: "Puppet",
		short_name: "pummel",
		rank: 2,
		cost: "3",
		range: "Smarts",
		duration: "3 (1/round)",
		trappings: "Glowing eyes, trance-like state, a swinging pocket watch, voodoo dolls.",
		page: "p134",
		book: books_list[0],
		description: Array(
			"Sometimes it pays to persuade others to do your fighting for you. Some do this by blatant mind control, others do it by manufacturing visual and auditory illusions. Puppet is an opposed roll of the character’s arcane skill versus the target’s Spirit. The user must score a success and beat the target’s roll to gain complete control. The victim will attack friends and even commit suicide, though such acts allow the victim another opposed Spirit roll to break the spell."
		),
		additional: Array(

		)
	},
	{
		name: "Quickness",
		short_name: "quickness",
		rank: 1,
		cost: "4",
		range: "Touch",
		duration: "3 (2/round)",
		trappings: "Blurred motion, hyperactivity.",
		page: "p134",
		book: books_list[0],
		description: Array(
			"This power grants incredible swiftness to the recipient. With success the target has two separate turns per round on his action card instead of the usual one. Each turn is handled independently with its own actions, but the character must resolve one turn entirely before beginning the second. With a raise, the recipient can redraw any initiative cards lower than Eight each round."
		),
		additional: Array(

		)
	},
	{
		name: "Shape Change",
		short_name: "shape-change",
		rank: 0,
		cost: "Special",
		range: "Self",
		duration: "1 Minute (1/minute)",
		trappings: "“Morphing,” talismans, tattoos.",
		page: "p134",
		book: books_list[0],
		description: Array(
			"Many cultures have legends of shamans or wizards who take on the shape of animals. This power does just that. This version of the power only allows a user to transform into mundane animals, but more bizarre transmutations may be found.",
			"A character may learn this spell while of Novice Rank but cannot transform into the more powerful creatures until he attains the appropriate Rank. The cost in Power Points depends on the type of creature the character wishes to change into. Use the Shape Change table as a guideline for unlisted creatures.",
			"Weapons and other personal effects are assumed into the animal’s form and reappear when the power ends, but other objects are dropped.",
			"While transformed, the character retains his own Smarts, Spirit, and linked skills (though he may not be able to use them since he cannot speak). He gains the animal’s Agility, Strength, and linked skills and cannot use most devices. He has no capacity for speech and cannot use powers, though he may continue to maintain powers previously activated. Vigor is the higher of the caster’s or the creature’s.",
			"The GM has final say on what an animal can and cannot do. A shaman in dog-form might be able to pull the trigger on a shotgun, for instance, but would use a default skill roll of d4–2 as the animal has no Shooting score of its own. The shaman’s Persuasion functions normally, but might suffer a –4 or worse penalty without speech, depending on what he tries to accomplish."
		),
		additional: Array(

		)
	},
	{
		name: "Slow",
		short_name: "slow",
		rank: 1,
		cost: "1",
		range: "Smarts x 2",
		duration: "3 (2/round)",
		trappings: "Tying a knot in a piece of string, slowing time, distracting invisible ghost monkey.",
		page: "p135",
		book: books_list[0],
		description: Array(
			"Skilled fighters and monsters with fast reflexes can strike before lesser beings have time to blink. Slowing their reflexes reduces their advantage.",
			"The caster makes an arcane skill roll opposed by the target’s Spirit. With a success, movement becomes an action, giving the target a multi- action penalty if he wants to move and act in the same round. With a raise, the target must redraw initiative cards above 10, except Jokers.",
			"A victim who usually draws multiple initiative cards discards only those with a value higher than the spell allows."
		),
		additional: Array(
			"Additional Targets: The character may affect up to five targets by spending a like amount of additional Power Points."
		)
	},
	{
		name: "Slumber",
		short_name: "slumber",
		rank: 1,
		cost: "2",
		range: "Smarts x 2",
		duration: "1 Minute (1/minute)",
		trappings: "A lullaby, blowing powder or sand at targets.",
		page: "p135",
		book: books_list[0],
		description: Array(
			"Blasting a hoard of enemies into tiny pieces may be popular with some mages, but those who favor stealth or have a pacifistic bent are drawn to this spell.",
			"The caster picks where he wants to center the spell and places a Medium Burst Template. He then makes an arcane skill roll. Any living creature (not undead or constructs) within the area must make a Spirit roll, at –2 if the caster scored a raise. Those who fail fall asleep.",
			"Loud noises awaken the sleepers as if they were a normal sleeper (Notice roll). When the duration expires, the sleepers naturally wake up."
		),
		additional: Array(
		)
	},
	{
		name: "Smite",
		short_name: "smite",
		rank: 0,
		cost: "2",
		range: "Touch",
		duration: "3 (1/round)",
		trappings: "A colored glow, runes, sigils, crackling energy, barbs grow from the blade.",
		page: "p135",
		book: books_list[0],
		description: Array(
			"This power is cast on a weapon of some sort. If it’s a ranged weapon, it affects one entire magazine, 20 bolts, shells, or arrows, or one full “load” of ammunition (the GM may have to determine the exact quantity for unusual weapons). While the spell is in effect, the weapon’s damage is increased by +2 or +4 with a raise."
		),
		additional: Array(
			"Additional Targets: The character may affect up to five targets by spending a like amount of additional Power Points."
		)
	},
	{
		name: "Speak Language",
		short_name: "speak-language",
		rank: 0,
		cost: "1",
		range: "Touch",
		duration: "10 minutes (1/10 minutes)",
		trappings: "Words, pictures, hand motions.",
		page: "p136",
		book: books_list[0],
		description: Array(
			"This power allows a character to speak, read, and write a language other than his own. The language must be of an advanced form — not animalistic. A raise on the arcane skill roll allows the user to project a particular dialect as well."
		),
		additional: Array(
		)
	},
	{
		name: "Stun",
		short_name: "stun",
		rank: 0,
		cost: "2",
		range: "12/24/48",
		duration: "Special",
		trappings: "Bolts of energy, stun bombs, sonic booms, burst of blinding light.",
		page: "p136",
		book: books_list[0],
		description: Array(
			"Stun shocks those within a Medium Burst Template with concussive force, sound, light, magical energy, or the like.",
			"If the arcane character scores a success, targets within the area of effect must make Vigor rolls or be Shaken. With a raise, victims must make Vigor rolls at –2."
		),
		additional: Array(
		)
	},
	{
		name: "Succor",
		short_name: "succor",
		rank: 0,
		cost: "1",
		range: "Touch",
		duration: "Instant",
		trappings: "Prayer, laying on hands, curative tonic.",
		page: "p136",
		book: books_list[0],
		description: Array(
			"Succor removes one Fatigue level, two with a raise. It can also remove a character’s Shaken status.",
			"Succor may be used to restore consciousness to those who have been Incapacitated due to wounds as well, though the wounds remain. It does not stop bleeding or otherwise stop mortal wounds from worsening, however."
		),
		additional: Array(
		)
	},
	{
		name: "Summon Ally",
		short_name: "summon-ally",
		rank: 0,
		cost: "3",
		range: "Smarts",
		duration: "3 (1/round)",
		trappings: "Call elemental, ghostly dog, dimensional double.",
		page: "p137",
		book: books_list[0],
		description: Array(
			"This power allows the character to summon a loyal and obedient servant. On a success, the ally is placed at any point within the range of the power. On a raise, the ally is more durable and gains the Hardy ability. A summoned ally acts on the initiative card of the caster and gets an immediate action as soon as it is summoned.",
			"All Allies are Extras, even Mirror Selves (see below).",
			"A character may learn this spell while of Novice Rank, but he cannot summon more powerful allies until he attains the appropriate Rank. The cost in Power Points depends on the type of ally the character wishes to summon. Use the Summon Ally table as a guideline for unlisted creatures.",
			"A caster of sufficient Rank to summon more powerful allies may instead choose to summon additional lower Rank allies instead at the same cost. For each decrease in Rank, he gains one additional ally. For example, a Veteran caster could spend 5 Power Points to summon one Veteran-Rank-allowed ally, two Seasoned-Rank- allowed allies, or three Novice-Rank-allowed allies. Allies summoned by a single casting must all be of the same type."
		),
		additional: Array(
		)
	},
	{
		name: "Telekinesis",
		short_name: "telekinesis",
		rank: 1,
		cost: "5",
		range: "Smarts",
		duration: "3 (1/round)",
		trappings: "A wave of the hand, magic wand, steely gaze.",
		page: "p137",
		book: books_list[0],
		description: Array(
			"Telekinesis is the ability to move a single object or creature (including one’s self) with arcane will. The weight a caster can lift is equal to 10 pounds times his Spirit die type, 50 pounds times his Spirit with a raise."
		),
		additional: Array(
			"Lifting Creatures: Living targets may resist with an opposed Spirit roll. If the roll is greater than the caster’s skill total, the victim is unaffected. If the creature loses, however, it is lifted as usual and does not get another attempt to break free.",
			"Telekinetic Weapons: A caster can use telekinesis to wield a weapon. When this occurs, the weapon’s Fighting is equal to his arcane skill, and its damage is based on the caster’s Spirit instead of his Strength. A sword that does Strength+d6 damage, for example, does Spirit+d6 when wielded by telekinesis. The weapon otherwise functions normally, including granting bonus damage when it strikes with a raise.",
			"Dropping Things: Particularly ruthless characters often use telekinesis to drop their foes or bash them into walls and the like. A creature affected by this power can be moved up to the caster’s Smarts in inches per turn in any direction. Dropped creatures suffer falling damage as usual."
		)
	},
	{
		name: "Teleport",
		short_name: "teleport",
		rank: 1,
		cost: "3+",
		range: "Special",
		duration: "Instant",
		trappings: "A cloud of smoke, “phasing” out, change into a bolt of lightning.",
		page: "p138",
		book: books_list[0],
		description: Array(
			"Teleport allows a character to disappear and instantly reappear up to 10” distant for each 3 Power Points spent, or 15” with a raise. This counts as his movement for the round. Adjacent opponents do not get a free attack against the teleporting character. If the hero wishes to teleport somewhere he can’t see, he must make a Smarts roll at –2. If it is an unknown area he has never seen, the roll is at a –4 penalty.",
			"Failure of either roll means the teleporter hit an object of some sort. He returns where he came from and is Shaken. A roll of 1 on the casting die (regardless of the Wild Die) indicates a more serious disaster — in addition to being Shaken he also suffers 2d6 damage.",
			"The teleporter can never enter a solid space even if he tries. The power instantly returns him to his starting location as above."
		),
		additional: Array(
			"Carrying Others: The hero can carry other beings with him at the cost of a level of Fatigue per additional “rider.” More than two may be carried at once, but causes instant Incapacitation. One Fatigue level is regained for each full hour of rest."
		)
	},
	{
		name: "Wall Walker",
		short_name: "wall-walker",
		rank: 0,
		cost: "2",
		range: "Touch",
		duration: "3 (1/round)",
		trappings: "A crushed spider, bit of web, piece of tentacle.",
		page: "p139",
		book: books_list[0],
		description: Array(
			"Spellcasters are frequently targeted in combat because of their arcane prowess and high-utility spells such as this are great for getting the caster safely out of harm’s way. Of course, it has countless other uses too.",
			"Wall walker allows the recipient to function much like a human spider. He can stick to any surface, allowing him to climb walls and even hang from the ceiling. With a success, the character can move along such surfaces at half his normal Pace. With a raise, he may move at full Pace and even run."
		),
		additional: Array(
			"Additional Targets: The character may affect up to five targets by spending a like amount of additional Power Points."
		)
	},
	{
		name: "Warrior’s Gift",
		short_name: "warriors-gift",
		rank: 1,
		cost: "4",
		range: "Touch",
		duration: "3 (1/round)",
		trappings: "Gestures, prayer, whispered words, concentration.",
		page: "p139",
		book: books_list[0],
		description: Array(
			"Even combat mages cannot afford to spend all their time learning new combat maneuvers and martial skills. For those who enjoy the thrill of melee or want to improve their companions’ skills, this spell provides a quick solution to a lack of training.",
			"With a successful arcane skill roll, the recipient gains the benefits of a single Combat Edge chosen by the caster. The caster (not the recipient) must be one Rank higher than the Rank requirement of the Edge but ignores other requirements, even those requiring other Edges. For the duration of the spell, the recipient gains all the benefits of the Edge."
		),
		additional: Array(

		)
	},
	{
		name: "Zombie",
		short_name: "zombie",
		rank: 1,
		cost: "3/corpse",
		range: "Smarts",
		duration: "Special",
		trappings: "Carving symbols on corpses, throwing bones, graveyards, “leather” books.",
		page: "p139",
		book: books_list[0],
		description: Array(
			"This power is considered evil in most settings, and so is typically used only by villainous nonplayer characters such as necromancers, evil scientists, dark cultists, and the like.",
			"When cast, zombie raises a number of dead specified by the character when he spent his Power Points. The undead are immediately obedient, though perhaps a bit mischievous and literal-minded in their duties.",
			"Corpses aren’t summoned by this ability, so there must actually be a supply of bodies available for the power to have any effect. The bodies don’t have to be fresh — zombie can raise servants that have been waiting patiently for centuries. Graveyards, morgues, and battlefields can all serve this purpose.",
			"With a success, the dead remain animated for 1 hour. With a raise, they remain animated for 1d6 hours. With two raises, they remain animated for an entire day.",
			"Certain powerful necromancers may have improved versions of this power that are cheaper to cast and create permanent undead."
		),
		additional: Array(

		)
	}


);