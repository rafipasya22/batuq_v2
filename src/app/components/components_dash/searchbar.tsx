import clsx from "clsx";

import React, { ChangeEvent, RefObject } from "react";
import { useState, useEffect, useRef } from "react";

type SearchbarProps = {
  dark: boolean;
  ishidden: boolean;
  refsearchbar: RefObject<HTMLDivElement | null>;
  hidesearch: () => void;
};

export default function Searchbar({
  dark,
  ishidden,
  refsearchbar,
  hidesearch,
}: SearchbarProps) {
  return (
    <div
      ref={refsearchbar}
      className={clsx(
        "searchbar border border-[#c5c5c5] transition-all duration-500 absolute top-2 left-120 rounded-[20px] bg-[#ddddddff] w-fit h-fit flex flex-row items-center justify-start text-[#9b00ca] shadow-lg px-[1rem] py-[0.5rem]",
        ishidden ? "translate-y-[-20vh]" : "translate-y-0"
      )}
    >
      <input
        type="text"
        className="w-[30vw] outline-none focus:outline-none focus:ring-0 text-sm"
        placeholder="Search something......"
      />
      <button
        onClick={hidesearch}
        className={clsx(
          "searchbtn rounded-full p-[0.3rem] flex items-center text-base justify-center cursor-pointer transition-transform duration-500",
          dark
            ? "bg-[#ffd000] text-black hover:text-[#ffd000] hover:bg-[#161616]"
            : "bg-[#9b00ca] text-white hover:text-[#9b00ca] hover:bg-[#ddddddff]"
        )}
      >
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
}
