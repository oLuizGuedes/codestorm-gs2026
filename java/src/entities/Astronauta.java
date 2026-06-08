package entities;

public class Astronauta {

    private String nome;
    private String cargo;

    public Astronauta() {
    }
    public Astronauta(String nome, String cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
    public String realizarInspecao() {
        return nome + "realizou uma inspeção na base.";
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getCargo() {
        return cargo;
    }
    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    @Override
    public String toString() {
        return "Astronauta{" + "nome='" + nome + '\'' + ", cargo='" + cargo + '\'' + '}';
    }
}