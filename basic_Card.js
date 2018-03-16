var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("What planet was Han Solo born on?", "corellia");
var card2 = new BasicCard("How old is Chewbacca during Star Wars Episode IV: A New Hope?", "200");

cards.push(card1);
cards.push(card2);


function studyCards() {
	
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("correct");
						
						cardCount ++
						
						studyCards();
					} 
					else {
						
						console.log("incorrect");
						console.log("BACK READS:  " + cards[cardCount].back);
						
						cardCount ++
						
						studyCards();
					}

				});

	}


}

studyCards();