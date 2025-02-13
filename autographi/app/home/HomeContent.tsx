import React from "react";
import Image from "next/image";
import Face from "../statics/Face.png";
import { AnimateText } from "@/app/components/AnimateText";

export const HomeContent = () => {
  return (
    <div className="bg-gray-950">
      <div className="w-h">
        <Image src={Face} alt="Face" width="60" height="40" />
      </div>
      <div className="w-h">
        <AnimateText />
      </div>
    </div>
  );
};
