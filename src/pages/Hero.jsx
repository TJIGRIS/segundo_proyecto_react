import React from "react";
import { HowComponet } from "../components/heroComponets/HowComponet";
import { ChooseComponent } from "../components/heroComponets/ChooseComponent";

export const Hero = () => {
  return (
    <div className="container mx-auto min-h-screen py-16 flex flex-col gap-y-32 lg:p-0 p-4">
      <div>
        <p className="text-colorSecundario text-md mb-2">HISTORY</p>

        <HowComponet />
      </div>

      <ChooseComponent />
    </div>
  );
};
