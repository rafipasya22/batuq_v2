"use client";

import Navbar from "./components/navbar";
import DropdownNav from "./components/dropdown_nav";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function Home() {
  const [enabled, setEnabled] = useState(false);
  let active: boolean = false;
  let dark: boolean = false;
  const [activesatu, setactive1] = useState(false);
  const [searchvar, setSearch] = useState(false);
  const [hide, hidestate] = useState(true);

  if (enabled === true) {
    active = true;
    dark = true;
  } else {
    active = false;
    dark = false;
  }

  function handleclick1() {
    if (activesatu === true) {
      setactive1(false);
    } else {
      setactive1(true);
    }
  }

  function opensearch() {
    setSearch(true);
    if(hide === false){
      hidestate(true);
      setactive1(false);
    }
  }

  function closesearch() {
    setSearch(false);
  }

  function hidemenu() {
    hidestate(true);
    setactive1(false);
  }

  useEffect(() => {
    if (activesatu) {
      hidestate(false);
    }else{
      hidestate(true);
    }
  }, [activesatu]);

  return (
    <div
      className={clsx(
        "main flex flex-col gap-[1rem] h-screen items-center justify-start",
        dark ? "bg-black" : "bg-[#f3f3f3]"
      )}
    >
      <Navbar dark={dark} searchvar={searchvar} activesatu={activesatu} handleclick1={handleclick1} opensearch={opensearch} closesearch={closesearch} />
      <div
        className={clsx(
          "top text-red-500 w-full h-[10rem] flex items-center justify-center h-[2rem]",
          active ? "bg-blue-500" : "bg-gray-300"
        )}
      >
        atas
      </div>
      <div
        className={clsx(
          "mid text-blue-500 w-full h-[10rem] flex items-center justify-center h-[2rem]",
          active ? "bg-green-500" : "bg-gray-300"
        )}
      >
        tengah
      </div>
      <div
        className={clsx(
          "bot text-green-500 w-full h-[10rem] flex items-center justify-center h-[2rem]",
          active ? "bg-red-500" : "bg-gray-300"
        )}
      >
        bawah
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={clsx(
          "relative w-32 h-8 rounded-full transition-colors duration-300 cursor-pointer",
          enabled ? "bg-green-500" : "bg-gray-400"
        )}
      >
        <span
          className={clsx(
            "absolute top-1 left-1 w-10 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300",
            enabled ? "translate-x-20" : "translate-x-0"
          )}
        />
      </button>
      <DropdownNav
        dark={dark}
        hide={hide}
        hidemenu={hidemenu}
      />
    </div>
  );
}
