<<<<<<< HEAD
package exercicio_java;

import java.util.Scanner;

public class Exercicio5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o salário base do funcionário: R$ ");
        double salarioBase = scanner.nextDouble();

        double comissao = salarioBase * 0.05;

        double salarioLiquido = salarioBase + comissao;

        System.out.println("\nResultados:");
        System.out.printf("Salário base: R$ %.2f\n", salarioBase);
        System.out.printf("Comissão (5%%): R$ %.2f\n", comissao);
        System.out.printf("Salário líquido: R$ %.2f\n", salarioLiquido);

        scanner.close();
    }
