// En src/componentes/ProductosNacionales/ProductosNacionalesDetalle.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import styles from "./ProductosNacionalesDetalle.module.css"

const ProductosNacionalesDetalle = () => {
    const [producto, setItem] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            const docRef = doc(db, "productos nacionales", id);
            getDoc(docRef)
                .then((resp) => {
                    if (resp.exists()) {
                        setItem({ ...resp.data(), id: resp.id });
                    } else {
                        console.log("No se encontró el producto");
                    }
                })
                .catch(error => console.log(error));
        }
    }, [id]);
    return (
        <div className={styles["producto-detalle"]}>
            {producto ? (
                <>
                <img src={producto.image} alt={producto.name} className={styles["picture-card"]}/>
                <h2 className={styles["name-card"]}>{producto.name}</h2>
                <p className={styles["precio-card"]}>{producto.price}</p>
                <p className={styles["category-card"]}>{producto.category}</p>
                <p >{producto.stock}</p>
                </>
            ): (
                    <p>Cargando producto...</p>
                )
            }
    </div >
);
};
export default ProductosNacionalesDetalle;