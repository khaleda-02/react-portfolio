import React from "react";

const SectionTem = ({ children, id }) => {
  return (
    <div
      className="w-full min-h-[100vh] flex flex-col justify-center items-start overflow-hidden capitalize pt-[15vh] lg:pt-[10vh] "
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionTem;
