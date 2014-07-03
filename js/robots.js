// robots.js

function robot() {
	this.name = "";
	this.attributes = {
		agility: 0,
		smarts: 0,
		spirit: 0,
		strength: 0,
		vigor: 0
	}

	this.secondary = {
		charisma: 0,
		toughness: 0,
		parry: 0,
		pace: 0
	}

	this.is_wildcard = 0;

	this.mod_points = 5;
	this.mod_used = 5;

	this.skills = Array();

	this.add_attribute = add_attribute;
	function add_attribute(attributeName) {
	}

	this.set_wildcard = set_wildcard;
	function set_wildcard(is_wildcard) {
		if(is_wildcard)
			this.is_wildcard = true;
		else
			is_wildcard = false;
	}

	this.subtract_attribute = subtract_attribute;
	function subtract_attribute(attributeName) {
	}

	this.add_skill = add_skill;
	function add_skill(skillName) {
	}

	this.subtract_skill = subtract_skill;
	function subtract_skill(skillName) {
	}

	this.calc_robot = calc_robot;
	function calc_robot() {

	}

	this.create_summary = create_summary;
	function create_summary() {
		html = "";

		return html;
	}
}