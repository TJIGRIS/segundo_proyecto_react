import React from "react";
import women from "../../assets/women.svg";

export const HeaderComponent = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 place-content-center h-screen lg:p-0 p-4">
      {/* left */}
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <p className="text-colorSecundario text-md">641 DAYS ONLINE</p>
          <h1 className="text-6xl">
            Reliable Investments <br /> from 1,5% per Day
          </h1>
        </div>

        <p className="text-colorTerciario">
          Forex, stocks and cryptocurrency trading. <br />
          No hidden fees and commissions are required.
        </p>
        <button className="bg-gradient-to-r from-[#f05908] to-[#c54fc4] px-6 py-2 rounded-full w-max">
          Get Started
        </button>
      </div>

      {/* right */}
      <div className="grid place-items-center">
        <img className="w-[30rem]" src={women} alt="" />
      </div>
    </div>
  );
};
