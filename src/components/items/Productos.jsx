import ProductCard from "./ProductCard";
import styles from "./Products.module.css"
import { useEffect,useState } from "react";

function Productos() {
  const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      fetch("/data/productos.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos");
          }
          return response.json();
          })
        .then((data) => {
          setProductos(data);
          setCargando(false);
        })
        .catch((error) => {
          setError(error.message);
          setCargando(false);
        });
    }, []);
  return (
    <div className={styles["products"]}>
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
        />
      ))}
    </div>
    
  );
}

export default Productos;