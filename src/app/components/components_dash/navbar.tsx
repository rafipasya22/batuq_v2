import clsx from "clsx";

import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

type NavbarProps = {
  dark: boolean;
};

export default function Navbar({ dark }: NavbarProps) {
  return (
    <div
      className={clsx(
        "navbar absolute top-0 left-0 rounded-br-[20px] w-[13vw] h-fit flex flex-col items-center justify-start text-[#9b00ca] shadow-lg"
      )}
    >
      <div className="top h-[30%] bg-white w-full rounded-br-[20px] p-[1rem] z-10 shadow-lg">
        <div className="title text-[1.3rem] font-[600] transition-transform duration-500 flex justify-center items-center">
          <span className="text-[1.5rem]">ب</span>atuq
        </div>
      </div>
      <div className="menu w-full absolute top-11 left-0 rounded-br-[20px] justify-start items-start flex flex-col bg-[#9b00ca] h-fit z-9 pt-[1rem] shadow-xl">
        <ul className="w-full flex items-start flex-col justify-start gap-6 py-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i}
                className="h-[8vh] text-white flex flex-row justify-start cursor-pointer 
                items-center w-full gap-2 p-3
                hover:bg-[#630081]
                text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base
                "
            >
                <FontAwesomeIcon icon={faHouse} size="sm"/>              
                Menu
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
