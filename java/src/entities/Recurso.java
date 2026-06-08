package entities;

public class Recurso {

    private String nome;
    private double nivel;

    public Recurso() {
    }
    public Recurso(String nome, double nivel) {
        this.nome = nome;
        this.nivel = nivel;
    }
    public void consumir(double quantidade) {
        nivel -= quantidade;
        if (nivel < 0) {
            nivel = 0;
        }
    }
    public void reabastecer(double quantidade) {
        nivel += quantidade;
        if (nivel > 100) {
            nivel = 100;
        }
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public double getNivel() {
        return nivel;
    }
    public void setNivel(double nivel) {
        this.nivel = nivel;
    }

    @Override
    public String toString() {
        return "Recurso{" + "nome='" + nome + '\'' + ", nivel=" + nivel + "%}";
    }
}