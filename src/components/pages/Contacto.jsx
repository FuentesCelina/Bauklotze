import React, { useState } from "react";
import styles from "./Contacto.module.css";

function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Contáctanos</h2>

        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />

        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje..."
          value={formData.mensaje}
          onChange={handleChange}
          className={styles.textarea}
        />

        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;