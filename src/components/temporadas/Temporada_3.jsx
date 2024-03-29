import { portadas } from "../../data/ImagenesPortada";
import { temporadas, vistasTemporadas } from "../../data/TemporadasData";
import MenuTemporadas from "../MenuTemporadas";
import Temporada from "./Temporada";
import TituloPrincipal from "../TituloPrincipal";

const cantidad = vistasTemporadas[4].cantidad;
const temporada = vistasTemporadas[4].temporada;

const Temporada_3 = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div>
        {portadas.map((portada, i) => {
          return (
            <div key={i} className="w-full z-0">
              <img className="w-full" src={portada.img} alt={portada.alt} />
            </div>
          );
        })}
      </div>
      <div className="z-10 absolute w-8/12 h-full md:mt-52 sm:mt-28  bg-black/40 hover:bg-black/70 transition-all duration-700 ease-in-out mb-20 flex justify-start items-center flex-col">
        <TituloPrincipal />
        <MenuTemporadas temporada={temporada} cantidad={cantidad} />
        <div className="w-10/12 flex flex-row justify-center items-center mb-28">
          <hr className="w-11/12" />
        </div>
        {temporadas.temp_03.map((temporada, i) => {
          return (
            <Temporada
              key={i}
              episodio={temporada.episodio}
              urlVideo={temporada.urlVideo}
              titulo={temporada.titulo}
              duracion={temporada.duracion}
              descripcion={temporada.descripcion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Temporada_3;
