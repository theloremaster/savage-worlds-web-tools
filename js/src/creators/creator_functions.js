// Creator Functions

function propogate_add_mods(selected_modification_list) {
	modifications_html = "<table>";
	modifications_html += "<thead><tr>";
	modifications_html += "<th>&nbsp;</th>";
	modifications_html += "<th>Name</th>";
	modifications_html += "<th>Used/Max</th>";
	modifications_html += "<th>Mod Cost</th>";
	modifications_html += "<th>Cost</th>";
	modifications_html += "</tr></thead><tbody>";
	object_mods_available = current_selected_object.mods_available;
	for(mod_count = 0; mod_count < selected_modification_list.length; mod_count++) {
		object_mod_count = current_selected_object.get_modification_count(selected_modification_list[mod_count].name);
		mod_cost = selected_modification_list[mod_count].get_mod_cost(current_selected_object);
		is_available = true;
		if( selected_modification_list[mod_count].is_available )
			is_available = selected_modification_list[mod_count].is_available (current_selected_object);

		if( (object_mods_available >= mod_cost || object_mod_count > 0 ) && is_available ) {
			modifications_html += "<tr title='" + selected_modification_list[mod_count].description + "'>";
			modifications_html += "<td style='white-space: nowrap;'>";

			if(  object_mod_count > 0 )
				modifications_html += "<span ref='" + selected_modification_list[mod_count].name  + "' class='js-remove-mod glyphicon glyphicon-minus color-red'></span>";
			else
				modifications_html += "<span class='glyphicon glyphicon-blank'></span>";

			if( current_selected_object && object_mods_available >= mod_cost && ( selected_modification_list[mod_count].get_max(current_selected_object) == "u" || selected_modification_list[mod_count].get_max(current_selected_object) > object_mod_count) )
				modifications_html += " <span ref='" + selected_modification_list[mod_count].name  + "' class='js-add-mod glyphicon glyphicon-plus color-green'></span>";

			modifications_html += "</td>";

			if(  object_mod_count > 0 )
				modifications_html += "<td style='color: green'>" + selected_modification_list[mod_count].name + "</td>";
			else
				modifications_html += "<td>" + selected_modification_list[mod_count].name + "</td>";
			modifications_html += "<td>" + object_mod_count + "/" + selected_modification_list[mod_count].get_max(current_selected_object)  + "</td>";
			modifications_html += "<td>" + mod_cost + "</td>";
			modifications_html += "<td>" + simplify_cost(selected_modification_list[mod_count].get_cost(current_selected_object)) + "</td>";

			modifications_html += "</tr>";
		}
	}
	modifications_html += "</tbody></table>";
	$(".js-select-modifications").html(modifications_html);
}

