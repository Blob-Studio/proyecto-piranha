import React from "react";
import Image from "next/image";
import Link from "next/link";

const Kiosko = () => {
  return (
    <div className="flex items-stretch">
      <div className="content flex flex-col px-4 w-1/2 border-r py-10">
        <div className="header-image relative w-full h-[184px] mb-10">
          <Image
            className="object-contain"
            src="/home/kiosko-heading.png"
            fill
            alt="kiosko"
          />
        </div>
        <div>
          <p>
            ¿QUÉ ES? Una suscripción mensual de publicaciones de arte
            independiente.
          </p>
          <p>
            Recibí todos los meses en tu casa una selección secreta de libros y
            fanzines, un póster y playlist por artistas y regalitos!
          </p>
          <p>
            CUÁLES SON LAS EDITORIALES? Trabajamos con editoriales
            independientes y autogestivas! Vas encontrar en el Kiosco
            publicaciones de Ediciones El Fuerte, Baba de Perro, Galeria
            Editorial, Waicomics , Editorial Paradojas, Maten al Mensajero,
            Hotel de las ideas, Un tubito, Proyecto Piraña y más.
          </p>
          <p>
            KIOSCO LLEGA A TODO EL PAÍS. Con esto hacemos que la cultura circule
            y se transforme, lxs autores y editoriales puedan seguir
            produciendo, nuevos proyectos puedan nacer y que todxs podamos ser
            parte del futuro.
          </p>
          <Link href="/suscripcion">→ QUIERO SER PARTE</Link>
        </div>
      </div>
      <div className="image w-1/2 relative">
        <Image
          className="object-cover"
          src="/home/kiosco02.jpg"
          fill
          alt="kiosko"
        />
      </div>
    </div>
  );
};

export default Kiosko;
