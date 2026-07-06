import styles from "./Nosotros.module.css";
import { useState,useEffect } from "react";

function Nosotros() {
      const [nosotros, setNosotros] = useState([]);
      const [cargando, setCargando] = useState(true);
      const [error, setError] = useState(null);
    
        useEffect(() => {
        fetch("/data/nosotros.json")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al cargar los datos");
            }
            return response.json();
          })
          .then((data) => {
            setNosotros(data);
            setCargando(false);
          })
          .catch((error) => {
            setError(error.message);
            setCargando(false);
          });
        }, []);
  return (
    <>
      <div className={styles.nosotros}>
        <h3>¡Nosotros!</h3>
      </div>
      <section className={styles.container}>
          {nosotros.map((persona)=> (
              <div key={persona.id} className={styles.card}>
                  <img src={persona.image} alt={persona.name} className={styles.image} />
                  <h2 className={styles.name}> {persona.name} </h2>
                  <p className={styles.position}> {persona.position} </p>
                  <p className={styles.email}> {persona.email} </p>
              </div>
          ))}
      </section>
    </>
  );
}

export default Nosotros;