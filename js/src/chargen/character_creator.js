var current_gear_book = "";
var current_gear_general = "";
var current_gear_class = "";
var current_gear_type = "";
var current_gear_search = "";

function propagate_attribute_options(current_value, current_attribute) {
	if(!current_value)
		current_value = 0;

	current_value = current_value / 1;
	select_selector = ".js-chargen-attributes-" + current_attribute;
	div_selector = ".js-chargen-complete-attribute-" + current_attribute;

	min_count = 1;
	max_count = 6;

	if(current_character.race.attributes[current_attribute]) {
		min_count += current_character.race.attributes[current_attribute];
		max_count += current_character.race.attributes[current_attribute];
	}

	html = "";
	for(attribute_counter = min_count; attribute_counter < max_count; attribute_counter++) {
		if(attribute_labels[attribute_counter]) {
			current_class = ""
			if(attribute_counter == 1)
				current_class = "d4";
			if(attribute_counter == 2)
				current_class = "d6";
			if(attribute_counter == 3)
				current_class = "d8";
			if(attribute_counter == 4)
				current_class = "d10";
			if(attribute_counter >= 5)
				current_class = "d12";

			if(current_value == attribute_counter)
				html += "<option class=\"die-select " + current_class + "\" selected=\"selected\" value=\"" + (attribute_counter - current_character.race.attributes[current_attribute])+ "\">" + attribute_labels[attribute_counter] + "</option>";
			else
				html += "<option class=\"die-select " + current_class + "\" value=\"" + (attribute_counter - current_character.race.attributes[current_attribute]) + "\">" + attribute_labels[attribute_counter] + "</option>";
		}
	}
	$(select_selector).html(html);
	$(div_selector).hide();
	$(select_selector).show();
}

function display_attribute(current_value, current_attribute) {
	select_selector = ".js-chargen-attributes-" + current_attribute;
	div_selector = ".js-chargen-complete-attribute-" + current_attribute;

	$(select_selector).hide();
	$(div_selector).text(attribute_labels[current_value]);
	$(div_selector).show();
}

function propagate_race_options(select_selector) {

	if(current_character.is_complete() ) {
		$(".race-locked").show();
		$(".race-open").hide();
		$(select_selector + "-readonly").text( current_character.race.name );
	} else {

		html = "";
		bookoptgroup = "";
		for(race_counter = 0; race_counter < chargen_races.length; race_counter++) {
			if(bookoptgroup != chargen_races[race_counter].book.name ) {
				if( bookoptgroup != "")
					html += "</optgroup>";
				html += "<optgroup label='" + chargen_races[race_counter].book.name + "'>";
				bookoptgroup = chargen_races[race_counter].book.name;
			}
			if(current_character.race == chargen_races[race_counter])
				html += "<option selected=\"selected\" value=\"" + chargen_races[race_counter].name + "\">" + chargen_races[race_counter].name + "</option>";
			else
				html += "<option value=\"" + chargen_races[race_counter].name + "\">" + chargen_races[race_counter].name + "</option>";
		}
		$(select_selector).html(html);
		$(".race-locked").hide();
		$(".race-open").show();
	}
}


function propagate_gender_options(select_selector) {

	html = "";
	for(gender_counter = 0; gender_counter < chargen_genders.length; gender_counter++) {
		if(current_character.gender == chargen_genders[gender_counter].name)
			html += "<option selected=\"selected\" value=\"" + chargen_genders[gender_counter].name + "\">" + chargen_genders[gender_counter].name + "</option>";
		else
			html += "<option value=\"" + chargen_genders[gender_counter].name + "\">" + chargen_genders[gender_counter].name + "</option>";
	}
	$(select_selector).html(html);

}

function propagate_arcane_background_options() {

	html = "";
	if( current_character.arcane_background > 0) {

		if( !current_character.is_complete() ) {
			html += "<label>Arcane Background Type<br />";
			html += "<select class=\"js-select-arcane-bg\">";

			if(current_character.arcane_background_selected == "")
				html += "<option selected=\"selected\" value=\"\">- Select a Background -</option>";
			else
				html += "<option value=\"\">- Select a Background -</option>";

			bookoptgroup = ""
			for(arcane_background_counter = 0; arcane_background_counter < chargen_arcane_backgrounds.length; arcane_background_counter++) {
				if(bookoptgroup != chargen_arcane_backgrounds[arcane_background_counter].book.name ) {
					if( bookoptgroup != "")
						html += "</optgroup>";
					html += "<optgroup label='" + chargen_arcane_backgrounds[arcane_background_counter].book.name + "'>";
					bookoptgroup = chargen_arcane_backgrounds[arcane_background_counter].book.name;
				}

				if(current_character.arcane_background_selected.short_name == chargen_arcane_backgrounds[arcane_background_counter].short_name)
					html += "<option selected=\"selected\" value=\"" + chargen_arcane_backgrounds[arcane_background_counter].short_name + "\">" + chargen_arcane_backgrounds[arcane_background_counter].name + "</option>";
				else
					html += "<option value=\"" + chargen_arcane_backgrounds[arcane_background_counter].short_name + "\">" + chargen_arcane_backgrounds[arcane_background_counter].name + "</option>";
			}
			html += "</select></label>";
		} else {
			html += "<label>Arcane Background Type<br />" + current_character.arcane_background_selected.name + "</label>";
		}

		if( current_character.power_points_available > 0) {
			html += "<br />Your character has " + current_character.power_points_available + " power points";
		} else {
			html += "<br />Your character has no power points";
		}

		if( current_character.powers_available > 0) {
			html += "<br />You have " + current_character.powers_available + " powers available.";
			html += "<br /><button class='btn btn-primary btn-sm js-open-power-modal'>Select a New Power</button>";
		}

		if( current_character.selected_powers.length > 0 ) {
			html += "<h4>Current Powers</h4>";
			for(p_counter = 0; p_counter < current_character.selected_powers.length; p_counter++) {
				html += "<div class=\"a-h-line\">";
				if(!current_character.is_complete() ) {
					html += "<button";
						html += " type=\"button\"";
						html += " class=\"btn btn-xs btn-danger js-delete-power-button\"";
						html += " shortname=\"" + current_character.selected_powers[p_counter].short_name + "\"";
						html += " trap=\"" + current_character.selected_powers[p_counter].trapping + "\"";
					html += ">";
					html += "Remove</button> ";
				}
				if( current_character.selected_powers[p_counter].description != "") {
					html += current_character.selected_powers[p_counter].description + " (" + current_character.selected_powers[p_counter].name;
						if( current_character.selected_powers[p_counter].trapping != "" )
							html += ", " + current_character.selected_powers[p_counter].trapping  + ")";
						else
							html += ")";

				} else {
					if( current_character.selected_powers[p_counter].trapping != "" )
						html += current_character.selected_powers[p_counter].name + " (" + current_character.selected_powers[p_counter].trapping  + ")";
					else
						html += current_character.selected_powers[p_counter].name;
				}
				html += "</div>";
			}
		}else {
			html += "<p>You have no selected powers</p>";
		}


		propagate_trapping_base_options();
		propagate_power_options();
	} else {
		html += "You must select the Arcane Backrgound edge to have powers."
	}


	$(".js-powers-area").html(html);

	$(".js-delete-power-button").unbind("click");
	$(".js-delete-power-button").click( function() {
		var shortname = $(this).attr("shortname");
		var	trapping = $(this).attr("trap");
		bootbox.confirm("Are you sure you want to delete this power?", function(ok_clicked) {
			if(ok_clicked) {
				current_character.remove_power( shortname, trapping);
				refresh_chargen_page();
			}
		});

	});

	$(".js-open-power-modal").unbind("click");
	$(".js-open-power-modal").click( function() {
		$(".js-trapping-description-case").prop("checked", "checked");
		$(".js-trapping-description").val('');
		$(".js-add-specify-power-dialog").modal();
	});
	/* Select Arcane Background Bindings */
	$(".js-select-arcane-bg").unbind("change");
	$(".js-select-arcane-bg").change( function() {
		current_character.set_arcane_bg( $(this).val() );
		refresh_chargen_page();
	} );

	$(".js-add-power-action").unbind("click");
	$(".js-add-power-action").click( function() {
		if( $(".js-select-power").val() != "" ) {
			if( $(".js-trapping-description-case").is(":checked") )
				new_description = uc_words( $(".js-trapping-description").val() );
			else
				new_description = $(".js-trapping-description").val();

			current_character.add_power(
				$(".js-select-power").val(), // power shortname
				$(".js-select-trapping").val(), // trapping
				new_description // description
			);
			refresh_chargen_page();
		} else {
			bootstrap_alert("No power was selected", "warning");
		}

	} );
}

