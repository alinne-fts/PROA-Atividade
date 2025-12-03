<<<<<<< HEAD
package exercicio_java;

import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o raio do círculo: ");
        double raio = scanner.nextDouble();

        double area = Math.PI * raio * raio;

        double perimetro = 2 * Math.PI * raio;

        System.out.println("\nResultados:");
        System.out.printf("Área do círculo: %.2f\n", area);
        System.out.printf("Perímetro do círculo: %.2f\n", perimetro);

        scanner.close();
    }
}
=======
package exercicio_java;

import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o raio do círculo: ");
        double raio = scanner.nextDouble();

        double area = Math.PI * raio * raio;

        double perimetro = 2 * Math.PI * raio;

        System.out.println("\nResultados:");
        System.out.printf("Área do círculo: %.2f\n", area);
        System.out.printf("Perímetro do círculo: %.2f\n", perimetro);

        scanner.close();
    }
}
>>>>>>> d1eceee8fd8ac31e0cdf9e4e3fcf9a8d11a180f0
