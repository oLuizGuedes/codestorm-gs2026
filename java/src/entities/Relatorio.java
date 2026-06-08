package entities;

public class Relatorio {

    private String titulo;
    private String data;

    public Relatorio() {
    }
    public Relatorio(String titulo, String data) {
        this.titulo = titulo;
        this.data = data;
    }
    public String gerarRelatorio() {
        return "Relatório: " + titulo + " | Data: " + data;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getData() {
        return data;
    }
    public void setData(String data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Relatorio{" + "titulo='" + titulo + '\'' + ", data='" + data + '\'' + '}';
    }
}