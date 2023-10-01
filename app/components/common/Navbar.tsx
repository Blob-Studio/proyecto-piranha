import React from "react";
import Link from "next/link";
import navigation from "@/app/content/navigation";
import NavMenu from "./NavMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar w-full h-full border-r flex flex-col">
      <div className="h-40 mb-5">
        <div className="h-full w-10/12 mx-auto relative">
          <Image
            src="/home/pianhapiranha-.png"
            alt="Proyecto Piranha"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <nav>
        <ul className="border-t">
          {navigation.map((item, idx) => (
            <li key={idx}>
              {item.href ? (
                <Link className="menu-item" key={idx} href={item.href}>
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
        <div className="text-sm px-8 border-r h-full flex items-center">{"CONTACTANOS :)"}</div>
        <Link href="/" className="px-4 h-full flex  items-center justify-center">
          IG
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
