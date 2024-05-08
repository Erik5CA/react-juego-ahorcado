import { Routes, Route } from "react-router-dom";
import Portada from "./components/Portada";
import Juego from "./components/Juego";
import Final from "./components/Final";
import Ganar from "./components/Ganar";
import Provider from "./context/Provider";
function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/juego" element={<Juego />} />
          <Route path="/final" element={<Final />} />
          <Route path="/ganado" element={<Ganar />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
