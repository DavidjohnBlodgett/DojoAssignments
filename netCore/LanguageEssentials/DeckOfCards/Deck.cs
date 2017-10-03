using System;
using System.Collections.Generic;

namespace DeckOfCards {
    class Deck {
        public List<Card> cards = new List<Card>();
        public List<Card> base_cards = new List<Card>();

        public Deck() { 
            
            // CREATE DECK
            string[] suitArr = {"Clubs", "Spades", "Hearts", "Diamonds"};
            string[] textArr = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};

            for( int i = 0; i < suitArr.Length; i++ ) {
                for( int j = 0; j < textArr.Length; j++ ) {
                    // DEBUG OUTPUT
                    // Console.WriteLine("suit: {0} text: {1} val: {2}", suitArr[i], textArr[j], j + 1);
                    cards.Add(new Card( textArr[j], suitArr[i], j + 1 ));
                }
            }

            // SET DEFAULT FOR RESETS
            base_cards = cards;

            // SUFFLE DECK
            // Console.WriteLine("now shuffled:");
            shuffle();

            // DEBUG OUTPUT
            // foreach(var item in cards) {
            //     Console.WriteLine("suit: {0} text: {1} val: {2}", item.suit, item.stringVal, item.val);
            // }


            // TEST the deal function
            // Console.WriteLine(deal().stringVal);



                
        }

        public Card deal() {

            Card tmp = cards[0];
            cards.RemoveAt(0);
            return tmp;
        }

        public void reset() {
            cards = base_cards;
            shuffle();
        }

        public void shuffle() {
            Random rand = new Random();

            int n = cards.Count;
            while (n > 1) 
            {
                int k = rand.Next(n--);
                Card temp = cards[n];
                cards[n] = cards[k];
                cards[k] = temp;
            }
        }

        // MORE FLEXABLE SHUFFLE...
        public void shuffle(List<Card> list, Random rand) {
            int n = list.Count;
            while (n > 1) 
            {
                int k = rand.Next(n--);
                Card temp = list[n];
                list[n] = list[k];
                list[k] = temp;
            }
        }
    }
}