import React, { useState } from "react";
import ReactPlayer from "react-player";

export const ZetComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mb-32">
      {/* Left */}
      <div className="rounded-lg overflow-hidden w-max">
        <ReactPlayer
          url="https://music.youtube.com/watch?v=aUVzcnXOVY4&list=RDAMVMaUVzcnXOVY4"
          controls
        />
      </div>

      {/* Right */}
      <div className="grid place-items-center">
        <div className="flex flex-col gap-10">
          <div className="">
            <p className="text-colorSecundario text-md mb-2">ABOUT</p>
            <h2 className="text-4xl">ZetBull Company</h2>
          </div>

          <div className="">
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              perferendis provident quibusdam voluptatum commodi eaque corporis
              reiciendis asperiores sit eos, maxime aspernatur, tempora velit ex
              culpa ullam laborum, incidunt accusamus?
            </p>

            <div className="flex items-center mt-7 gap-4">
              <button className="bg-gradient-to-r from-[#f05908] to-[#c54fc4] px-6 py-2 rounded-full w-max">
                Read More
              </button>

              <p className="text-gray-400">45,051 online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
