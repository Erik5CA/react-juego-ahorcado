import { useNavigate } from "react-router-dom";

function Portada() {
  const navegacion = useNavigate();

  return (
    <>
      <h1 className="texto">Bienvenido a el juego del ahorcado</h1>
      <h2>
        El jugo consiste en encontrar la palabra correcta a la pregunta superior
      </h2>
      <h3>
        Las preguntas son realcionadas a el lenguaje de programacion JavaScript
      </h3>
      <hr />
      <h2>Instrucciones</h2>
      <h3>
        Para encontrar la palabra correcta deberas ingresar la letra correcta
        que se encuentre en la palabra
      </h3>
      <h3>
        Si la letra no se encuentra en la palabra, el ahorcado se va a
        incrementar
      </h3>
      <h3>
        Tienes un maximo de 6 intentos para encontrar la palabra correcta.
      </h3>
      <button className="boton" onClick={() => navegacion("/juego")}>
        Jugar
      </button>
    </>
  );
}

export default Portada;
