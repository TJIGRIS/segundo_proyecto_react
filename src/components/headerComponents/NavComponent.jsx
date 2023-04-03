import React from "react";
import { FcAddressBook } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";

export const NavComponent = () => {
  return (
    <nav className="bg-colorSecundario">
      <div className="container mx-auto flex justify-between items-center h-14 lg:p-0 p-4">
        <div className="font-semibold text-2xl ">
          <a href="#">
            TJ
            <span className="hover:text-colorSecundario ease-in-out duration-150">
              IGRIS
            </span>
          </a>
        </div>

        <ul className="text-md font-light flex justify-between gap-2">
          <li className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
            <a href="#">FAQ</a>
          </li>
          <li className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
            <a href="#">News</a>
          </li>
          <li className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
            <a href="#">Rating</a>
          </li>
          <li className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
            <a href="#">History</a>
          </li>
          <li className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
            <a href="#">Contact</a>
          </li>
          <li className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
            <a href="#">About</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <select
            className="bg-transparent outline-none border-none"
            name="lenguajes"
            id="lang"
          >
            <option value="EN">
              <div className="">
                <FcAddressBook />
              </div>
              {"EN"}
            </option>
            <option value="ES">
              <div className="">
                <FcAcceptDatabase />
              </div>
              {"ES"}
            </option>
          </select>

          <button className="bg-gradient-to-r from-[#f05908] to-[#c54fc4] px-6 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
