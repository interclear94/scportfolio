import React from "react";
import Menu from "./Menu";
import LogoName from "./LogoName";

const Header = () => {
  return (
    <header className="w-[100%] py-3 bg-[#111] flex justify-center items-center">
      <div className="flex justify-between items-center w-[1200px] bg-[#11111]">
        <LogoName />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
