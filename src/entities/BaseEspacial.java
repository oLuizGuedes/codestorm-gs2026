package entities;

public class BaseEspacial {

    private String nome;
    private String localizacao;

    public BaseEspacial() {
    }
    public BaseEspacial(String nome, String localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getLocalizacao() {
        return localizacao;
    }
    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }
    public String gerarResumo() {
        return "Base " + nome + " localizada em " + localizacao;
    }

    @Override
    public String toString() {
        return "BaseEspacial{" + "nome='" + nome + '\'' + ", localizacao='" + localizacao + '\'' + '}';
    }
}