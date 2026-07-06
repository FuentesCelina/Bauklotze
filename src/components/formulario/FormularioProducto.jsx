import React from 'react';
import styles from "./FormularioProducto.module.css";
export function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen }) {
    return (
        <form className={styles["form-prod"]} onSubmit={manejarEnvio}>
            <h3>Agregar Nuevo Producto</h3>
            <h1>HOLA MUNDO</h1>
            <div>
                <label>Nombre del Producto:</label>
                <input
                    type="text"
                    name="name"
                    value={datosForm.name}
                    onChange={manejarCambio}
                    placeholder="Ej: Teclado Mecánico"
                />
            </div>
            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    name="price"
                    value={datosForm.price}
                    onChange={manejarCambio}
                    placeholder="Ej: 95"
                />
            </div>
            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                    placeholder="Ej: 5"
                />
            </div>
            <div>
                <label>Categoría:</label>
                <input
                    type="text"
                    name="category"
                    value={datosForm.category}
                    onChange={manejarCambio}
                    placeholder="Ej: Electrónica"
                />
            </div>
            <div>
                <label>Imagen:</label>
                <input type="file" onChange={manejarCambioImagen} />
            </div>
            <button type="submit">Guardar Producto</button>
        </form>
    );
}