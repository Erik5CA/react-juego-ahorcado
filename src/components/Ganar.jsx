import { useNavigate } from "react-router-dom";

function Ganar() {
  const navegacion = useNavigate();
  return (
    <div className="ganador">
      <h1>¡Felicidades has ganado!</h1>
      <h2>Has sobrevivido a esta prueba.</h2>
      <div className="imagen">
        <img src={`/el_ahorcado1.png`} alt="" />
      </div>
      <button className="boton" onClick={() => navegacion("/juego/")}>
        Volver a jugar
      </button>
    </div>
  );
}

export default Ganar;
