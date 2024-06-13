import React from "react";
import { bgConfirmAdesion } from "../../assets";

const Loading: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-50">
      <img src={bgConfirmAdesion} alt="" className="absolute w-full h-full object-cover top-0" />
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-[#00A7E1]"></div>
    </div>
  );
};

export default Loading;
