import React from "react";

export const NavComponent = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center h-14">
        <div className="font-semibold text-2xl">
          <a href="#">ZetBull</a>
        </div>

        <ul className="text-md font-light">
          <li className="hover:text-colorSecundario ">
            <a href="#">Home</a>
          </li>
        </ul>

        <div className="">
          <label htmlFor="">En</label>
          <button>Get Started</button>
        </div>
      </div>
    </nav>
  );
};
