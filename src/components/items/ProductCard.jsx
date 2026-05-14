import styles from "../Styles/Product.module.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

function ProductCard( {producto,agregarAlCarrito}) {
    const [favorito, setFavorito] = useState(false);
    const [carritoActivo, setCarritoActivo] = useState(false);
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
                onClick={() => {agregarAlCarrito(producto);setCarritoActivo(!carritoActivo)}}
            >
                <FaCartPlus />
            </span>
        </div>
    );
}
export default ProductCard;