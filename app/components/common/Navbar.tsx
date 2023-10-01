"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import navigation from "@/app/content/navigation";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar w-full h-full border-r flex flex-col">
      <div className="h-40 mb-5">
        <div className="h-full w-10/12 mx-auto relative">
          <Link href="/">
            <Image
              src="/home/pianhapiranha-.png"
              alt="Proyecto Piranha"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      <div className="px-6 text-xs text-center">
        <p>
          Proyecto Piranha es una editorial y productora cultural.
        </p>
        <p>
          Desde el 2016 colabora con artistas visuales e ilustradores
          latinoamericanxs en la publicación y distribución de su obra.
        </p>
      </div>
      <nav>
        <ul className="border-t">
          {navigation.map((item, idx) => (
            <li key={idx}>
              {item.href ? (
                <Link
                  className={`menu-item flex ${
                    pathname === item.href ? "bg-white text-black" : ""
                  }`}
                  key={idx}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <NavMenu label={item.label} links={item.links} />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto flex h-12 items-center border-t">
        <div className="text-sm px-4 border-r h-full flex items-center w-full">
          {"CONTACTANOS :)"}
        </div>
        <Link
          href="/"
          className="px-4 h-full flex  items-center justify-center border-r hover:bg-white hover:text-black"
        >
          <FaInstagram />
        </Link>
        <Link
          href="/"
          className="px-4 h-full flex  items-center justify-center hover:bg-white hover:text-black"
        >
          <AiOutlineMail />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
