'use client'

import React from "react";
import Link from "next/link";
import { useState } from "react";

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
        {label}
      </div>
      {links && (
        <ul className={`${!isMenuOpen ? 'hidden' : ''}`}>
          {links.map((item, idx) => (
            <li className="menu-item pl-10" key={idx}>
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
