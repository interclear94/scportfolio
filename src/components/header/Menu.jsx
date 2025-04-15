import React from "react";

const Menu = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-x-[1.75rem] bg-[#111] text-[#fff] text-[1.25rem] font-extralight">
        <li className="cursor-pointer hover:text-[#37C6C9]">Home</li>
        <li className="cursor-pointer hover:text-[#37C6C9]">About Me</li>
        <li className="cursor-pointer hover:text-[#37C6C9]">Skills</li>
        <li className="cursor-pointer hover:text-[#37C6C9]">PROJECT</li>
      </ul>
    </nav>
  );
};

export default Menu;
