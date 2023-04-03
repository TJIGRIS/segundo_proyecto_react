import React, { useState } from "react";
import { how } from "../../apis/HowApi";
import { motion } from "framer-motion";

import { AiOutlineArrowUp } from "react-icons/ai";
import { Deslizar } from "../../animacion/Deslizar";

export const HowComponet = () => {
  const [How, setHow] = useState(how);
  return (
    <div>
      <motion.div
        variants={Deslizar("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="flex flex-row justify-between"
      >
        <div className="">
          <h2 className="text-4xl">How It Works</h2>
        </div>

        <div className="flex flex-row gap-4 text-lg">
          <div className="bg-colorSecundario border-2 border-colorPrimario shadow-lg shadow-[#8d4760] rounded-full py-2 px-4">
            <a className="flex items-center gap-2" href="#">
              Last Investments <AiOutlineArrowUp />
            </a>
          </div>

          <div className="bg-colorSecundario border-2 border-colorPrimario shadow-lg shadow-[#8d4760] rounded-full py-2 px-4">
            <a className="flex items-center gap-2" href="#">
              Top Investors <AiOutlineArrowUp />
            </a>
          </div>

          <div className="bg-colorSecundario border-2 border-colorPrimario shadow-lg shadow-[#8d4760] rounded-full py-2 px-4">
            <a className="flex items-center gap-2" href="#">
              Last Withdraws <AiOutlineArrowUp />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={Deslizar("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="mt-10 flex justify-between"
      >
        {How.map((item) => (
          <article
            key={item.id}
            className="bg-colorSecundario w-40 h-44 flex flex-col justify-between p-5 rounded-lg shadow-lg"
          >
            <div className="text-colorSecundario text-xl">
              <AiOutlineArrowUp />
            </div>

            <div className=" font-semibold">
              <p className="text-4xl">
                <span className="text-base font-light">{item.dolar} </span>
                {item.number}
              </p>

              <p className="text-sm mt-4 text-gray-400">{item.text}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
};
