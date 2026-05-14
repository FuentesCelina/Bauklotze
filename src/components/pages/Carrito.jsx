import "../Styles/Carrito.css"
function Carrito({ carrito }) {
  return (
    <>
      <h1>Tu Carrito</h1>
      {carrito.map((producto) => (
        <div className="product-card" key={producto.id}>
          <img src={producto.image} alt={producto.name} className="picture-card"/>
          <h2 className="name-card">{producto.name}</h2>
          <p className="precio-card">{producto.price}</p>
        </div>
      ))}
    </>
  );
}

export default Carrito;