using System;
using System.Collections.Generic;
using System.Linq;

namespace CollectionsPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            // Three Basic Arrays
            int[] intArr = {0,1,2,3,4,5,6,7,8,9};
            string[] strArr = {"Tim", "Martin", "Nikki", "Sara"};
            bool[] boolArr = new bool[10];
            for ( int i = 0; i < boolArr.Length; i++) {
                if ( i % 2 != 0 ) {
                    boolArr[i] = false;
                } else {
                    boolArr[i] = true;
                }
                
            }
            printArrString(boolArr);

            // Multiplication Table
            int[,] multiTable = new int[10,10];
            for ( int i = 0; i < 10; i++) {
                for ( int j = 0; j < 10; j++) {
                    multiTable[i,j] = (i+1) * (j+1);
                }
            }
            printArrMultiTable(multiTable);

            // List of Flavors
            List<string> flavors = new List<string>();

            flavors.Add("Chocolate chip cookie dough");
            flavors.Add("Chocolate");
            flavors.Add("Vanilla");
            flavors.Add("Mint chocolate chip");
            flavors.Add("Green tea");

            Console.WriteLine(flavors.Count);
            Console.WriteLine(flavors[3]);

            flavors.RemoveAt(3);
            Console.WriteLine(flavors.Count);


            // User Info Dictionary
            Dictionary<string,string> likes= new Dictionary<string,string>();
            foreach(string name in strArr) {
                likes[name] = null;
            }

            Random rand = new Random();
            foreach( var entry in likes.Keys.ToList()) {
                likes[entry] = flavors[rand.Next(0,flavors.Count)];
            }

            foreach( KeyValuePair<string,string> entry in likes) {
                Console.WriteLine("name: {0} flavor {1}", entry.Key, entry.Value);
            }
        }
        public static void printArrString( bool[] arr) {
            for ( int i = 0; i < arr.Length; i++) { 
                Console.WriteLine(arr[i]);
            }
        }
        public static void printArrMultiTable( int[,] arr) {
            int rowLength = arr.GetLength(0);
            int colLength = arr.GetLength(1);

            for (int i = 0; i < rowLength; i++)
            {
                for (int j = 0; j < colLength; j++)
                {
                    Console.Write(string.Format("{0} ", arr[i, j]));
                }
                Console.Write(Environment.NewLine + Environment.NewLine);
            }
        }

    }
}
