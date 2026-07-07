import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { FormularioContainer } from '../formulario/FormularioContainer';
import { FormularioProducto } from '../formulario/FormularioProducto';
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
const Gestion = () => {
    const [productos, setProductos] = useState([]);
    const [productoEditando, setProductoEditando] = useState(null);
    const estadoInicialForm = {
        name: "",
        category: "",
        price: 0,
        stock: 0,
        image: ""
    };
    useEffect(() => {
        const fetchProductos = async () => {
            const productosRef = collection(db, "productos nacionales");
            const resp = await getDocs(productosRef);
            setProductos(
                resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        fetchProductos();
    }, []);
    const handleDelete = async (id) => {
        const confirmacion = window.confirm("¿Está seguro de que deseaeliminar este producto ? ");
        if (confirmacion) {
            const docRef = doc(db, "productos nacionales", id);
            await deleteDoc(docRef);
            setProductos(productos.filter(prod => prod.id !== id));
            alert("Producto eliminado.");
        }
    };
     const iniciarEdicion = (prod) => {
         setProductoEditando(prod);
  };
    return (
        <div>
            <h2>Gestión de Productos</h2>
            <hr />
            <FormularioContainer
                setProductos={setProductos}
        productos={productos}
        productoEditando={productoEditando}
        setProductoEditando={setProductoEditando}
            />
            <hr />
            <h3>Lista de Productos</h3>
            <ul>
                {productos.map((prod) => (
                    <li key={prod.id}>
                        {prod.name} - ${prod.price}- ${prod.category}- ${prod.stock} 
                        {
                            <button onClick={() => handleDelete(prod.id)} style={{ marginLeft: '10px' }}>Eliminar</button>
                        }
                        {
                            <button onClick={() => iniciarEdicion(prod)}>
  Editar
</button>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Gestion;