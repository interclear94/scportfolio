const MenuBtn = ({ onClick, isActive }) => {
  const menuBtnBarStyle = "block w-[70%] h-[3px] bg-[#000] rounded-[1.5px]";
  return (
    <div
      className="flex mx-[30px] lg:hidden flex-col justify-center items-center gap-y-[5px] w-[30px] h-[30px] bg-[#37C6C9] rounded-[1px] cursor-pointer border-[2px] border-[#fff] relative "
      onClick={onClick}>
      <span
        className={`${menuBtnBarStyle} ${
          isActive
            ? "absolute rotate-45 left-[50%] top-[50%] translate-[-50%]"
            : "rotete-0"
        }`}></span>
      <span
        className={`${menuBtnBarStyle} ${
          isActive ? "hidden" : "block"
        }`}></span>
      <span
        className={`${menuBtnBarStyle} ${
          isActive
            ? "absolute rotate-135 left-[50%] top-[50%] translate-[-50%]"
            : "rotete-0"
        }`}></span>
    </div>
  );
};

export default MenuBtn;
