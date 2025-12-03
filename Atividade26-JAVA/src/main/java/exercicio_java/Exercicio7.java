<<<<<<< HEAD
package exercicio_java;

import java.util.Scanner;

public class Exercicio7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor do depósito mensal: R$ ");
        double depositoMensal = scanner.nextDouble();

        System.out.print("Digite a taxa de juros mensal (%): ");
        double taxaJuros = scanner.nextDouble();

        double taxaDecimal = taxaJuros / 100;

        double montante = 0;

        for (int mes = 1; mes <= 12; mes++) {
            montante = montante + depositoMensal;
            montante = montante * (1 + taxaDecimal);
        }

        System.out.println("\nResultado:");
        System.out.printf("Montante após 12 meses: R$ %.2f\n", montante);

        scanner.close();
    }
}
=======
package exercicio_java;

import java.util.Scanner;

public class Exercicio7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor do depósito mensal: R$ ");
        double depositoMensal = scanner.nextDouble();

        System.out.print("Digite a taxa de juros mensal (%): ");
        double taxaJuros = scanner.nextDouble();

        double taxaDecimal = taxaJuros / 100;

        double montante = 0;

        for (int mes = 1; mes <= 12; mes++) {
            montante = montante + depositoMensal;
            montante = montante * (1 + taxaDecimal);
        }

        System.out.println("\nResultado:");
        System.out.printf("Montante após 12 meses: R$ %.2f\n", montante);

        scanner.close();
    }
}
>>>>>>> d1eceee8fd8ac31e0cdf9e4e3fcf9a8d11a180f0
