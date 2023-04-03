import React from "react";

export const FooterComponent = () => {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center h-14 lg:p-0 p-4">
        <div className="font-semibold text-2xl ">
          <a href="#">
            TJ
            <span className="hover:text-colorSecundario ease-in-out duration-150">
              IGRIS
            </span>
          </a>
        </div>

        <div className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
          <a href="#">Home</a>
        </div>
        <div className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
          <a href="#">FAQ</a>
        </div>
        <div className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
          <a href="#">News</a>
        </div>
        <div className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
          <a href="#">Rating</a>
        </div>
        <div className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
          <a href="#">History</a>
        </div>
        <div className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
          <a href="#">Contact</a>
        </div>
        <div className="hover:text-colorSecundario ease-in-out duration-150 p-3 cursor-pointer">
          <a href="#">About</a>
        </div>

        <div className="flex items-center gap-4">
          <select
            className="bg-transparent outline-none border-none"
            name="lenguajes"
            id="lang"
          >
            <option value="EN">{"EN"}</option>
            <option value="ES">{"ES"}</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto flex justify-between text-gray-400 mt-16 mb-4">
        <p>&copy; TJIGRIS 2023. All rights reserved.</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Sales & Rufunds</p>
        <p>Legal</p>
        <p>
          made by <span className="text-white">rooninum</span>
        </p>
      </div>
    </nav>
  );
};
