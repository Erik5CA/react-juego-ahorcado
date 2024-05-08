import { useState } from "react";
import { PALABROS } from "../assets/preguntas.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../context/Contexto.jsx";

const LETRAS = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const COLORES = [
  { backgroundColor: "#d7d8a4" },
  {
    background: "linear-gradient(to bottom, #48ce20 5%, #75ca24 100%)",
    color: "white",
  },
  {
    background: "linear-gradient(to bottom, #ce3420 5%, #ca2424 100%)",
    color: "white",
  },
];

function Juego() {
  const letrasArray = LETRAS.split("");
  const [azar, setAzar] = useState(0);
  const [palabra, setPalabra] = useState([]);
  const [letrasSelect, setLetrasSelect] = useState([]);
  const [correctas, setCorrectas] = useState([]);
  const [incorrectas, setIncorrectas] = useState([]);
  const [imagen, setImagen] = useState(1);

  const navegacion = useNavigate();
  const { guardarPalabraCorrecta } = useContext(Contexto);

  useEffect(() => {
    setAzar(Math.floor(Math.random() * PALABROS.length));
  }, []);

  useEffect(() => {
    setPalabra(PALABROS[azar].palabro.split(""));
    guardarPalabraCorrecta(PALABROS[azar].palabro);
  }, [azar]);

  const pulsado = (e) => {
    const letra = e.target.innerHTML;
    setLetrasSelect([...letrasSelect, letra]);
    if (palabra.indexOf(letra) >= 0) {
      setCorrectas([...correctas, letra]);
    } else {
      setIncorrectas([...incorrectas, letra]);
      setImagen(imagen + 1);
      if (imagen > 5) {
        navegacion("/final");
      }
    }
  };

  useEffect(() => {
    let noEncontrado = 0;
    palabra.map((letra) => {
      if (letrasSelect.find((e) => e === letra) === undefined) {
        noEncontrado++;
      }
    });
    if (noEncontrado === 0 && correctas.length > 0) {
      navegacion("/ganado");
    }
  }, [correctas]);

  return (
    <div className="juego">
      <div className="pregunta">{PALABROS[azar].pregunta}</div>
      <div className="palabra">
        {palabra.map((letra, indice) =>
          letrasSelect.indexOf(letra) === -1 ? (
            <div className="palo" key={indice}></div>
          ) : (
            <div className="palo" key={indice}>
              {letra.toUpperCase()}
            </div>
          )
        )}
      </div>
      <div className="botones">
        {letrasArray.map((letra) =>
          correctas.find((e) => e === letra) ? (
            <button style={COLORES[1]} key={letra}>
              {letra}
            </button>
          ) : incorrectas.find((e) => e === letra) ? (
            <button style={COLORES[2]} key={letra}>
              {letra}
            </button>
          ) : (
            <button style={COLORES[0]} key={letra} onClick={pulsado}>
              {letra}
            </button>
          )
        )}
      </div>
      <div className="imagen">
        <img src={`/el_ahorcado${imagen}.png`} alt="" />
      </div>
    </div>
  );
}

export default Juego;
