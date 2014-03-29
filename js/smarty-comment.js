// smarty-comment.js
var smarty_comments = {
	index: Array(
		"This web app is a collection of tools to help make your preperation and gameplay in Savage Worlds pen and paper role playing game run much more smoothly. I'm doing my best to make sure that all tools look good from phone-sized screens to full desktop boxes, but I'm targeting iPad sized screens as an optimum."
	),
	character_creator: Array(
		"This web app is a rudimentary Character Creator for the Savage Worlds pen and paper role playing game."
	),

	power_armor_creator: Array(
		"This is the Power Armor Creator. It should be currently feature-complete."
		,"<strong>Tony Stark</strong>: [gazes at a 1930s hotrod] Tell you what. Throw a little hotrod red in there.<br /><strong>Jarvis</strong>: Yes, that should help you keep a low profile<p style='text-align:right'><a href='http://www.imdb.com/title/tt0371746/' target='smarty-link'>Iron Man, 2008</a></p>"
		,"<strong>Iron Monger</strong>: I love this suit!<p style='text-align:right'><a href='http://www.imdb.com/title/tt0371746/' target='smarty-link'>Iron Man, 2008</a></p>"
	),
	dice: Array(
		"Roll some Savage Dice. This little tool should be able to handle pretty much any combo you throw at it. It'll even handle damage rolling and wound calculation for you if you wish."
		,"<strong>Rhodey</strong>: I don't blow on a man's dice.<br /><strong>Tony Stark</strong>: Come on, honey bear.<p style='text-align:right'><a href='http://www.imdb.com/title/tt0371746/' target='smarty-link'>Iron Man, 2008</a></p>"
		,"As I have said so many times, God doesn't play dice with the world.<p style='text-align:right'><a href='http://en.wikiquote.org/wiki/Albert_Einstein' target='smarty-link'>Albert Einstein, 1943</a></p>"
	),
	raise_calculator: Array(
		"Do you get confused in the middle of a game how many wounds someone gets with a certain number? We undertstand! The numbers sometimes get lost in the story. Here's something that'll help."
		,"<strong>Wadsworth</strong>: One plus two plus two plus one.<br /><strong>Miss Scarlet</strong>: Uh-uh, there was only one shot that got the chandelier. That's one plus two plus *one* plus one.<br /><strong>Wadsworth</strong>: Even if you were right, that would be one plus one plus two plus one, not one plus *two* plus one plus one.<br /><strong>Miss Scarlet</strong>: Okay, fine. One plus two plus one... Shut up! The point is, there is one bullet left in this gun and guess who's gonna get it!<p style='text-align:right'><a href='http://www.imdb.com/title/tt0088930/' target='smarty-link'>Clue, 1985</a></p>"
	),
	vehicle_creator: Array(
		"This is the Vehicle Creator. It should be currently feature-complete."
	),
	extras: Array(
		"A tool to help you quickly get your bad-guy face on. This part is feature-complete, but I still have quite a bit of data entry to complete."
		,"<strong>Hudson</strong>: They're coming outta the walls. They're coming outta the goddamn walls. Let's book!<p style='text-align:right'><a href='http://www.imdb.com/title/tt0090605/' target='smarty-link'>Aliens, 1986</a></p>"
	),
	mass_battles: Array(
		"A quick Mass Combat calculator. Dice rolls and all."
		,"<strong>Mongol General</strong>: ...Conan! What is best in life?<br /><strong>Conan</strong>: To crush your enemies, see them driven before you, and to hear the lamentation of their women.<p style='text-align:right'><a href='http://www.imdb.com/title/tt0082198/' target='smarty-link'>Conan the Barbarian, 1982</a></p>"
	),
	space_travel_time: Array(
		"A close-enough-to-accurate calculator for finding travel and lightspeed communication times in a solar system scale setting."
		,"\"Space,\" it says, \"is big. Really big. You just won't believe how vastly, hugely, mindbogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space, listen...\"<p style='text-align:right'><a href='http://en.wikiquote.org/wiki/The_Hitchhiker's_Guide_to_the_Galaxy' target='smarty-link'>The Hitchhiker's Guide to the Galaxy, 1978</a>"
	),
	walker_creator: Array(
		"This is the Walker Creator. It should be currently feature-complete."
		,"<strong>Keith</strong>: Ready to form Voltron! Activate interlocks! Dyna-therms connected. Infra-cells up; mega-thrusters are go!<br /><strong>Keith</strong>: Let's go, Voltron Force!<p style='text-align:right'><a href='http://www.imdb.com/title/tt0086824/' target='smarty-link'>Voltron, 1984-</a></p>"
	),
	starship_creator: Array(
		"This is the Starship Creator. It should be currently feature-complete."
		,"<strong>Scotty</strong>: I like this ship! You know, it's exciting!<p style='text-align:right'><a href='http://www.imdb.com/title/tt0796366/' target='smarty-link'>Star Trek, 2009</a></p>"
	)
}

$( document ).ready(function() {
  // Handler for .ready() called.

	if( typeof(smarty_comment_section) != "undefined" && smarty_comment_section) {
		if( typeof(smarty_comments[smarty_comment_section]) != "undefined" && smarty_comments[smarty_comment_section].length > 0) {
			$(".js-smarty-comment").html( smarty_comments[smarty_comment_section][Math.floor(Math.random()*smarty_comments[smarty_comment_section].length)] );
		}
	}
});