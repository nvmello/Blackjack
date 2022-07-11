const suits = ["Spades", "Club", "Hearts", "Diamonds"]
const faceValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const deck = new Array();

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
                let card = { Value: faceValue[i], Suit: suits[x], Weight: weight };
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