function propogate_weapon_mods() {
	available_links = current_selected_object.get_linked_weapons();
	weapon_mods_html = "<fieldset><legend>Installed Weapons</legend>";
	if(available_links.length > 0)
		weapon_mods_html += "Available Links: " + (available_links.length - 1) + "<br />";

	if(current_selected_object.selected_weapons.length > 0) {
		weapon_mods_html += "<table><thead><tr>";
		weapon_mods_html += "<th>Name</th>";
		weapon_mods_html += "<th colspan='3'>&nbsp;</th>";
		weapon_mods_html += "</tr></thead><tbody>";
		for(weapon_count = 0; weapon_count < current_selected_object.selected_weapons.length; weapon_count++) {
			weapon_mods_html += "<tr>";
			weapon_mods_html += "<td>";
			weapon_mods_html += current_selected_object.selected_weapons[weapon_count].name;
			weapon_mods_html += "</td>";
			weapon_mods_html += "<td>";
			fixedcheck = "";

			weapon_mods_html += "<label style='display: inline;font-weight: normal;'><select ref='" + weapon_count + "' class=\"js-fix-weapon\">";
			if(current_selected_object.selected_weapons[weapon_count].fixed == 0)
				weapon_mods_html += "<option selected='selected' value=\"0\">- Not Fixed -</option>";
			else
				weapon_mods_html += "<option value=\"0\">- Not Fixed -</option>";

			if(current_selected_object.selected_weapons[weapon_count].fixed == "bow" || current_selected_object.selected_weapons[weapon_count].fixed == 1)
				weapon_mods_html += "<option selected='selected' value=\"bow\">Fixed to Bow</option>";
			else
				weapon_mods_html += "<option value=\"bow\">Fixed to Bow</option>";

			if(current_selected_object.selected_weapons[weapon_count].fixed == "stern")
				weapon_mods_html += "<option selected='selected' value=\"stern\">Fixed to Stern</option>";
			else
				weapon_mods_html += "<option value=\"stern\">Fixed to Stern</option>";

			if(current_selected_object.selected_weapons[weapon_count].fixed == "port")
				weapon_mods_html += "<option selected='selected' value=\"port\">Fixed to Port</option>";
			else
				weapon_mods_html += "<option value=\"port\">Fixed to Port</option>";

			if(current_selected_object.selected_weapons[weapon_count].fixed == "starboard")
				weapon_mods_html += "<option selected='selected' value=\"starboard\">Fixed to Starboard</option>";
			else
				weapon_mods_html += "<option value=\"starboard\">Fixed to Starboard</option>";
			weapon_mods_html += "</select></label>";


			if(available_links.length > 0) { // && current_selected_object.selected_weapons[weapon_count].fixed == 0) {
				weapon_mods_html += "<select class='js-link-weapon' ref='" + weapon_count + "'>";
				weapon_mods_html += "<option value='0'>Unlinked</option>";
				for(link_count = 1; link_count < available_links.length; link_count++) {
					linkedcheck = "";
					if(current_selected_object.selected_weapons[weapon_count].linked == link_count)
						linkedcheck = "selected='selected'";

					if(typeof(available_links[link_count]) == "undefined" || available_links[link_count] == "undefined" || available_links[link_count] == "" || available_links[link_count] == current_selected_object.selected_weapons[weapon_count].name)
						weapon_mods_html += "<option value='" + link_count + "' " + linkedcheck + ">Link #" + link_count + "</option>";
				}
				weapon_mods_html += "</select>";
			} else {
				weapon_mods_html += "&nbsp;";
			}
			weapon_mods_html += "</td>";
			weapon_mods_html += "<td>";
			weapon_mods_html += "<button type='button' class='js-remove-weapon btn btn-danger  btn-xs' ref='" + weapon_count + "'>Remove</button>";
			weapon_mods_html += "</td>";
			weapon_mods_html += "</td>";
			weapon_mods_html += "</tr>";
		}
		weapon_mods_html += "</tbody></table>";
	} else {
		weapon_mods_html += "No installed weapons<br />";
	}
	weapon_mods_html += "</fieldset><fieldset><legend>Available Weapons</legend>";

	object_mods_available = current_selected_object.mods_available;
	if(current_selected_object.requires_mount_point)
		object_mods_available = current_selected_object.vehicle_weapon_mod_points;

	current_weapon_class_html = "";
	current_weapon_class = "";
	local_weapon_count = 0;
	total_weapon_count = 0;
	for(mod_count = 0; mod_count < vehicle_weapons.length; mod_count++) {
		if(current_weapon_class != vehicle_weapons[mod_count].classification) {
			if(local_weapon_count > 0) {
				if(current_weapon_class != vehicle_weapons[mod_count].classification) {
					weapon_mods_html += current_weapon_class_html;
					weapon_mods_html += "</tbody></table>";
					total_weapon_count += local_weapon_count;
				}
			}
			local_weapon_count = 0;
			current_weapon_class_html = "";
			current_weapon_class_html += "<h5>" + vehicle_weapons[mod_count].classification + "</h5><table><thead><tr>";
			current_weapon_class_html += "<th>Name</th>";
			current_weapon_class_html += "<th>Mod Cost</th>";
			current_weapon_class_html += "<th>Cost</th>";
			current_weapon_class_html += "</tr></thead><tbody>";
		}

		is_available = true;
		if( vehicle_weapons[mod_count].is_available )
			is_available = vehicle_weapons[mod_count].is_available (current_selected_object);

		mod_cost = vehicle_weapons[mod_count].mods;
		if( current_selected_object && object_mods_available >= mod_cost && is_available) {
			current_weapon_class_html += "<tr title='" + vehicle_weapons[mod_count].description + "'>";
			if(  object_mod_count > 0 )
				current_weapon_class_html += "<td style='color: green'>";
			else
				current_weapon_class_html += "<td>";

			if( current_selected_object && object_mods_available >= mod_cost )
				current_weapon_class_html += "<button style='height: 25px; display: inline-block;' ref='" + vehicle_weapons[mod_count].name  + "' class='js-add-weapon  btn btn-success btn-xs' type='button'>Install</button> ";
			current_weapon_class_html += vehicle_weapons[mod_count].name + "</td>";

			current_weapon_class_html += "<td>" + mod_cost + "</td>";
			current_weapon_class_html += "<td>" + simplify_cost(vehicle_weapons[mod_count].cost ) + "</td>";

			current_weapon_class_html += "</tr>";
			local_weapon_count++;
		}
		current_weapon_class_html += "</fieldset>";

		current_weapon_class = vehicle_weapons[mod_count].classification;

	}

	if(total_weapon_count == 0)
		if(current_selected_object.requires_mount_point) {
			weapon_mods_html += "<p>You need to purchase weapon mounts for weapons.</p>";
		}
		else {
			weapon_mods_html += "<p>You have no available mod points for weapons</p>";
		}

	$(".js-select-weapons").html(weapon_mods_html);
}



