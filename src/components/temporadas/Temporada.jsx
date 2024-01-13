const Temporada = ({episodio, urlVideo, titulo, duracion, descripcion, i}) => {
      return (
        <div
          className="flex md:flex-row sm:flex-col md:justify-between sm:justify-center md:items-start sm:items-center w-11/12 cursor-pointer my-6 hover:bg-blue-400/40 p-4 rounded-lg"
          key={i}
        >
          <div className="flex md:flex-row sm:flex-col justify-center items-center md:mb-0 sm:mb-3 text-white">
            <p className="md:text-2xl sm:text-xl md:mb-0 sm:mb-3">{episodio}</p>
            <iframe
              className="mx-2 md:w-60 h-auto sm:w-40"
              src={urlVideo}
              frameBorder={"0"}
            ></iframe>
          </div>
          <div className="flex flex-col md:w-8/12 sm:w-full text-white">
            <div className="flex md:flex-row sm:flex-col md:justify-between sm:justify-center items-center md:mb-0 sm:mb-3">
              <p className="md:text-2xl sm:text-xs font-semibold md:mb-0 sm:mb-3">{titulo}</p>
              <p className="bgyellow text-black p-1 font-semibold rounded-md md:text-base sm:text-xs">
                {duracion}
              </p>
            </div>
            <p className="md:text-sm sm:text-xs md:w-11/12 sm:w-full">{descripcion}</p>
          </div>
        </div>
      );
    }


export default Temporada;
