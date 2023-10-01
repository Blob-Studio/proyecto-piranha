'use client'

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa"

interface Link {
  href: string;
  label: string;
}

interface NavMenuProps {
  label : string;
  links? : Link[]
}

const NavMenu: React.FC<NavMenuProps> = ({ label, links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      <div className="submenu menu-item" onClick={() => {
        setIsMenuOpen(!isMenuOpen)
      }}>
        <div className="flex justify-between items-center w-full">
          <span className="block">{label}</span>
          <FaCaretDown size={'1.5rem'} className={`transition ${isMenuOpen ? 'rotate-180' : ''}`}/>
        </div>
      </div>
      {links && (
        <ul className={`transition-all overflow-y-hidden ${!isMenuOpen ? 'max-h-0' : 'max-h-[100px]'}`}>
          {links.map((item, idx) => (
            <li className="menu-item pl-10 bg-neutral-800 " key={idx}>
              <Link key={idx} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavMenu;
