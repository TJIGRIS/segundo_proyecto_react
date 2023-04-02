import React from "react";

export const NavComponent = () => {
  return (
    <nav className="bg-colorSecundario">
      <div className="container mx-auto flex justify-between items-center h-14">
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
          <label className="rounded-full" htmlFor="">
            En
          </label>
          <button className="bg-gradient-to-r from-[#f05908] to-[#c54fc4] px-6 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
