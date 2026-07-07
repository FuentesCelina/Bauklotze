import "./Header.css";
import React,{ useContext} from "react";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import {AuthContext} from "../../context/AuthContext";
import Gestion from "../gestion/Gestion";

function Header() {
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="header">
      <h1 className="logo">Bauklötze</h1>
      <nav> 
        <ul className="menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contactos">Contacto</Link></li>
          <li><Link to="/carrito">Carrito{totalItems > 0 &&
            <span>{totalItems}</span>}</Link></li>
          <li><Link to="/productosNacionales">Productos Nacionales</Link></li>
          <ul>
            {user ? (
              <>
                {user.rol === "admin" && (
                  <li><Link to="/gestion">Gestion</Link></li>)}
                <span>¡Hola, {user.email}!</span>
                <button onClick={logout}>Cerrar Sesión</button>
              </>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
export default Header;