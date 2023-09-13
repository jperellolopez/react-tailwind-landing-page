import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          Proveemos
          <span className="text-coral-red"> calidad </span>y
          <span className="text-coral-red"> diseño </span>
          en nuestro calzado
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Kine es garantía de confort y estilo. Nuestro calzado está diseñado
          meticulosamente para elevar tu experiencia, proporcionándote una
          calidad, innovación y elegancia inigualables.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Nuestra atención al detalle y excelencia aseguran la satisfacción de
          los clientes más sofisticados. Ya seas un deportista, busques comodidad o estilo, tenemos lo que necesitas.
        </p>
        {/**Button component */}
        <div className="mt-11">
          <Button label="Ver Detalles" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
