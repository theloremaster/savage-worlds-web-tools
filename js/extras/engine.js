function exportToSQL() {
	sql = "truncate table `extras`;\n\n";
	for (var lCount = 0; lCount < extraDatabase.length; lCount++) {

		wildCard = 0;
		if( extraDatabase[lCount].wildcard )
			wildCard = 1;

		sql += "insert into `extras` ";
		sql += "(";

		sql += "`name`, ";
		sql += "`tags`, ";

		sql += "`wildcard`, ";
		sql += "`attributes`, ";
		sql += "`skills`, ";

		sql += "`charisma`, ";
		sql += "`pace`, ";
		sql += "`parry`, ";
		sql += "`toughness`, ";
		sql += "`armor`, ";

		sql += "`gear`, ";
		sql += "`abilities`, ";

		sql += "`book`, ";
		sql += "`page`, ";

		sql += "`treasure`, ";

		sql += "`blurb`, ";
		sql += "`image` ";

		sql += ") ";
		sql += "values ";
		sql += "(";

		sql += "'" + extraDatabase[lCount].name.replace("'", "\\'") + "', ";

		if( extraDatabase[lCount].tags )
			sql += "'" + extraDatabase[lCount].tags.replace("'", "\\'") + "', ";
		else
			sql += "'', ";

		sql += "'" + wildCard + "', ";
		sql += "'" + JSON.stringify(extraDatabase[lCount].attributes).replace("'", "\\'") + "', ";
		sql += "'" + JSON.stringify(extraDatabase[lCount].skills).replace("'", "\\'") + "', ";

		sql += "'" + extraDatabase[lCount].charisma.replace("'", "\\'") + "', ";
		sql += "'" + extraDatabase[lCount].pace.replace("'", "\\'") + "', ";
		sql += "'" + extraDatabase[lCount].parry.replace("'", "\\'") + "', ";
		sql += "'" + extraDatabase[lCount].toughness.replace("'", "\\'") + "', ";
		sql += "'" + extraDatabase[lCount].armor.replace("'", "\\'") + "', ";

		if( extraDatabase[lCount].gear )
			sql += "'" + extraDatabase[lCount].gear.replace("'", "\\'") + "', ";
		else
			sql += "'', ";

		sql += "'" + JSON.stringify(extraDatabase[lCount].abilities).replace("'", "\\'") + "', ";

		sql += "'" + extraDatabase[lCount].book.id + "', ";

		sql += "'" + extraDatabase[lCount].page.replace("'", "\\'") + "', ";

		if( extraDatabase[lCount].treasure )
			sql += "'" + extraDatabase[lCount].treasure.replace("'", "\\'") + "', ";
		else
			sql += "'', ";

		sql += "'" + JSON.stringify(extraDatabase[lCount].blurb).replace("'", "\\'") + "', ";
		sql += "'" + extraDatabase[lCount].image.replace("'", "\\'") + "' ";


	//	sql += "'" + extraDatabase[lCount].name + "', ";
		sql +=");\n";
	}

	return sql;
}
function displayExtra(extra, indexNumber) {
//	extra = getExtra(extraName);
	extraHTML = "";
	if(extra != null) {
		// Name
		extraHTML += "<div class=\"extra-card\"><button ref=\"" + indexNumber + "\" type=\"button\" class=\"js-add-local btn btn-primary btn-sm pull-right\">Add To Bookmarks</button>";
		if(extra.wildcard > 0)
			extraHTML += "<h3 title=\"These " + extra.name.toLowerCase() + " critters are Wildcards\">* " + extra.name + "";
		else
			extraHTML += "<h3>" + extra.name + "";

		extraHTML += "</h3>";
		if(extra.outdated)
			if(extra.outdated > 0)
				extraHTML += "<h4>This entry may be outdated by an entry in Savage Worlds: Deluxe (2011)</h4>";


		// Description

		if(extra.image2 || extra.image) {
			extraHTML += "<div  style=\"float: left; margin: 0 10px 10px 0\">";
			if(extra.image)
				extraHTML += "<img width=\"200px\" src=\"" + extra.image  + "\" alt=\"" + extra.name + "\" /><br />";
			if(extra.image2)
				extraHTML += "<img width=\"200px\" src=\"" + extra.image2  + "\" alt=\"" + extra.name + "\" /><br />";
			extraHTML += "</div>";
		}


		if(typeof(extra.blurb) == "string") {
			if(extra.blurb)
				extraHTML += "<p>" + extra.blurb + "</p>";

			if(extra.blurb_extra)
				extraHTML += "<p>" + extra.blurb_extra + "</p>";

			if(extra.blurb_extra2)
				extraHTML += "<p>" + extra.blurb_extra2 + "</p>";

			if(extra.blurb_extra3)
				extraHTML += "<p>" + extra.blurb_extra3 + "</p>";
		}

		if(typeof(extra.blurb) == "object" || typeof(extra.blurb) == "Array" ) {
			for(blurbCount = 0; blurbCount < extra.blurb.length; blurbCount++)
				extraHTML += "<p>" + extra.blurb[blurbCount] + "</p>";
		}

		// Attributes
		extraHTML += "<strong>Attributes: </strong>";
		extraHTML += "Agility: " + extra.attributes.agility + ", ";
		extraHTML += "Smarts: " + extra.attributes.smarts + ", ";
		extraHTML += "Spirit: " + extra.attributes.spirit + ", ";
		extraHTML += "Strength: " + extra.attributes.strength + ", ";
		extraHTML += "Vigor: " + extra.attributes.vigor + " ";

		// Skills
		extraHTML += "<br />";
		extraHTML += "<strong>Skills: </strong>";
		//extra.skills.Each( function(skillValue, skillName) {
		skillsHTML = "";
		$.map(extra.skills, function(skillValue, skillName){
			skillsHTML += skillName + ": " + skillValue + ", ";
		});
		if(skillsHTML != "")
			skillsHTML = skillsHTML.substring(0, skillsHTML.length -2);
		else
			skillsHTML = "none.";
		extraHTML += skillsHTML;

		// Derived/Combat Stats
		extraHTML += "<br />";
		if(extra.charisma && extra.charisma != "")
			extraHTML += "<strong>Charisma:</strong> " + extra.charisma + "; ";
		extraHTML += "<strong>Pace:</strong> " + extra.pace + "; ";
		extraHTML += "<strong>Parry:</strong> " + extra.parry + "; ";
		if(extra.armor > 0)
			extraHTML += "<strong>Toughness:</strong> " + extra.toughness + " (" + extra.armor + ")<br />";
		else
			extraHTML += "<strong>Toughness:</strong> " + extra.toughness + "<br />";


		//Hindrances
		if(extra.hindrances)
			extraHTML += "<strong>Hindrances:</strong> " + extra.hindrances + "<br />";

		//Edges
		if(extra.edges)
			extraHTML += "<strong>Edges:</strong> " + extra.edges + "<br />";

		//Treasure
		if(extra.treasure)
			extraHTML += "<strong>Treasure:</strong> " + extra.treasure + "<br />";

		//Gear
		if(typeof(extra.gear) != "undefined") {
			if(typeof(extra.gear) == "string") {
				if(extra.gear)
					extraHTML += "<strong>Gear:</strong> " + extra.gear + "<br />";
			}
			if(typeof(extra.gear) == "object") {
				if(extra.gear.length > 0) {
					extraHTML += "<strong>Gear: </strong><br />";
					gearHTML = "";
					for(gearCount = 0; gearCount < extra.gear.length; gearCount++) {
						if(typeof(extra.gear[gearCount]) == "string")
							gearHTML += "<li>" + extra.gear[gearCount] + "</li>";
						if(typeof(extra.gear[gearCount]) == "object")
							gearHTML += "<li><strong>" + extra.gear[gearCount].name + "</strong>: " + extra.gear[gearCount].description + "</li>";
					}
					extraHTML += "<ul>" + gearHTML + "</ul>";
				}
			}
		}
		// Special Abilities
		extraHTML += "<strong>Abilities: </strong><br />";
		abilitiesHTML = "";
		$.map(extra.abilities, function(ability, abilityName){
			abilitiesHTML += "<li><strong>" + ability.name + "</strong>: " + ability.description + "</li>";
		});
		if(abilitiesHTML == "")
//			abilitiesHTML = abilitiesHTML.substring(0, abilitiesHTML.length -2);
//		else
			abilitiesHTML = "<li>none.</li>";
		extraHTML += "<ul>" + abilitiesHTML + "</ul>";

		// Book, Page and Copyrights
		extraHTML += "<fieldset><p><strong>From:</strong> " + extra.book.name;

		if(extra.book.year)
			extraHTML += " (" + extra.book.year + ") ";

		if(extra.page)
			extraHTML += extra.page;

		if( extra.book.buyme )
			extraHTML += " <a class=\"btn btn-success btn-sm\" href=\"" + extra.book.buyme + "\" target=\"buyme\" title=\"Click here to buy this book\">Get This Book</a>";
		extraHTML += "<br />";
		extraHTML += "&copy; " + extra.book.copyright + "</fieldset>";
		extraHTML += "</div>";

	} else {
		extraHTML = "Extra Not Found";
	}

	return extraHTML;
}

