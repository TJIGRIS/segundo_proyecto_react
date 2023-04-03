import React from "react";
import { motion } from "framer-motion";
import { Deslizar } from "../../animacion/Deslizar";

export const CalcularorComponent = () => {
  return (
    <motion.div
      variants={Deslizar("left", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="flex gap-10"
    >
      <div className="flex-none w-[10%]"></div>
      <div className="flex-1 p-4 bg-colorSecundario shadow rounded-lg ">
        <div className="flex justify-between">
          <h3 className="text-xl">Profit Calculator</h3>

          <div className="flex gap-12">
            <p className="text-colorSecundario">Basic</p>
            <p className="text-gray-400">VIP</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between gap-6">
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-gray-400">Investment amount</p>
                <p>66,666</p>
              </div>

              <input
                className="w-full"
                type="range"
                value="66.666"
                name=""
                id=""
              />
            </div>

            <div className="flex gap-10 bg-colorPrimario rounded-lg items-center p-3 w-36">
              <p>66,666</p>
              <p className="text-gray-400">USD</p>
            </div>
          </div>

          <div className="flex justify-between gap-6 mt-6">
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-gray-400">Term</p>
                <p>20</p>
              </div>

              <input className="w-full" type="range" value="20" name="" id="" />
            </div>

            <div className="flex gap-10 bg-colorPrimario rounded-lg items-center p-3 w-36">
              <p>20</p>
              <p className="text-gray-400">DAYS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[20%] bg-colorSecundario p-4">
        <h3 className="text-xl">Profit Calculator</h3>

        <div className="mt-6">
          <div className="">
            <div className="flex justify-between">
              <p className="text-gray-400">PERCENTAGE</p>
              <p>1,5% daily</p>
            </div>

            <div className="flex justify-between mt-2">
              <p className="text-gray-400">PERCENTAGE</p>
              <p>1,5% daily</p>
            </div>
          </div>

          <p className="text-4xl mt-4 text-right">
            <span className="text-base">$</span> 300,000
          </p>
        </div>
      </div>
    </motion.div>
  );
};
