import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ProductCard from '../items/ProductCard';
import styles from "./ProductosNacionales.module.css";
import { Container, Row, Col } from "react-bootstrap";


const ProductosNacionales = () => {
    const [searchTerm, setSearchTerm] = useState('');
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
    const productosFiltrados = productos.filter(prod =>
        prod.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <Container fluid className={`mt-4 ${styles.container}`}>
            <div className={styles.buscador}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar productos por nombre..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className={styles.products}>
                {productosFiltrados.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
        </Container>
    );
};
export default ProductosNacionales;