function propagate_trapping_base_options() {
	ts_html = "<option value=\"\">- Select a Trapping -</option>";

	bookoptgroup = "";
	for(ts_counter = 0; ts_counter < chargen_trappings.length; ts_counter++){

		if(bookoptgroup != chargen_trappings[ts_counter].book.name ) {
			if( bookoptgroup != "")
				ps_html += "</optgroup>";
			ts_html += "<optgroup label='" + chargen_trappings[ts_counter].book.name + "'>";
			bookoptgroup = chargen_trappings[ts_counter].book.name;
		}
		ts_html += "<option>" + chargen_trappings[ts_counter].name + "</option>";
	}

	$(".js-select-trapping").html(ts_html);
}

function propagate_power_options() {
	ps_html = "<option value=\"\">- Select a Power -</option>";


	bookoptgroup = "";
	for(ps_counter = 0; ps_counter < chargen_powers.length; ps_counter++){

		if(bookoptgroup != chargen_powers[ps_counter].book.name ) {
			if( bookoptgroup != "")
				ps_html += "</optgroup>";
			ps_html += "<optgroup label='" + chargen_powers[ps_counter].book.name + "'>";
			bookoptgroup = chargen_powers[ps_counter].book.name;
		}


		if( current_character.power_available(chargen_powers[ps_counter]) ) {
			ps_html += "<option value=\"" + chargen_powers[ps_counter].short_name + "\">" + chargen_powers[ps_counter].name + "</option>";
		} else {
			ps_html += "<option  disabled=\"disabled\" value=\"" + chargen_powers[ps_counter].short_name + "\">" + chargen_powers[ps_counter].name + "</option>";
		}
	}

	$(".js-select-power").html(ps_html);
}


function display_remaining_attribute_points(selector_name) {
	if( !current_character.is_complete() ) {

		$(selector_name).removeClass("text-danger");
		$(selector_name).removeClass("text-primary");

		$(selector_name).show();

		if(current_character.attribute_points == 0) {
			$(selector_name).text(  "No attribute points remaining" );
		} else if( current_character.attribute_points > 0 ) {
			$(selector_name).addClass("text-primary");
			if(current_character.attribute_points == 1)
				$(selector_name).text(  current_character.attribute_points + " attribute point remaining" );
			else
				$(selector_name).text(  current_character.attribute_points + " attribute points remaining" );
		} else {
			$(selector_name).addClass("text-danger");
			if(current_character.attribute_points == -1)
				$(selector_name).text(  current_character.attribute_points * -1 + " attribute point overspent" );
			else
				$(selector_name).text(  current_character.attribute_points * -1 + " attribute points overspent" );
		}

	} else {
		$(selector_name).removeClass("text-danger");
		$(selector_name).removeClass("text-primary");
		$(selector_name).hide();
	}
}

function display_remaining_skill_points(selector_name) {
	if(!current_character.is_complete() ) {
		$(selector_name).removeClass("text-danger");
		$(selector_name).removeClass("text-primary");

		if(current_character.skill_points == 0) {
			$(selector_name).text(  "No skill points remaining" );
		} else if( current_character.skill_points > 0 ) {
			$(selector_name).addClass("text-primary");
			if(current_character.skill_points == 1)
				$(selector_name).text(  current_character.skill_points + " skill point remaining" );
			else
				$(selector_name).text(  current_character.skill_points + " skill points remaining" );
		} else {
			$(selector_name).addClass("text-danger");
			if(current_character.skill_points == -1)
				$(selector_name).text(  current_character.skill_points * -1 + " skill point overspent" );
			else
				$(selector_name).text(  current_character.skill_points * -1 + " skill points overspent" );
		}
		$(selector_name).show();
	} else {
		$(selector_name).hide();
	}

}


function propagate_character_section() {
// Fill in Fluff Section
//	$(".js-chargen-name").val(current_character.name);
	$(".js-chargen-name").unbind("keyup");
	$(".js-chargen-name").keyup( function(event) {
		current_character.set_name($(this).val() );
		refresh_chargen_page();
		return;
	});

	propagate_race_options(".js-chargen-race")
	$(".js-chargen-race").unbind("change");
	$(".js-chargen-race").change( function(event) {
		current_character.set_race($(this).val() );
		refresh_chargen_page();
		return;
	});

	propagate_gender_options(".js-chargen-gender")
	$(".js-chargen-gender").unbind("change");
	$(".js-chargen-gender").change( function(event) {
		current_character.set_gender($(this).val() );
		refresh_chargen_page();
		return;
	});

	// $(".js-chargen-description").val(current_character.description);
	$(".js-chargen-description").unbind("keyup");
	$(".js-chargen-description").keyup( function(event) {
		current_character.set_description($(this).val() );
		refresh_chargen_page();
		return;
	});
}

