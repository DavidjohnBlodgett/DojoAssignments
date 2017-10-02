using System;

namespace Fundamentals_I
{
    class Program
    {
        static void Main(string[] args)
        {

            for(int i = 1; i <= 255; i++) {
                Console.WriteLine(i);
            }

            for(int i = 1; i <= 100; i++) {
                if( ( i % 3 == 0 ) || ( i % 5 == 0 ) ) {
                    Console.WriteLine(i);
                }
            }

            for (int i = 1; i <= 100; i++) {
                if ( ( i % 3 == 0 ) && ( i % 5 == 0 ) ) {
                    Console.WriteLine("FizzBuzz");
                }else if ( i % 3 == 0 ) {
                    Console.WriteLine("Fizz");
                }else if ( i % 5 == 0 ) {
                    Console.WriteLine("Buzz");
                }
            }

            // TODO: do not use mod...


            // OPTIONAL
            // FIXME: below's output looks like it's async~
            Random rand = new Random();

            for (int i = 1; i <= 10; i++) {
                int x = rand.Next(1,100); 
                Console.WriteLine(x);               
                if ( ( x % 3 == 0 ) && ( x % 5 == 0 ) ) {
                    Console.WriteLine("FizzBuzz");
                }
                if ( x % 3 == 0 ) {
                    Console.WriteLine("Fizz");
                }
                if ( x % 5 == 0 ) {
                    Console.WriteLine("Buzz");
                }
            }

        }
    }
}
