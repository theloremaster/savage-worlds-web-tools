var resultsHTML = "";
var roundNumber = 0;

function MassBattles() {
	this.side1 = {
		name: "",
		tokens: 10,
		tokens_original: -1,
		leaders_battle_knowledge: "d4",
		leaders_spirit: "d4",
		air_support: 0,
		artillery_support: 0,
		situational_modifier: 0
	}

	this.side2 = {
		name: "",
		tokens: 10,
		tokens_original: -1,
		leaders_battle_knowledge: "d4",
		leaders_spirit: "d4",
		air_support: 0,
		artillery_support: 0,
		situational_modifier: 0
	}

	this.getStats = function()  {
		debugConsole("getStats() called");
		this.side1.name = $("input[name=army1_name]").val();
		if(this.side1.tokens_original == -1)
			this.side1.tokens_original = $("input[name=army1_tokens]").val() / 1;
		this.side1.tokens = $("input[name=army1_tokens]").val() / 1;
		this.side1.leaders_battle_knowledge = $("input[name=army1_skill]").val();
		this.side1.leaders_spirit = $("input[name=army1_spirit]").val();
		this.side1.air_support = $("select[name=army1_air] option:selected").val() / 1;
		this.side1.artillery_support = $("select[name=army1_artillery] option:selected").val() / 1;
		this.side1.situational_modifier = $("select[name=army1_situational] option:selected").val() / 1;

		this.side2.name = $("input[name=army2_name]").val();
		if(this.side2.tokens_original == -1)
			this.side2.tokens_original = $("input[name=army2_tokens]").val() / 1;
		this.side2.tokens = $("input[name=army2_tokens]").val() / 1;
		this.side2.leaders_battle_knowledge = $("input[name=army2_skill]").val();
		this.side2.leaders_spirit = $("input[name=army2_spirit]").val();
		this.side2.air_support = $("select[name=army2_air] option:selected").val()  / 1;
		this.side2.artillery_support = $("select[name=army2_artillery] option:selected").val()  / 1;
		this.side2.situational_modifier = $("select[name=army2_situational] option:selected").val()  / 1;
	}

	this.resetForm = function() {
		if(this.side2.tokens_original > 0 )
			$("input[name=army2_tokens]").val( this.side2.tokens_original );
		if(this.side1.tokens_original > 0 )
			$("input[name=army1_tokens]").val( this.side1.tokens_original );

		roundNumber = 0;
		resultsHTML = "";
		$("#results").html("<p>The Battle Has Not Commenced.</p>");
	}
	this.getRoundResults = function() {
		this.getStats();
		army1Roll = rollDice(this.side1.leaders_battle_knowledge);
		army2Roll = rollDice(this.side2.leaders_battle_knowledge);

		army1Results = army1Roll + this.side1.air_support + this.side1.artillery_support + this.side1.situational_modifier;
		army2Results = army2Roll + this.side2.air_support + this.side2.artillery_support + this.side2.situational_modifier;

		debugConsole("army2Results = " + army2Results);
		debugConsole("army1Results = " + army1Results);

		roundNumber++;

		resultsHTML += "<h3>Round " + roundNumber + " Results</h3>";

		resultsHTML += "<p>" +  this.side1.name + " rolled a " + army1Roll + " on the die roll (total " + army1Results + ")</p>";
		resultsHTML += "<p>" +  this.side2.name + " rolled a " + army2Roll + " on the die roll (total " + army2Results + ")</p>";

		side1TookDamage = false;
		side2TookDamage = false;
		if(army1Results > army2Results) {
			// Army 1 Results
			combatResult = Math.floor((army1Results - army2Results)/ 4) + 1;
			successMargin = traitSuccessMargin((army1Results - army2Results), 0);

			resultsHTML += "<p>" + army1Results + " - " + army2Results + " = " + (army1Results - army2Results) + " for a opposed roll result of " + successMargin + "</p>";

			if(combatResult > 0) {
				resultsHTML += "<p>" +  this.side2.name + " has taken " + combatResult + " tokens from " + this.side1.name + "</p>";
				this.side2.tokens -= combatResult;
				side2TookDamage = true;
			} else {
				resultsHTML += "<p>" +  this.side1.name + " did no damage to " +  this.side2.name + " </p>";
			}
		} else {
			if ( army1Results < army2Results) {
				// Army 2 Results
				combatResult = Math.floor((army2Results - army1Results) / 4) + 1;
				successMargin = traitSuccessMargin((army2Results - army1Results) , 0);

				resultsHTML += "<p>" + army2Results + " - " + army1Results + " = " + (army2Results - army1Results) + " for a opposed roll result of " + successMargin + "</p>";
				if(combatResult > 0) {
					resultsHTML += "<p>" +  this.side1.name + " has taken " + combatResult + " tokens from " + this.side2.name + "</p>";
					this.side1.tokens -= combatResult;
					side1TookDamage = true;
				} else {
					resultsHTML += "<p>" +  this.side2.name + " did no damage to " +  this.side1.name + " </p>";
				}
			}  else {

			}
		}

		$("input[name=army1_tokens]").val(this.side1.tokens);
		$("input[name=army2_tokens]").val(this.side2.tokens);

		if(this.side1.tokens <= 0) {
			resultsHTML += "<p>" +  this.side1.name + " has been destroyed</p>";
		} else {
			if( side1TookDamage  ) {
				moraleModifier = this.side1.tokens - this.side1.tokens_original;

				if($("input[name='army1_fearless']").is(":checked"))
					moraleModifier += 2;
				if($("input[name='army1_fortifified']").is(":checked"))
					moraleModifier += 2;
				if($("input[name='army1_cornered']").is(":checked"))
					moraleModifier += 2;

				if(this.makeMoraleTest( this.side1.leaders_spirit, moraleModifier )) {
					resultsHTML += "<p>" +  this.side1.name + " stands firm at their losses</p>";
				} else {
					resultsHTML += "<p>" +  this.side1.name + " FLEES!</p>";
				}
			}
		}

		if( this.side2.tokens <= 0 ) {
			resultsHTML += "<p>" +  this.side2.name + " has been destroyed</p>";
		} else {
			if( side2TookDamage ) {
				moraleModifier = this.side2.tokens - this.side2.tokens_original;

				if($("input[name='army2_fearless']").is(":checked"))
					moraleModifier += 2;
				if($("input[name='army2_fortifified']").is(":checked"))
					moraleModifier += 2;
				if($("input[name='army2_cornered']").is(":checked"))
					moraleModifier += 2;

				if(this.makeMoraleTest( this.side2.leaders_spirit, moraleModifier )) {
					resultsHTML += "<p>" +  this.side2.name + " stands firm at their losses</p>";
				} else {
					resultsHTML += "<p>" +  this.side2.name + " FLEES!</p>";
				}
			}
		}



		$("#results").html(resultsHTML);
	}
	this.makeMoraleTest = function (dieRoll, totalModifiers) {
		roll = rollDice(dieRoll);
		debugConsole("makeMoraleTest() roll = " + roll);
		debugConsole("makeMoraleTest() totalModifiers = " + totalModifiers);
		resultsHTML += "<p>Morale Test Details<ul>";
		resultsHTML += "<li>Morale Test Roll: " +  dieRoll + " = " + roll + "</li>";
		resultsHTML += "<li>Morale Test Modifiers: " + totalModifiers + "</li>";
		resultsHTML += "<li>Morale Test Result: " + (roll/1 + totalModifiers/1) + "</li>";
		if((roll/1 + totalModifiers/1) < 2)
			resultsHTML += "<li>ARMY IS PANICKED</li>";
		resultsHTML += "</ul></p>"
		if(roll/1 + totalModifiers/1 >= 4)
			return true;
		else
			return false;
	}
}

$(document).ready( function() {
	mass_battles = new MassBattles();
	$("#run-round").click( function() {
		mass_battles.getRoundResults();
	});
	$("#reset-form").click( function() {
		mass_battles.resetForm();
	});
});