function getExtra(extraName) {
	for (var lCount = 0; lCount < length; lCount++) {
		if(extraDatabase[lCount].name == extraName)
			return extraDatabase[lCount];
	}
	return null;
}

function debugMessage(message) {
	console.log(message);
}

function sortExtras() {
	extraDatabase.sort(
		function(a, b)
		{
			var textA = a.name.toUpperCase();
    		var textB = b.name.toUpperCase();
    		return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		}
	);
}

function filterExtras(searchTerm) {
	returnHTML = "";
	searchTerm = searchTerm.toLowerCase();
	for (var lCount = 0; lCount < extraDatabase.length; lCount++) {

		bookIsChecked = false;

		if((typeof(extraDatabase[lCount].book.name)) != "undefined") {
			if( $("input[name=\"" + extraDatabase[lCount].book.name + "\"]").is(":checked") )
				bookIsChecked = true;
		}

		if((typeof(extraDatabase[lCount].tags)) == "undefined") {
			extraDatabase[lCount].tags = "";
		}
		if((typeof(extraDatabase[lCount].alternate_names)) == "undefined") {
			extraDatabase[lCount].alternate_names = "";
		}
		if(
			bookIsChecked && (
				extraDatabase[lCount].name.toString().toLowerCase().indexOf(searchTerm) > -1 ||
				extraDatabase[lCount].alternate_names.toString().toLowerCase().indexOf(searchTerm) > -1 ||
				extraDatabase[lCount].tags.toString().toLowerCase().indexOf(searchTerm + ",") > -1 ||
				extraDatabase[lCount].blurb.toString().toLowerCase().indexOf(searchTerm + " ") > -1 ||
				extraDatabase[lCount].blurb.toString().toLowerCase().indexOf(searchTerm + ",") > -1 ||
				extraDatabase[lCount].blurb.toString().toLowerCase().indexOf(searchTerm + "-") > -1 ||
				extraDatabase[lCount].blurb.toString().toLowerCase().indexOf(searchTerm + ".") > -1
			)
		) {
			returnHTML += displayExtra(extraDatabase[lCount], lCount);
		}
	}
	if(returnHTML == "")
		returnHTML = "There are no results with your search term.";

	return returnHTML;
}

