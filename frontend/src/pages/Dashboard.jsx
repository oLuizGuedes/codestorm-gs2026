import ResourceCard from "../components/ResourceCard";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="dashboard-grid">

        <ResourceCard
          nome="Estoque Atual"
          porcentagem={70}
        />

        <ResourceCard
          nome="Consumo de Água"
          porcentagem={85}
        />

        <ResourceCard
          nome="Energia"
          porcentagem={62}
        />

        <ResourceCard
          nome="Eficiência"
          porcentagem={91}
        />

      </div>
    </div>
  );
}

export default Dashboard;