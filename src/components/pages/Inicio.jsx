import Nosotros from "./Nosotros";
import styles from "./Inicio.module.css";
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
    </section>
    );
}
export default Inicio;