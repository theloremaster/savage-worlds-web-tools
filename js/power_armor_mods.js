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

	}
);