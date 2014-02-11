/* Chargen Functions */
var current_character = new chargen_char();
current_character.set_race("Human");

function propogate_attributes() {
	$("select[name=char_attrib_agility]").html( chargen_make_attribute_dropdown("agility") );
	$("select[name=char_attrib_smarts]").html( chargen_make_attribute_dropdown("smarts") );
	$("select[name=char_attrib_spirit]").html( chargen_make_attribute_dropdown("spirit") );
	$("select[name=char_attrib_strength]").html( chargen_make_attribute_dropdown("strength") );
	$("select[name=char_attrib_vigor]").html( chargen_make_attribute_dropdown("vigor") );
	attributeMessage = "";
	allowedAttrs = current_character.attribute_points;
	totalAttrs =
		current_character.attributes.agility * current_character.cost_to_raise.agility
		+ current_character.attributes.smarts  * current_character.cost_to_raise.smarts
		+ current_character.attributes.spirit  * current_character.cost_to_raise.spirit
		+ current_character.attributes.strength  * current_character.cost_to_raise.strength
		+ current_character.attributes.vigor  * current_character.cost_to_raise.vigor;

	attrParent = totalAttrs + " / " + allowedAttrs;
	if(totalAttrs <= allowedAttrs) {
		attributeMessage = "You are using " + attrParent + " of your attribute bumps."
	} else {
		attributeMessage = "<span class=\"chargen-warning\">You are over your allowed limit of attributes (" + attrParent + ")</span>";
	}
	$(".js-attr-message").html(attributeMessage);

	$(".js-secondary-charisma").val( current_character.secondary.charisma );
	$(".js-secondary-pace").val( current_character.secondary.pace );
	$(".js-secondary-parry").val( current_character.secondary.parry );
	$(".js-secondary-toughness").val( current_character.secondary.toughness );
}
function propogate_edges() {
	edgesHTML = "Available Edges: " + (current_character.edges_available - current_character.edges_selected.length) + "<br />";
	if(current_character.edges_racial.length > 0) {
		edgesHTML += "<h3>Racial Edges</h3><ul class=\"no-bullet\">";
		for(raceEdgeCount = 0; raceEdgeCount < current_character.edges_racial.length; raceEdgeCount++)
			edgesHTML += "<li title=\""  + current_character.edges_racial[raceEdgeCount].description + "\">" + current_character.edges_racial[raceEdgeCount].name + "</li>";
		edgesHTML += "</ul>";
	}

	if(current_character.edges_selected.length > 0) {
		edgesHTML += "<h3>Selected Edges</h3><ul class=\"no-bullet\">";
		for(selectEdgeCount = 0; selectEdgeCount < current_character.edges_selected.length; selectEdgeCount++) {
			if( !current_character.qualifies_for(current_character.edges_selected[selectEdgeCount]) )
				edgesHTML += "<li title=\"YOU NO LONGER QUALIFY FOR THIS EDGE - "  + current_character.edges_selected[selectEdgeCount].description + "\" style=\"color: #f00\">" + current_character.edges_selected[selectEdgeCount].name + " <button class=\"js-remove-selected-edge tiny button\" type=\"button\" rel=\"" + selectEdgeCount + "\">Remove</button></li>";
			else
				edgesHTML += "<li title=\""  + current_character.edges_selected[selectEdgeCount].description + "\">" + current_character.edges_selected[selectEdgeCount].name + " <button class=\"js-remove-selected-edge tiny button\" type=\"button\" rel=\"" + selectEdgeCount + "\">Remove</button></li>";
		}
		edgesHTML += "</ul>";
	}
	$(".js-current-edges-list").html(edgesHTML);
}

