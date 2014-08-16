/*
Arcane Backgrounds
*/
chargen_arcane_backgrounds = Array(
	{
		name: "Magic",
		short_name: "magic",
		power_points: 10,
		starting_powers: 3,
		description: Array(
			"Magicians range from powerful wizards to vile cultists. They draw on raw supernatural energy to fuel their eldritch fires. This energy often infuses the worlds in which they live, and is drawn forth with elaborate rituals, words of power, runes, or perhaps even dark sacrifices.",
			"Wizards are often quite weak early in their careers, but are forces to be reckoned with as they become powerful sorcerers."
		),
		backlash: Array(
			"Backlash: When a wizard rolls a 1 on his Spellcasting die (regardless of his Wild Die), he is automatically Shaken. This can cause a wound."
		),
		skill: {
			name: "Spellcasting",
			attribute: "smarts",
			book: books_list[0]
		}
	},
	{
		name: "Miracles",
		short_name: "miracles",
		power_points: 10,
		starting_powers: 2,
		description: Array(
			"Those who draw on miracles are priestly types or holy champions. Their power comes from a divine presence of some sort, including gods, nature, or spirits. Their powers are usually invoked with a few words of prayer or by performing established rituals."
		),
		backlash: Array(
			"Protector: Those who cast miracles are champions of their particular religions. Good priests vow to protect the innocent, fight evil, and obey all other tenets of their particular religion. Evil priests typically vow to defeat those who oppose their religion, or simply to cause as much misery and strife as possible. The player and Game Master should come up with a simple list of what is important to the character’s religion and use this as a guide.",
			"Champions who violate their beliefs are temporarily or permanently forsaken by their chosen deity. Minor sins give the character a –2 to his Faith rolls for one week. Major sins rob him of all arcane powers for one week. Mortal sins cause the character to be forsaken until the penitent hero completes some great quest or task of atonement to regain his lost powers."
		),
		skill: {
			name: "Faith",
			attribute: "spirit",
			book: books_list[0]
		}
	},
	{
		name: "Psionics	",
		short_name: "psionics",
		power_points: 10,
		starting_powers: 3,
		description: Array(
			"Psionicists have discovered how to tap into their own psychic powers. They can manipulate matter, create fire, or control their own bodies with but a thought."
		),
		backlash: Array(
			"Brainburn: When a psionic character rolls a 1 on his Psionics die (regardless of his Wild Die), he is automatically Shaken. On a critical failure, the psi lets out a psychic scream that causes him to be Shaken along with all allies in a Large Burst Template who fail a Spirit roll. This can cause a wound."
		),
		skill: {
			name: "Psionics",
			attribute: "smarts",
			book: books_list[0]
		}
	},
	{
		name: "Super Powers",
		short_name: "super-powers",
		power_points: 20,
		starting_powers: 1,
		description: Array(
			"Characters with super powers gain their abilities through strange circumstances, such as being bitten by irradiated creatures, exposure to strange chemicals, or perhaps by finding alien artifacts. This particular level of power is intended for relatively low-level “pulp” heroes. More powerful super types are dealt with in specific Savage Settings, and you’ll find an alternate and far more detailed system in our Super Powers Companion.",
			"Super powers work a little differently from most other Arcane Backgrounds—each power is its own skill and has no linked attribute (and thus counts as “lower” than its linked Attribute for purposes of Advancement). A hero with the armor and bolt powers, for example, also has an Armor and a Bolt skill he uses to enable it. It’s more expensive for a character to improve his powers, but he starts with more Power Points than other arcane types so he can use his abilities more often.",
			"Best of all, there are no drawbacks for super powers as there are with other types of arcane powers—the power either works or it doesn’t."
		),
		backlash: Array(

		)
	},
	{
		name: "Weird Science",
		short_name: "weird-science",
		power_points: 10,
		starting_powers: 1,
		description: Array(
			"Weird Science is the creation of strange and powerful devices. It differs from regular science in that some element of the arcane is involved. Maybe it’s just generic “super-science,” or perhaps it’s divinely (or demonically) inspired. Maybe the science itself is relatively sound, but it derives power from an arcane source, such as ghost rock in Deadlands, or some other magical mineral or essence in a steampunk fantasy game.",
			"Wizards are often quite weak early in their careers, but are forces to be reckoned with as they become powerful sorcerers."
		),
		backlash: Array(
			"Malfunction: Weird science devices are never perfect technology. They often suffer from spectacular and deadly malfunctions. If a gadgeteer uses a device and rolls a 1 on the skill die used to activate the gizmo, it has malfunctioned in some way and does not work. Draw a card and consult the Malfunction Table below:"
		),
		skill: {
			name: "Weird Science",
			attribute: "smarts",
			book: books_list[0]
		}
	}

);