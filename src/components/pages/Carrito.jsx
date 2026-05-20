import React from 'react';
import "../Styles/Carrito.css"
import { useCart } from '../../context/CartContext';

const Carrito = () => {
  const { cart, clearCart, getCartTotal } = useCart();
   if (cart.length === 0) {
    return (
     <div>
     <h1>El carrito está vacío</h1>
     <p>Agrega productos para continuar la compra.</p>
     </div>
    );
   }
  return(
   <>
     <h1>Tu Carrito</h1>
     <section className="container">
        {cart.map((producto) => (
        <div className="product-card" key={producto.id}>
        <img src={producto.image} alt={producto.name} className="picture-card"/>
        <h2 className="name-card">{producto.name}</h2>
        <p className="precio-card">{producto.price}</p>
        </div>
        ))}
      </section>
      <hr />
      <h3>Total a pagar: ${getCartTotal()}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </>
    );
};

export default Carrito;