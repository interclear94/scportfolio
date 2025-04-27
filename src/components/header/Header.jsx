import React, { useState } from "react";
import Menu from "./Menu";
import LogoName from "./LogoName";
import MenuBtn from "./MenuBtn";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <header className="fixed z-30 w-[100%] py-3 bg-[#111] flex justify-center items-center">
      <div className="flex justify-between items-center w-[1200px] bg-[#11111]">
        <LogoName />
        <Menu />
        <MenuBtn
          onClick={() => setActiveMenu(!activeMenu)}
          isActive={activeMenu}
        />
        <a
          href="https://jakapark.tistory.com/"
          className="hidden lg:flex justify-center items-center w-[80px] h-[42px] rounded-2xl  border-[2px] border-[#37C6C9] text-[#37C6C9] font-semibold hover:border-[#37C6C9] hover:bg-[#37C6C9] hover:text-[#fff] transition duration-150 sm:hidden xl:flex">
          BLOG
        </a>
      </div>
    </header>
  );
};

export default Header;
