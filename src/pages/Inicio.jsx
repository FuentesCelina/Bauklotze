import Nosotros from "../items/Nosotros";
import styles from "../Styles/Inicio.module.css";
import { useState, useEffect } from "react";

function Inicio (){
    return(
    <section className={styles.hero}>

      <div className={styles.content}>
        <h1>¡Hola!</h1>

        <h2>
          Bienvenido a nuestra tienda oficial Bauklötze,
          aqui encontraras los mejores productos para
          armar tu setup gamer.
        </h2>

        <h2>Gaming · Style · Snk</h2>
      </div>
      {/*
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://www.pngplay.com/wp-content/uploads/12/Attack-Titan-Eren-Transparent-PNG.png"
          alt="Eren"
        />
      </div>
      */}
    </section>
    );
}
export default Inicio;