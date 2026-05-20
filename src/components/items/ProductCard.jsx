import styles from "../Styles/Product.module.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function ProductCard( {producto}) {
    const [favorito, setFavorito] = useState(false);
    const [carritoActivo, setCarritoActivo] = useState(false);

    const [cantidad, setCantidad] = useState(1);
    const incrementar = () => {
        setCantidad(cantidad + 1);
    };
    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    const { addToCart } = useCart();
    const handleAddToCart = () => {
        addToCart(producto, cantidad);
        alert(`Agregaste ${cantidad} unidades de ${producto.name} al carrito.`);
    };
    
    return (
        <div className={styles["product-card"]}>
            
            <img src={producto.image} alt={producto.name} className={styles["picture-card"]}/>
            <h2 className={styles["name-card"]}>{producto.name}</h2>
            <p className={styles["precio-card"]}>{producto.price}</p>
            <span
                className={`${styles.favorite} ${
                favorito ? styles.activo : ""
                }`}
                onClick={() => setFavorito(!favorito)}
            >
            <FaStar />
            </span>
            <span
                className={`${styles.carrito} ${
                carritoActivo ? styles.activo : ""
                }`}
            >
                <button onClick={decrementar}>-</button>
                <p style={{ margin: '0 10px' }}>{cantidad}</p>
                <button onClick={incrementar}>+</button>
                <button onClick={() => {handleAddToCart();setCarritoActivo(!carritoActivo);}}>
                Agregar {cantidad} al carrito
                </button>
                <FaCartPlus />
            </span>
        </div>
    );
}
export default ProductCard;