function propogate_load_list() {
	current_load_data = localstorage_parse_data();
	html = "<ul class='list-unstyled'>";
	for(lsCounter = 0; lsCounter < current_load_data.length; lsCounter++) {
		if(current_load_data[lsCounter].type == current_selected_object.object_type) {
			html += "<li style='display:block;overflow:hidden; padding: 2px; margin: 2px; border-bottom: 1px solid #dedede;'>";
			html += "<label style='display: inline; font-weight: normal'>";
			html += "<input type='radio' name='selected_load' value='" + lsCounter + "' /> ";
			html += current_load_data[lsCounter].name + " (Size " + current_load_data[lsCounter].size + ")"; //  - " + currentPowerArmors[lsCounter].saved;
			html += "</label>";
			html += "<button ref='" + lsCounter + "' class='js-delete-data btn btn-danger pull-right btn-xs' type='button'>Delete</button>";
			html += "</li>";
		}
	}
	html += "</ul>";

	$(".js-load-list").html( html );

	$(".js-delete-data").click( function() {
		if( confirm("Are you sure you want to delete this item?") ) {
			selectedItemIndex = $(this).attr("ref");
			delete_item_from_localstorage(selectedItemIndex);

			propogate_load_list();
		}

	} );


}

$(".js-import-data").click( function() {
	if( $(".js-import-code").val() != "" ) {
		if( current_selected_object.import_json( $(".js-import-code").val() ) ) {
			$(".js-set-name").val(current_selected_object.item_name);
			$(".js-set-description").val(current_selected_object.object_description);
			$(".js-import-code").val('');
			createAlert( "Your " + current_selected_object.object_label+ " has been imported.", "success" );
		} else {
			createAlert( "Your " + current_selected_object.object_label+ " could not be imported - please check the formatting of your code.", "warning" );
		}
	}
});

$(".js-save-item").click( function() {
	if( current_selected_object && current_selected_object.size > 0) {

		if(current_selected_object.item_name != "" && current_selected_object.item_name != "(nameless)") {
			save_to_localstorage( current_selected_object.export_json() );
			propogate_load_list();
			createAlert( "Your " + current_selected_object.object_label+ " has been saved.", "success" );
		} else {
			createAlert( "Please name your " + current_selected_object.object_label+ " before saving", "danger"  );
		}
	} else {
		createAlert( "Please select a size for your " + current_selected_object.object_label+ " before saving", "danger"  );
	}
} );


