import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#001032] bg-opacity-75 z-50">
      <div className="animate-spin rounded-full h-28 w-28 border-b-8 border-[#00A7E1]"></div>
    </div>
  );
};

export default Loading;
