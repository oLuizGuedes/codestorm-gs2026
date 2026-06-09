function AlertCard({ titulo, mensagem }) {
  return (
    <div className="alert-card">
      <h3>{titulo}</h3>
      <p>{mensagem}</p>
    </div>
  );
}

export default AlertCard;