function defaultSearchMessage() {
	if(extraDatabase.length == 0)
		return "<h3>Catalog Status</h3><p>There are no entries in the extras catalog</p>";
	else if ( extraDatabase.length == 1)
		return "<h3>Catalog Status</h3><p>There is " + extraDatabase.length  + " entry in the extras catalog</p>" + availableBooks();
	else
		return "<h3>Catalog Status</h3><p>There are " + extraDatabase.length  + " entries in the extras catalog</p>" + availableBooks();
}

function availableBooks() {
	returnHTML = "<h3>Available Books</h3>";
	returnHTML += "<ul>";
	for (var lCount = 0; lCount < extraBooks.length; lCount++)
		returnHTML += "<li>" + extraBooks[lCount].name + " (" + extraBooks[lCount].year + ") - " + getAvailableExtrasFromBook(extraBooks[lCount]) + " entries</li>";
	returnHTML += "</ul>";
	return returnHTML;
}

function availableBookChecks() {
	returnHTML = "";
	for (var lCount = 0; lCount < extraBooks.length; lCount++) {
		returnHTML += "<label>";
		returnHTML += "<input  type=\"checkbox\" checked=\"checked\" name=\"" + extraBooks[lCount].name + "\" value=\"1\"> " + extraBooks[lCount].name + "</li>";
		returnHTML += "</label>";
	}

	return returnHTML;
}

