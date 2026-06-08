package entities;

public class Alerta {

    private String mensagem;
    private String nivel;

    public Alerta() {
    }
    public Alerta(String mensagem, String nivel) {
        this.mensagem = mensagem;
        this.nivel = nivel;
    }
    public String getMensagem() {
        return mensagem;
    }
    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
    public String getNivel() {
        return nivel;
    }
    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public String gerarAlerta(Recurso recurso) {
        if (recurso.getNivel() < 20) {
            return "ALERTA CRÍTICO: " + recurso.getNome() +
                    "está com apenas" + recurso.getNivel() + "%";
        }
        if (recurso.getNivel() < 50) {
            return "ATENÇÃO: " + recurso.getNome() +
                    "está com" + recurso.getNivel() + "%";
        }
        return "Recurso " + recurso.getNome() + "em situação normal.";
    }

    @Override
    public String toString() {
        return "Alerta{" + "mensagem='" + mensagem + '\'' + ", nivel='" + nivel + '\'' + '}';
    }
}