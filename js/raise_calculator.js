function do_success_calc() {
	roll = $("input[name='roll']").val();
	roll = roll / 1;

	target_number = $("input[name='target-number']").val();
	target_number = target_number / 1;

	armor = $("input[name='armor']").val();
	armor = armor / 1;

	armorpiercing = $("input[name='weapon-ap']").val();
	armorpiercing = armorpiercing / 1;


	damage_html = damageSuccessMargin(roll, target_number, armor, armorpiercing);
	attribute_html = traitSuccessMargin(roll, target_number);
	$(".js-results").html( attribute_html );
	$(".js-damage-results").html( damage_html );
}
$(".raise-calc-input").keyup( function() {
	do_success_calc();
});

$(document).ready( function() {
	do_success_calc();
});
