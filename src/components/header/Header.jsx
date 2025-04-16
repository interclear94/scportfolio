import React from "react";
import Menu from "./Menu";
import LogoName from "./LogoName";

const Header = () => {
  return (
    <header className="fixed z-30 w-[100%] py-3 bg-[#111] flex justify-center items-center">
      <div className="flex justify-between items-center w-[1200px] bg-[#11111]">
        <LogoName />
        <Menu />
        <a
          href="https://jakapark.tistory.com/"
          className="flex justify-center items-center w-[80px] h-[42px] rounded-2xl  border-[2px] border-[#37C6C9] text-[#37C6C9] font-semibold hover:border-[#37C6C9] hover:bg-[#37C6C9] hover:text-[#fff] transition duration-150"
        >
          BLOG
        </a>
      </div>
    </header>
  );
};

export default Header;
