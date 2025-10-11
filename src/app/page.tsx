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

  const [scrollStage, setScrollStage] = useState(0);
  const [heroTranslate, setHeroTranslate] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Stage 0 → scroll pertama kali ke bawah, tahan scroll dan animasi
      if (scrollStage === 0) {
        e.preventDefault();
        e.stopPropagation();

        if (e.deltaY > 0 && !heroTranslate) {
          setHeroTranslate(true);
          setTimeout(() => {
            setScrollStage(1); // izinkan scroll normal
          }, 700);
        }
      }

      // Stage 1 → kalau scroll ke atas di posisi atas, reset
      else if (scrollStage === 1) {
        // Cek kalau user scroll ke atas
        if (e.deltaY < 0 && window.scrollY <= 10) {
          e.preventDefault();
          e.stopPropagation();

          // Kunci scroll dulu
          setScrollStage(0);
          setHeroTranslate(false);

          // Scroll kembali ke 0
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollStage, heroTranslate]);

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
    if (hide === false) {
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
    } else {
      hidestate(true);
    }
  }, [activesatu]);

  function useLockBodyScroll(lock: boolean) {
    useEffect(() => {
      if (lock) {
        const scrollY = window.scrollY;
        document.body.dataset.scrollY = scrollY.toString();
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
      } else {
        const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        delete document.body.dataset.scrollY;
        window.scrollTo(0, scrollY);
      }
    }, [lock]);
  }

  useLockBodyScroll(activesatu);

  return (
    <div
      className={clsx(
        "main flex flex-col gap-[1rem] h-full items-center justify-start",
        dark ? "bg-black" : "bg-[#f3f3f3]"
      )}
    >
      {activesatu && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 transition-all duration-300"
          onClick={hidemenu}
        />
      )}

      <Navbar
        dark={dark}
        searchvar={searchvar}
        activesatu={activesatu}
        handleclick1={handleclick1}
        opensearch={opensearch}
        closesearch={closesearch}
      />
      <div
        className={clsx(
          "relative w-screen h-screen flex flex-col items-center justify-center transition-transform duration-700 ease-in-out"
        )}
      >
        <Image
          src="/read.jpeg"
          alt="read"
          fill
          className="object-cover"
          priority
        />
        <div
          className={clsx(
            "absolute inset-0 backdrop-blur-sm mix-blend-multiply",
            !dark ? "bg-[#630081]/80" : "bg-[#997d00]/80"
          )}
        />
        <div className="absolute w-full flex items-center justify-center">
          <div
            className={clsx(
              "absolute text-center text-white transition-transform duration-700 ease-in-out",
              heroTranslate ? "-translate-y-[100vh]" : "translate-y-0"
            )}
          >
            <h1 className="text-5xl font-bold mb-4">Selamat Datang</h1>
            <p className="text-lg max-w-xl mx-auto">
              Jelajahi dunia penuh warna dan pengetahuan baru bersama kami.
            </p>
          </div>

          <div
            className={clsx(
              "absolute text-white h-[95vh] w-full px-[1rem] flex flex-row items-center justify-between transition-transform duration-700 ease-in-out",
              !heroTranslate ? "-translate-y-[100vh]" : "translate-y-0"
            )}
          >
            <div className="left flex flex-col justify-start items-start w-[100%]">
              <h1 className="text-5xl font-bold mb-4">Batuq</h1>
              <p className="text-lg w-[75%]">
                Batuq adalah platform e-learning Al-Qur’an yang dirancang untuk
                membantu setiap orang belajar membaca, memahami, dan mengamalkan
                Al-Qur’an secara lebih mudah dan interaktif. Dengan panduan
                digital dari pengajar berpengalaman, kamu bisa mempelajari
                tajwid, makhraj huruf, serta tafsir ayat dengan materi yang
                tersusun sistematis dan bisa diakses kapan saja, di mana saja.
              </p>
              <div className="buttons flex flex-row gap-[1rem] justify-start items-start">
                <button
                  className={clsx(
                    "border mt-[1rem] rounded-[10px] cursor-pointer px-4 py-2 transition-opacity duration-500 ease-in-out",
                    dark
                      ? "bg-black hover:bg-[#161616] text-[#ffd000] border-black"
                      : "bg-white hover:bg-[#c5c5c5] text-[#9b00ca] border-white"
                  )}
                >
                  Mulai Belajar
                </button>
                <button
                  className={clsx(
                    "border mt-[1rem] rounded-[10px] cursor-pointer px-4 py-2 transition-opacity duration-500 ease-in-out",
                    dark
                      ? "bg-black hover:bg-[#161616] text-[#ffd000] border-black"
                      : "bg-white hover:bg-[#c5c5c5] text-[#9b00ca] border-white"
                  )}
                >
                  Lanjut Belajar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <DropdownNav dark={dark} hide={hide} hidemenu={hidemenu} />
    </div>
  );
}