function getAvailableExtrasFromBook(bookName) {
	numberOfExtras = 0;
	for (var lCount = 0; lCount < extraDatabase.length; lCount++) {
		if(extraDatabase[lCount].book == bookName)
			numberOfExtras++;
	}

	return numberOfExtras;
}

function updateLocalStats() {
	if(typeof(Storage)!=="undefined") {

		if(!localStorage.localStats)
			localStorage.localStats = JSON.stringify(Array());
		var localStats = jQuery.parseJSON( localStorage.localStats );
		statusHTML = "You have ";
		statusHTML += localStats.length;
		statusHTML += " items in your local view ";
		if(localStats.length > 0) {
			statusHTML += "<button type=\"button\" class=\"button small js-view-local\">View</button> ";
			statusHTML += "<button type=\"button\" class=\"button small js-clear-local\">Clear</button> ";
			statusHTML += "<button type=\"button\" class=\"button small js-print-local\">Print</button> ";
		}

		$(".js-local-status").html( statusHTML );

		$('.js-view-local').off('click');
		$(".js-view-local").click( function() {
			window.open("./view/");
		});

		$('.js-clear-local').off('click');
		$(".js-clear-local").click( function() {
			if(confirm("Are you sure you want to clear out your local selection?")) {
				localStorage.localStats = JSON.stringify(Array());
				updateLocalStats();
			}
		});

		$('.js-print-local').off('click');
		$(".js-print-local").click( function() {
			window.open("./view/");
		});

		$('.js-add-local').off('click');
		$(".js-add-local").click( function() {


			addExtra = extraDatabase[ $(this).attr("ref")];
			console.log(addExtra);
			if(addExtra) {
				var localStats = jQuery.parseJSON( localStorage.localStats );

				localStats.push( addExtra );

				localStorage.localStats = JSON.stringify( localStats );

			}
			updateLocalStats();
		});
	} else {
		$(".js-add-local").hide();
	}
}

$(document).ready( function() {
	sortExtras();
	updateLocalStats();
	$("#search-results").html( defaultSearchMessage() );
	$("#book-checks").html(
		availableBookChecks()
	);

	$("#search-box").keyup( function(){
		if($(this).val() != "")
			$("#search-results").html( filterExtras($(this).val()) );
		else
			$("#search-results").html( defaultSearchMessage() );
		updateLocalStats();
	});

	$("#book-checks label input[type=checkbox]").change( function() {
		searchValue = $("#search-box").val();
		if(searchValue != "")
			$("#search-results").html( filterExtras(searchValue) );
		else
			$("#search-results").html( defaultSearchMessage() );
		updateLocalStats();
	});



});