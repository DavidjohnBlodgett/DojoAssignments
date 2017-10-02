using System;
using System.Collections.Generic;

namespace BoxingUnboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            List<object> myList = new List<object>();

            myList.Add(7);
            myList.Add(28);
            myList.Add(-1);
            myList.Add(true);
            myList.Add("chair");

            for (int i =0; i < myList.Count; i++){
                Console.WriteLine(myList[i]);
            }

            int sum = 0;
            for (int i =0; i < myList.Count; i++){
                if (myList[i] is int) {
                    sum = sum + (int)myList[i];
                }
            }
            Console.WriteLine(sum);

        }
    }
}
