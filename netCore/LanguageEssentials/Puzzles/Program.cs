using System;

namespace Puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();
            int[] newArray = RandomArray();

            // Random Array 
            minMaxSum(RandomArray());

            // Coin Flip
            TossCoin(rand);
            TossMultipleCoins(rand,4);

            // Names
            string[] foo = Names(rand);
            Console.WriteLine("==========");
            foreach(var name in foo) {
                Console.WriteLine(name);
            }
            

        }
        public static int[] RandomArray(){
            Random rand = new Random();
            int[] result = new int[10];
            for( int i = 0; i < result.Length; i++) {
                result[i] = rand.Next(5,25);
                Console.WriteLine(result[i]);
            }
            return result;
        }
        public static void minMaxSum(int[] arr) {
            int min = 0;
            int max = 0;
            int sum = 0; 
            for (int i = 0; i < arr.Length; i++) {

                if(arr[i] < min || min == 0) {
                    min = arr[i];
                }
                if(arr[i] > max) {
                    max = arr[i];
                }
                sum = sum + arr[i];
            }

            Console.WriteLine(min);
            Console.WriteLine(max);
            Console.WriteLine(sum);
        }

        public static string TossCoin(Random rand) {
            Console.WriteLine("Tossing a Coin!");
            int coin = rand.Next(0,2); // set to 2 because it seemed biased to 0 for some reason...
            string result = "";
            if( coin == 0 ) {
                result="Heads";
            } else {
                result="Tails";
            }
            Console.WriteLine(result);
            return result;
        }

        public static double TossMultipleCoins(Random rand, int num) {
            double ratio = 0.0;
            object[] results = new object[num];
            int count =0;

            for(int i = 0; i < num; i++) {
                results[i] = TossCoin(rand);
            }

            foreach(var toss in results) {
                if (toss is string){
                    if(toss.ToString() == "Heads") {
                        count++;
                    }
                }
            }
            ratio = count/num;
            return ratio;
        }

        public static string[] Names(Random rand) {
            string[] arr = {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            string[] results = new string[arr.Length];
            // string[] shuffledArr = arr.OrderBy(x => rnd.Next()).ToArray();

            // randomize array in place...
            int n = arr.Length;
            while (n > 1) 
            {
                int k = rand.Next(n--);
                string temp = arr[n];
                arr[n] = arr[k];
                arr[k] = temp;
            }
            foreach(var name in arr) {
                Console.WriteLine(name);
            }

            int idx = 0;
            foreach(var name in arr) {
                if( name.Length > 5) {
                    results[idx] = name;
                    idx++;
                }
            }

            return results;

        }
    }
}
