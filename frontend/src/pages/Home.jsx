function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>🚀 AstroSupply</h1>

        <p>
          Plataforma inteligente para monitoramento de recursos em bases espaciais.
        </p>

        <div className="cards-home">
          <div className="info-card">
            <h3>💧 Água</h3>
            <p>Monitoramento contínuo dos reservatórios.</p>
          </div>

          <div className="info-card">
            <h3>⚡ Energia</h3>
            <p>Controle de consumo e geração energética.</p>
          </div>

          <div className="info-card">
            <h3>🫁 Oxigênio</h3>
            <p>Gestão dos níveis essenciais para a tripulação.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;