function propagate_skills_sections() {

	display_remaining_skill_points(".js-chargen-skill-points-label");

	// list Agility Skills....
	skills_html = Array();

	for(skills_counter =0 ; skills_counter < chargen_skills.length; skills_counter++) {
		if( !chargen_skills[skills_counter].specify )
			chargen_skills[skills_counter].specify = 0;

		if( !skills_html[chargen_skills[skills_counter].attribute] )
			skills_html[chargen_skills[skills_counter].attribute] = "";

		// created an html var for legibility
		no_closing_div = false;
		html = "";
		html += "<div class=\"skill-container\">";
		current_skill = current_character.get_skill( chargen_skills[skills_counter].name );
		skills_of = Array();
		if( current_skill && !current_skill.specify_text ) {
			value_label = attribute_images[current_skill.value];
			if(current_skill.value == 0)
				value_label = " - ";

			html += current_skill.name + ": " + value_label;

			if( !current_character.is_complete() ) {
				html += "<div class=\"pull-right\">";
				html += "<button class=\"js-lower-skill-level btn btn-xs btn-primary\" skillname=\"" + current_skill.name + "\" skillval=\"" + current_skill.value + "\">-</button>";
				if(current_skill.value < 5)
					html += "<button class=\"js-add-skill-level btn btn-xs btn-primary\" skillname=\"" + current_skill.name + "\" skillval=\"" + current_skill.value + "\">+</button>";
				else
					html += "<button class=\"js-disable-add-skill-level btn btn-xs btn-warning\" title=\"d12 is the highest skill level\">+</button>";
				html += "</div>";
			}

		} else {

			if( chargen_skills[skills_counter].specify < 1 ) {
				value_label = attribute_images[0];
				html += chargen_skills[skills_counter].name + ": " + value_label ;
				if( !current_character.is_complete() ) {
					html += "<div class=\"pull-right\">";
					html += "<button class=\"js-add-skill-level btn btn-xs btn-primary\" skillname=\"" + chargen_skills[skills_counter].name + "\" skillval=\"0\">+</button>";
					html += "</div>";
				}
			} else {
				html += chargen_skills[skills_counter].name + " Skills" ;
				if( !current_character.is_complete() ) {
					html += "<div class=\"pull-right\">";
					html += "<button class=\"js-add-specify-skill btn btn-xs btn-primary\" skillname=\"" + chargen_skills[skills_counter].name + "\">Add</button>";
					html += "</div>";
				}
				skills_of = current_character.get_skills_of(chargen_skills[skills_counter].name);
				if(skills_of.length > 0)
					no_closing_div = true;
			}
		}

		if(!no_closing_div)
			html += "</div>";

		if(skills_of.length > 0) {
			html += "<div class=\"subskills\">";
			for(specify_skills_counter = 0 ; specify_skills_counter < skills_of.length; specify_skills_counter++) {

				current_sub_skill = skills_of[specify_skills_counter];
				value_label = attribute_images[current_sub_skill.value];
				if(current_sub_skill.value == 0)
					value_label = " - ";
				current_sub_name = current_sub_skill.name + ": " + current_sub_skill.specify_text;

				html += "<div class=\"skill-container\">";
				html += current_sub_skill.specify_text + ": " + value_label;
				if( !current_character.is_complete() ) {
					html += "<div class=\"pull-right\">";
					html += "<button class=\"js-lower-skill-level btn btn-xs btn-primary\" skillname=\"" + current_sub_name + "\" skillval=\"" + current_sub_skill.value + "\">-</button>";
					html += "<button class=\"js-add-skill-level btn btn-xs btn-primary\" skillname=\"" + current_sub_name + "\" skillval=\"" + current_sub_skill.value + "\">+</button>";
					html += "</div>";
				}
				html += "</div>";
			}
			html += "</div>";

			html += "</div>";	// closing div for parent container....
		}

		skills_html[chargen_skills[skills_counter].attribute] += html;
	}

	if( current_character.arcane_background_selected ) {

		html = "<div class=\"skill-container\">";
		current_skill = current_character.get_skill( current_character.arcane_background_selected.skill.name );
		skills_of = Array();
		if( current_skill ) {
			value_label = attribute_images[current_skill.value];
			if(current_skill.value == 0)
				value_label = " - ";

			html += current_skill.name + ": " + value_label;

			if( !current_character.is_complete() ) {
				html += "<div class=\"pull-right\">";
				html += "<button class=\"js-lower-skill-level btn btn-xs btn-primary\" skillname=\"" + current_skill.name + "\" skillval=\"" + current_skill.value + "\">-</button>";
				html += "<button class=\"js-add-skill-level btn btn-xs btn-primary\" skillname=\"" + current_skill.name + "\" skillval=\"" + current_skill.value + "\">+</button>";
				html += "</div>";
			}
		} else {
			value_label = attribute_images[0];
			html += current_character.arcane_background_selected.skill.name + ": " + value_label ;
			if( !current_character.is_complete() ) {
				html += "<div class=\"pull-right\">";
				html += "<button class=\"js-add-skill-level btn btn-xs btn-primary\" skillname=\"" + current_character.arcane_background_selected.skill.name + "\" skillval=\"0\">+</button>";
				html += "</div>";
			}
		}

		html += "</div>";

		skills_html[current_character.arcane_background_selected.skill.attribute] = html + skills_html[current_character.arcane_background_selected.skill.attribute];
	}

	if(skills_html["agility"]) {
		$(".js-skill-list-agility").html(skills_html["agility"]);
	}
	if(skills_html["smarts"]) {
		$(".js-skill-list-smarts").html(skills_html["smarts"]);
	}
	if(skills_html["spirit"]) {
		$(".js-skill-list-spirit").html(skills_html["spirit"]);
	}
	if(skills_html["strength"]) {
		$(".js-skill-list-strength").html(skills_html["strength"]);
	}
	if(skills_html["vigor"]) {
		$(".js-skill-list-vigor").html(skills_html["vigor"]);
	}

	$(".js-add-specify-skill").unbind("click");
	$(".js-add-specify-skill").click( function() {
		skill_name = $(this).attr("skillname");
		$(".js-specify-skill-label").text(skill_name);
		$(".js-specify-skill-base").val(skill_name);
		$(".js-specify-skill-value").val('');
		$(".js-specify-skill-fix-case").prop("checked", "checked");
		$(".js-add-specify-skill-dialog").modal("show");
	});

	$(".js-add-specify-skill-action").unbind("click");
	$(".js-add-specify-skill-action").click( function() {
		if( $(".js-specify-skill-fix-case").is(":checked") )
			new_skill_name = $(".js-specify-skill-base").val() + ": " + uc_words( $(".js-specify-skill-value").val() );
		else
			new_skill_name = $(".js-specify-skill-base").val() + ": " + $(".js-specify-skill-value").val();

		current_character.set_skill(new_skill_name, 1);
		refresh_chargen_page();
	});

	$(".js-add-skill-level").unbind("click");
	$(".js-add-skill-level").click( function() {
		skill_name = $(this).attr("skillname");
		skill_value = $(this).attr("skillval") / 1;
		new_value = skill_value + 1;
		current_character.set_skill( skill_name, new_value );
		refresh_chargen_page();
	});

	$(".js-lower-skill-level").unbind("click");
	$(".js-lower-skill-level").click( function() {
		skill_name = $(this).attr("skillname");
		skill_value = $(this).attr("skillval") / 1;
		new_value = skill_value - 1;
		if( new_value < 0)
			new_value = 0;
		current_character.set_skill( skill_name, new_value );
		refresh_chargen_page();
	});

	$(".js-set-skill-level").unbind("change");
	$(".js-set-skill-level").change( function() {
		skill_name = $(this).attr("skillname");
		skill_value = $(this).attr("skillval") / 1;
		new_value = $(this).val() / 1;

		current_character.set_skill( skill_name, new_value );
		refresh_chargen_page();
	});
}

