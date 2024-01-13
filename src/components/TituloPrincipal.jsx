import { Link } from "react-router-dom";

const TituloPrincipal = () => {
  return (
    <div className="md:mt-16 sm:mt-10 md:mb-16 sm:mb-10">
      <Link to={"/"}>
        <p className="bebas-neue-regular md:text-6xl sm:text-3xl">
          Las aventuras de arsene lupin III
        </p>
      </Link>
    </div>
  );
};

export default TituloPrincipal;
