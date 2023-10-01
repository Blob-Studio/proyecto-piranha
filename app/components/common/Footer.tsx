import React from 'react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const Footer = () => {
  return (
    <footer className="h-12 border-t bg-black flex items-center">
      <Marquee>
        <Link href="/subscribe">SUSCRIBITE A NUESTRO KIOSKO Y RECIBÍ COSAS HERMOSAS TODOS LOS MESES ❤️</Link>
      </Marquee>
    </footer>
  );
};

export default Footer;
