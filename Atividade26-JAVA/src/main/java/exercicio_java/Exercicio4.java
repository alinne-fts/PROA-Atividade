package exercicio_java;

import java.util.Scanner;

public class Exercicio4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite a primeira nota: ");
        double nota1 = scanner.nextDouble();

        System.out.print("Digite a segunda nota: ");
        double nota2 = scanner.nextDouble();

        System.out.print("Digite a terceira nota: ");
        double nota3 = scanner.nextDouble();

        int peso1 = 2;
        int peso2 = 3;
        int peso3 = 5;

        double somaPonderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
        int somaPesos = peso1 + peso2 + peso3;
        double mediaPonderada = somaPonderada / somaPesos;

        System.out.println("\nResultado:");
        System.out.printf("Média ponderada: %.0f\n", mediaPonderada);

        scanner.close();
    }
}
