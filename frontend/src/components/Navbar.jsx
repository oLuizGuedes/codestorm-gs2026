import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚀 AstroSupply</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/alertas">Alertas</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/integrantes">Integrantes</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;