package exercicio_java;

import java.util.Scanner;
public class Exercicio3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite a base do triângulo: ");
        double base = scanner.nextDouble();

        System.out.print("Digite a altura do triângulo: ");
        double altura = scanner.nextDouble();

        double area = (base * altura) / 2;

        System.out.println("\nResultado:");
        System.out.printf("Área do triângulo: %.2f\n", area);

        scanner.close();
    }
}