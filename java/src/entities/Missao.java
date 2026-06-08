package entities;

public class Missao {

    private String nome;
    private String destino;

    public Missao() {
    }
    public Missao(String nome, String destino) {
        this.nome = nome;
        this.destino = destino;
    }
    public String iniciarMissao() {
        return "missão " + nome + "iniciada com destino a " + destino;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getDestino() {
        return destino;
    }
    public void setDestino(String destino) {
        this.destino = destino;
    }

    @Override
    public String toString() {
        return "Missao{" + "nome='" + nome + '\'' + ", destino='" + destino + '\'' + '}';
    }
}