function propogate_perks() {
	perksHTML = "<br class=\"clear\"><h3>Perks</h3>";
	if( current_character.perks_selected.length > 0 ) {
		perksHTML += "<h4>Selected Perks</h4><ul class=\"no-bullet\">";
		for(perkCount = 0; perkCount < current_character.perks_selected.length; perkCount++) {
			perksHTML += "<li>" + current_character.perks_selected[perkCount].name + " <button class=\"js-remove-selected-perk tiny button\" type=\"button\" rel=\"" + perkCount + "\">Remove</button></li>";
		}
		perksHTML += "</ul>";
	}
	perksHTML += "Available Perk Points: " + current_character.perk_points + "<br />";
	if( current_character.perk_points > 0 ) {
		perksHTML += "<select name=\"add_perk\">";
		perksHTML += "<option value=\"\">- Select a Perk-</option>";
		for(perkCount = 0; perkCount < chargen_perks.length; perkCount++) {
			if( current_character.perk_points >= chargen_perks[perkCount].cost)
				perksHTML += "<option value=\"" + chargen_perks[perkCount].short_name + "\">" + chargen_perks[perkCount].name + "</option>";
		}
		perksHTML += "</select> <button type=\"button\" class=\"js-select-perk-button tiny button\">Select</button>";
	}
	$(".js-current-perks-list").html(perksHTML);
}
function propogate_hindrances() {
	hindrancesHTML = "";
	if(current_character.hindrances_racial.length > 0) {
		hindrancesHTML += "<h3>Racial Hindrances</h3><ul class=\"no-bullet\">";
		for(raceHindCount = 0; raceHindCount < current_character.hindrances_racial.length; raceHindCount++)
			hindrancesHTML += "<li title=\""  + current_character.hindrances_racial[raceHindCount].description + "\">" + current_character.hindrances_racial[raceHindCount].name + "</li>";
		hindrancesHTML += "</ul>";
	}

	if(current_character.hindrances_selected.length > 0) {
		hindrancesHTML += "<h3>Selected Hindrances</h3><ul class=\"no-bullet\">";
		for(selectHindCount = 0; selectHindCount < current_character.hindrances_selected.length; selectHindCount++) {

			if( current_character.hindrances_selected[selectHindCount].major > 0)
				majorMinor = "Major";
			else
				majorMinor = "Minor";

			if( current_character.qualifies_for(current_character.hindrances_selected[selectHindCount]) )
				hindrancesHTML += "<li title=\""  + current_character.hindrances_selected[selectHindCount].description + "\">" + current_character.hindrances_selected[selectHindCount].name + " (" + majorMinor + ")";
			else
				hindrancesHTML += "<li style=\"color: #f00\" title=\"YOU NO LONGER QUALIFY FOR THIS EDGE - "  + current_character.hindrances_selected[selectHindCount].description + "\">" + current_character.hindrances_selected[selectHindCount].name + " (" + majorMinor + ")";

			if(current_character.hindrances_selected[selectHindCount].specify_field)
				if(current_character.hindrances_selected[selectHindCount].specify_field > 0) {
					specify_data = "";
					if( current_character.hindrances_selected[selectHindCount].specified )
						specify_data = current_character.hindrances_selected[selectHindCount].specified;
					hindrancesHTML += ": <input type=\"text\" class=\"js-specify-field\" rel=\"" + selectHindCount + "\" value=\"" + specify_data + "\" placeholder=\"Specify\" />";
				}
			hindrancesHTML += " <button class=\"js-remove-selected-hindrance tiny button\" type=\"button\" rel=\"" + selectHindCount + "\">Remove</button></li>";
		}
		hindrancesHTML += "</ul>";
	}

	$(".js-current-hindrances-list").html(hindrancesHTML);
}
function propogate_skills() {
	skillPoints = current_character.skill_points;
}
function propogate_equipment() {

}

function chargen_make_race_options() {
	html = "";
	optgroup_name = "";
	for(raceCount = 0; raceCount < chargen_races.length; raceCount++) {
		selected = "";
		if( optgroup_name != chargen_races[raceCount].book.name ) {
			if ( optgroup_name != "" )
				html += "</optgroup>";
			html += "<optgroup label=\"" + chargen_races[raceCount].book.name + "\">";
		}

		if(current_character.race == chargen_races[raceCount])
			selected = " selected=\"selected\"";
		html += "<option value=\"" + chargen_races[raceCount].name + "\"" + selected + ">" + chargen_races[raceCount].name + "</option>";
		optgroup_name = chargen_races[raceCount].book.name;
	}
	html += "</optgroup>";
	return html;
}

