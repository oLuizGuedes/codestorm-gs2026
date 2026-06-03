import ResourceCard from "../components/ResourceCard";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard AstroSupply</h1>

      <div className="dashboard-cards">
        <ResourceCard nome="Oxigênio" porcentagem={85} />
        <ResourceCard nome="Água" porcentagem={72} />
        <ResourceCard nome="Energia" porcentagem={91} />
        <ResourceCard nome="Alimentos" porcentagem={64} />
      </div>
    </div>
  );
}

export default Dashboard;