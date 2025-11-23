package exercicio_java;

import java.util.Scanner;

public class Exercicio6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        int numero1 = scanner.nextInt();

        System.out.print("Digite o segundo número: ");
        int numero2 = scanner.nextInt();

        System.out.println("\nValores antes da troca:");
        System.out.println("Primeiro número: " + numero1);
        System.out.println("Segundo número: " + numero2);

        int auxiliar = numero1;
        numero1 = numero2;
        numero2 = auxiliar;

        System.out.println("\nValores depois da troca:");
        System.out.println("Primeiro número: " + numero1);
        System.out.println("Segundo número: " + numero2);

        scanner.close();
    }
}