function chargen_make_rank_options() {
	html = "";

	for(rankCount = 0; rankCount < chargen_ranks.length; rankCount++) {
		selected = "";
		disabled = "";

		if(current_character.rank == rankCount)
			selected = " selected=\"selected\"";
		if(rankCount > 0)
			disabled = "disabled=\"disabled\" ";

		html += "<option " + disabled + "value=\"" + chargen_ranks[rankCount] + "\"" + selected + ">" + chargen_ranks[rankCount] + "</option>";
	}
	return html;
}

function chargen_make_character_point_options() {
	html = "";

	for(cpCount = 0; cpCount < 31; cpCount++) {
		selected = "";
		disabled = "";

		if(current_character.rank == cpCount)
			selected = " selected=\"selected\"";
		if(cpCount > 0)
			disabled = "disabled=\"disabled\" ";

		html += "<option " + disabled + "value=\"" + cpCount + "\"" + selected + ">" + cpCount + "</option>";
	}
	return html;
}

function chargen_make_hindrance_options() {
	html = "";
	optgroup_name = "";
	for(hindCount = 0; hindCount < chargen_hindrances.length; hindCount++) {
		selected = "";
		if( optgroup_name != chargen_hindrances[hindCount].book.name ) {
			if ( optgroup_name != "" )
				html += "</optgroup>";
			html += "<optgroup label=\"" + chargen_hindrances[hindCount].book.name + "\">";
		}

		majorMinor = "Minor";
		if( chargen_hindrances[hindCount].major > 0) {
			majorMinor = "Major";
		}


		if( !current_character.has_hindrance( chargen_hindrances[hindCount].name ) ) {
			if( current_character.qualifies_for( chargen_hindrances[hindCount] ) ) {
				html += "<option value=\"" + chargen_hindrances[hindCount].name + " (" + majorMinor + ")\">" + chargen_hindrances[hindCount].name + " (" + majorMinor + ")</option>";
			} else {
				html += "<option disabled=\"disabled\" value=\"" + chargen_hindrances[hindCount].name + " (" + majorMinor + ")\">" + chargen_hindrances[hindCount].name + " (" + majorMinor + ")</option>";
			}

		}



		optgroup_name = chargen_hindrances[hindCount].book.name;
	}
	html += "</optgroup>";
	return html;
}

function chargen_make_edge_options() {
	html = "";
	optgroup_name = "";
	optgroup_category = "";

	if( (current_character.edges_available - current_character.edges_selected.length)  < 1) {
		$(".js-add-edge-label").hide();
		return;
	} {
		$(".js-add-edge-label").show();
	}

	for(edgeCount = 0; edgeCount < chargen_edges.length; edgeCount++) {
		if ( chargen_edges[edgeCount].unlisted ) {
			// show nothing of this edge.
		} else {
			selected = "";
			if( optgroup_name != chargen_edges[edgeCount].book.name ) {
				if ( optgroup_name != "" )
					html += "</optgroup>";
				html += "<optgroup label=\"" + chargen_edges[edgeCount].book.name + "\">";
			}

			if( optgroup_category != chargen_edges[edgeCount].category ) {
				if ( optgroup_category != "" )
					html += "</optgroup>";
				html += "<optgroup label=\"" + chargen_edges[edgeCount].category + "\">";
			}


			if( !current_character.has_edge( chargen_edges[edgeCount].name ) ) {
				if ( current_character.qualifies_for( chargen_edges[edgeCount] ) )
					html += "<option value=\"" + chargen_edges[edgeCount].name + "\">" + chargen_edges[edgeCount].name + "</option>";
				else
					html += "<option disabled=\"disabled\" value=\"" + chargen_edges[edgeCount].name + "\">" + chargen_edges[edgeCount].name + "</option>";
			}

			optgroup_name = chargen_edges[edgeCount].book.name;
			optgroup_category = chargen_edges[edgeCount].category;
		}
	}
	html += "</optgroup>";
	return html;
}

