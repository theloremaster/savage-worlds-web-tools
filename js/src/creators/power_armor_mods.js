/*

The majority of this data is copyright 2014 Pinnacle Entertainment Group
Please purchase the Sci-Fi companion and support a great company!

*/
var power_armor_modifications = Array(
	{
		name: "Anti-Personnel System",
		description: "When activated (a free action via voice command), detonation packs attached to the suit explode in a Large Burst Template around the armor, causing 5d6 damage (the blast is shaped away from the suit so the wearer suffers only half damage). Wearers are advised to use this only as a last resort. Shrapnel pack reloads cost $1000, weigh 10 lb, and take one hour to install.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 5000;
		},
		get_mod_effect: function(selected_power_armor) {
//			selected_power_armor.ts = Math.ceil(selected_power_armor.ts / 2);
//			selected_power_armor.acc = Math.ceil(selected_power_armor.acc / 2);
		},
		get_weight: function(selected_power_armor) {
			return 10;
		}

	},
	{
		name: "Armor",
		description: "Adds +2 Heavy Armor each time this Modification is taken.",
		get_max: function(selected_power_armor) { return selected_power_armor.size },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 10000 * selected_power_armor.size;
		},
		get_mod_effect: function(selected_power_armor) {
			selected_power_armor.armor += 2;
		},
		get_weight: function(selected_power_armor) {
//			return 10;
			return 0;
		}

	},
	{
		name: "Command Pack",
		description: "A well-designed suite of HUD apps and sensors to constantly monitor up to 100 team members within twenty miles. This extends the user’s Command Range to all those in contact. The Command Pack requires the Sensor Suite Modification first.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 50000;
		},
		get_mod_effect: function(selected_power_armor) {
//			selected_power_armor.ts = Math.ceil(selected_power_armor.ts / 2);
//			selected_power_armor.acc = Math.ceil(selected_power_armor.acc / 2);
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Flight",
		description: "The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.",
		get_max: function(selected_power_armor) { return "u" },
		get_mod_cost: function(selected_power_armor) {
			return 3;
		},
		get_cost: function(selected_power_armor) {
			return 5000 * selected_power_armor.size;
		},
		get_mod_effect: function(selected_power_armor) {

			if(selected_power_armor.aircraft == 0) {
				selected_power_armor.climb = 0;
				selected_power_armor.flying_pace = 6;
			} else {
				selected_power_armor.climb++;
				selected_power_armor.flying_pace = selected_power_armor.flying_pace * 2;

			}

			selected_power_armor.aircraft = 1;
//			selected_power_armor.acc = Math.ceil(selected_power_armor.acc / 2);
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Jump Pack",
		description: "The user can jump up to 2× the suit’s Pace horizontally or 1× Pace vertically.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 2;
		},
		get_cost: function(selected_power_armor) {
			return 5000 * selected_power_armor.size;
		},
		get_mod_effect: function(selected_power_armor) {
//			selected_power_armor.acc = Math.ceil(selected_power_armor.acc / 2);
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Magnetic Pads",
		description: "The soles and palms of the suit are fitted with powerful magnets, allowing the wearer to walk up or cling to metal surfaces at full Pace. These are most often used in zero-g to allow marines to attach to ship’s hulls or walkways.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 5000 ;
		},
		get_mod_effect: function(selected_power_armor) {
//			selected_power_armor.acc = Math.ceil(selected_power_armor.acc / 2);
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Pace",
		description: "Powerful motors in the leg joints combine with gyroscopic stabilizers to increase Pace by +2 and the running die to d10. Each enhancement after the first only increases Pace by +2.",
		get_max: function(selected_power_armor) { return 3 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 5000 ;
		},
		get_mod_effect: function(selected_power_armor) {
			selected_power_armor.pace++;
			selected_power_armor.pace++;
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Power Pack",
		description: "Additional power cells add another 72 hours of energy.",
		get_max: function(selected_power_armor) { return "u" },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 50000 ;
		},
		get_mod_effect: function(selected_power_armor) {
			selected_power_armor.pace++;
			selected_power_armor.pace++;
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Propulsion Jets",
		description: "Small propulsion jets allow the character to move in vacuum or water at 6”. The jets provide no benefits outside these environments.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 5000 ;
		},
		get_mod_effect: function(selected_power_armor) {
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Self-Sealing",
		description: "The suit automatically seals minor breaches (the user suffers one or two wounds) with a fast-hardening sealant. This is critical when operating in a vacuum. If the wearer suffers three or more wounds from a single attack, however, the suit cannot seal and is breached.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 10000 ;
		},
		get_mod_effect: function(selected_power_armor) {
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Sensor Suite",
		description: "An array of various sensors extends the suit’s +2 bonus to visual and aural Notice rolls to 500 yards.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 5000 ;
		},
		get_mod_effect: function(selected_power_armor) {
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Signal Booster",
		description: "Increases communication range to 500 miles.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 5000 ;
		},
		get_mod_effect: function(selected_power_armor) {
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Stealth System",
		description: "This thin and pliable piezoelectric material combines chameleon-like visual skin with heat baffles, radar scramblers, and other devices to make the suit difficult to detect by vision or sensors. Those trying to attack or detect the suit subtract 4 from their rolls against it. The effect is triggered as a free action, but is negated any round in which the user fires a weapon or emits some other non-cloakable signal such as radio broadcasts or active sensor searches.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 3;
		},
		get_cost: function(selected_power_armor) {
			return 10000 ;
		},
		get_mod_effect: function(selected_power_armor) {
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}
	},
	{
		name: "Strength Enhancement",
		description: "Increases Strength by one die type each time it’s taken. After d12, add +1 per servo (d12+1, d12+2, etc).",
		get_max: function(selected_power_armor) { return "u" },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 5000 ;
		},
		get_mod_effect: function(selected_power_armor) {
			selected_power_armor.strength_bonus++;
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Targeting System",
		description: "An integrated system connects to all personal and weapon mounts to compensate for movement, range, multi-actions, and the like. This negates up to two points of the user’s Shooting penalties.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 20000 ;
		},
		get_mod_effect: function(selected_power_armor) {
			selected_power_armor.strength_bonus++;
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Trauma System",
		description: "Automated systems within the suit are loaded with minor antibiotics, stimulants, and anesthetics designed to keep a soldier alive after suffering trauma. It has a d8 Healing and adds +2 to recover from being Shaken and resisting Bleeding Out.",
		get_max: function(selected_power_armor) { return 1 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 25000 ;
		},
		get_mod_effect: function(selected_power_armor) {
			selected_power_armor.strength_bonus++;
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	},
	{
		name: "Weapon Mount",
		description: "Automated systems within the suit are loaded with minor antibiotics, stimulants, and anesthetics designed to keep a soldier alive after suffering trauma. It has a d8 Healing and adds +2 to recover from being Shaken and resisting Bleeding Out.",
		get_max: function(selected_power_armor) { return 2 },
		get_mod_cost: function(selected_power_armor) {
			return 1;
		},
		get_cost: function(selected_power_armor) {
			return 5000 ;
		},
		get_mod_effect: function(selected_power_armor) {
			selected_power_armor.has_weapon_mount = 1;
			selected_power_armor.vehicle_weapon_mod_points++;
		},
		get_weight: function(selected_power_armor) {
			return 0;
		}

	}
);