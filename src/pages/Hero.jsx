import React from "react";
import { HowComponet } from "../components/heroComponets/HowComponet";

export const Hero = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <p className="text-colorSecundario text-md mb-2">HISTORY</p>

      <HowComponet />
    </div>
  );
};
