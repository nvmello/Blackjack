// requirements
const gamer = require("gamer.js")
const player = require("player.js")
const dealer = require("dealer.js")
// constants
const suits = ["Spades", "Club", "Hearts", "Diamonds"]
const faceValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const deck = new Array();
const gamer = require("gamer.js")
const player = require("player.js")
class Gamer {
    constructor() {
        this.hand = new Array();
    }

    hit(newCard) {
        this.hand.push(newCard);
    }
}

class Dealer extends Gamer {

}




class Card {
    constructor(value, suit, weight) {
        this.value = value;
        this.suit = suit;
        this.weight = weight;
    }
}


function createDeck(deckCount = 1) {
    for (let a = 0; a < deckCount; a++) {
        for (let i = 0; i < faceValue.length; i++) {
            for (let x = 0; x < suits.length; x++) {
                let weight = parseInt(faceValue[i])
                if (faceValue[i] == "J" || faceValue[i] == "Q" || faceValue[i] == "K") {
                    weight = 10;
                }
                if (faceValue[i] == "A") {
                    weight = 11;
                    // How do I make this weight be 1 OR 11
                }
                // let card = { Value: faceValue[i], Suit: suits[x], Weight: weight };
                const card = new Card(faceValue[i], suits[x], weight);
                deck.push(card);
            }
        }
    }
}

function shuffle() {
    for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

createDeck(2)
shuffle()
console.log(deck)


/*
*** TO DO ***

create dealer and player(s)

deal cards to players and dealer

player game 

player vs dealer

outcome

*/

