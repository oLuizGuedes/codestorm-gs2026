function ResourceCard({ nome, porcentagem }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        width: "200px",
      }}
    >
      <h3>{nome}</h3>
      <h2>{porcentagem}%</h2>
    </div>
  );
}

export default ResourceCard;