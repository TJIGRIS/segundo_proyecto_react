import React, { useState } from "react";
import { how } from "../../apis/HowApi";

import { AiOutlineArrowUp } from "react-icons/ai";

export const HowComponet = () => {
  const [How, setHow] = useState(how);
  return (
    <div>
      <div className="flex flex-row justify-between">
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
      </div>

      <div className="mt-6 grid grid-cols-6">
        {How.map((item) => (
          <article
            key={item.id}
            className="bg-colorSecundario w-max flex flex-col gap-y-5 p-5 rounded-lg"
          >
            <div className="text-colorSecundario text-xl">
              <AiOutlineArrowUp />
            </div>

            <div className=" font-semibold">
              <p className="text-3xl">
                <span className="text-base">{item.dolar} </span>
                {item.number}
              </p>

              <p className="text-sm mt-2 text-gray-400">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
