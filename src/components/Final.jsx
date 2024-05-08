import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";

function Final() {
  const navegacion = useNavigate();

  const { palabraCorrecta } = useContext(Contexto);

  return (
    <div className="perdedor">
      <h1>Has fallado</h1>
      <h2>
        La respuesta correcta era: <strong>{palabraCorrecta}</strong>{" "}
      </h2>
      <div className="imagen">
        <img src={`/el_ahorcado6.png`} alt="" />
      </div>
      <button className="boton" onClick={() => navegacion("/juego/")}>
        Volver a juagar
      </button>
    </div>
  );
}

export default Final;
