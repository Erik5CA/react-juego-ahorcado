/* eslint-disable react/prop-types */
import { useState } from "react";
import Contexto from "./Contexto";

function Provider({ children }) {
  const [palabraCorrecta, setPalabraCorrecta] = useState("");

  const guardarPalabraCorrecta = (guardar = "") => {
    setPalabraCorrecta(guardar);
  };

  return (
    <Contexto.Provider
      value={{
        palabraCorrecta,
        guardarPalabraCorrecta,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default Provider;