function chargen_make_attribute_dropdown(attributeName) {
	html = "";

	for(attributeCount = 0; attributeCount < chargen_die_levels.length; attributeCount++) {
		if(current_character.max_attributes[attributeName] >= attributeCount) {
			selected = "";
			if(current_character.attributes[attributeName] + current_character.race.attributes[attributeName] == attributeCount)
				selected = " selected=\"selected\"";
			if(current_character.race.attributes[attributeName] <= attributeCount)
				html += "<option value=\"" + chargen_die_levels[attributeCount] + "\"" + selected + ">d" + chargen_die_levels[attributeCount] + "</option>";
		}
	}

	return html;
}

function refresh_chargen_page() {
	// propogate races dropdown

	current_character.calc();

	/* Propogate Attributes */
	propogate_attributes();

	/* Propogate Edges */
	propogate_edges();

	/* Propogate Hindrances */
	propogate_hindrances();

	/* Propogate Skills */
	propogate_skills();

	/* Propogate Equipment */
	propogate_equipment();

	/* Propogate Perks */
	propogate_perks();

	$("select[name=char_race]").html( chargen_make_race_options() );
	$("select[name=char_rank]").html( chargen_make_rank_options()  );
	$("select[name=char_cps]").html( chargen_make_character_point_options()  );

	$("select[name=add_hindrance]").html ( chargen_make_hindrance_options() );
	$("select[name=add_edge]").html ( chargen_make_edge_options() );

	$('.js-remove-selected-hindrance').unbind('click');
	$(".js-remove-selected-hindrance").click( function() {
		indexNum = $(this).attr("rel");
		current_character.remove_hindrance(indexNum);
		refresh_chargen_page();
	});

	$('.js-remove-selected-edge').unbind('click');
	$(".js-remove-selected-edge").click( function() {
		indexNum = $(this).attr("rel");
		current_character.remove_edge(indexNum);
		refresh_chargen_page();
	});

	$('input[name=char_name]').unbind('keyup');
	$("input[name=char_name]").keyup( function() {
		current_character.set_name( $("input[name=char_name]").val() );
	});



	$('.js-specify-field').unbind('keyup');
	$(".js-specify-field").keyup( function() {
		indexNum = $(this).attr("rel");
		current_character.set_hindrance_specification( indexNum, $(this).val() );
//		refresh_chargen_page();
//		console.log("boo");
	});

	$('.js-remove-selected-perk').unbind('click');
	$(".js-remove-selected-perk").click( function() {
		indexNum = $(this).attr("rel");
		current_character.remove_perk(indexNum);
		refresh_chargen_page();
	});

	$('.js-add-hindrance-button').unbind('click');
	$(".js-add-hindrance-button").click( function() {
		current_character.add_hindrance( $("select[name=add_hindrance] option:selected").val() );
		refresh_chargen_page();
	});

	$('.js-add-edge-button').unbind('click');
	$(".js-add-edge-button").click( function() {
		current_character.add_edge( $("select[name=add_edge] option:selected").val() );
		refresh_chargen_page();
	});

	$('.js-select-perk-button').unbind('click');
	$(".js-select-perk-button").click( function() {
		current_character.add_perk( $("select[name=add_perk] option:selected").val() );
		refresh_chargen_page();
	});

	 $("input[name=char_name]").val( current_character.name );
}



$("input[name=char_name]").keyup( function() {
	current_character.set_name( $("input[name=char_name]").val() );
});

$("select[name=char_race]").change( function() {
	current_character.set_race( $("select[name=char_race] option:selected").val() );
	refresh_chargen_page();
});


$("select[name=char_rank]").change( function() {
	current_character.set_rank( $("select[name=char_rank] option:selected").val() );
	refresh_chargen_page();
});

$(".js-attribute-select").change( function() {
	attribute = $(this).attr("rel");
	current_character.set_attribute( attribute, $("select[name=char_attrib_" + attribute + "] option:selected").val() );
	refresh_chargen_page();
});

$(window).load(function(){
	refresh_chargen_page();
});