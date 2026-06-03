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
    </div>
  );
}

export default Dashboard;