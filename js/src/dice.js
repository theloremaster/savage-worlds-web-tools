var baseRolls = [];
var baseRollSides = [];
var wildDieRolls = [];
var currentRoll = 0;
var alwaysExplodingDice = 0;
var criticalFailure = 0;
function rollDie(numberOfSides, explodingDie, wildDie)
{
	debugConsole("rollDie() numberOfSides: " + numberOfSides + " explodingDie: " + explodingDie + " wildDie: " + wildDie);
	if(!numberOfSides)
		numberOfSides = 6;

	if(!explodingDie)
		explodingDie = 0;

	totalRoll = 0;
	keepRolling = 1;
	while(keepRolling > 0) {
		roll = Math.floor(Math.random() * numberOfSides) + 1;
		if(explodingDie > 0) {
			if(roll == numberOfSides)
				keepRolling = 1;
			else
				keepRolling = 0;
		} else {
			keepRolling = 0;
		}
		baseRolls[currentRoll].push(roll);
		baseRollSides[currentRoll].push(numberOfSides);
		debugConsole("rollDie() die roll: " + roll);
		totalRoll += roll;
	}

	totalWildDieRoll = 0;
	keepRolling = 1;
	if(wildDie > 0) {
		numberOfSides = 6;
		while(keepRolling > 0) {
			roll = Math.floor(Math.random() * numberOfSides) + 1;
			if(explodingDie > 0) {
				if(roll == numberOfSides)
					keepRolling = 1;
				else
					keepRolling = 0;
			} else {
				keepRolling = 0;
			}
			wildDieRolls[currentRoll].push(roll);
			debugConsole("rollDie() wild die roll: " + roll);
			totalWildDieRoll += roll;
		}
	}

	debugConsole("rollDie() totalRoll: " + totalRoll);
	debugConsole("rollDie() totalWildDieRoll: " + totalWildDieRoll);
	if(totalWildDieRoll == 1 && totalRoll == 1)
		criticalFailure = 1;
	else
		criticalFailure = 0;

	if(totalWildDieRoll > totalRoll)
		return totalWildDieRoll;
	else
		return totalRoll;

}

function rollDice(numberOfDice, totalModifier) // 2d6+3 would be rollDice(2,3)
{
	var returnTotal = 0;
	numberOfSides = 6;

	wildDieRolls[currentRoll] = Array();
	baseRolls[currentRoll] = Array();
	baseRollSides[currentRoll] = Array();

	if(numberOfDice.indexOf("*") > 0)
		wildDie = 1;
	else
		wildDie = 0;

	if(numberOfSides < 2)
		numberOfSides = 2;

	numberOfDice = numberOfDice.replace("*", "");

	explodingDice = 0;
	if(numberOfDice.indexOf("d") > -1) {
		rollNumber = numberOfDice.substring(0, numberOfDice.indexOf("d")) / 1;
		numberOfSides = numberOfDice.substring(numberOfDice.indexOf("d") + 1) / 1;
		if(alwaysExplodingDice > 0)
			explodingDice = 1;
	} else {
		if(numberOfDice.indexOf("e") > -1) {
			explodingDice = 1;
			rollNumber = numberOfDice.substring(0, numberOfDice.indexOf("e")) / 1;
			numberOfSides = numberOfDice.substring(numberOfDice.indexOf("e") + 1) / 1;
		} else {
			rollNumber = numberOfDice;
		}
	}

	debugConsole("rollDice() numberOfDice = " + numberOfDice);
	debugConsole("rollDice() totalModifier = " + totalModifier);
	debugConsole("rollDice() wildDie = " + wildDie);

	// a dX assumes 1dX
	if(!rollNumber)
		rollNumber = 1;

	// a 2d assumes 2d6
	if(!numberOfSides)
		numberOfSides = 6;

	var rolls = rollNumber + "d" + numberOfSides + ": ";
	while(rollNumber-- > 0) {
		dieRoll = rollDie(numberOfSides, explodingDice, wildDie);
		returnTotal += dieRoll;
		rolls += dieRoll + ",";
	}
	rolls = rolls.substring(0, rolls.length -1);
	rolls += "";

	currentRoll++;

	return returnTotal;
}

function parseBit(inputString) {
	value = 0;

	debugConsole("parseBit(): inputString = " + inputString);

	if(inputString.indexOf("d") > -1)
		value = rollDice(inputString, 0);
	else
		if(inputString.indexOf("e") > -1)
			value = rollDice(inputString, 0);
		else
			value = inputString / 1;

	return value;
}

