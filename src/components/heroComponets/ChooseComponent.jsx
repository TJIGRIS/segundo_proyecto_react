import React from "react";

export const ChooseComponent = () => {
  return (
    <div className="grid grid-cols-2">
      {/* Left */}
      <div className="grid grid-cols-2 place-content-between w-[32rem] gap-6">
        <article className="bg-colorSecundario  h-44 p-4 flex flex-col justify-between rounded-lg shadow">
          <div className="bg-gradient-to-r from-[#f05908] to-[#c54fc4] w-10 h-2  rounded-full "></div>
          <p className="text-5xl font-semibold">
            1,5 <span className="text-base font-light">%</span>
          </p>

          <div className="font-light">
            <div className="flex justify-between">
              <p className="text-gray-400">TERM</p>
              <p className="font-medium">20 days</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-400">PRINCIPAL</p>
              <p className="font-medium">20 days</p>
            </div>
          </div>
        </article>
        <article className="bg-colorSecundario  h-44 p-4 flex flex-col justify-between rounded-lg shadow">
          <div className="bg-gradient-to-r from-[#f05908] to-[#c54fc4] w-10 h-2  rounded-full "></div>
          <p className="text-5xl font-semibold">
            1,5 <span className="text-base font-light">%</span>
          </p>

          <div className="font-light">
            <div className="flex justify-between">
              <p className="text-gray-400">TERM</p>
              <p className="font-medium">20 days</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-400">PRINCIPAL</p>
              <p className="font-medium">20 days</p>
            </div>
          </div>
        </article>
        <article className="bg-colorSecundario  h-44 p-4 flex flex-col justify-between rounded-lg shadow">
          <div className="bg-gradient-to-r from-[#f05908] to-[#c54fc4] w-10 h-2  rounded-full "></div>
          <p className="text-5xl font-semibold">
            1,5 <span className="text-base font-light">%</span>
          </p>

          <div className="font-light">
            <div className="flex justify-between">
              <p className="text-gray-400">TERM</p>
              <p className="font-medium">20 days</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-400">PRINCIPAL</p>
              <p className="font-medium">20 days</p>
            </div>
          </div>
        </article>
        <article className="bg-colorSecundario  h-44 p-4 flex flex-col justify-between rounded-lg shadow">
          <div className="bg-gradient-to-r from-[#f05908] to-[#c54fc4] w-10 h-2  rounded-full "></div>
          <p className="text-5xl font-semibold">
            1,5 <span className="text-base font-light">%</span>
          </p>

          <div className="font-light">
            <div className="flex justify-between">
              <p className="text-gray-400">TERM</p>
              <p className="font-medium">20 days</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-400">PRINCIPAL</p>
              <p className="font-medium">20 days</p>
            </div>
          </div>
        </article>
      </div>

      {/* Right */}
      <div className="grid place-items-center">
        <div className="flex flex-col gap-10">
          <div className="">
            <p className="text-colorSecundario text-md mb-2">NUMBERS</p>
            <h2 className="text-4xl">Choose Your Plane</h2>
          </div>
          
          <div className="">
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              perferendis provident quibusdam voluptatum commodi eaque corporis
              reiciendis asperiores sit eos, maxime aspernatur, tempora velit ex
              culpa ullam laborum, incidunt accusamus?
            </p>
          
            <button className="bg-gradient-to-r from-[#f05908] to-[#c54fc4] px-6 py-2 rounded-full w-max mt-7">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
