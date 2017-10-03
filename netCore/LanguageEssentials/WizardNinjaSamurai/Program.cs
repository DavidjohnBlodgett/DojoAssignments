using System;

namespace WizardNinjaSamurai
{
    class Program
    {
        static void Main(string[] args)
        {
            Samurai foo = new Samurai("foo");
            Samurai bar = new Samurai("bar");
            Samurai boo = new Samurai("boo");
            Samurai doo = new Samurai("doo");

            Console.WriteLine(doo.how_many());
        }
    }
}