function propagate_advancement_section() {
	html = "";
	if( current_character.is_complete() ){
		html += "<p>Your character creation is complete - advancement enabled. If this is not what you want, click the button below.</p>";
		html += "<button type='button' class='js-remove-advancements-character btn btn-danger'>Remove Advancements</button>";
	} else {
		html += "<p>Your novice character is still in creation mode. Click on the complete button below to start standard character advancement.</p>";
		html += "<button type='button' class='js-complete-character btn btn-primary'>Complete</button>";
	}
	$(".js-advancement-area").html(html);

	$(".js-complete-character").unbind("click");
	$(".js-complete-character").click( function() {
		bootbox.confirm("This will 'finalize' your character creation and change the interface to advancement mode. You will only be able to change attributes, edges, skills via the advancement interface.<br /><br />Would you like to continue?", function(ok_clicked) {
			if(ok_clicked) {

				current_character.creation_completed = true;
				refresh_chargen_page();
			}
		});
	});

	$(".js-remove-advancements-character").unbind("click");
	$(".js-remove-advancements-character").click( function() {
		bootbox.confirm("This will remove <strong>all</strong> advancements from this character, and you'll have to re-add them manually when you are ready to advance again.<br /><br />Would you like to continue?", function(ok_clicked) {
			if(ok_clicked) {
				current_character.creation_completed = false;
				refresh_chargen_page();
			}
		});
	});
}



function propagate_hindrances_section() {
	list_hindrance_html = "";
	add_hindrance_html = "";

	current_hindrances = current_character.get_all_hindrances();
	if(current_hindrances.length > 0) {

		for(hind_counter = 0; hind_counter < current_hindrances.length; hind_counter++) {
			list_hindrance_html += "<div class=\"a-h-line\">";
			if( current_hindrances[hind_counter].toLowerCase().indexOf("(racial)") == -1 )
				if(!current_character.is_complete() )
					list_hindrance_html += "<button type=\"button\" class=\"btn btn-xs btn-danger js-delete-hindrance-button\" relname=\"" + current_hindrances[hind_counter] + "\">Remove</button> ";
			list_hindrance_html += current_hindrances[hind_counter] + "</div>";
		}

	} else {
		list_hindrance_html += "<p>No Hindrances Selected</p>";
	}

	if( !current_character.is_complete() ) {
		add_hindrance_html += "<div class=\"row\"><div class=\"col-xs-12\"><h4>Add Hindrance</h4><select class=\"js-add-hind-select\">";
		bookoptgroup = "";
		for(hind_counter = 0; hind_counter < chargen_hindrances.length; hind_counter++) {

			if(bookoptgroup != chargen_hindrances[hind_counter].book.name ) {
				if( bookoptgroup != "")
					add_hindrance_html += "</optgroup>";
				add_hindrance_html += "<optgroup label='" + chargen_hindrances[hind_counter].book.name + "'>";
				bookoptgroup = chargen_hindrances[hind_counter].book.name;
			}

			disabled = "";
			if(
				current_character.has_edge( chargen_hindrances[hind_counter].name ) == true
					||
				current_character.is_incompatible_with( chargen_hindrances[hind_counter] ) == true

			) {
				disabled = " disabled=\"disabled\"";
			}
			minor_major = "";
			if(chargen_hindrances[hind_counter].major > 0)
				minor_major = " (major)";
			if(chargen_hindrances[hind_counter].minor > 0)
				minor_major = " (minor)";

			specify_field = "";
			if(chargen_hindrances[hind_counter].specify_field > 0)
				specify_field = " specified=\"1\"";

			add_hindrance_html += "<option" + disabled + specify_field + ">&nbsp;&nbsp;&nbsp;&nbsp;" + chargen_hindrances[hind_counter].name + minor_major + "</option>";
		}
		add_hindrance_html += "</select></div></div><div class=\"row\">";
		add_hindrance_html += "<div class=\"col-xs-12\"><input type=\"text\" placeholder=\"specify your hindrance\" style=\"display: none\" class=\"js-add-hindrance-specify\" />";
		add_hindrance_html += "<button type\"button\" class=\"btn-sm pull-right btn btn-primary js-add-hindrance-button\">Add</button>";
		add_hindrance_html += "</div>";
		add_hindrance_html += "</div>";
	}

	$(".js-add-hindrance").html(add_hindrance_html);

	is_specify_field = $('option:selected', this).attr('specified');
	if( is_specify_field > 0 ) {
		$(".js-add-hindrance-specify").slideDown();
		$(".js-add-hindrance-specify").val('');
	} else {
		$(".js-add-hindrance-specify").slideUp();
		$(".js-add-hindrance-specify").val('');
	}

	$(".js-add-hind-select").unbind("change");
	$(".js-add-hind-select").change( function() {
		is_specify_field = $('option:selected', this).attr('specified');
		if( is_specify_field > 0 ) {
			$(".js-add-hindrance-specify").slideDown();
			$(".js-add-hindrance-specify").val('');
		} else {
			$(".js-add-hindrance-specify").slideUp();
			$(".js-add-hindrance-specify").val('');
		}
	});

	$(".js-add-hindrance-button").unbind("click");
	$(".js-add-hindrance-button").click( function() {
		current_character.add_hindrance(
			$(".js-add-hind-select").val().replace("&nbsp;", ""),
			$(".js-add-hindrance-specify").val().replace("&nbsp;", "")
		);
		refresh_chargen_page();
	});

	$(".js-list-hindrances").html(list_hindrance_html);
	$(".js-delete-hindrance-button").unbind("click");
	$(".js-delete-hindrance-button").click( function() {
		var remove_hindrance_name = $(this).attr("relname");
		bootbox.confirm("Are you sure you want to remove the hindrance " + $(this).attr("relname"), function(ok_clicked) {
			if(ok_clicked) {

				current_character.remove_hindrance(
					remove_hindrance_name
				);
				refresh_chargen_page();
			}
		});
	});

}

