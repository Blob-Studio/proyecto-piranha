import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";

const Root = (props: any) => {
  return (
    <div className="w-full flex h-[100dvh]">
      <aside className="h-full w-2/12 z-10 bg-black">
        <Navbar />
      </aside>
      <div className="max-h-[100dvh] overflow-y-scroll w-10/12">
        <main>
          <div className="top-bar border-b h-20 bg-green-500 text-5xl flex items-center font-semibold">
            <Marquee>¡NUEVO PRODUCTO! BUZO DE VICKY MONTE → → → </Marquee>
          </div>
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
