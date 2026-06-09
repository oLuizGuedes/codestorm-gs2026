import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/footer.css";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Dashboard from "./pages/Dashboard";
import Alertas from "./pages/Alertas";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Integrantes from "./pages/Integrantes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;