
import ResourceCard from "../components/ResourceCard";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard AstroSupply</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <ResourceCard nome="Oxigênio" porcentagem={85} />
        <ResourceCard nome="Água" porcentagem={72} />
        <ResourceCard nome="Energia" porcentagem={91} />
        <ResourceCard nome="Alimentos" porcentagem={64} />
      </div>
=======
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Oxigênio: 85%</h3>
      <h3>Água: 72%</h3>
      <h3>Energia: 91%</h3>
      <h3>Alimentos: 64%</h3>
    </div>
  );
}

export default Dashboard;