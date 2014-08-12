function propogate_attribute_options(current_value, current_attribute) {
	if(!current_value)
		current_value = 0;

	current_value = current_value / 1;
	select_selector = ".js-chargen-attributes-" + current_attribute;

	min_count = 1;
	max_count = 6;

	if(current_character.race.attributes[current_attribute]) {
		min_count += current_character.race.attributes[current_attribute];
		max_count += current_character.race.attributes[current_attribute];
	}

	html = "";
	for(attribute_counter = min_count; attribute_counter < max_count; attribute_counter++) {
		if(attribute_labels[attribute_counter])
			if(current_value == attribute_counter)
				html += "<option selected=\"selected\" value=\"" + attribute_counter + "\">" + attribute_labels[attribute_counter] + "</option>";
			else
				html += "<option value=\"" + attribute_counter + "\">" + attribute_labels[attribute_counter] + "</option>";
	}
	$(select_selector).html(html);
}

function propogate_race_options(select_selector) {

	html = "";
	for(race_counter = 0; race_counter < chargen_races.length; race_counter++) {
		if(current_character.race == chargen_races[race_counter])
			html += "<option selected=\"selected\" value=\"" + chargen_races[race_counter].name + "\">" + chargen_races[race_counter].name + "</option>";
		else
			html += "<option value=\"" + chargen_races[race_counter].name + "\">" + chargen_races[race_counter].name + "</option>";
	}
	$(select_selector).html(html);
}

function display_remaining_attribute_points(selector_name) {
	if(current_character.attribute_points == 0) {
		$(selector_name).text(  "No points remaining" );
	} else if( current_character.attribute_points > 0 ) {
		$(selector_name).text(  current_character.attribute_points + " points remaining" );
	} else {
		$(selector_name).text(  current_character.attribute_points * -1 + " points overspent" );
	}

}

function propogate_gender_options(select_selector) {

	html = "";
	for(gender_counter = 0; gender_counter < cargen_genders.length; gender_counter++) {
		if(current_character.gender == cargen_genders[gender_counter].name)
			html += "<option selected=\"selected\" value=\"" + cargen_genders[gender_counter].name + "\">" + cargen_genders[gender_counter].name + "</option>";
		else
			html += "<option value=\"" + cargen_genders[gender_counter].name + "\">" + cargen_genders[gender_counter].name + "</option>";
	}
	$(select_selector).html(html);
}

function event_attribute_changed(attribute_name, new_value) {
	current_character.set_attribute(attribute_name, new_value);
	refresh_chargen_page();
}

function refresh_chargen_page() {
	current_character.calculate();
	localStorage["current_character"] = current_character.export_json();
	// Fill in Fluff Section
	$(".js-chargen-name").val(current_character.name);
	$(".js-chargen-name").unbind("keyup");
	$(".js-chargen-name").keyup( function(event) {
		current_character.set_name($(this).val() );
		refresh_chargen_page();
		return;
	});

	propogate_race_options(".js-chargen-race")
	$(".js-chargen-race").unbind("change");
	$(".js-chargen-race").change( function(event) {
		current_character.set_race($(this).val() );
		refresh_chargen_page();
		return;
	});

	propogate_gender_options(".js-chargen-gender")
	$(".js-chargen-gender").unbind("change");
	$(".js-chargen-gender").change( function(event) {
		current_character.set_gender($(this).val() );
		refresh_chargen_page();
		return;
	});

	$(".js-chargen-description").val(current_character.description);
	$(".js-chargen-description").unbind("keyup");
	$(".js-chargen-description").keyup( function(event) {
		current_character.set_description($(this).val() );
		refresh_chargen_page();
		return;
	});

	// Fill in Attributes Section
	display_remaining_attribute_points(".js-charget-attributes-points-label");
	propogate_attribute_options(current_character.attributes.agility, "agility");
	propogate_attribute_options(current_character.attributes.smarts, "smarts");
	propogate_attribute_options(current_character.attributes.spirit, "spirit");
	propogate_attribute_options(current_character.attributes.strength, "strength");
	propogate_attribute_options(current_character.attributes.vigor, "vigor");
	$(".js-chargen-attributes-agility").unbind("change");
	$(".js-chargen-attributes-agility").change( function(event) {
		event_attribute_changed("agility", $(this).val() );
		return;
	});
	$(".js-chargen-attributes-smarts").unbind("change");
	$(".js-chargen-attributes-smarts").change( function(event) {
		event_attribute_changed("smarts", $(this).val() );
		return;
	});
	$(".js-chargen-attributes-spirit").unbind("change");
	$(".js-chargen-attributes-spirit").change( function(event) {
		event_attribute_changed("spirit", $(this).val() );
		return;
	});
	$(".js-chargen-attributes-strength").unbind("change");
	$(".js-chargen-attributes-strength").change( function(event) {
		event_attribute_changed("strength", $(this).val() );
		return;
	});
	$(".js-chargen-attributes-vigor").unbind("change");
	$(".js-chargen-attributes-vigor").change( function(event) {
		event_attribute_changed("vigor", $(this).val() );
		return;
	});


}

