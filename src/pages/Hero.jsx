import React from "react";
import { HowComponet } from "../components/heroComponets/HowComponet";
import { ChooseComponent } from "../components/heroComponets/ChooseComponent";
import { CalcularorComponent } from "../components/heroComponets/CalcularorComponent";
import { ZetComponent } from "../components/heroComponets/ZetComponent";

import { motion } from "framer-motion";
import { Deslizar } from "../animacion/Deslizar";

export const Hero = () => {
  return (
    <div className="container mx-auto min-h-screen py-16 flex flex-col gap-y-60 lg:p-0 p-4">
      <div>
        <motion.p
          variants={Deslizar("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="text-colorSecundario text-md mb-2"
        >
          HISTORY
        </motion.p>

        <HowComponet />
      </div>

      <ChooseComponent />

      <CalcularorComponent />

      <ZetComponent />
    </div>
  );
};