function propagate_edges_section() {
	list_edges_html = "";
	add_edge_html = "";

	current_edges = current_character.get_all_edges();
	if(current_edges.length > 0) {

		for(edge_counter = 0; edge_counter < current_edges.length; edge_counter++) {
			list_edges_html += "<div class=\"a-h-line\">";
			if( current_edges[edge_counter].toLowerCase().indexOf("(racial)") == -1 )
				if(!current_character.is_complete() )
					list_edges_html += "<button type=\"button\" class=\"btn btn-xs btn-danger js-delete-edge-button\" relname=\"" + current_edges[edge_counter] + "\">Remove</button> ";
			list_edges_html += current_edges[edge_counter] + "</div>";
//			list_edges_html += "</div>";
		}

	} else {
		list_edges_html += "<p>No Edges Selected</p>";
	}

	add_edge_html = "";
	if(current_character.edges_available > 0 ) {
		add_edge_html += "<div class=\"row\"><div class=\"col-xs-12\"><h4>Add Edge</h4><select class=\"js-add-edge-select\">";
		optgroup = "";
		bookoptgroup = "";
		for(edge_counter = 0; edge_counter < chargen_edges.length; edge_counter++) {
			disabled = "";
			check_this_rank_only = false;
			if( chargen_edges[edge_counter].once_per_rank && chargen_edges[edge_counter].once_per_rank)
				check_this_rank_only = true;

			if( !chargen_edges[edge_counter].retakable )
				retakable = false;
			else
				retakable = chargen_edges[edge_counter].retakable;

			if(
				( current_character.has_edge( chargen_edges[edge_counter].name, retakable, check_this_rank_only ) == true )
					||
				current_character.is_incompatible_with( chargen_edges[edge_counter] ) == true
					||
				current_character.edge_available( chargen_edges[edge_counter] ) == false

			) {
				disabled = " disabled=\"disabled\"";
			}

			if(!chargen_edges[edge_counter].unlisted || chargen_edges[edge_counter].unlisted < 1) {

				if(bookoptgroup != chargen_edges[edge_counter].book.name ) {
					if( bookoptgroup != "")
						add_edge_html += "</optgroup>";
					add_edge_html += "<optgroup label='" + chargen_edges[edge_counter].book.name + "'>";
					bookoptgroup = chargen_edges[edge_counter].book.name;
				}

				if(optgroup != chargen_edges[edge_counter].category ) {
					if( optgroup != "")
						add_edge_html += "</optgroup>";
					add_edge_html += "<optgroup label='&nbsp;&nbsp;&nbsp;&nbsp;" + chargen_edges[edge_counter].category + "'>";
					optgroup = chargen_edges[edge_counter].category;
				}

				add_edge_html += "<option" + disabled + ">&nbsp;&nbsp;&nbsp;&nbsp;" + chargen_edges[edge_counter].name + "</option>";
			}
		}
		add_edge_html += "</select></div></div><div class=\"row\">";
		add_edge_html += "<div class=\"col-xs-12\">";
		add_edge_html += "<button type\"button\" class=\"btn-sm pull-right btn btn-primary js-add-edge-button\">Add</button>";
		add_edge_html += "</div>";
		add_edge_html += "</div>";
	}

	$(".js-list-edges").html(list_edges_html);
	$(".js-delete-edge-button").unbind("click");
	$(".js-delete-edge-button").click( function() {
		selected_edge = $(this).attr("relname");
		bootbox.confirm("Are you sure you want to remove the edge " + selected_edge, function(ok_clicked) {
			if(ok_clicked) {
				current_character.remove_edge(
					selected_edge
				);
				refresh_chargen_page();
			}
		});
	});

	$(".js-add-edge").html(add_edge_html);
	$(".js-add-edge-button").unbind("click");
	$(".js-add-edge-button").click( function() {
		selected_edge = $(".js-add-edge-select").val().replace("&nbsp;", "");
		current_character.add_edge(selected_edge);
		refresh_chargen_page();
	});

}

