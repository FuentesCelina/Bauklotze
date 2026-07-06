import { useState, useEffect } from "react";
import Layout from "./components/layouts/Layout";
import ProductCard from "./components/items/ProductCard"
import Name from "./components/items/Name";
import Contacto from "./components/pages/Contacto";
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Carrito from "./components/pages/Carrito";
import ProductosNacionales from "./components/ProductosNacionales/ProductosNacionales";
import ProductosNacionalesDetalle from "./components/ProductosNacionales/ProductosNacionalesDetalle";
import Gestion from "./components/gestion/Gestion";

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Inicio/>} />
        <Route path="/contactos" element={<Contacto/>} />
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/productosNacionales" element={<ProductosNacionales />}/>
        <Route path="/productos-nacionales/:id" element={<ProductosNacionalesDetalle/>} />
        <Route path="/gestion" element={<Gestion/>} />
      </Route>
    </Routes>
  );
}


export default App;
