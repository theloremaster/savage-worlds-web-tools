/* TODO:
Need to sort all installed vehicle mods during vehicle calculation by calc_weight,
if calc_weight is empty or undefined, it should be assumed 5 */


var vehicle_sizes = Array(
	{
		size_label: "Ultralight",
		examples: "",
		size: 1,
		acc: 10,
		ts: 35,
		climb: 0,
		toughness: 5,
		armor: 0,
		mods: 2,
		crew: 1,
		cost: 500,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Light",
		examples: "Motorcycles",
		size: 2,
		acc: 10,
		ts: 30,
		climb: 0,
		toughness: 9,
		armor: 2,
		mods: 5,
		crew: 2,
		cost: 1000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Medium",
		examples: "Cars",
		size: 3,
		acc: 10,
		ts: 25,
		climb: 0,
		toughness: 12,
		armor: 3,
		mods: 10,
		crew: 4,
		cost: 8000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Large",
		examples: "SUVs, Pickups",
		size: 16,
		acc: 35,
		ts: 400,
		climb: 0,
		toughness: 45,
		armor: 10,
		mods: 40,
		crew: 300,
		cost: 12000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Heavy",
		examples: "APCs, Light tanks",
		size: 4,
		acc: 10,
		ts: 20,
		climb: 0,
		toughness: 15,
		armor: 4,
		mods: 20,
		crew: 8,
		cost: 30000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Super Heavy",
		examples: "Tanks",
		size: 8,
		acc: 5,
		ts: 10,
		climb: 0,
		toughness: 25,
		armor: 6,
		mods: 25,
		crew: 10,
		cost: 60000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Titan",
		examples: "Tanks",
		size: 10,
		acc: 5,
		ts: 19,
		climb: 0,
		toughness: 30,
		armor: 7,
		mods: 30,
		crew: 20,
		cost: 100000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Colossus",
		examples: "Tanks",
		size: 12,
		acc: 5,
		ts: 10,
		climb: 0,
		toughness: 35,
		armor: 8,
		mods: 40,
		crew: 40,
		cost: 500000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Goliath",
		examples: "Battle Platforms",
		size: 14,
		acc: 5,
		ts: 10,
		climb: 0,
		toughness: 40,
		armor: 9,
		mods: 50,
		crew: 80,
		cost: 1000000,
		energy_capacity: 0,
		provisions: 0
	}

);

