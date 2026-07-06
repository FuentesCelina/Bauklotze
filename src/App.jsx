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
import Registro from "./components/registro/Registro";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/login/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/contactos" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/productosNacionales" element={<ProductosNacionales />} />
        <Route path="/productos-nacionales/:id" element={<ProductosNacionalesDetalle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/gestion" element={
            <ProtectedRoute rolesPermitidos={['admin']}>
              <Gestion />
            </ProtectedRoute>
          }
        >
        </Route>
      </Route>
    </Routes>
  );
}


export default App;
