var deck_of_cards = function() {};
deck_of_cards.prototype = {
	init: function() {
		this.cards = Array();
		suits = Array(
			{
				name: "Spade",
				short: "s",
				value: 4
			},
			{
				name: "Heart",
				short: "h",
				value: 3
			},
			{
				name: "Diamond",
				short: "d",
				value: 2
			},
			{
				name: "Club",
				short: "c",
				value: 1
			}
		);
		cards = Array(
			{
				name: "2",
				short: "2",
				value: 2
			},
			{
				name: "3",
				short: "3",
				value: 3
			},
			{
				name: "4",
				short: "4",
				value: 4
			},
			{
				name: "5",
				short: "5",
				value: 5
			},
			{
				name: "6",
				short: "6",
				value: 6
			},
			{
				name: "7",
				short: "7",
				value: 7
			},
			{
				name: "8",
				short: "8",
				value: 8
			},
			{
				name: "9",
				short: "9",
				value: 9
			},
			{
				name: "10",
				short: "10",
				value: 10
			},
			{
				name: "Jack",
				short: "j",
				value: 11
			},
			{
				name: "King",
				short: "k",
				value: 12
			},
			{
				name: "Queen",
				short: "q",
				value: 13
			},
			{
				name: "Ace",
				short: "a",
				value: 14
			}
		);
		for(nc = 0; nc < cards.length; nc++) {
			for(sc = 0; sc < suits.length; sc++) {
				this.cards.push(
					{
						name: cards[nc].name + " of " + suits[sc].name + "s",
						suit: suits[nc],
						card: cards[nc],
						short: cards[nc].short + suits[sc].short,
						value: cards[nc].value + suits[sc].value / 10,
						image: "./img/cards/" + cards[nc].short + suits[sc].short + ".svg"
					}
				);
			}
		}

		// Add Red Joker
		this.cards.push(
			{
				name: "Red Joker",
				suit: { name: "Red", short: "r", value: 1},
				card: { name: "Joker", short: "jo", value: 20},
				short: "jor",
				value: 20.1,
				image: "./img/cards/jor.svg"

			}
		);

		// Add Black Joker
		this.cards.push(
			{
				name: "Black Joker",
				suit: { name: "Black", short: "r", value: 2},
				card: { name: "Joker", short: "jo", value: 20},
				short: "job",
				value: 20.2,
				image: "./img/cards/job.svg"

			}
		);

	},

	shuffle: function() {
		this.init();

		var currentIndex = this.cards.length;
		var temporaryValue, randomIndex ;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[randomIndex];
			this.cards[randomIndex] = temporaryValue;
		}

	},

	draw_cards: function(number_to_draw) {
		if(!this.cards) {
			this.shuffle();
		}
		if( !number_to_draw )
			number_to_draw = 1;
		return_value = Array();

		for(dc = 0; dc < number_to_draw; dc++) {
			return_value.push( this.cards.pop() );
		}

		return return_value;

	},

	draw: function() {
		return_value = this.draw_cards(1);
		if(return_value.length == 1)
			return return_value[0];
		else
			return false;
	}

}