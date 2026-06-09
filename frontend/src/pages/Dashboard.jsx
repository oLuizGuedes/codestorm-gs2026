function Dashboard() {
  const recursos = [
    { nome: "Água", valor: "80%", emoji: "💧" },
    { nome: "Oxigênio", valor: "95%", emoji: "🫁" },
    { nome: "Alimentos", valor: "70%", emoji: "🍎" },
    { nome: "Energia", valor: "88%", emoji: "⚡" },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="dashboard-grid">
        {recursos.map((recurso) => (
          <div className="resource-card" key={recurso.nome}>
            <h2>
              {recurso.emoji} {recurso.nome}
            </h2>

            <h3>{recurso.valor}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;