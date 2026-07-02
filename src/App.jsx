import { useState, useEffect } from "react";
import Layout from "./components/layouts/Layout";
import ProductCard from "./components/items/ProductCard"
import Name from "./components/items/Name";
import Contacto from "./pages/Contacto";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Productos from "./components/items/Productos";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Inicio/>} />
        <Route path="/contactos" element={<Contacto/>} />
        <Route path="/productos" element={<Productos />}/>
        <Route path="/carrito" element={<Carrito />}/>
      </Route>
    </Routes>
  );
}


export default App;
