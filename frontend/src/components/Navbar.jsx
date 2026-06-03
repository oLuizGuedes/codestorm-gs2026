import { Link } from "react-router-dom";
import "./../styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <h2>🚀 AstroSupply</h2>

      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/alertas">Alertas</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/integrantes">Integrantes</Link></li>
      </ul>

      <hr />
    </nav>
  );
}

export default Navbar;