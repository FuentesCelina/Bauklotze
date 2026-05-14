import "../Styles/Header.css";
import { Link } from 'react-router-dom';
function Header() {
return (
    <header className="header">
      <h1 className="logo">Bauklötze</h1>
      <nav>
        <ul className="menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contactos">Contacto</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;