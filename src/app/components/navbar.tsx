import clsx from "clsx";
import React, { useEffect, useState } from "react";

type NavbarProps = {
  dark: boolean;
  activesatu: boolean;
  searchvar: boolean;
  toggledropdown: () => void;
  opensearch: () => void;
  closesearch: () => void;
  scrollLearn: () => void;
  scrollHome: () => void;
  scrolltofaq: () => void;
  togglesignup: () => void;
  togglelogin: () => void;
};

export default function Navbar({
  dark,
  searchvar,
  activesatu,
  toggledropdown,
  scrollLearn,
  scrollHome,
  togglelogin,
  togglesignup,
  scrolltofaq,
}: NavbarProps) {
  let [scroll, setscroll] = useState(false);
  const [cursorTop, setCursorTop] = useState(false);
  const [delayedHide, setDelayedHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.style.position === "fixed") return;
      setscroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorTop(e.clientY < 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!cursorTop) {
      // kursor menjauh dari atas → mulai timer
      timer = setTimeout(() => setDelayedHide(true), 3000);
    } else {
      // kursor kembali ke atas → tampilkan lagi & hapus timer
      setDelayedHide(false);
    }

    return () => clearTimeout(timer);
  }, [cursorTop]);

  return (
    <div
      className={clsx(
        "navbar w-full bg-transparent shadow-none h-[4rem] mt-0 px-[1rem] py-[0.5rem] flex flex-row items-center fixed top-0 left-0 z-50 justify-between"
      )}
    >
      <div
        className={clsx(
          "left font-[600] haduh text-[1.5rem] transition-transform duration-500",
          dark ? "text-[#eec200]" : "text-[#9b00ca]",
          scroll ? "-translate-y-[60vh]" : "-translate-y-0"
        )}
      >
        <span className="text-[1.7rem]">ب</span>atuq
      </div>
      <div className="right flex justify-start items-center overflow-x-hidden">
        <div
          className={clsx(
            "container absolute top-2 right-0 transition-transform duration-500 rounded-l-full flex items-center justify-evenly gap-[0.5rem] px-2 w-[40rem] h-[3rem]",
            searchvar ? "-translate-y-[20rem]" : "-translate-y-0",
            dark ? "bg-black" : "bg-[#e6e6e6]",
            scroll
              ? dark
                ? !delayedHide
                  ? "-translate-y-0"
                  : "-translate-y-[60vh]"
                : !delayedHide
                ? "-translate-y-0"
                : "-translate-y-[60vh]"
              : "-translate-y-0"
          )}
        >
          <div
            className={clsx(
              "home rounded-full w-[10rem] h-[2rem] flex items-center justify-center cursor-pointer",
              dark
                ? "hover:bg-[#292929] text-white bg-black"
                : "bg-[#e6e6e6] text-black hover:bg-[#c5c5c5]"
            )}
            onClick={scrollHome}
          >
            Home
          </div>
          <div
            className={clsx(
              "learn rounded-full w-[10rem] h-[2rem] flex items-center justify-center cursor-pointer",
              dark
                ? "hover:bg-[#292929] text-white bg-black"
                : "bg-[#e6e6e6] text-black hover:bg-[#c5c5c5]"
            )}
            onClick={scrollLearn}
          >
            Learn
          </div>
          <div
            className={clsx(
              "FAQ rounded-full w-[10rem] h-[2rem] flex items-center justify-center cursor-pointer",
              dark
                ? "hover:bg-[#292929] text-white bg-black"
                : "bg-[#e6e6e6] text-black hover:bg-[#c5c5c5]"
            )}
            onClick={scrolltofaq}
          >
            FAQ
          </div>
          <button
            className={clsx(
              "dropdown rounded-full w-[10rem] h-[2rem] flex items-center justify-center cursor-pointer",
              activesatu && !dark && "bg-[#c5c5c5] text-black",
              !activesatu && dark && "bg-black hover:bg-[#292929] text-white",
              !activesatu &&
                !dark &&
                "bg-[#e6e6e6] hover:bg-[#c5c5c5] text-black",
              dark && activesatu && "bg-[#292929] text-white"
            )}
            onClick={toggledropdown}
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
          <div
            className={clsx(
              "Login rounded-full w-[20rem] h-[2rem] flex items-center text-black justify-center gap-[1rem] cursor-pointer",
              dark ? "bg-[#161616] text-white" : "bg-white text-black"
            )}
          >
            <a
              onClick={togglelogin}
              className={clsx(
                "transition-all duration-300 font-[500]",
                dark ? "hover:text-[#ffd000]" : "hover:text-[#9b00ca]"
              )}
            >
              Login
            </a>
            <div className="h-[1.5rem] border-l border-gray-400" />
            <a
              onClick={togglesignup}
              className={clsx(
                "transition-all duration-300 font-[500]",
                dark ? "hover:text-[#ffd000]" : "hover:text-[#9b00ca]"
              )}
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
