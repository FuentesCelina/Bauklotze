import "../Styles/Header.css";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Header() {
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();
return (
    <header className="header">
      <h1 className="logo">Bauklötze</h1>
      <nav>
        <ul className="menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contactos">Contacto</Link></li>
          <li><Link to="/carrito">Carrito{totalItems > 0 &&
            <span>{totalItems}</span>}</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;