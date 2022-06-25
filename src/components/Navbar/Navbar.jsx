import React, { useState } from "react";
import Logo from "../../assets/img/mainLogo.png";
import NavLinks from "./NavLinks";
import Log from "./Log"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-primary">
      <div className="flex items-center font-normal text-rose-50 justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden text-sm items-center gap-2 font-[Poppins]">
          <li>
            <a to="/" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>
          <li>
            <a to="/" className="py-7 px-3 inline-block">
              About Us
            </a>
          </li>
          <NavLinks />
          <li>
            <a to="/" className="py-7 px-3 inline-block">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="md:block hidden">
          <Log />
        </div>
        {/* Mobile*/}
        <ul
          className={`
            md:hidden bg-primary absolute w-full h-full bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <a to="/" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>
          <li>
            <a to="/" className="py-7 px-3 inline-block">
              About Us
            </a>
          </li>
          <NavLinks />
          <li>
            <a to="/" className="py-7 px-3 inline-block">
              Contact Us
            </a>
          </li>
          <div className="py-5">
          <Log />
        </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
