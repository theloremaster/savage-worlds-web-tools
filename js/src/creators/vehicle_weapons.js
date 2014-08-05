/*

The majority of this data is copyright 2014 Pinnacle Entertainment Group
Please purchase the Sci-Fi companion and support a great company!

*/

var vehicle_weapons = Array(
	{
		name: "Light Autocannon",
		classification: "Auto-cannons",
		description: "Auto-cannons (also called chain guns) are powered weapons that fire bursts of chemically- propelled metal slugs at the target. They are primarily used by aircraft to destroy ground targets, or as point-defense weapons for starships. Ammo costs are for a full load.",
		range: "50/100/200",
		damage: "2d12",
		rof: 4,
		shots: 100,
		missiles_per: 0,
		linkable: 1,
		mods: 1,
		cost: 50000,
		notes: "AP 4, Auto, HW, Reaction Fire. Up to 20mm rounds."
	},
	{
		name: "Medium Autocannon",
		classification: "Auto-cannons",
		description: "Auto-cannons (also called chain guns) are powered weapons that fire bursts of chemically- propelled metal slugs at the target. They are primarily used by aircraft to destroy ground targets, or as point-defense weapons for starships. Ammo costs are for a full load.",
		range: "50/100/200",
		damage: "3d8",
		rof: 3,
		shots: 100,
		missiles_per: 0,
		linkable: 1,
		mods: 2,
		cost: 75000,
		notes: "AP 6, Auto, HW. Covers 21 to 30mm rounds."
	},
	{
		name: "Heavy Autocannon",
		classification: "Auto-cannons",
		description: "Auto-cannons (also called chain guns) are powered weapons that fire bursts of chemically- propelled metal slugs at the target. They are primarily used by aircraft to destroy ground targets, or as point-defense weapons for starships. Ammo costs are for a full load.",
		range: "75/150/300",
		damage: "4d8",
		rof: 3,
		shots: 100,
		missiles_per: 0,
		linkable: 1,
		mods: 3,
		cost: 200000,
		notes: "AP 8, Auto, HW. Covers 31 to 50mm rounds"
	},
	{
		name: "Small Bomb",
		classification: "Bombs",
		description: "Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.",
		range: "Dropped",
		damage: "6d10",
		rof: 1,
		flying_only: 1,
		shots: 1,
		missiles_per: 12,
		linkable: 0,
		mods: 1,
		cost: 500000,
		notes: "AP 10, HW, LBT. Up to 250 lb. bombs."
	},
	{
		name: "Medium Bomb",
		classification: "Bombs",
		description: "Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.",
		range: "Dropped",
		damage: "8d10",
		rof: 1,
		flying_only: 1,
		shots: 1,
		missiles_per: 8,
		linkable: 0,
		mods: 1,
		cost: 1000000,
		notes: "AP 20, HW, 10” radius. 251 to 500 lb. bombs."
	},
	{
		name: "Large Bomb",
		classification: "Bombs",
		description: "Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.",
		range: "Dropped",
		damage: "10d10",
		rof: 1,
		flying_only: 1,
		shots: 1,
		missiles_per: 4,
		linkable: 0,
		mods: 1,
		cost: 1000000,
		notes: "AP 30, HW, 20” radius. 501 to 1000 lb. bombs."
	},
	{
		name: "Block Buster Bomb",
		classification: "Bombs",
		description: "Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.",
		range: "Dropped",
		damage: "10d10",
		rof: 1,
		flying_only: 1,
		shots: 1,
		missiles_per: 2,
		linkable: 0,
		mods: 1,
		cost: 1000000,
		notes: "AP 40, HW, 30” radius. 1001 to 4000 lb. bombs."
	},
	{
		name: "City Buster Bomb",
		classification: "Bombs",
		description: "Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.",
		range: "Dropped",
		damage: "10d10",
		rof: 1,
		flying_only: 1,
		shots: 1,
		missiles_per: 1,
		linkable: 0,
		mods: 1,
		cost: 1000000,
		notes: "AP 40, HW, 50” radius. 4001 to 8000 lb. bombs."
	},
	{
		name: "Small Cannon",
		classification: "Cannons",
		description: "Cannons fire large, chemically-propelled, explosive shells. The shells listed below are the most common. High explsive versions reduce the damage die type to d8 and halve AP but increase the Burst Template to Large ot 10” radius if already Large. Ammo costs are per full load",
		range: "50/100/200",
		damage: "3d10",
		rof: 1,
		shots: 50,
		missiles_per: 0,
		linkable: 1,
		mods: 2,
		cost: 400000,
		notes: "AP 10, HW, MBT, Up to 40mm"
	},
	{
		name: "Medium Cannon",
		classification: "Cannons",
		description: "Cannons fire large, chemically-propelled, explosive shells. The shells listed below are the most common. High explsive versions reduce the damage die type to d8 and halve AP but increase the Burst Template to Large ot 10” radius if already Large. Ammo costs are per full load",
		range: "75/150/300",
		damage: "4d10",
		rof: 1,
		shots: 40,
		missiles_per: 0,
		linkable: 1,
		mods: 3,
		cost: 600000,
		notes: "AP 20, HW, MBT, Up to 60mm"
	},
	{
		name: "Heavy Cannon",
		classification: "Cannons",
		description: "Cannons fire large, chemically-propelled, explosive shells. The shells listed below are the most common. High explsive versions reduce the damage die type to d8 and halve AP but increase the Burst Template to Large ot 10” radius if already Large. Ammo costs are per full load",
		range: "100/200/400",
		damage: "5d10",
		rof: 1,
		shots: 30,
		missiles_per: 0,
		linkable: 1,
		mods: 4,
		cost: 800000,
		notes: "AP 30, HW, MBT, Up to 80mm"
	},
	{
		name: "Super-Heavy Cannon",
		classification: "Cannons",
		description: "Cannons fire large, chemically-propelled, explosive shells. The shells listed below are the most common. High explsive versions reduce the damage die type to d8 and halve AP but increase the Burst Template to Large ot 10” radius if already Large. Ammo costs are per full load",
		range: "150/300/600",
		damage: "6d10",
		rof: 1,
		shots: 20,
		missiles_per: 0,
		linkable: 1,
		mods: 5,
		cost: 1000000,
		notes: "AP 40, HW, MBT, Up to 200mm"
	},
	{
		name: "Light Flamethrower",
		classification: "Flame Weapons",
		description: "Flamethrowers use liquid or vapor fuel to burn targets. They’re often used to dig opponents out of caves or other tight places. The ones listed here are more powerful, lighter, and carry more propellant than older versions (such as those found in Savage Worlds).",
		range: "Cone",
		damage: "2d12",
		rof: 1,
		shots: 10,
		missiles_per: 0,
		linkable: 0,
		mods: 1,
		cost: 500,
		notes: "HW, Cone Template, targets may catch fire. Affects target’s least Armored area."
	},
	{
		name: "Heavy Flamethrower",
		classification: "Flame Weapons",
		description: "Flamethrowers use liquid or vapor fuel to burn targets. They’re often used to dig opponents out of caves or other tight places. The ones listed here are more powerful, lighter, and carry more propellant than older versions (such as those found in Savage Worlds).",
		range: "Cone",
		damage: "3d12",
		rof: 1,
		shots: 30,
		missiles_per: 0,
		linkable: 0,
		mods: 2,
		cost: 1000,
		notes: "HW, targets may catch fire. Can be fired in a Cone Template or a Medium Burst Template up to 18” distant. Affects target’s least Armored area."
	},
	{
		name: "Grenade Launcher",
		classification: "Grenade Launcher",
		description: "Futuristic grenades are smaller, lighter, and pack a bit more punch than their predecessors. Grenade launchers may also use the grenades found on page 20.",
		range: "24/48/96",
		damage: "3d6",
		rof: 3,
		shots: 20,
		missiles_per: 0,
		linkable: 0,
		mods: 1,
		cost: 1000,
		notes: "HW. LBT. Grenades cost $50 and weigh .25 pounds each. They are the same as the grenades listed on page 20 and may be thrown as well."
	},
	{
		name: "Light Laser",
		classification: "Lasers (Vehicular)",
		description: "Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)",
		range: "150/300/600",
		damage: "2d10",
		rof: 1,
		shots: 100,
		missiles_per: 0,
		linkable: 0,
		mods: 1,
		cost: 100000,
		notes: "AP 5, HW, Reaction Fire."
	},
	{
		name: "Medium Laser",
		classification: "Lasers (Vehicular)",
		description: "Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)",
		range: "150/300/600",
		damage: "3d10",
		rof: 1,
		shots: 100,
		missiles_per: 0,
		linkable: 0,
		mods: 2,
		cost: 500000,
		notes: "AP 10, HW."
	},
	{
		name: "Heavy Laser",
		classification: "Lasers (Vehicular)",
		description: "Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)",
		range: "150/300/600",
		damage: "4d10",
		rof: 1,
		shots: 100,
		missiles_per: 0,
		linkable: 0,
		mods: 3,
		cost: 1000000,
		notes: "AP 15, HW."
	},
	{
		name: "Super-Heavy Laser",
		classification: "Lasers (Vehicular)",
		description: "Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)",
		range: "150/300/600",
		damage: "5d10",
		rof: 1,
		shots: 100,
		missiles_per: 0,
		linkable: 0,
		mods: 5,
		cost: 2000000,
		notes: "AP 20, HW."
	},
	{
		name: "Massive Laser",
		classification: "Lasers (Vehicular)",
		description: "Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)",
		range: "150/300/600",
		damage: "6d10",
		rof: 1,
		shots: 100,
		missiles_per: 0,
		linkable: 0,
		mods: 7,
		cost: 4000000,
		notes: "AP 25, HW."
	},
	{
		name: "Mass Driver (Size 1)",
		classification: "Mass Drivers",
		description: "Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).",
		range: "100/200/400",
		damage: "1d12",
		rof: 1,
		shots: 15,
		missiles_per: 0,
		linkable: 0,
		mods: 1,
		cost: 100000,
		notes: "Hw. Projectiles are 10 pound spheres that cost $100 each.",
		is_available: function(selected_object) {
			if(selected_object.size / 2 >= 1)
				return true;
			else
				return false;
		}
	},
	{
		name: "Mass Driver (Size 2)",
		classification: "Mass Drivers",
		description: "Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).",
		range: "100/200/400",
		damage: "2d12",
		rof: 1,
		shots: 15,
		missiles_per: 0,
		linkable: 0,
		mods: 1,
		cost: 200000,
		notes: "Hw. Projectiles are 20 pound spheres that cost $200 each.",
		is_available: function(selected_object) {
			if(selected_object.size / 2 >= 2)
				return true;
			else
				return false;
		}
	},
	{
		name: "Mass Driver (Size 3)",
		classification: "Mass Drivers",
		description: "Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).",
		range: "100/200/400",
		damage: "3d12",
		rof: 1,
		shots: 15,
		missiles_per: 0,
		linkable: 0,
		mods: 2,
		cost: 300000,
		notes: "Hw. Projectiles are 30 pound spheres that cost $300 each.",
		is_available: function(selected_object) {
			if(selected_object.size / 2 >= 3)
				return true;
			else
				return false;
		}
	},
	{
		name: "Mass Driver (Size 4)",
		classification: "Mass Drivers",
		description: "Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).",
		range: "100/200/400",
		damage: "4d12",
		rof: 1,
		shots: 15,
		missiles_per: 0,
		linkable: 0,
		mods: 2,
		cost: 400000,
		notes: "Hw. Projectiles are 40 pound spheres that cost $400 each.",
		is_available: function(selected_object) {
			if(selected_object.size / 2 >= 4)
				return true;
			else
				return false;
		}
	},
	{
		name: "Mass Driver (Size 5)",
		classification: "Mass Drivers",
		description: "Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).",
		range: "100/200/400",
		damage: "5d12",
		rof: 1,
		shots: 15,
		missiles_per: 0,
		linkable: 0,
		mods: 3,
		cost: 500000,
		notes: "Hw. Projectiles are 50 pound spheres that cost $500 each.",
		is_available: function(selected_object) {
			if(selected_object.size / 2 >= 5)
				return true;
			else
				return false;
		}
	},
	{
		name: "Mass Driver (Size 6)",
		classification: "Mass Drivers",
		description: "Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).",
		range: "100/200/400",
		damage: "6d12",
		rof: 1,
		shots: 15,
		missiles_per: 0,
		linkable: 0,
		mods: 3,
		cost: 600000,
		notes: "Hw. Projectiles are 60 pound spheres that cost $600 each.",
		is_available: function(selected_object) {
			if(selected_object.size / 2 >= 6)
				return true;
			else
				return false;
		}
	},
	{
		name: "Mass Driver (Size 7)",
		classification: "Mass Drivers",
		description: "Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).",
		range: "100/200/400",
		damage: "7d12",
		rof: 1,
		shots: 15,
		missiles_per: 0,
		linkable: 0,
		mods: 4,
		cost: 700000,
		notes: "Hw. Projectiles are 70 pound spheres that cost $700 each.",
		is_available: function(selected_object) {
			if(selected_object.size / 2 >= 7)
				return true;
			else
				return false;
		}
	},
	{
		name: "Mass Driver (Size 8)",
		classification: "Mass Drivers",
		description: "Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).",
		range: "100/200/400",
		damage: "8d12",
		rof: 1,
		shots: 15,
		missiles_per: 0,
		linkable: 0,
		mods: 4,
		cost: 100000,
		notes: "Hw. Projectiles are 80 pound spheres that cost $800 each.",
		is_available: function(selected_object) {
			if(selected_object.size / 2 >= 8)
				return true;
			else
				return false;
		}
	},
	{
		name: "Mass Driver (Size 9)",
		classification: "Mass Drivers",
		description: "Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).",
		range: "100/200/400",
		damage: "9d12",
		rof: 1,
		shots: 15,
		missiles_per: 0,
		linkable: 0,
		mods: 5,
		cost: 900000,
		notes: "Hw. Projectiles are 90 pound spheres that cost $90 each.",
		is_available: function(selected_object) {
			if(selected_object.size / 2 >= 9)
				return true;
			else
				return false;
		}
	},
	{
		name: "Mass Driver (Size 10)",
		classification: "Mass Drivers",
		description: "Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).",
		range: "100/200/400",
		damage: "10d12",
		rof: 1,
		shots: 15,
		missiles_per: 0,
		linkable: 0,
		mods: 5,
		cost: 1000000,
		notes: "Hw. Projectiles are 100 pound spheres that cost $1000 each.",
		is_available: function(selected_object) {
			if(selected_object.size / 2 >= 11)
				return true;
			else
				return false;
		}
	},
	{
		name: "Light Missile",
		classification: "Missiles & Torpedoes",
		description: "These weapons use the rules for missiles in Savage Worlds and require missile launchers or torpedo tubes to mount. Attackers use Shooting to get a lock if firing directly or Knowledge (Computers) if fired indirectly from a bridge or weapons station. Defenders use Piloting if evading directly or Knowledge (Navigation) from a bridge or nav station. Determine lock by ship—if a ship gets a lock, it may fire all the missiles or torpedoes it’s allowed.",
		range: "200/400/800",
		damage: "5d6",
		rof: 1,
		is_available: function(selected_object) {
			if(selected_object.has_missile_launcher > 0)
				return true;
			else
				return false;
		},
		flying_only: 0,
		shots: 1,
		missiles_per: 12,
		linkable: 0,
		mods: 1,
		cost: 150000,
		notes: "AP 6, HW, SBT."
	},
	{
		name: "Heavy Missile",
		classification: "Missiles & Torpedoes",
		description: "These weapons use the rules for missiles in Savage Worlds and require missile launchers or torpedo tubes to mount. Attackers use Shooting to get a lock if firing directly or Knowledge (Computers) if fired indirectly from a bridge or weapons station. Defenders use Piloting if evading directly or Knowledge (Navigation) from a bridge or nav station. Determine lock by ship—if a ship gets a lock, it may fire all the missiles or torpedoes it’s allowed.",
		range: "200/400/800",
		damage: "8d6",
		rof: 1,
		flying_only: 0,
		is_available: function(selected_object) {
			if(selected_object.has_missile_launcher > 0 )
				return true;
			else
				return false;
		},
		shots: 1,
		missiles_per: 8,
		linkable: 0,
		mods: 1,
		cost: 200000,
		notes: "AP 12, HW, MBT."
	},
	{
		name: "Anti-Tank Missile",
		classification: "Missiles & Torpedoes",
		description: "These weapons use the rules for missiles in Savage Worlds and require missile launchers or torpedo tubes to mount. Attackers use Shooting to get a lock if firing directly or Knowledge (Computers) if fired indirectly from a bridge or weapons station. Defenders use Piloting if evading directly or Knowledge (Navigation) from a bridge or nav station. Determine lock by ship—if a ship gets a lock, it may fire all the missiles or torpedoes it’s allowed.",
		range: "100/200/400",
		damage: "8d6",
		rof: 1,
		flying_only: 0,
		shots: 1,
		is_available: function(selected_object) {
			if(selected_object.has_missile_launcher > 0)
				return true;
			else
				return false;
		},
		missiles_per: 12,
		linkable: 0,
		mods: 1,
		cost: 200000,
		notes: "AP 50, HW, MBT."
	},
	{
		name: "Light Torpedo",
		classification: "Missiles & Torpedoes",
		description: "These weapons use the rules for missiles in Savage Worlds and require missile launchers or torpedo tubes to mount. Attackers use Shooting to get a lock if firing directly or Knowledge (Computers) if fired indirectly from a bridge or weapons station. Defenders use Piloting if evading directly or Knowledge (Navigation) from a bridge or nav station. Determine lock by ship—if a ship gets a lock, it may fire all the missiles or torpedoes it’s allowed.",
		range: "300/600/1200",
		damage: "5d12",
		rof: 1,
		flying_only: 0,
		shots: 1,
		is_available: function(selected_object) {
			if(selected_object.has_torpedo_tube > 0 && ( selected_object.this.aircraft > 0 || selected_object.this.watercraft > 0 ) )
				return true;
			else
				return false;
		},
		missiles_per: 8,
		linkable: 0,
		mods: 1,
		cost: 1000000,
		notes: "AP 50, HW, LBT. Space or watercraft only. Half Range in water."
	},
	{
		name: "Heavy Torpedo",
		classification: "Missiles & Torpedoes",
		description: "These weapons use the rules for missiles in Savage Worlds and require missile launchers or torpedo tubes to mount. Attackers use Shooting to get a lock if firing directly or Knowledge (Computers) if fired indirectly from a bridge or weapons station. Defenders use Piloting if evading directly or Knowledge (Navigation) from a bridge or nav station. Determine lock by ship—if a ship gets a lock, it may fire all the missiles or torpedoes it’s allowed.",
		range: "300/600/1200",
		damage: "8d12",
		rof: 1,
		flying_only: 0,
		is_available: function(selected_object) {
			if(selected_object.has_torpedo_tube > 0 && ( selected_object.this.aircraft > 0 || selected_object.this.watercraft > 0 ) )
				return true;
			else
				return false;
		},
		shots: 1,
		missiles_per: 4,
		linkable: 0,
		mods: 1,
		cost: 1000000,
		notes: "AP 50, HW, LBT. Space or watercraft only. Half Range in water."
	},
	{
		name: "Light Rail Gun",
		classification: "Rail Guns",
		description: "“Rail guns” are smaller versions of mass drivers, magnetically propelling dense shells (in atmosphere) or spheroids (space). They fire Light (3” diameter) or Heavy (5”) shells.",
		range: "50/100/200",
		damage: "4d10",
		rof: 1,
		shots: 20,
		missiles_per: 0,
		linkable: 0,
		mods: 1,
		cost: 50000,
		notes: "HW. Projectiles weigh 10 lb and cost $100 each."
	},
	{
		name: "Heavy Rail Gun",
		classification: "Rail Guns",
		description: "“Rail guns” are smaller versions of mass drivers, magnetically propelling dense shells (in atmosphere) or spheroids (space). They fire Light (3” diameter) or Heavy (5”) shells.",
		range: "75/150/300",
		damage: "5d10",
		rof: 1,
		shots: 20,
		missiles_per: 0,
		linkable: 0,
		mods: 2,
		cost: 100000,
		notes: "HW. Projectiles weigh 25 lb and cost $200 each."
	},
	{
		name: "Medium MG",
		classification: "Slugthrowers",
		description: "Slugthrowers are traditional firearms firing chemically-propelled rounds.",
		range: "30/60/120",
		damage: "2d8+1",
		rof: 4,
		shots: 200,
		missiles_per: 0,
		linkable: 0,
		mods: 1,
		cost: 3000,
		notes: "AP 2, Auto. A 200 round belt of ammo costs $400 and weighs 15 pounds."
	},
	{
		name: "Heavy MG",
		classification: "Slugthrowers",
		description: "Slugthrowers are traditional firearms firing chemically-propelled rounds.",
		range: "50/100/200",
		damage: "2d10",
		rof: 3,
		shots: 200,
		missiles_per: 0,
		linkable: 0,
		mods: 1,
		cost: 5000,
		notes: "AP 4, Auto, HW. A 200 round belt of ammo costs $500 and weighs 20 pounds."
	},
	{
		name: "Minigun",
		classification: "Slugthrowers",
		description: "Slugthrowers are traditional firearms firing chemically-propelled rounds.",
		range: "24/48/96",
		damage: "2d8+4",
		rof: 4,
		shots: 1000,
		missiles_per: 0,
		linkable: 0,
		mods: 1,
		cost: 10000,
		notes: "AP 3, Auto, HW. An additional 1000 round drum of ammunition weighs 20 pounds and costs $1000."
	}

);
