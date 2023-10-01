'use client'

import Navbar from "./components/common/Navbar";
import Hero from "./components/Home/Hero";
import Kiosco from "./components/Home/Kiosco";
import Shop from "./components/Home/Shop";
import Others from "./components/Home/Others";
import AOS from "aos";
import { useEffect } from "react";
import Root from "./components/common/Root";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Root>
      <Hero />
      <Kiosco />
      <Shop />
      <Others />
    </Root>
  );
}
