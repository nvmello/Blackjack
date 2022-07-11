import { Gamer } from './gamer.js'

class Dealer extends Gamer {
    constructor(hand) {
        super(hand);
        this.hiddenCard = hand[0];
        this.shownCard = hand[1];
    }
}