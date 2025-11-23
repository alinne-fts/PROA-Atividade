package exercicio_java;

import java.util.Scanner;

public class Exercicio10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o salário atual do funcionário: R$ ");
        double salarioAtual = scanner.nextDouble();

        double aumento = salarioAtual * 0.15;

        double novoSalario = salarioAtual + aumento;

        System.out.println("\nResultados:");
        System.out.printf("Salário atual: R$ %.2f\n", salarioAtual);
        System.out.printf("Aumento (15%%): R$ %.2f\n", aumento);
        System.out.printf("Novo salário: R$ %.2f\n", novoSalario);

        scanner.close();
    }
}
