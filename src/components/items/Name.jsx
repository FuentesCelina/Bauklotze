import { useState } from "react";

function Name(){
    const [nombre, setNombre] = useState("");
    return(
        <>
        <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
        />
        <h1>{nombre}</h1>
        </>
    );
}
export default Name;