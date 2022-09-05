import React from "react";
import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex flex-row ">
            <h2 className="text-5xl font-bold italic text-stale-900">Estrada & Abogados</h2>
            
          </div>
          <br />

          <p className="mb-8 leading-relaxed">
            Es una empresa Online, líder en servicios de asesoría integral para
            inversionistas nacionales e internacionales desde 1998, empresas
            públicas y privadas, bancos, instituciones financieras y cualquier
            tipo de entidad comercial.
          </p>

          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
              <Link to="/Form">Go to </Link>
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={imagenes.img1}
          />
        </div>
      </div>
      
    </section>
  );
};

export default Home;
