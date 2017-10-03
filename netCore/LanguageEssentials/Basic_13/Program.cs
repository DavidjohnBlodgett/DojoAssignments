using System;

namespace classWorkCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            printNums();
            printOdd();
            printSum();

            int[] myArray = {1,3,5,7,9,13};
            printArr(myArray);

            int[] myArray = {1,3,5,7,9,13};
            Console.WriteLine(findMax(myArray));

            int[] myArray = {1,3,5,7,9,13};
            Console.WriteLine(findAvg(myArray));

            
            printArr(makeOddArr());

            int[] myArray = {1, 3, 5, 7};
            greaterThan(myArray, 3);
            
            int[] myArray = {1, 5, 10, -2};
            printArr(squareVals(myArray));

            int[] myArray = {1, 5, 10, -2};
            printArr(removeNeg(myArray));

            int[] myArray = {1, 5, 10, -2};
            minMaxAvg(myArray);

            int[] myArray = {1, 5, 10, -2};
            printArr(shift(myArray));

            int[] myArray = {1, 5, 10, -2};
            printArrString(replaceNeg(myArray));

        }
        public static void printNums() {
            for( int i = 1; i < 256; i++ ) {
                Console.WriteLine(i);
            }
        }
        public static void printOdd() {
            for( int i = 1; i < 256; i++ ) {
                if( i % 2 != 0 ) {
                    Console.WriteLine(i);
                }
                
            }
        }

        public static void printSum() {
            int sum = 0;
            for( int i = 1; i < 256; i++ ) {
                sum += i;
                Console.WriteLine("New number: {0} Sum: {1}", i, sum);
            }
        }

        public static void printArr(int[] arr) {
            for( int i = 0; i < arr.Length; i++ ) {
                Console.WriteLine(arr[i]);
            }
        }

        public static int findMax(int[] arr) {
            int max = 0;
            for( int i = 0; i < arr.Length; i++ ) {
                if(arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        }
        public static int findAvg(int[] arr) {
            int sum = 0;
            for( int i = 0; i < arr.Length; i++ ) {
                sum += arr[i];
            }
            return sum / arr.Length;
        }

        public static int[] makeOddArr() {
            int[] y = new int[128];
            int indx = 0;
            for( int i = 0; i < 256; i++ ) {
                if( i % 2 != 0) {
                    y[indx] = i;
                    indx++;
                }
            }
            return y;
        }

        public static void greaterThan(int[] arr, int y) {
            for (int i = 0; i < arr.Length; i++) {
                if(arr[i] > y) {
                    Console.WriteLine(arr[i]);
                }
            } 
        }

        public static int[] squareVals(int[] arr) {
            for (int i = 0; i < arr.Length; i++) {
                arr[i] = arr[i] * arr[i];
            }
            return arr; 
        }

        public static int[] removeNeg(int[] arr) {
            for (int i = 0; i < arr.Length; i++) {
                if(arr[i] < 0) {
                    arr[i] = 0;
                }
                
            }
            return arr; 
        }

        public static void minMaxAvg(int[] arr) {
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
            Console.WriteLine(sum / arr.Length);
        }

        public static int[] shift(int[] arr) {
            for (int i = 0; i < arr.Length; i++) {
                if(i == arr.Length - 1 ) {
                    arr[i] = 0;
                } 
                if ( i+1 < arr.Length ) {
                    arr[i] = arr[i+1];
                }
            }
            return arr; 
        }

        public static string[] replaceNeg(int[] arr) {
            string[] results = new string[arr.Length];
            for (int i = 0; i < arr.Length; i++) {
                if(arr[i] < 0) {
                    results[i] = "Dojo";
                } else {
                    results[i] = arr[i].ToString();
                }

                
            }
            return results; 
        }

        public static void printArrString( string[] arr) {
            for( int i = 0; i < arr.Length; i++ ) {
                Console.WriteLine(arr[i]);
            }
        }

    }
}
