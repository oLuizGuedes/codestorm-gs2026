import AlertCard from "../components/AlertCard";
import "../styles/alertas.css";

function Alertas() {
  return (
    <div className="alertas-container">
      <h1>Centro de Alertas</h1>

      <div className="alertas-grid">
        <AlertCard
          titulo="Estoque baixo"
          mensagem="Alimentos abaixo de 70%"
        />

        <AlertCard
          titulo="Consumo elevado"
          mensagem="Uso de água acima do esperado"
        />
      </div>
    </div>
  );
}

export default Alertas;