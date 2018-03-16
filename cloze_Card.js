var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText


function ClozeCard(text, cloze) {
	this.text = text
	this.cloze = cloze

}

 
ClozeCard.prototype.full = function() {
	
	clozeDeleted = this.cloze
	clozeText = this.text

	
	clozeText = clozeText.replace("????", clozeDeleted);

	
	console.log(clozeText);

}


var card1 = new ClozeCard("Han Solo was born on the planet ???? during the waning years of the Galactic Republic.", "corellia");
var card2 = new ClozeCard("In Star Wars Episode IV: A New Hope, Chewbacca is ???? years old.", "200");


cards.push(card1);
cards.push(card2);



function studyCards() {

	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "partial",
						message: cards[cardCount].text
					}
				]).then(function(answer) {

					
					if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
						console.log("correct");
						
						cardCount ++
						 
						studyCards();
					} 
					else {
						  
						console.log("incorrect");
						cards[cardCount].full();
						
						cardCount ++
						
						studyCards();
					}

				});

	}


}

studyCards();




