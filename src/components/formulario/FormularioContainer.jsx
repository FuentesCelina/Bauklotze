import React, { useState,useEffect } from 'react';
import { FormularioProducto } from "./FormularioProducto";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

export function FormularioContainer({productoEditando}) {
  const [datosForm, setDatosForm] = useState({
    name: '',
    price: '',
    stock: '',
    category: ''
  });

   useEffect(() => {
    if (productoEditando) {
      setDatosForm({
        name: productoEditando.name,
        price: productoEditando.price,
        stock: productoEditando.stock,
        category: productoEditando.category
      });
    }
  }, [productoEditando]);
  const [imagenFile, setImagenFile] = useState(null);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({
      ...datosForm,
      [name]: value
    });
  };
  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };
  const manejarEnvio = async (evento) => {
  evento.preventDefault();

  // Validación de imagen
  if (!imagenFile && !productoEditando) {
    alert("Por favor, selecciona una imagen para el producto.");
    return;
  }

  try {
    let imageUrl = productoEditando?.image || ""; // si estás editando, conserva la imagen actual

    // 👇 solo sube a ImgBB si hay una nueva imagen seleccionada
    if (imagenFile) {
      const apiKey = "4b43a2529a41a25a2e5e790c98fccc7c";
      const formData = new FormData();
      formData.append("image", imagenFile);

      console.log("Subiendo imagen a ImgBB...");
      const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData,
      });
      const datosImgbb = await respuestaImgbb.json();
      console.log(datosImgbb);

      if (datosImgbb.success) {
        imageUrl = datosImgbb.data.url;
        console.log("Imagen subida con éxito:", imageUrl);
      } else {
        alert("Error al subir la imagen: " + datosImgbb.error.message);
        return;
      }
    }

    // Objeto final del producto
    const productoCompleto = {
      name: datosForm.name,
      price: datosForm.price,
      stock: datosForm.stock,
      category: datosForm.category,
      image: imageUrl,
    };

    if (productoEditando) {
      // 🔁 ACTUALIZAR
      const ref = doc(db, "productos nacionales", productoEditando.id);
      await updateDoc(ref, productoCompleto);

      setProductos((prev) =>
        prev.map((p) =>
          p.id === productoEditando.id ? { ...p, ...productoCompleto } : p
        )
      );

      alert("Producto actualizado correctamente");
    } else {
      // ➕ CREAR
      const docRef = await addDoc(collection(db, "productos nacionales"), productoCompleto);

      setProductos((prev) => [...prev, { ...productoCompleto, id: docRef.id }]);

      alert("Producto agregado correctamente");
    }

    // limpiar formulario y estado
    setDatosForm({ name: "", price: "", stock: "", category: "" });
    setImagenFile(null);
    setProductoEditando(null);

  } catch (error) {
    console.error("Error en el proceso de envío:", error);
    alert("Hubo un error al guardar el producto. Por favor, intentá de nuevo.");
  }
};

    return (
      <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        manejarCambioImagen={manejarCambioImagen}
      />
    );
  }