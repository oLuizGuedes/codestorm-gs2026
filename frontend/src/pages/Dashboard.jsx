import ResourceCard from "../components/ResourceCard";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <ResourceCard
        titulo="Água"
        valor="80%"
      />

      <ResourceCard
        titulo="Oxigênio"
        valor="95%"
      />

      <ResourceCard
        titulo="Alimentos"
        valor="70%"
      />
    </div>
  );
}

export default Dashboard;