class Gamer {
    constructor() {
        this.hand = new Array();
    }

    hit(newCard) {
        this.hand.push(newCard);
    }
}


export { Gamer }