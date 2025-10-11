import clsx from "clsx";
import { useState, useEffect } from "react";

type DropdownProps = {
  dark: boolean;
  hide: boolean;
  hidemenu: () => void;
};

export default function DropdownNav({
  dark,
  hide,
  hidemenu
}: DropdownProps) {

  return (
    <div
      className={clsx(
        "container fixed left-1/2 -translate-x-1/2 transition-transform duration-500 top-[4rem] z-40 h-[40vh] w-[60vw] rounded-[10px] flex flex-col justify-start items-center px-[1rem]",
        dark ? "bg-black text-white" : "bg-white text-black",
        hide ? "-translate-y-[60vh]" : "translate-y-3"
      )}
    >
      <div className="top w-full h-[5rem] flex flex-row justify-between items-start py-[1rem]">
        <div className="title text-quicksand text-black">
          <h1 className="font-[600] text-[20px]">Dropdown Menu</h1>
        </div>
        <div className={clsx("close cursor-pointer hover:text-[#c90606]",
            dark ? 'text-white' : 'text-black'
        )} onClick={hidemenu}>
          X
        </div>
      </div>
      <div className="bot h-full">an</div>
    </div>
  );
}