function propagate_gear_section() {
	html = "";

	if( !current_character.is_complete() ) {
		html += "<label>Starting Wealth (as per setting):<br /><select class='js-starting-wealth'>";
		for(lc = 0; lc < starting_funds.length; lc++) {
			selected = "";
			if( starting_funds[lc] == current_character.base_starting_funds)
				selected = " selected='selected'";
			default_string = "";
			if(500 == starting_funds[lc])
				default_string = " (default)";
			html += "<option value='" + starting_funds[lc] + "'" + selected + ">$" + starting_funds[lc] + default_string + "</option>";
		}

		html += "</select></label>";
	} else {
		html += "<label>Starting Wealth (as per setting): $" + current_character.starting_funds + "</label>";
	}

	// Show number of items (or items)....
	for( gear_count = 0; gear_count < current_character.selected_gear.length; gear_count++) {
		html += "<div class=\"a-h-line\">"
		html += "<button ref=\"" + gear_count + "\" class=\"js-remove-gear btn btn-xs btn-danger\">Remove</button> ";
		if( current_character.selected_gear[gear_count].count > 1)
			html += current_character.selected_gear[gear_count].name + " x " + current_character.selected_gear[gear_count].count;
		else
			html += current_character.selected_gear[gear_count].name;

		html += "</div>";
	}

	// Show Get Equipment Button
	html += "<button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\".js-gear-dialog\">Get Gear</button>";

	// Show current wealth....
	html += "<div class=\"text-right\">Current Wealth: \$" + current_character.current_funds + "</div>";


	$(".js-gear-area").html( html );

	$(".js-starting-wealth").unbind( "change" );
	$(".js-starting-wealth").change( function() {
		current_character.set_base_starting_funds( $(this).val() );
		refresh_chargen_page();
	});


	/* MODAL */
	// Now Propogate the Available Gear in the Modal
	gear_book_dd = Array();
	gear_general_dd = Array();
	gear_class_dd = Array();
	gear_type_dd = Array();

	for( gear_count = 0; gear_count < chargen_gear.length; gear_count++) {
		if(
			gear_book_dd.indexOf( chargen_gear[gear_count].book ) == -1
		) {
			gear_book_dd.push(chargen_gear[gear_count].book);
			if( current_gear_book == "")
				current_gear_book = chargen_gear[gear_count].book.name;
		}

		if(
			gear_general_dd.indexOf( chargen_gear[gear_count].general ) == -1
				&&
			chargen_gear[gear_count].book.name.toLowerCase().trim() == current_gear_book.toLowerCase().trim()
		) {
			gear_general_dd.push(chargen_gear[gear_count].general);
			if( current_gear_general == "")
				current_gear_general = chargen_gear[gear_count].general;
		}

		if(
			gear_class_dd.indexOf( chargen_gear[gear_count].class ) == -1
				&&
			chargen_gear[gear_count].general.toLowerCase().trim() == current_gear_general.toLowerCase().trim()
				&&
			chargen_gear[gear_count].class != ""
		) {
			gear_class_dd.push(chargen_gear[gear_count].class);
			if( current_gear_class == "")
				current_gear_class = chargen_gear[gear_count].class;
		}

		if(
			gear_type_dd.indexOf( chargen_gear[gear_count].type ) == -1
				&&
			chargen_gear[gear_count].class.toLowerCase().trim() == current_gear_class.toLowerCase().trim()
				&&
			chargen_gear[gear_count].type != ""
		) {
			gear_type_dd.push(chargen_gear[gear_count].type);
			if( current_gear_type == "")
				current_gear_type = chargen_gear[gear_count].type;
		}
	}

	html = "<h5>Available Gear</h5>";
	html += "<label>Book: <select class=\"js-set-gear-filter js-gear-book\">";
	html += "<option value=\"\"> - Select a Book -</option>";
	for(bc = 0; bc < gear_book_dd.length; bc++) {
		if (current_gear_book == "")
			current_gear_book = gear_book_dd[bc].name;
		if( gear_book_dd[bc].name == current_gear_book)
			html += "<option selected=\"selected\" value=\"" + gear_book_dd[bc].name + "\">" + gear_book_dd[bc].name + "</option>";
		else
			html += "<option value=\"" + gear_book_dd[bc].name + "\">" + gear_book_dd[bc].name + "</option>";
	}

	if(gear_general_dd.length > 0) {
		html += "</select></label>";
		html += "<label>General: <select class=\"js-set-gear-filter js-gear-general\">";
		html += "<option value=\"\"> - Select a Category -</option>";
		for(bc = 0; bc < gear_general_dd.length; bc++) {
			if (current_gear_general == "")
				current_gear_general = gear_general_dd[bc];

			if( gear_general_dd[bc] == current_gear_general )
				html += "<option selected=\"selected\">" + gear_general_dd[bc] + "</option>";
			else
				html += "<option>" + gear_general_dd[bc] + "</option>";
		}

		html += "</select></label>";
	}	else {
		current_gear_general = "";
	}

	if(gear_class_dd.length > 0) {
		html += "<label>Class: <select class=\"js-set-gear-filter js-gear-class\">";
		html += "<option value=\"\"> - Select a Category -</option>";
		for(bc = 0; bc < gear_class_dd.length; bc++) {
			if (current_gear_class == "")
				current_gear_class = gear_class_dd[bc];

			if( gear_class_dd[bc] == current_gear_class )
				html += "<option selected=\"selected\">" + gear_class_dd[bc] + "</option>";
			else
				html += "<option>" + gear_class_dd[bc] + "</option>";
		}
		html += "</select></label>";
	} else {
		current_gear_class = "";
	}

	// if(gear_type_dd.length > 0) {
	// 	html += "<label>Type: <select class=\"js-set-gear-filter js-gear-type\">";
	// 	html += "<option value=\"\"> - Select a Category -</option>";
	// 	for(bc = 0; bc < gear_type_dd.length; bc++) {
	// 		if (current_gear_type == "")
	// 			current_gear_type = gear_type_dd[bc];

	// 		if( gear_type_dd[bc] == current_gear_type )
	// 			html += "<option selected=\"selected\">" + gear_type_dd[bc] + "</option>";
	// 		else
	// 			html += "<option>" + gear_type_dd[bc] + "</option>";
	// 	}
	// 	html += "</select></label>";
	// } else {
	// 	current_gear_type = "";
	// }

	html += "<label>Search: <input type=\"text\" class=\"js-gear-search\" value=\"" + current_gear_search + "\" />";
	html += "</label>";

	$(".js-gear-filter-area").html (html);

	$(".js-set-gear-filter").unbind("change");
	$(".js-set-gear-filter").change( function() {
		current_gear_book = "";
		current_gear_general = "";
		current_gear_class = "";
		current_gear_type = "";
		current_gear_book = $(".js-gear-book").val();
		current_gear_general =  $(".js-gear-general").val();
		current_gear_class =  $(".js-gear-class").val();
	//	current_gear_type =  $(".js-gear-type").val();

		propagate_gear_section() ;
	});


	$(".js-gear-search").unbind("keyup");
	$(".js-gear-search").keyup( function() {
		current_gear_search = $(".js-gear-search").val();
		make_gear_available_list() ;
	});


	// Now Propogate the Available Gear in the Modal
	make_gear_available_list();

	html = "<h4 class=\"text-right\">Current Wealth: \$" + current_character.current_funds + "</h4>";
	html += "<h5>Selected Gear</h5>";

	html += "<table>";
	html += "<tbody>";
	for( gear_count = 0; gear_count < current_character.selected_gear.length; gear_count++) {
		html += "<tr>";
		if( current_character.selected_gear[gear_count].count > 1)
			html += "<td>" + current_character.selected_gear[gear_count].name + " x " + current_character.selected_gear[gear_count].count;
		else
			html += "<td>" + current_character.selected_gear[gear_count].name;

		if( current_character.selected_gear[gear_count].free > 0 )
			html += " (free)";
		html += "</td>";

		html += "<td><button ref=\"" + gear_count + "\" class=\"js-remove-gear btn btn-xs btn-danger\">Remove</button></td>";
		html += "</tr>";
	}
	html += "</tbody>";
	html += "</table>";

	$(".js-gear-selected").html( html );

	$(".js-remove-gear").unbind("click");
	$(".js-remove-gear").click( function() {
		current_character.remove_gear( $(this).attr("ref") / 1 );
		current_character.calculate();
		localStorage["current_character"] = current_character.export_json(".js-chargen-json-code");
		propagate_gear_section();
	});



}


function make_gear_available_list() {

	html = "<table>";
	html += "<tbody>";
	current_gear_type_header = "";
	for( gear_count = 0; gear_count < chargen_gear.length; gear_count++) {
//		if( chargen_gear[gear_count].cost <= current_character.current_funds ) {
			show_item = false;
			if(	current_gear_search.length > 2 ) {
				if( chargen_gear[gear_count].name.toLowerCase().indexOf( current_gear_search.toLowerCase().trim() ) > -1 ) {
					show_item = true;
				}
			} else {

				if(
	//				( chargen_gear[gear_count].type == current_gear_type )
	//					&&
					chargen_gear[gear_count].class == current_gear_class
						&&
					chargen_gear[gear_count].book.name == current_gear_book
						&&
					chargen_gear[gear_count].general == current_gear_general

				) {
					show_item = true;
				}
			}

			if( show_item ) {

				if(chargen_gear[gear_count].type != "" && current_gear_type_header != chargen_gear[gear_count].type) {
					html += "<tr><th colspan=3>";
					html += chargen_gear[gear_count].type;
					html += "</th></tr>";
					current_gear_type_header = chargen_gear[gear_count].type;
				}

				html += "<tr>";
				html += "<td>" + chargen_gear[gear_count].name + "</td>";
				if( typeof(chargen_gear[gear_count].cost) != "string" && chargen_gear[gear_count].cost <= current_character.current_funds) {
					html += "<td>\$" + chargen_gear[gear_count].cost + "</td>";
					html += "<td>";
					html += "<button book=\"" + chargen_gear[gear_count].book.id + "\" ref=\"" + chargen_gear[gear_count].name + "\" class=\"js-buy-gear btn btn-xs btn-primary\">Buy</button>";
					html += "<button book=\"" + chargen_gear[gear_count].book.id + "\" ref=\"" + chargen_gear[gear_count].name + "\" title=\"Add this gear for free\" class=\"js-add-gear btn btn-xs btn-warning\">Free</button>";
					html += "</td>";
				} else {
					if(typeof(chargen_gear[gear_count].cost) != "string")
						html += "<td>\$" + chargen_gear[gear_count].cost + "</td>";
					else
						html += "<td>" + chargen_gear[gear_count].cost + "</td>";
					html += "<td>";
					html += "<button book=\"" + chargen_gear[gear_count].book.id + "\" ref=\"" + chargen_gear[gear_count].name + "\" title=\"Add this gear for free\" class=\"js-add-gear btn btn-xs btn-warning\">Free</button>";
					html += "</td>";
				}
				html += "</tr>";
			}
//		}
	}
	html += "</tbody>";
	html += "</table>";

	$(".js-gear-available").html( html );



	$(".js-buy-gear").unbind("click");
	$(".js-buy-gear").click( function() {
		current_character.add_gear(
			$(this).attr("ref"),
			null,
			null,
			null,
			$(this).attr("book")
		);
		current_character.calculate();
		localStorage["current_character"] = current_character.export_json(".js-chargen-json-code");
		propagate_gear_section();
	});

	$(".js-add-gear").unbind("click");
	$(".js-add-gear").click( function() {
		current_character.add_gear(
			$(this).attr("ref"),
			null,
			1,
			1,
			$(this).attr("book")
		);
		current_character.calculate();
		localStorage["current_character"] = current_character.export_json(".js-chargen-json-code");
		propagate_gear_section();
	});
}

