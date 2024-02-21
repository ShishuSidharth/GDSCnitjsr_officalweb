import LOGO from "../img/GDSC Logo chapter lockup template 1.svg";
import React, { useState } from "react";
function Navbar() {
  let Links = [
    { name: "About Us", link: "/" },
    { name: "Our Team", link: "/" },
    { name: "Events", link: "/" },
    { name: "Socials", link: "/" },
    { name: "Join Us", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full relative top-0 left-0 z-[1000000]" >
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 z-[10000]">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <img src={LOGO} className="w-[70%] sm:w-auto" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;


