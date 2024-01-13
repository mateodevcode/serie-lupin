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
      <div className="z-10 absolute w-8/12 h-full mt-52 bg-black/40 hover:bg-black/70 transition-all duration-700 ease-in-out mb-20 flex justify-start items-center flex-col">
        <Link to={"/"}>
          <p className="bebas-neue-regular mt-16 mb-16">
            Las aventuras de arsene lupin III
          </p>
        </Link>
        <MenuTemporadas temporada={""} cantidad={""} />
        <div className="w-10/12 flex flex-row justify-center items-center mb-28">
          <hr className="w-11/12" />
        </div>
        {vistasTemporadas.map((vista, i) => {
          return (
            <Link
              className="w-10/12 flex flex-row justify-around items-center cursor-pointer my-5"
              key={i}
              to={vista.linkTo}
            >
              <div className="flex flex-col justify-center items-center">
                <p className="bg-black/55 px-4 text-5xl pt-2 pb-4 rounded-lg mb-10 font-extrabold">
                  {vista.temporada}
                </p>
                <p className="mb-10 text-5xl font-bold">{vista.titulo}</p>
                <p className="text-3xl">
                  <span className="bgyellow text-black px-2 rounded-md">
                    {vista.cantidad}
                  </span>{" "}
                  Episodios
                </p>
              </div>
              <div className="w-80">
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