function propagate_attributes_section() {
	// Fill in Attributes Section
	display_remaining_attribute_points(".js-chargen-attributes-points-label");
	if( !current_character.is_complete() ) {
		propagate_attribute_options(current_character.attributes.agility, "agility");
		propagate_attribute_options(current_character.attributes.smarts, "smarts");
		propagate_attribute_options(current_character.attributes.spirit, "spirit");
		propagate_attribute_options(current_character.attributes.strength, "strength");
		propagate_attribute_options(current_character.attributes.vigor, "vigor");
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
	} else {
		display_attribute(current_character.attributes.agility, "agility");
		display_attribute(current_character.attributes.smarts, "smarts");
		display_attribute(current_character.attributes.spirit, "spirit");
		display_attribute(current_character.attributes.strength, "strength");
		display_attribute(current_character.attributes.vigor, "vigor");
	}
}
function event_attribute_changed(attribute_name, new_value) {
	current_character.set_attribute(attribute_name, new_value);
	refresh_chargen_page();
}

function init_main_buttons() {

	$(".js-print-character").unbind("click");
	$(".js-print-character").click( function() {
		create_print_popup();
	});

	$(".js-new-character").unbind("click");
	$(".js-new-character").click( function() {

		bootbox.confirm("Are you sure you want to clear out your current character?", function(ok_clicked) {
			if(ok_clicked) {
				current_character.reset();
				$(".js-chargen-name").val(current_character.name);
				$(".js-chargen-description").val(current_character.description);

				current_gear_book = "";
				current_gear_general = "";
				current_gear_class = "";
				current_gear_type = "";

				refresh_chargen_page();
			}
		});


	});

	$(".js-save-character").unbind("click");
	$(".js-save-character").click( function() {

		if(current_character.name != "" && current_character.name != "(nameless)") {
			saveJSON = current_character.export_json();
			itemObj = JSON.parse(saveJSON);
			storageObject = {
				name: itemObj.name,
				type: "character",
				saved: new Date(),
				data: saveJSON,
			};

			try {
				current_characters = JSON.parse(localStorage.characters);
			}
			catch(e) {
				current_characters = Array();
			}

			current_characters = current_characters.concat(storageObject);

			localStorage.characters = JSON.stringify(current_characters);

			propagate_character_load_list();

			bootstrap_alert( "Your character has been saved.", "success" );
		} else {
			bootstrap_alert( "Please name your character before saving", "danger"  );
		}

	} );
}

function load_selected_character() {
	selectedItemIndex = $("input[name=selected_char_load]:checked").val();

	if(selectedItemIndex != "") {
		$(".js-chargen-name").unbind("keyup");
		$(".js-chargen-description").unbind("keyup");
		selectedItemIndex = selectedItemIndex / 1;
		try {
			current_characters = JSON.parse(localStorage.characters);
		}
		catch(e) {
			current_characters = Array();
		}

		if(current_characters[selectedItemIndex]) {
			if(current_characters[selectedItemIndex].data) {
				current_character.import_json( current_characters[selectedItemIndex].data );

				$(".js-chargen-name").val(current_character.name);
				$(".js-chargen-description").val(current_character.description);

				refresh_chargen_page();
				bootstrap_alert( "Your character has been loaded.", "success" );
			} else {
				bootstrap_alert( "Your character could not be loaded.", "danger" );
			}
		} else {
			bootstrap_alert( "Your character could not be loaded.", "danger" );
		}
	}
}


function propagate_character_load_list() {
	try {
		current_load_data = JSON.parse(localStorage.characters);
	}
	catch(e) {
		current_load_data = Array();
	}

	if(current_load_data.length == 0) {
		html = "<p>You have no saved characters on this device</p>";
	} else {
		html = "<ul class='list-unstyled'>";
		for(lsCounter = 0; lsCounter < current_load_data.length; lsCounter++) {
			if(current_load_data[lsCounter].type == "character") {
				saved_date = new Date(current_load_data[lsCounter].saved);
				saved_date_formatted = (saved_date.getMonth() + 1).padLeft() + '/' + saved_date.getDate().padLeft() + '/' +  saved_date.getFullYear().padLeft() + " at " + saved_date.getHours().padLeft() + ":" + saved_date.getMinutes().padLeft();
				html += "<li style='display:block;overflow:hidden; padding: 2px; margin: 2px; border-bottom: 1px solid #dedede;'>";
				html += "<label style='display: inline; font-weight: normal'>";
				html += "<input type='radio' name='selected_char_load' value='" + lsCounter + "' /> ";
				html += current_load_data[lsCounter].name + " - saved on " + saved_date_formatted;
				html += "</label>";
				html += "<button ref='" + lsCounter + "' class='js-delete-char-data btn btn-danger pull-right btn-xs' type='button'>Remove</button>";
				html += "</li>";
			}
		}
		html += "</ul>";
	}


	$(".js-load-list").html( html );

	$(".js-load-char-data").unbind("click");
	$(".js-load-char-data").click( function() {
		load_selected_character();
	} );

	$(".js-delete-char-data").unbind("click");
	$(".js-delete-char-data").click( function() {
		var selectedItemIndex = $(this).attr("ref");
		bootbox.confirm("Are you sure you want to delete this character?", function(ok_clicked) {

			if(ok_clicked) {

				try {
					current_characters = JSON.parse(localStorage.characters);
				}
				catch(e) {
					current_characters = Array();
				}

				if( typeof(current_characters[selectedItemIndex]) != "undefined" ) {
					if( typeof(current_characters[selectedItemIndex].data) != "undefined" ) {
						current_characters.splice(selectedItemIndex, 1);
						localStorage.characters = JSON.stringify(current_characters);
					}
				}

				propagate_character_load_list();
			}
		});

	} );
}

