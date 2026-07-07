import styles from "./ProductCard.module.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function ProductCard({ producto }) {
    const [favorito, setFavorito] = useState(false);
    const [carritoActivo, setCarritoActivo] = useState(false);

    const incrementar = () => {
        setCantidad(cantidad + 1);
    };
    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const { addToCart, getCantidadActual } = useCart();
    const cantidadActual = getCantidadActual(producto.id);
    const [cantidad, setCantidad] = useState(0);

    const handleAddToCart = () => {
        addToCart(producto, cantidad);
        alert(`Agregaste ${cantidad} unidades de ${producto.name} al carrito.`);
    };

    return (
        <div className={styles["product-card"]}>
            <img src={producto.image} alt={producto.name} className={styles["picture-card"]} />
            <h2 className={styles["name-card"]}>{producto.name}</h2>
            <p className={styles["precio-card"]}>{producto.price}</p>
            <span
                className={`${styles.favorite} ${favorito ? styles.activo : ""
                    }`}
                onClick={() => setFavorito(!favorito)}
            >
                <span>
                    <Link to={`/productos-nacionales/${producto.id}`}>Ver detalle</Link>
                </span>
                <FaStar />
            </span>

            <div className={`${styles.carrito} ${carritoActivo ? styles.activo : ""}`}>
                <div className={styles.cantidad}>
                    <button onClick={decrementar}>-</button>
                    <p style={{ margin: '0 10px' }}>{cantidadActual}</p>
                    <button onClick={incrementar}>+</button>
                </div>
                <button onClick={() => { handleAddToCart(); setCarritoActivo(!carritoActivo); }}>
                    Agregar {cantidad} al carrito
                </button>
                <FaCartPlus />
            </div>
        </div>
    );
}
export default ProductCard;