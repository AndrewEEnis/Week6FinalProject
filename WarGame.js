console.log("Week 6 Final Project - War Card Game");

// Classes: Card, Player, Deck

// Card Class: rank, suit, points - return rank and suit of card

// Player Class: handOfPlayer

// Deck class: deck array, suits array, ranks array, points array, player1 and player2 - create, shuffle, and deal cards in deck class; player war in Deck class.

class Card {
    constructor(rank, suit, points) {
        this.rank = rank;
        this.suit = suit;
        this.points = points;
        
    }
    describe() {
        return 'Card is the $(this.rank) of $(this.suit)';
    }

}

class Player {
    constructor() {
        this.handOfPlayer = [];
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        this.points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.player1 = new Player();
        this.player2 = new Player();
    }

    createCards() {
        // this takes the information above, creates the cards, and then pushes those cards to the deck
        for (let s = 0; s < this.suits.length; s++) {

            for (let r = 0; r < this.ranks.length; r++){
                let rank = this.ranks[r];
                let points = this.points[r];
                let suit = this.suits[s];
                this.deck.push(new Card(rank, suit, points))
            }
        }
    }

    shuffleCards() {
        const shuffleDeck = this.deck.slice();
        //creates a shallow copy of the array
        const shuffledDeck = [];

        while (shuffleDeck.length > 0) {
            //math.floor returns an integer math.random provides a random integer
            const randomIndex = Math.floor(Math.random() * shuffleDeck.length);
                
            shuffledDeck.push(shuffleDeck[randomIndex]);
            shuffleDeck.splice(randomIndex, 1);
        };
        this.deck = shuffledDeck;
        // the below console.log prints the entire card deck to the console
        console.log(this.deck);
    };

    dealCards() {
        // this gives each player 26 cards
        for (let i = 0; i < this.deck.length; i++) {
            if (i < 26) {
                this.player1.handOfPlayer.push(this.deck[i]);
            } else {
                this.player2.handOfPlayer.push(this.deck[i]);
            }
        }
    }
        
    playWar() {
        // this starts each player with 0 points and tells the program how to award points(or not) to each player based on the cards they are dealt
        let player1Result = 0;
        let player2Result = 0;
        for (let i = 0; i < this.player1.handOfPlayer.length; i++) {
            if (this.player1.handOfPlayer[i].points > this.player2.handOfPlayer[i].points) {
                player1Result += 1;
            } else if (this.player1.handOfPlayer[i].points < this.player2.handOfPlayer[i].points) {
                player2Result += 1;
            } else {
                player1Result += 0;
                player2Result += 0;
            }
    } 
    // this console.log prints the results of each game of War
    console.log(`Player 1: ${player1Result} Player 2: ${player2Result}`);
    if (player1Result > player2Result) {
            console.log("Player 1 is the winner.");
        } else if (player2Result > player1Result) {
            console.log("Player 2 is the winner.");
        } else {
            console.log("The game is a tie. No winner.");
        }
    }
}

let newDeck = new Deck();
newDeck.createCards();
newDeck.shuffleCards();
newDeck.dealCards();
newDeck.playWar();