var vehicle_modifications = Array(
	{
		name: "Aircraft, Anti-Grav",
		description: "Ultra Tech. The vehicle is an aircraft powered by anti-gravitic propulsion. It can hover or fly, and has a Acc/TS of 30/100 and Climb of 2.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 2;
		},
		get_cost: function(selected_vehicle) {
			return 20000 * selected_vehicle.size;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.aircraft = 1;
			selected_vehicle.climb = 2;

			selected_vehicle.acc = 30;
			selected_vehicle.ts = 100;
		},
		calc_weight: 1 // one of the first things to be calculated
	},
	{
		name: "Aircraft, Helicopter",
		description: "The vehicle is a helicopter. It can hover or fly, and has a Acc/TS 10/80 and a Climb of –1.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return selected_vehicle.size / 2;
		},
		get_cost: function(selected_vehicle) {
			return 5000 * selected_vehicle.size;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.aircraft = 1;
			selected_vehicle.climb = -1;

			selected_vehicle.acc = 10;
			selected_vehicle.ts = 80;
		},
		calc_weight: 1 // one of the first things to be calculated
	},
	{
		name: "Aircraft, Jet Plane",
		description: "Jet planes are Acc/TS 50/600, Climb 2. They must move at least half their Top Speed each round or go Out of Control (they stall). The Speed Mod increases Acc by 10 instead of 5 and Top Speed by 100 instead of 10.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return selected_vehicle.size / 2;
		},
		get_cost: function(selected_vehicle) {
			return 10000 * selected_vehicle.size;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.aircraft = 1;
			selected_vehicle.climb = 2;

			selected_vehicle.acc = 50;
			selected_vehicle.ts = 600;
		},
		calc_weight: 1 // one of the first things to be calculated
	},
	{
		name: "Aircraft, Propeller Plane",
		description: "A traditional prop plane. Acc/TS 20/150, Climb 1. Planes must move at least half their Top Speed each round or go Out of Control (they stall). The Speed Mod increases Top Speed by 50 instead of 10.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return selected_vehicle.size / 2;
		},
		get_cost: function(selected_vehicle) {
			return 5000 * selected_vehicle.size;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.aircraft = 1;
			selected_vehicle.climb = 1;

			selected_vehicle.acc = 20;
			selected_vehicle.ts = 150;
		},
		calc_weight: 1 // one of the first things to be calculated
	},
	{
		name: "AMCM",
		description: "Anti-Missile Counter Measures are integrated jammers and decoys. They add +2 to Driving, Piloting or Knowledge (Electronics) rolls made to evade missile attacks.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 5000 * selected_vehicle.size;
		},
	},

	{
		name: "Amphibious",
		description: "The vehicle may move at half Acc/Top Speed while in water.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 1000 * selected_vehicle.size;
		},
	},
	{
		name: "Armor",
		description: "Increases a vehicle’s Armor value by +2. Due to the nature of space and the size and shape of vehicles, all Armor is considered Heavy Armor.",
		get_max: function(selected_vehicle) { return selected_vehicle.size },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 10000 * selected_vehicle.size;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.armor++;
			selected_vehicle.armor++;

			selected_vehicle.toughness++;
			selected_vehicle.toughness++;
		}
	},
	{
		name: "Artificial Intelligence",
		description: "The vehicle’s AI can operate all systems — from locomotion to weapons to opening or closing hatches. It has a skill level of d10 in these tasks, but is an “Extra” and does not receive a Wild Die. The AI does not suffer from multi-action penalties if given simultaneous tasks. In combat, the AI acts on the captain’s Action Card. Giving the AI a short verbal command is a free action.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 0;
		},
		get_cost: function(selected_vehicle) {
			return 10000 * selected_vehicle.size;
		},
	},
	{
		name: "Boosters",
		description: "Nitrous oxide or other propellants double a vehicle’s Acceleration and Top Speed for a round. Each booster has six uses before it must be replaced. Their effects do not stack. Refills cost $100 per booster.",
		get_max: function(selected_vehicle) { return "u" },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 1000 * selected_vehicle.size;
		},
	},
	{
		name: "Climb",
		description: "Add 1 Mod slot for every four crewman deducted (round up).",
		get_max: function(selected_vehicle) { return 5 },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 5000 * selected_vehicle.size;
		},
		get_mod_effect: function(selected_vehicle) {

			selected_vehicle.climb = selected_vehicle.climb + 1;

		}
	},
	{
		name: "Crew Reduction",
		description: "Add 1 Mod slot for every four crewman deducted (round up).",
		get_max: function(selected_vehicle) { return "u" },
		get_mod_cost: function(selected_vehicle) {
			return 0;
		},
		get_cost: function(selected_vehicle) {
			return 0;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.crew = selected_vehicle.crew - 4;
			selected_vehicle.mods ++;

		}
	},
	{
		name: "Crew Space",
		description: "Space for four permanent crew members.",
		get_max: function(selected_vehicle) { return "u" },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 100000;
		},
	},
	{
		name: "Deflector Screens",
		description: "The vessel is protected by an energy field that deflects incoming ballistic attacks (it has no effect against lasers). Attackers must subtract –2 from their Shooting rolls. Mod cost is 2 for Small to Large vehicles, and 3 for Huge to Gargantuan vessels.",
		get_max: function(selected_vehicle) { return "u" },
		get_mod_cost: function(selected_vehicle) {

			return 2;

		},
		get_cost: function(selected_vehicle) {
			return 10000 * selected_vehicle.size;
		},
	},
	{
		name: "Ejection System",
		description: "Should a vehicle suffer a Wrecked result, crew members may make Agility rolls at –4 (or no penalty if an individual was on Hold or hasn’t acted yet that round). Failure results in damage as usual and failure to eject that round. Those who succeed are launched into the air and descend safely via parachute. The system covers all passengers and crew.",
		get_max: function(selected_vehicle) { return "u" },
		get_mod_cost: function(selected_vehicle) {

			return selected_vehicle.size / 2;

		},
		get_cost: function(selected_vehicle) {
			return 5000 * selected_vehicle.size;
		},
	},
	{
		name: "Electromagnetic Shielding",
		description: "Adds +6 to the vehicle’s effective Toughness from EMP missiles (see page 25).",
		get_max: function(selected_vehicle) { return "u" },
		get_mod_cost: function(selected_vehicle) {
			return 2;
		},
		get_cost: function(selected_vehicle) {
			return 5000 * selected_vehicle.size;
		},
	},
	{
		name: "Exposed Crew",
		description: "Motorcycles and other “ridden” vehicles offer no protection for their passengers. Crew get no Armor bonus should it sustain a Crew critical hit.",
		get_max:  function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 0;
		},
		get_cost: function(selected_vehicle) {
			return  (selected_vehicle.base_cost / 2 ) * -1;
		}

	},
	{
		name: "Four Wheel Drive",
		description: "Up to four direct-fire weapons of the same type may be linked and fired as one, increasing the damage by +2 per weapon and reducing the total number of Mods required. Total all Linked weapons in a set first, then halve their required Mods. (If Linking Fixed weapons, halve the total.)",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 1000 * selected_vehicle.size;
		},
	},
	{
		name: "Handling",
		description: "The vehicle is precision crafted and very maneuverable. This adds +1 to Driving rolls per level.",
		get_max: function(selected_vehicle) { return 3 },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 5000 * selected_vehicle.size;
		},
	},
	{
		name: "Hover Vehicle",
		description: "The vehicle uses hover fans instead of wheels. It ignores difficult terrain modifiers and obstacles less than a yard tall. Round Mod cost up. The Ultra Tech version uses anti-grav. It doubles the cost but halves the Mod cost.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return selected_vehicle.size;;
		},
		get_cost: function(selected_vehicle) {
			return 5000 * selected_vehicle.size;
		},
	},
	{
		name: "Linked",
		description: "Up to four direct-fire weapons of the same type may be linked and fired as one, increasing the damage by +2 per weapon and reducing the total number of Mods required. Total all Linked weapons in a set first, then halve their required Mods. (If Linking Fixed weapons, halve the total.)",
		get_max: function(selected_vehicle) { return "u" },
		get_mod_cost: function(selected_vehicle) {
			return 0;
		},
		get_cost: function(selected_vehicle) {
			return 0;
		},
	},
	/* This is where I stopped -- working on rest of  data entry */

	{
		name: "Living Space",
		description: "Large or greater vehicles only. The vehicle has an extended superstructure with bunk beds, personal storage bins for up to four individuals, and one shared bathroom and kitchenette (regardless of how many times this is taken) for long- term travel. The superstructure decreases overall Toughness by 1 each time it’s taken. The limit is half the vehicle’s base Toughness.",
		get_max: function(selected_vehicle) { return selected_vehicle.base_toughness / 2 },
		get_mod_cost: function(selected_vehicle) {
			return 3;
		},
		get_cost: function(selected_vehicle) {
			return 5000;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.toughness = selected_vehicle.toughness - 1;
		}
	},
	{
		name: "Luxury Features",
		description: "Typically reserved for civilian vehicles, luxury features include music systems, minibars, video screens, and other comforts. The larger the vehicle, the more extravagant the features.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 1000 * selected_vehicle.size;
		}
	},
	{
		name: "Missile Launcher",
		description: "Allows up to four Light or two Heavy (or AT) missiles to be fired at once.",
		get_max: function(selected_vehicle) { return "u" },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 50000;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.has_missile_launcher = 1;
		}
	},
	{
		name: "Reinforced Chassis",
		description: "Increases Toughness of the chassis by +2.",
		get_max: function(selected_vehicle) { return 3 },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 1000 * selected_vehicle.size;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.toughness = selected_vehicle.toughness + 2;
		}
	},
	{
		name: "Sensor Suite",
		description: "Light, chemical, motion, and other active sensors allow detection of targets up to one light year away with a Knowledge (Electronics) roll. Within 10K miles, the sensors add +2 to the roll. Illumination penalties are ignored. Targets don’t have to be in direct line of sight, but asteroid or powerful energy fields may cause inaccurate or false readings at the GM’s discretion.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 50000;
		}
	},
	{
		name: "Shields",
		description: "The craft is protected by an ablative energy field that absorbs 10×Size points of damage before it’s depleted. Apply all damage to the shield first, then any left over to the vehicle (AP counts as usual). Active shields detonate missiles and torpedoes before they hit, reducing their damage total by half. A craft may regenerate its Size in shield points if it makes no attacks in a round.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return selected_vehicle.size / 2;
		},
		get_cost: function(selected_vehicle) {
			return 25000 * selected_vehicle.size;
		},
	},
	{
		name: "Sloped Armor",
		description: "Non-energy, ballistic attacks against this vessel suffer a –2 penalty. It has no effect on energy attacks.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 2;
		},
		get_cost: function(selected_vehicle) {
			return 3000 * selected_vehicle.size;
		},
	},
	{
		name: "Speed",
		description: "Each purchase increases the vehicle’s Acc by 5 and Top Speed by 50. (This cannot be taken with Speed Reduction.)",
		get_max: function(selected_vehicle) { return "u" },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 1000 * selected_vehicle.size;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.ts +=  10;
			selected_vehicle.acc +=  5;
		}
	},
	{
		name: "Speed Reduction",
		description: "The vehicle trades power and speed for additional room. Each time this is taken, reduce Acc by 5 and Top Speed by 50 to gain half the vehicle’s Size in Mod slots.",
		get_max: function(selected_vehicle) { return 3 },
		get_mod_cost: function(selected_vehicle) {
			return 0;
		},
		get_cost: function(selected_vehicle) {
			return 0;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.ts -=  2;
			selected_vehicle.acc -=  1;
			selected_vehicle.mods += selected_vehicle.base_mods / 2;
		}
	},
	{
		name: "Stealth System",
		description: "Radar-absorbing paint, heat baffles, scramblers, and other devices make the vehicle difficult to detect by vision or sensors. Those trying to spot, attack, (or lock on to) the vehicle subtract 4 from their rolls. The effect is triggered as a free action, but is negated any round in which the vehicle fires a weapon or emits some other non- cloakable signal such as radio signal or active sensor search.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return selected_vehicle.size;
		},
		get_cost: function(selected_vehicle) {
			return 10000 * selected_vehicle.size;
		}
	},
	{
		name: "Targeting System",
		description: "The vehicle’s internal sensors and computers are linked to all attached weapons. This compensates for movement, range, multi-actions, and the like, negating up to two points of Shooting penalties.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 10000  * selected_vehicle.size;
		}
	},
	{
		name: "Torpedo Tube",
		description: "Each tube allows up to two Light or one Heavy torpedo to be fired at once (at one or two targets, as desired).",
		get_max: function(selected_vehicle) { return "u" },
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 500000;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.has_torpedo_tube = 1;
		},
		is_available: function(selected_vehicle) {
			if( selected_vehicle.aircraft > 0 || selected_vehicle.watercraft > 0)
				return true;
			else
				return false;
		}
	},
	{
		name: "Tracked",
		description: "The vehicle has tracks instead of wheels and can climb over small obstacles. This reduces Acc by 2 and TS by 5, and ignores Driving penalties for difficult terrain. On the table-top, every inch of movement is treated as 1.5”.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 0;
		},
		get_cost: function(selected_vehicle) {
			return 1000  * selected_vehicle.size;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.ts -=  5;
			selected_vehicle.acc -=  2;
			selected_vehicle.mods += selected_vehicle.base_mods / 2;
		}
	},
	{
		name: "Watercraft",
		description: "The vehicle is a boat or ship. It’s base Acceleration and Top Speed are halved (round up). Speed Modifications increase Acc by 3 and TS by 5. For larger vessels such as naval vessels or cruise ships, use the Starship rules for Size, Toughness, and Crew, and add any enhancements that aren’t specifically designed for space such as FTL drives. If a Modification is listed under Vehicles, use that instead. Ships may have Torpedo Tubes.",
		get_max: function(selected_vehicle) { return 1 },
		get_mod_cost: function(selected_vehicle) {
			return 0;
		},
		get_cost: function(selected_vehicle) {
			return 0;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.ts = Math.ceil(selected_vehicle.ts / 2);
			selected_vehicle.acc = Math.ceil(selected_vehicle.acc / 2);
			selected_vehicle.watercraft = 1;
		}
	}
);
