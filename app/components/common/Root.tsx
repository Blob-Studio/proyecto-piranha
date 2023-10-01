import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";

const Root = (props: any) => {
  return (
    <div className="flex h-[100dvh]">
      <aside className="h-full w-[260px] z-10 bg-black">
        <Navbar />
      </aside>
      <div className="w-[calc(100%-260px)] max-h-[100dvh] overflow-y-scroll">
        <main>
          <div className="top-bar border-b h-20 bg-amber-700 text-green-500 text-5xl flex items-center font-semibold">
            <Marquee className="h-full">¡NUEVO PRODUCTO! BUZO DE VICKY MONTE → → → </Marquee>
          </div>
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
