import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ProductCard from '../items/ProductCard';
import styles from "./ProductosNacionales.module.css"

const ProductosNacionales = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const productosDB = collection(db, "productos nacionales")
        getDocs(productosDB).then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            );
        })
        }, []);
    return (
        <div className={styles["products"]}>
            {productos.map((producto) => (
            <ProductCard
                key={producto.id}
                producto={producto}
            />
            ))}
        </div>
    );
};
export default ProductosNacionales;