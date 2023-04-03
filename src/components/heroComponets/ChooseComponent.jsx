import React, { useState } from "react";
import { choose } from "../../apis/HowApi";

import { motion } from "framer-motion";
import { Deslizar } from "../../animacion/Deslizar";

export const ChooseComponent = () => {
  const [Choose, setChoose] = useState(choose);

  return (
    <div className="grid grid-cols-2">
      {/* Left */}
      <motion.div
        variants={Deslizar("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-2 place-content-between w-[32rem] gap-6"
      >
        {Choose.map((item) => (
          <article className="bg-colorSecundario  h-44 p-4 flex flex-col justify-between rounded-lg shadow">
            <div className={`${item.color} w-10 h-2  rounded-full `}></div>
            <p className="text-5xl font-semibold">
              {item.porcentaje} <span className="text-base font-light">%</span>
            </p>

            <div className="font-light">
              <div className="flex justify-between">
                <p className="text-gray-400">TERM</p>
                <p className="font-medium">{item.term}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-400">PRINCIPAL</p>
                <p className="font-medium">{item.pricipal}</p>
              </div>
            </div>
          </article>
        ))}
      </motion.div>

      {/* Right */}
      <motion.div
        variants={Deslizar("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="grid place-items-center"
      >
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
              Read More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
