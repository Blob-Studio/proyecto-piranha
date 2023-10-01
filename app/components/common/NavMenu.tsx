"use client";

import React, { ReactNode, useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";

interface Link {
  href: string;
  label: string | ReactNode;
}

interface NavMenuProps {
  label: string | ReactNode;
  links?: Link[];
}

const NavMenu: React.FC<NavMenuProps> = ({ label, links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    links?.forEach((item, idx) => {
      if (item.href === pathname) {
        setIsMenuOpen(true)
      }
    });
  }, [])

  return (
    <div>
      <div
        className="submenu menu-item"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <div className="flex justify-between items-center w-full">
          <span className="flex items-center">{label}</span>
          <FaCaretDown
            size={"1.5rem"}
            className={`transition ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      {links && (
        <ul
          className={`overflow-y-hidden ${
            !isMenuOpen ? "max-h-0" : "max-h-[100px]"
          }`}
        >
          {links.map((item, idx) => {
            return (
              <li
                className={`menu-item flex w-full pl-10 bg-neutral-800 ${
                  pathname === item.href ? "bg-white text-black" : ""
                }`}
                key={idx}
              >
                <Link key={idx} href={item.href} className="flex items-center">
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavMenu;
