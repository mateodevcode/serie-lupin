import { Link } from "react-router-dom";
import { portadas } from "../data/ImagenesPortada";
import { vistasTemporadas } from "../data/TemporadasData";
import MenuTemporadas from "./MenuTemporadas";

const MenuPrincipal = () => {
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
      <div className="z-10 absolute w-8/12 max-h-full md:mt-52 sm:mt-28  bg-black/40 hover:bg-black/70 transition-all duration-700 ease-in-out mb-20 flex justify-start items-center flex-col">
        <Link to={"/"}>
        <p className="bebas-neue-regular md:mt-16 sm:mt-10 md:mb-16 sm:mb-10 md:text-6xl sm:text-3xl">
          Las aventuras de arsene lupin III
        </p>
        </Link>
        <MenuTemporadas temporada={""} cantidad={""} />
        <div className="w-10/12 flex flex-row justify-center items-center md:mb-28 sm:mb-10">
          <hr className="w-11/12"/>
        </div>
        {vistasTemporadas.map((vista, i) => {
          return (
            <Link
              className="w-10/12 flex md:flex-row sm:flex-col justify-around items-center cursor-pointer my-5 bg-red-600/30 py-3 rounded-xl"
              key={i}
              to={vista.linkTo}
            >
              <div className="flex flex-col justify-center items-center md:mb-0 sm:mb-7 text-white">
                <p className="bg-black/55 md:px-4 sm:px-2 md:text-5xl sm:text-xl md:pt-2 sm:pt-1 md:pb-4 sm:pb-2 rounded-lg md:mb-10 sm:mb-3 font-extrabold">
                  {vista.temporada}
                </p>
                <p className="md:mb-10 sm:mb-3 md:text-5xl sm:text-xl font-bold">{vista.titulo}</p>
                <p className="md:text-3xl sm:text-base">
                  <span className="bgyellow text-black px-2 rounded-md">{vista.cantidad}</span> Episodios
                </p>
              </div>
              <div className="md:w-80 sm:w-40">
                <img className="w-full" src={vista.urlImg} alt={vista.titulo} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPrincipal;
