/*

The majority of this data is copyright 2014 Pinnacle Entertainment Group
Please purchase the Sci-Fi companion and support a great company!

*/
var vehicle_modifications = Array(
	{
		name: "Aircraft, Anti-Grav",
		description: "Ultra Tech. The vehicle is an aircraft powered by anti-gravitic propulsion. It can hover or fly, and has a Acc/TS of 30/100 and Climb of 2.",
		max: 1,
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
		max: 1,
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
		max: 1,
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
		max: 1,
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
		description: "Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.",
		max: 1,
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 5000 * selected_vehicle.size;
		},
	},
	{
		name: "AMCM",
		description: "Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.",
		max: 1,
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
		max: 1,
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
		max: selected_vehicle.size,
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
		max: 1,
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
		max: "u",
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
		max: 5,
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
		max: "u",
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
		max: "u",
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
		max: "u",
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
		max: "u",
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
		max: "u",
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
		max: "1",
		get_mod_cost: function(selected_vehicle) {
			return selected_vehicle.size / 2;
		},
		get_cost: function(selected_vehicle) {
			return 2000000 * selected_vehicle.size;
		},
		calc_weight: 10000, // the very last thing to be calculated
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.cost = selected_vehicle.cost / 2;
		}
	},
	{
		name: "Four Wheel Drive",
		description: "Up to four direct-fire weapons of the same type may be linked and fired as one, increasing the damage by +2 per weapon and reducing the total number of Mods required. Total all Linked weapons in a set first, then halve their required Mods. (If Linking Fixed weapons, halve the total.)",
		max: 1,
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
		max: 3,
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
		max: 1,
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
		max: "u",
		get_mod_cost: function(selected_vehicle) {
			return 0;
		},
		get_cost: function(selected_vehicle) {
			return 0;
		},
	},
	/* This is where I stopped -- working on rest of  data entry */

	{
		name: "Mercantile",
		description: "Found only on Huge and Gargantuan vehicles, this might be a restaurant, commissary, or speciality store. Each generates Size+$1d4K a month for the vehicle (and the same for the mercantile’s owner). The store has 300 square feet of space. Each additional Mod adds roughly 100 square feet and +$1d4K to revenue.",
		max: "u",
		get_mod_cost: function(selected_vehicle) {
			return 2;
		},
		get_cost: function(selected_vehicle) {
			return 100000;
		}
	},
	{
		name: "Missile Launcher",
		description: "Allows up to four Light or two Heavy (or AT) missiles to be fired at once.",
		max: "u",
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 50000;
		}
	},
	{
		name: "Passenger Pod",
		description: "Small and Medium vehicles only. These are rows of fairly spacious seats with safety harnesses, personal vid-screens, and other amenities designed for short travels (typically less than 24 hours). Each pod seats 10.",
		max: "u",
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 50000;
		}
	},
	{
		name: "Sensor Suite (Galactic)",
		description: "Light, chemical, motion, and other active sensors allow detection of targets up to one light year away with a Knowledge (Electronics) roll. Within 10K miles, the sensors add +2 to the roll. Illumination penalties are ignored. Targets don’t have to be in direct line of sight, but asteroid or powerful energy fields may cause inaccurate or false readings at the GM’s discretion.",
		max: 1,
		get_mod_cost: function(selected_vehicle) {
			return 2;
		},
		get_cost: function(selected_vehicle) {
			return 1000000;
		}
	},
	{
		name: "Sensor Suite (Planetary)",
		description: "This functions exactly like the Medium Sensor Suite (page 16) but has a range of 10K miles.",
		max: 1,
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
		max: 1,
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
		max: 1,
		get_mod_cost: function(selected_vehicle) {
			return 2;
		},
		get_cost: function(selected_vehicle) {
			return 5000 * selected_vehicle.size;
		},
	},
	{
		name: "Speed",
		description: "Each purchase increases the vehicle’s Acc by 5 and Top Speed by 50. (This cannot be taken with Speed Reduction.)",
		max: "u",
		get_mod_cost: function(selected_vehicle) {
			return 2;
		},
		get_cost: function(selected_vehicle) {
			return 100000 * selected_vehicle.size;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.ts +=  50;
			selected_vehicle.acc +=  5;
		}
	},
	{
		name: "Speed Reduction",
		description: "The vehicle trades power and speed for additional room. Each time this is taken, reduce Acc by 5 and Top Speed by 50 to gain half the vehicle’s Size in Mod slots.",
		max: 3,
		get_mod_cost: function(selected_vehicle) {
			return 0;
		},
		get_cost: function(selected_vehicle) {
			return 0;
		},
		get_mod_effect: function(selected_vehicle) {
			selected_vehicle.ts -=  50;
			selected_vehicle.acc -=  5;
			selected_vehicle.mods += selected_vehicle.base_mods / 2;
		}
	},
	{
		name: "Stealth System",
		description: "Radar-absorbing paint, heat baffles, scramblers, and other devices make the vehicle difficult to detect by vision or sensors. Those trying to spot, attack, (or lock on to) the vehicle subtract 4 from their rolls. The effect is triggered as a free action, but is negated any round in which the vehicle fires a weapon or emits some other non- cloakable signal such as radio signal or active sensor search.",
		max: 3,
		get_mod_cost: function(selected_vehicle) {
			return selected_vehicle.size;
		},
		get_cost: function(selected_vehicle) {
			return 50000 * selected_vehicle.size;
		}
	},
	{
		name: "Superstructure",
		description: "Superstructures are large sections that add great amounts of space to large vehicles, typically to accommodate more passengers or cargo. Each superstructure adds one to the fuel used per day, consumes 10 regular Mods, and subtracts 1 from the vehicle’s base Toughness (not Armor) as it reduces overall structural integrity. Choose the type of superstructure from the sidebar below.",
		max: "u",
		get_mod_cost: function(selected_vehicle) {
			return 10;
		},
		get_cost: function(selected_vehicle) {
			return 5000000;
		}
	},
	{
		name: "Targeting System",
		description: "The vehicle’s internal sensors and computers are linked to all attached weapons. This compensates for movement, range, multi-actions, and the like, negating up to two points of Shooting penalties.",
		max: 1,
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 10000  * selected_vehicle.size;
		}
	},
	{
		name: "Teleporter",
		description: "Ultra Tech. Teleporters work by turning physical objects into energy, blasting them through space, and then reconstituting them at the destination. Each teleporter can transport six average size humans at a time, or 1000 pounds of cargo up to 100 miles distant, or up to 1000 miles distant if a linked transmitter is present at the destination.",
		max: "u",
		get_mod_cost: function(selected_vehicle) {
			return 2;
		},
		get_cost: function(selected_vehicle) {
			return 5000000;
		}
	},
	{
		name: "Torpedo Tube",
		description: "Each tube allows up to two Light or one Heavy torpedo to be fired at once (at one or two targets, as desired).",
		max: "u",
		get_mod_cost: function(selected_vehicle) {
			return 1;
		},
		get_cost: function(selected_vehicle) {
			return 500000;
		}
	},
	{
		name: "Tractor Beam",
		description: "Tractor beams are specialized vehicle weapons designed to hold an enemy vehicle in place and pull it to the “attacker.” Vehicles can only affect vessels of smaller Size. Their range is quite short (about 1000 yards), so they must get a Short Range result on the Chase table to use the weapon. This is an opposed Knowledge (Electronics) roll at –4 vs the defender’s Piloting (or Knowledge (Electronics) in Large or larger vehicles). If the attacker is successful, the enemy vehicle is caught and pulled into contact in 2d6 rounds. A captive’s vehicle’s life support systems remain active, but all locomotion and weapons are shut down.",
		max: "u",
		get_mod_cost: function(selected_vehicle) {
			return 5;
		},
		get_cost: function(selected_vehicle) {
			return 1000000;
		}
	}
);