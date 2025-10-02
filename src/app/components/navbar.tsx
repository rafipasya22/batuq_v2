import clsx from "clsx";
import { useState, useEffect } from "react";

type NavbarProps = {
  dark: boolean;
  activesatu: boolean;
  searchvar: boolean;
  handleclick1: () => void;
  opensearch: () => void;
  closesearch: () => void;
};

export default function Navbar({
  dark,
  searchvar,
  activesatu,
  handleclick1,
  opensearch,
  closesearch,
}: NavbarProps) {
  let haduh: boolean = false;

  return (
    <div
      className={clsx(
        "navbar w-full h-[4rem] mt-0 px-[1rem] py-[0.5rem] flex flex-row items-center justify-between",
          dark ? "bg-[#161616]" : "bg-white"
      )}
    >
      <div className={clsx("left font-[600] haduh text-[1.5rem]",
        dark ? "text-[#eec200]" : 'text-[#9b00ca]'
      )}><span className="text-[1.7rem]">ب</span>atuq</div>
      <div className="right flex justify-start items-center overflow-x-hidden">
        <div
          className={clsx(
            "container absolute top-2 right-2 transition-transform duration-500 rounded-full flex items-center justify-evenly gap-[0.5rem] px-2 w-[40rem] h-[3rem]",
            searchvar ? "-translate-y-[20rem]" : "-translate-y-0",
            dark ? 'bg-black' : 'bg-[#e6e6e6]'
          )}
        >
          <div
            className={clsx(
              "home rounded-full w-[10rem] h-[2rem] flex items-center justify-center cursor-pointer",
              dark ? "hover:bg-[#161616] text-white bg-black" : "bg-[#e6e6e6] text-black hover:bg-[#c5c5c5]"
            )}
            onClick={handleclick1}
          >
            Home
          </div>
          <div
            className={clsx(
              "learn rounded-full w-[10rem] h-[2rem] flex items-center justify-center cursor-pointer",
              dark ? "hover:bg-[#161616] text-white bg-black" : "bg-[#e6e6e6] text-black hover:bg-[#c5c5c5]"
            )}
            onClick={handleclick1}
          >
            Learn
          </div>
          <div
            className={clsx(
              "About rounded-full w-[10rem] h-[2rem] flex items-center justify-center cursor-pointer",
              dark ? "hover:bg-[#161616] text-white bg-black" : "bg-[#e6e6e6] text-black hover:bg-[#c5c5c5]"
            )}
            onClick={handleclick1}
          >
            About
          </div>
          <button
            className={clsx(
              "dropdown rounded-full w-[10rem] h-[2rem] flex items-center justify-center cursor-pointer",
              activesatu && !dark && "bg-[#c5c5c5] text-black",
              !activesatu && !dark && "bg-[#e6e6e6] hover:bg-[#c5c5c5] text-black",
              dark && activesatu && "bg-[#161616] text-white"
            )}
            onClick={handleclick1}
          >
            More
            <span
              className={clsx(
                "material-symbols-outlined transition-transform duration-500",
                activesatu ? "rotate-180" : "rotate-0"
              )}
            >
              arrow_drop_down
            </span>
          </button>
          <button
            className={clsx(
              "dropdown rounded-full p-[0.5rem] flex items-center text-black justify-center cursor-pointer",
              haduh ? "bg-white" : "bg-[#e6e6e6] hover:bg-[#c5c5c5]"
            )}
            onClick={opensearch}
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <div
            className={clsx(
              "Login rounded-full w-[20rem] h-[2rem] flex items-center text-black justify-center gap-[1rem] cursor-pointer",
              haduh ? "bg-white" : "bg-white"
            )}
          >
            <a className="hover:text-[#9b00ca] transition-all duration-300 font-[500]">
              Login
            </a>
            <div className="h-[1.5rem] border-l border-gray-400" />
            <a className="hover:text-[#ffd000] transition-all duration-300 font-[500]">
              Signup
            </a>
          </div>
        </div>
        <div
          className={clsx(
            "container-search text-black transition-transform duration-500 absolute top-2 right-2 rounded-full flex items-center justify-start bg-[#e6e6e6] gap-[0.5rem] px-2 w-[25rem] h-[3rem]",
            searchvar ? "-translate-y-0" : "-translate-y-[20rem]"
          )}
        >
          <span className="material-symbols-outlined w-[5%] ms-[0.5rem]">
            search
          </span>
          <input
            className="focus:border-transparent outline-none w-[75%] ms-[0.2rem]"
            type="search"
            placeholder="Search..."
          />
          <div
            className="searchbtn rounded-full p-1 flex items-center hover:bg-[#c5c5c5] cursor-pointer"
            onClick={closesearch}
          >
            <span className="material-symbols-outlined w-[10%]">close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
