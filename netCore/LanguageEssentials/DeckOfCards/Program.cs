using System;

namespace DeckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            Deck myDeck = new Deck();
            // Console.WriteLine(myDeck.cards[0].suit);
            Player myPlayer = new Player("Ryu");
            myPlayer.draw(myDeck);
            Console.WriteLine(myPlayer.hand[0].suit);
        }
    }
}
