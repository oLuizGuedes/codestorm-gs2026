package main;
import entities.*;
public class Main {

    public static void main(String[] args) {
        BaseEspacial base = new BaseEspacial(
                "Base Marte Alpha",
                "Planeta Marte"
        );

        Astronauta astronauta = new Astronauta(
                "Luiz Guedes",
                "Engenheiro de Sistemas"
        );

        Missao missao = new Missao(
                "Missão AstroSupply",
                "Marte"
        );

        Recurso oxigenio = new Recurso(
                "Oxigênio",
                85
        );

        Recurso agua = new Recurso(
                "Água",
                72
        );
        Recurso energia = new Recurso(
                "Energia",
                45
        );
        Recurso alimentos = new Recurso(
                "Alimentos",
                15
        );
        Alerta alerta = new Alerta();
        Relatorio relatorio = new Relatorio(
                "Monitoramento de Recursos",
                "2026"
        );

        System.out.println("===== ASTROSUPPLY =====\n");

        System.out.println(base.gerarResumo());
        System.out.println();

        System.out.println(missao.iniciarMissao());
        System.out.println();

        System.out.println(astronauta.realizarInspecao());
        System.out.println();

        System.out.println("===== RECURSOS =====");

        System.out.println(oxigenio);
        System.out.println(agua);
        System.out.println(energia);
        System.out.println(alimentos);

        System.out.println();

        System.out.println("===== ALERTAS =====");

        System.out.println(alerta.gerarAlerta(oxigenio));
        System.out.println(alerta.gerarAlerta(agua));
        System.out.println(alerta.gerarAlerta(energia));
        System.out.println(alerta.gerarAlerta(alimentos));

        System.out.println();

        System.out.println("===== SIMULAÇÃO =====");

        alimentos.reabastecer(40);
        energia.reabastecer(20);

        System.out.println(alimentos);
        System.out.println(energia);

        System.out.println();

        System.out.println(relatorio.gerarRelatorio());
    }
}