function propagate_perks_section() {
	$(".js-chargen-perks-points-label").removeClass("text-primary");
	$(".js-chargen-perks-points-label").removeClass("text-danger");
	if( current_character.perks_available > 0 ) {
		$(".js-chargen-perks-points-label").addClass("text-primary");
		if( current_character.perks_available == 1) {
			$(".js-chargen-perks-points-label").text("You have 1 perk point available");
		} else {
			$(".js-chargen-perks-points-label").text("You have " + current_character.perks_available  + " perk points available");
		}
	} else {
		if( current_character.perks_available < 0 ) {
			$(".js-chargen-perks-points-label").addClass("text-danger");
			$(".js-chargen-perks-points-label").text("You overspent on perk points (" + (current_character.perks_available * -1 ) +")");
		} else {
			$(".js-chargen-perks-points-label").text("You have no perk points available");
		}

	}

	// TODO make list of selected perks
	//
	current_perks = current_character.list_perks();
	list_perks_html = "";
	if(current_perks.length > 0) {

		for(perk_counter = 0; perk_counter < current_perks.length; perk_counter++) {
			list_perks_html += "<div class=\"a-h-line\">";
			if( current_perks[perk_counter].toLowerCase().indexOf("(racial)") == -1 )
				if(!current_character.is_complete() )
					list_perks_html += "<button type=\"button\" class=\"btn btn-xs btn-danger js-delete-perk-button\" relindex=\"" + perk_counter + "\">Remove</button> ";
			list_perks_html += current_perks[perk_counter] + "</div>";
		}

	} else {
		list_perks_html += "<p>No Perks Selected</p>";
	}
	$(".js-list-perks").html( list_perks_html );

	$(".js-delete-perk-button").unbind("click");
	$(".js-delete-perk-button").click( function() {
		bootbox.confirm("Are you sure you want to remove this perk?", function(ok_clicked) {
			if(ok_clicked) {

				current_character.remove_perk( $(this).attr("relindex") );
				refresh_chargen_page();
			}
		});
	});

	add_perk_html = "";
	if(current_character.perks_available > 0 ) {

		add_perk_html += "<div class=\"row\"><div class=\"col-xs-12\"><h4>Add Perk</h4><select class=\"js-add-perk-select\">";
		for(perk_counter = 0; perk_counter < chargen_perks.length; perk_counter++) {
			show_perk = true;
			if(
				current_character.perks_available < chargen_perks[perk_counter].cost
			) {
				show_perk = false
			}

			if(show_perk)
				add_perk_html += "<option value=\"" + chargen_perks[perk_counter].short_name + "\">" + chargen_perks[perk_counter].name + " (" + chargen_perks[perk_counter].cost + " points)</option>";
		}
		add_perk_html += "</select></div></div><div class=\"row\">";
		add_perk_html += "<div class=\"col-xs-12\">";
		add_perk_html += "<button type\"button\" class=\"btn-sm pull-right btn btn-primary js-add-perk-button\">Add</button>";
		add_perk_html += "</div>";
		add_perk_html += "</div>";
	}

	$(".js-add-perk").html(add_perk_html);
	$(".js-add-perk-button").unbind("click");
	$(".js-add-perk-button").click( function() {
		selected_shortname = $(".js-add-perk-select").val();
		current_character.add_perk(selected_shortname);
		refresh_chargen_page();
	});

}

function test_validity() {
	if( current_character.is_valid ) {
		$(".js-validity-container").slideUp();
	} else {
		validity_html = "<p class=\"thinned\">It appears there may be some validity errors. Although this won't keep you from saving, exporting and printing, there are some GMs that may have issues with this.</p>";
		validity_html += "<ul>";
		for(vcounter = 0; vcounter < current_character.validity_messages.length; vcounter++) {
			validity_html += "<li>" + current_character.validity_messages[vcounter] + "</li>";
		}
		validity_html += "</ul>";
		$(".js-validity-detail").html( validity_html );
		$(".js-validity-container").slideDown();
	}
}

function propagate_derived_stats_section() {
	html = "";

	html += "<label>Charisma: " + current_character.derived.charisma + "<label>";
	html += "<label>Pace: " + current_character.derived.pace + "<label>";
	html += "<label>Parry: " + current_character.derived.parry + "<label>";
	html += "<label>Toughness: " + current_character.derived.toughness + "<label>";

	$(".derived-stats-data").html( html );
}

function refresh_chargen_page() {
	current_character.calculate();
	localStorage["current_character"] = current_character.export_json(".js-chargen-json-code");

	propagate_character_load_list();

	propagate_character_section();
	propagate_attributes_section();
	propagate_derived_stats_section();
	propagate_edges_section();
	propagate_perks_section();
	propagate_skills_sections();
	propagate_hindrances_section();
	propagate_gear_section();
	propagate_arcane_background_options();
	propagate_advancement_section();

	init_main_buttons();

	test_validity();
	current_character.export_bbcode(".js-chargen-bb-code");

}

function create_print_popup() {
	// var mywindow = window.open('', 'Viewing/Printing Character', 'height=400,width=600');
	// data = current_character.export_html();
	// mywindow.document.write('<html><head><title>my div</title>');
	// mywindow.document.write('<style>');
	// mywindow.document.write('h3 {margin: 0; padding:0}');
	// mywindow.document.write('</style>');
	// mywindow.document.write('</head><body>');
	// mywindow.document.write("<div style='text-align: right'>");
	// mywindow.document.write('<button onclick="window.print()" type="button">Print</button>');
	// mywindow.document.write('<button onclick="window.history.back();window.close()" type="button">Close</button>');
	// mywindow.document.write('</div>');
	// mywindow.document.write(data);
	// mywindow.document.write('</body></html>');

	$(".js-print-character-content").html( "<p>" + current_character.export_html() + "</p>" );
	$(".js-print-character-dialog").modal();
//	mywindow.print();
//	mywindow.close();

	return true;

}

$(".js-chargen-import-data").click( function() {
	if( $(".js-chargen-import-code").val() != "" ) {
		if( current_character.import_json( $(".js-chargen-import-code").val() ) ) {
			$(".js-chargen-name").val(current_character.name);
			$(".js-chargen-description").val(current_character.description);
			$(".js-import-code").val('');
			bootstrap_alert( "Your Character has been imported.", "success" );
		} else {
			bootstrap_alert( "Your Character could not be imported - please check the formatting of your code.", "warning" );
		}
	}
});