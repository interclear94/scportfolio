import React from "react";

const Menu = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex justify-center items-center gap-x-[1.75rem] text-[#fff] text-[1.25rem] font-semibold">
        <li className="cursor-pointer hover:text-[#37C6C9] transition duration-150">
          Home
        </li>
        <li className="cursor-pointer hover:text-[#37C6C9] transition duration-150">
          About Me
        </li>
        <li className="cursor-pointer hover:text-[#37C6C9] transition duration-150">
          Skills
        </li>
        <li className="cursor-pointer hover:text-[#37C6C9] transition duration-150">
          Projects
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
