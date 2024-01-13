import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Temporada_1 from "./components/temporadas/Temporada_1";
import Temporada_2 from "./components/temporadas/Temporada_2";
import Temporada_3 from "./components/temporadas/Temporada_3";
import Temporada_4 from "./components/temporadas/Temporada_4";
import Temporada_5 from "./components/temporadas/Temporada_5";
import Temporada_6 from "./components/temporadas/Temporada_6";
import FujikoMine from "./components/temporadas/FujikoMine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>

        <Route path="/temporada-1" element={<Temporada_1  />} />
        <Route path="/temporada-2" element={<Temporada_2  />} />
        <Route path="/temporada-3" element={<Temporada_3  />} />
        <Route path="/temporada-4" element={<Temporada_4  />} />
        <Route path="/temporada-5" element={<Temporada_5  />} />
        <Route path="/temporada-6" element={<Temporada_6  />} />

        <Route path="/fujiko-mine" element={<FujikoMine  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
