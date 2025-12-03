<<<<<<< HEAD
package exercicio_java;

import java.util.Scanner;

public class Exercicio9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite sua idade: ");
        int anos = scanner.nextInt();

        System.out.print("Digite os meses: ");
        int meses = scanner.nextInt();

        System.out.print("Digite os dias: ");
        int dias = scanner.nextInt();

        int totalDias = (anos * 365) + (meses * 30) + dias;

        System.out.println("\nResultado:");
        System.out.println("Total de dias de vida: " + totalDias + " dias");

        scanner.close();
    }
=======
package exercicio_java;

import java.util.Scanner;

public class Exercicio9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite sua idade: ");
        int anos = scanner.nextInt();

        System.out.print("Digite os meses: ");
        int meses = scanner.nextInt();

        System.out.print("Digite os dias: ");
        int dias = scanner.nextInt();

        int totalDias = (anos * 365) + (meses * 30) + dias;

        System.out.println("\nResultado:");
        System.out.println("Total de dias de vida: " + totalDias + " dias");

        scanner.close();
    }
>>>>>>> d1eceee8fd8ac31e0cdf9e4e3fcf9a8d11a180f0
}