function load_selected_item() {
	selectedItemIndex = $("input[name=selected_load]:checked").val();

	if(selectedItemIndex != "") {
		selectedItem = get_data_from_localstorage(selectedItemIndex);
		current_selected_object.import_json( selectedItem );
		$(".js-set-name").val(current_selected_object.item_name);
		$(".js-set-description").val(current_selected_object.object_description);
		refresh_creator_page();
		createAlert( "Your " + current_selected_object.object_label+ " has been loaded.", "success" );
	}
}

$(".js-load-data").click( function() {
	load_selected_item();
	propogate_load_list();
} );


$(".js-load-data").click( function() {
	load_selected_item();
} );


$(".js-new-item").click( function() {
	if( confirm("Are you sure you want to clear your current " + current_selected_object.object_label + "?")) {
		current_selected_object.reset();
		$(".js-set-name").val("");
		$(".js-set-description").val("");
		refresh_creator_page();
		propogate_load_list();
	}
} );

$(".js-bb-code").click( function() {
	$(this).focus();
	$(this).select();
});
$(".js-bb-code").mousedown( function() {
	$(this).focus();
	$(this).select();
});

$(".js-json-code").click( function() {
	$(this).focus();
	$(this).select();
});

$(".js-json-code").mousedown( function() {
	$(this).focus();
	$(this).select();
});





function refresh_creator_page() {
	current_selected_object.calculate();
	current_selected_object.propogate_size_select(".js-select-size");
	current_selected_object.create_stats_block(".js-info-stats");
	current_selected_object.export_bbcode(".js-bb-code");
	current_selected_object.export_json(".js-json-code");



	$('.js-set-name').unbind('keyup');
	$(".js-set-name").keyup( function() {
		current_selected_object.set_name( $(".js-set-name").val() );
		refresh_creator_page();
	});

	$('.js-set-description').unbind('keyup');
	$(".js-set-description").keyup( function() {
		current_selected_object.set_description( $(".js-set-description").val() );
		refresh_creator_page();
	});


	$('.js-select-size').unbind('change');
	$(".js-select-size").change( function() {
		current_selected_object.set_size( $(".js-select-size option:selected").val() );
		refresh_creator_page();
	});

	if( current_selected_object && current_selected_object.selected_size && current_selected_object.selected_size.size_label ) {

		propogate_add_mods(current_selected_object.available_mods);
		$('.js-add-mod').unbind('click');
		$(".js-add-mod").click( function() {
			current_selected_object.add_mod( $(this).attr("ref") );
			refresh_creator_page();
		});

		$('.js-remove-mod').unbind('click');
		$(".js-remove-mod").click( function() {
			current_selected_object.remove_mod( $(this).attr("ref") );
			refresh_creator_page();
		});

		propogate_weapon_mods();
		$('.js-add-weapon').unbind('click');
		$(".js-add-weapon").click( function() {
			current_selected_object.add_weapon( $(this).attr("ref") );
			refresh_creator_page();
		});

		$('.js-remove-weapon').unbind('click');
		$(".js-remove-weapon").click( function() {
			current_selected_object.remove_weapon( $(this).attr("ref") );
			refresh_creator_page();
		});

		$('.js-link-weapon').unbind('change');
		$(".js-link-weapon").change( function() {
			weaponIndex = $(this).attr("ref");
			linkIndex =  $(this).val();
			current_selected_object.link_weapon( weaponIndex, linkIndex );
			refresh_creator_page();
		});

		$('.js-fix-weapon').unbind('change');
		$(".js-fix-weapon").change( function() {
			weaponIndex = $(this).attr("ref");
			current_selected_object.fix_weapon( weaponIndex, $(this).val() );
			refresh_creator_page();
		});

		$(".js-select-modifications-container").fadeIn();
	} else {
		$(".js-select-modifications-container").fadeOut();
	}
	localStorage["current_" + current_selected_object.object_type] = current_selected_object.export_json();
}

