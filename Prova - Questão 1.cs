using System;

class Program {

  public static void trocar(int a, ref int b){

    int tmp = a;
    a = b;
    b = tmp;
  }

  public static void Main (string[] args) {

    int n1, n2;

    Console.Write("Por favor,  digite o valor de A: ");
    n1 = int.Parse(Console.ReadLine());

    Console.Write("Por favor,  digite o valor de B: ");
    n2 = int.Parse(Console.ReadLine());

    trocar(n1, ref n2);

    Console.WriteLine("A: {0} - B: {1}", n1, n2);
  }
}