function parseRoll(inputString) {
	// remove all spaces...

	inputString = inputString.replace(/ /g, "");
	inputString = inputString.toLowerCase();

	// parse mathematical expressions
	inputString = inputString.replace(/\+/g, " + ");
	inputString = inputString.replace(/x/g, " x ");
	inputString = inputString.replace(/\//g, " / ");
	inputString = inputString.replace(/\-/g, " - ");
	inputString = inputString.replace(/\)/g, " ) ");
	inputString = inputString.replace(/\(/g, " ( ");

	debugConsole("parseRoll(): inputString = " + inputString);
	// look for modifier(s)....
	total = 0;
	currentRoll = 0;
	baseRolls = [];
	wildDieRolls = [];

	if(inputString.indexOf(" ") > 0) {
		items = inputString.split(" ");

		current_function = "+";
		for(count = 0; count < items.length; count++) {
			debugConsole("parseRoll(): bit#" + count + " = " + items[count]);
			debugConsole("parseRoll(): current_function#" + count + " = " + current_function);
			if(
				items[count] != "+"
					&&
				items[count] != "x"
					&&
				items[count] != "-"
					&&
				items[count] != "/"
			) {
				// parse the bit
				if(current_function == "+") {
					debugConsole("parseRoll(): current_function = " + current_function);
					total += parseBit( items[count]) / 1;
				} else {
					if(current_function == "-") {
						debugConsole("parseRoll(): current_function = " + current_function);
						total -= parseBit( items[count]) / 1;
					} else {
						if(current_function == "x") {
							debugConsole("parseRoll(): current_function = " + current_function);
							if(total == 0) {
								total = items[count] / 1;
							} else {
								total = total * parseBit( items[count]) / 1;
							}
						} else {
							debugConsole("parseRoll(): current_function = " + current_function);
							if(current_function == "/") {
								total = total / parseBit( items[count]) / 1;
							} else {
								// ignore parentheticals for now
							}
						}
					}
				}
			} else {
				// change what it does...
				current_function = items[count];
			}

		}

	} else {
		total += parseBit( inputString);
	}

	return total;
}

function displayRolls() {
	html = "";
	for(lCurrentRoll = 0; lCurrentRoll < currentRoll; lCurrentRoll++) {
		// each die roll section

		if(typeof(baseRolls[lCurrentRoll]) != "undefined") {
			html += "die roll #" + (lCurrentRoll + 1) + " (d" + baseRollSides[lCurrentRoll] + "): ";
			for(lCurrentDie = 0; lCurrentDie < baseRolls[lCurrentRoll].length; lCurrentDie++) {
					if(typeof(baseRolls[lCurrentRoll][lCurrentDie]) != "undefined") {
						html += baseRolls[lCurrentRoll][lCurrentDie];
						if(lCurrentDie != baseRolls[lCurrentRoll].length -1 )
							html += ", ";
					}
			}
		}
		// print out wild die rolls if exists
		if(typeof(wildDieRolls[lCurrentRoll]) != "undefined") {
			if(wildDieRolls[lCurrentRoll].length > 0)
				html += "<br />Wild Die for die roll #" + (lCurrentRoll + 1) + " (d6): ";
			for(lCurrentDie = 0; lCurrentDie < wildDieRolls[lCurrentRoll].length; lCurrentDie++) {

				if(typeof(wildDieRolls[lCurrentRoll][lCurrentDie]) != "undefined") {
					html += wildDieRolls[lCurrentRoll][lCurrentDie];
					if(lCurrentDie != wildDieRolls[lCurrentRoll].length -1 )
						html += ", ";
				}
			}
		}
		if(typeof(baseRolls[lCurrentRoll]) != "undefined") {
			html += "<br />";
		}
	}

	return html;
}

function traitSuccessMargin(roll, targetNumber) {
	value = roll/1 - targetNumber/1;
	debugConsole("traitSuccessMargin((): roll = " + roll);
	debugConsole("traitSuccessMargin((): targetNumber = " + targetNumber);
	debugConsole("traitSuccessMargin((): value = " + value);
	html = "";
	if(criticalFailure > 0) {
		html += "<span style=\"color: red;font-weight: strong; text-transform: uppercase;\">Critical Failure</span>";
	} else {
		if(value < 0) {
			html += "<span style=\"color: red\">Failure</span>";
		} else {
			raises = Math.floor(value/4);
			if(raises == 0) {
				html += "Success";
			} else {
				if( raises == 1) {
					html += "Success with a raise";
				} else {
					html += "Success with " + raises + " raises";
				}
			}
		}
	}
	return html;
}

function damageSuccessMargin(roll, toughness, armor, armorpiercing) {
	debugConsole("damageSuccessMargin(roll: " + roll + ", toughness: " + toughness + ", armor: " + armor + ", armorpiercing: " + armorpiercing + ")");
	armor = armor/1 - armorpiercing/1;
	if(armor < 0)
		armor = 0;
	targetNumber = toughness/1 + armor/1;
	value = roll/1 - targetNumber/1;
	html = "";
	if(value < 0) {
		html += "<span style=\"color: red\">No Effect</span>";
	} else {
		raises = Math.floor(value/4);
		if(raises == 0) {
			html += "Shaken";
		} else {
			if( raises == 1) {
				html += "Shaken and a wound";
			} else {
				html += "Shaken and " + raises + " wounds";
			}
		}
	}
	return html;
}

$("#roll-dice").click( function() {

	total = parseRoll( $("input[name=roll]").val() );
	targetNumber = $("input[name=target-number]").val();
	targetToughness = $("input[name=toughness]").val();
	armorPiercing = $("input[name=weapon-ap]").val();
	armorValue = $("input[name=armor]").val();

	$("#results").html( "<strong>Total</strong>: " + total );
	$("#rolls").html( "<h4>Roll Details</h4>" + displayRolls() );

	if($("input[name=roll-type]:checked").val() == "damage")
		$("#success-results").html( "<h4>Damage Results</h4>" + damageSuccessMargin(total, targetToughness, armorValue, armorPiercing) );
	else
		$("#success-results").html( "<h4>Roll Results</h4>" + traitSuccessMargin(total, targetNumber) );
});
