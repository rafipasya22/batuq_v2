"use client";

import Navbar from "./components/navbar";
import DropdownNav from "./components/dropdown_nav";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
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
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

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
        dark ? "bg-[#161616]" : "bg-[#f3f3f3]"
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
          className={clsx(
            "object-cover transition-all duration-700 ease-in-out",
            scrollStage === 1 && "rounded-b-[20px]"
          )}
          priority
        />
        <div
          className={clsx(
            "absolute inset-0 backdrop-blur-0 mix-blend-multiply rounded-b-[20px] transition-all duration-100 ease-in-out",
            !dark ? "bg-[#a855c2]/70" : "bg-[#c99e28]/70",
            scrollStage === 1 && "rounded-b-[20px] backdrop-blur-sm"
          )}
        />
        <div
          className={clsx(
            "absolute w-full transition-all duration-700 ease-in-out flex items-center rounded-[20px] justify-center",
            scrollStage === 1 && "rounded-b-[20px]"
          )}
        >
          <div
            className={clsx(
              "flex flex-col justify-center items-center text-center text-white transition-transform duration-700 ease-in-out",
              heroTranslate ? "-translate-y-[100vh]" : "translate-y-0"
            )}
          >
            <h1 className="text-5xl font-bold mb-4">
              Change How You Learn Qur'an
            </h1>
            <p className="text-lg max-w-xl mx-auto">
              Learn to read and understand the Qur'an with interactive lessons
              and expert guidance from anywhere, anytime.
            </p>
            <button
              className={clsx(
                "border mt-[1rem] rounded-[10px] cursor-pointer flex flex-row justify-evenly items-center px-4 py-2 transition-opacity duration-500 ease-in-out",
                dark
                  ? "bg-black hover:bg-[#292929] text-[#ffd000] border-black"
                  : "bg-white hover:bg-[#c5c5c5] text-[#9b00ca] border-white"
              )}
            >
              Get Started
              <span className="material-symbols-outlined rotate-45 ms-2">
                arrow_upward
              </span>
            </button>
          </div>

          <div
            className={clsx(
              "absolute text-white h-[95vh] w-full px-[1rem] flex flex-row items-center justify-between transition-transform duration-700 ease-in-out",
              !heroTranslate ? "-translate-y-[100vh]" : "translate-y-0"
            )}
          >
            <div className="left flex flex-col justify-start items-start w-[100%]">
              <h1 className="text-5xl font-bold mb-4">Why Choose Us?</h1>
              <p className="text-lg w-[75%]">
                At Batuq, we believe learning the Qur’an should be as inspiring
                as it is accessible. Our platform combines trusted teaching
                methods with modern technology to guide you step by step —
                whether you’re learning to recite, understand, or live by the
                Qur’an. Each lesson is designed by qualified instructors,
                enriched with interactive tools, personalized progress tracking,
                and engaging visual feedback to make your learning journey
                meaningful and effective. With flexible learning schedules and a
                supportive online community, Batuq empowers you to connect
                deeply with the Qur’an — anytime, anywhere.
              </p>
            </div>
          </div>

          <div
            className={clsx(
              "w absolute top-[45vh] transition-all duration-700 ease-in-out flex flex-col justify-center items-center text-center gap-[1rem]",
              !heroTranslate ? "translate-y-[100vh]" : "translate-x-0"
            )}
          >
            <h1 className="text-3xl font-bold mb-4">What Makes Us Different</h1>
            <div
              data-aos="fade-up"
              className="1st_row containers flex flex-row justify-evenly items-center gap-[5rem]"
            >
              <div
                className={clsx(
                  "container flex flex-col justify-center items-center rounded-[20px] h-[30vh] w-[25vw] p-[1rem]",
                  dark
                    ? "bg-[#eec200] text-[#161616]"
                    : "bg-[#9b00ca] text-white"
                )}
              >
                <div className="title">w</div>
                <div className="mid">jjj</div>
              </div>
              <div
                className={clsx(
                  "container flex flex-col justify-center items-center rounded-[20px] h-[30vh] w-[25vw] p-[1rem]",
                  dark
                    ? "bg-[#eec200] text-[#161616]"
                    : "bg-[#9b00ca] text-white"
                )}
              >
                <div className="title">w</div>
                <div className="mid">jjj</div>
              </div>
              <div
                className={clsx(
                  "container flex flex-col justify-center items-center rounded-[20px] h-[30vh] w-[25vw] p-[1rem]",
                  dark
                    ? "bg-[#eec200] text-[#161616]"
                    : "bg-[#9b00ca] text-white"
                )}
              >
                <div className="title">w</div>
                <div className="mid">jjj</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "learn flex flex-row justify-evenly items-start text-red-500 w-full px-[3rem] h-[80vh] mt-[35vh]",
          dark ? "bg-[#161616]" : "bg-white"
        )}
      >
        <div
          data-aos="fade-right"
          className="left w-[65%] flex flex-col justify-center items-center"
        >
          <h1
            className={clsx(
              "text-4xl font-bold mb-4",
              dark ? "text-white" : "text-black"
            )}
          >
            Learn at Your Own Pace
          </h1>
          <p
            className={clsx(
              "text-lg w-[85%] mb-[2rem]",
              dark ? "text-[#e0e0e0]" : "text-[#161616]"
            )}
          >
            Our platform is designed to fit your schedule. Whether you have a
            few minutes or a few hours, you can learn at your own pace with our
            flexible lessons and resources such as:
          </p>
          <div className="materials flex flex-col justify-start items-center gap-[1rem]">
            <div className="containers">
              <div className="row-1 flex-row flex justify-evenly items-center gap-[0.5rem]">
                <div
                  className={clsx(
                    "container group cursor-pointer border rounded-[20px] border-[#454545] h-[15vh] w-[15rem] transition-all duration-700 ease p-[1rem] flex flex-col justify-start items-start",
                    dark ? "hover:border-[#eec200]" : "hover:border-[#9b00ca]"
                  )}
                >
                  <div
                    className={clsx("top flex flex-row justify-between w-full")}
                  >
                    <div
                      className={clsx(
                        "title text-xl font-bold",
                        dark ? "text-[#eec200]" : "text-[#9b00ca]"
                      )}
                    >
                      Tajwid
                    </div>
                    <span
                      className={clsx(
                        "material-symbols-outlined transition-all duration-700 ease rotate-45 ms-2",
                        dark
                          ? "text-white group-hover:text-[#eec200]"
                          : "text-black group-hover:text-[#9b00ca]"
                      )}
                    >
                      arrow_upward
                    </span>
                  </div>

                  <div
                    className={clsx(
                      "desc w-full line-clamp-2 hover:underline",
                      dark ? "text-white" : "text-black"
                    )}
                  >
                    Tajwid is a coawiknma acpwomapwomc aapwcomawpcomawcp
                    cwpaomcawpawcoiawhjcoiawcnoiawcnmoiawnoiacnioa
                    aowcnaowicnoaw
                  </div>
                </div>
                <div
                  className={clsx(
                    "container group cursor-pointer border rounded-[20px] border-[#454545] h-[15vh] w-[15rem] transition-all duration-700 ease p-[1rem] flex flex-col justify-start items-start",
                    dark ? "hover:border-[#eec200]" : "hover:border-[#9b00ca]"
                  )}
                >
                  <div
                    className={clsx("top flex flex-row justify-between w-full")}
                  >
                    <div
                      className={clsx(
                        "title text-xl font-bold",
                        dark ? "text-[#eec200]" : "text-[#9b00ca]"
                      )}
                    >
                      Tajwid
                    </div>
                    <span
                      className={clsx(
                        "material-symbols-outlined transition-all duration-700 ease rotate-45 ms-2",
                        dark
                          ? "text-white group-hover:text-[#eec200]"
                          : "text-black group-hover:text-[#9b00ca]"
                      )}
                    >
                      arrow_upward
                    </span>
                  </div>

                  <div
                    className={clsx(
                      "desc w-full line-clamp-2 hover:underline",
                      dark ? "text-white" : "text-black"
                    )}
                  >
                    Tajwid is a coawiknma acpwomapwomc aapwcomawpcomawcp
                    cwpaomcawpawcoiawhjcoiawcnoiawcnmoiawnoiacnioa
                    aowcnaowicnoaw
                  </div>
                </div>
              </div>
              <div className="row-2 flex-row mt-[2rem] flex justify-evenly items-center gap-[0.5rem]">
                <div
                  className={clsx(
                    "container group cursor-pointer border rounded-[20px] border-[#454545] h-[15vh] w-[15rem] transition-all duration-700 ease p-[1rem] flex flex-col justify-start items-start",
                    dark ? "hover:border-[#eec200]" : "hover:border-[#9b00ca]"
                  )}
                >
                  <div
                    className={clsx("top flex flex-row justify-between w-full")}
                  >
                    <div
                      className={clsx(
                        "title text-xl font-bold",
                        dark ? "text-[#eec200]" : "text-[#9b00ca]"
                      )}
                    >
                      Tajwid
                    </div>
                    <span
                      className={clsx(
                        "material-symbols-outlined transition-all duration-700 ease rotate-45 ms-2",
                        dark
                          ? "text-white group-hover:text-[#eec200]"
                          : "text-black group-hover:text-[#9b00ca]"
                      )}
                    >
                      arrow_upward
                    </span>
                  </div>

                  <div
                    className={clsx(
                      "desc w-full line-clamp-2 hover:underline",
                      dark ? "text-white" : "text-black"
                    )}
                  >
                    Tajwid is a coawiknma acpwomapwomc aapwcomawpcomawcp
                    cwpaomcawpawcoiawhjcoiawcnoiawcnmoiawnoiacnioa
                    aowcnaowicnoaw
                  </div>
                </div>
                <div
                  className={clsx(
                    "container group cursor-pointer border rounded-[20px] border-[#454545] h-[15vh] w-[15rem] transition-all duration-700 ease p-[1rem] flex flex-col justify-start items-start",
                    dark ? "hover:border-[#eec200]" : "hover:border-[#9b00ca]"
                  )}
                >
                  <div
                    className={clsx("top flex flex-row justify-between w-full")}
                  >
                    <div
                      className={clsx(
                        "title text-xl font-bold",
                        dark ? "text-[#eec200]" : "text-[#9b00ca]"
                      )}
                    >
                      Tajwid
                    </div>
                    <span
                      className={clsx(
                        "material-symbols-outlined transition-all duration-700 ease rotate-45 ms-2",
                        dark
                          ? "text-white group-hover:text-[#eec200]"
                          : "text-black group-hover:text-[#9b00ca]"
                      )}
                    >
                      arrow_upward
                    </span>
                  </div>

                  <div
                    className={clsx(
                      "desc w-full line-clamp-2 hover:underline",
                      dark ? "text-white" : "text-black"
                    )}
                  >
                    Tajwid is a coawiknma acpwomapwomc aapwcomawpcomawcp
                    cwpaomcawpawcoiawhjcoiawcnoiawcnmoiawnoiacnioa
                    aowcnaowicnoaw
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="right w-[35%]">
          <div
            className={clsx(
              "w-[300px] h-[500px] rounded-[20px] flex flex-col justify-center items-center",
              dark ? "bg-[#eec200]" : "bg-[#9b00ca]"
            )}
          >
            <Image
              src="/test-nobg.png"
              alt="learn"
              width={300}
              height={500}
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "discuss flex flex-row justify-evenly items-start text-red-500 w-full px-[3rem] h-[80vh] mt-[0.5rem]",
          dark ? "bg-[#161616]" : "bg-white"
        )}
      >
        <div
          data-aos="fade-up"
          className="text-center w-full flex flex-col justify-center items-center"
        >
          <h1
            className={clsx(
              "text-4xl font-bold mb-4",
              dark ? "text-white" : "text-black"
            )}
          >
            Discuss with Experts and Peers
          </h1>
          <p
            className={clsx(
              "text-lg w-[85%] mb-[2rem]",
              dark ? "text-[#e0e0e0]" : "text-[#161616]"
            )}
          >
            Learning is more effective when you can share ideas and get
            feedback. Our community features discussion
            forums, and group projects to help you connect with others and
            deepen your understanding of the Qur'an. Frequently asked
            questions include:
          </p>
          <div className="materials flex flex-col justify-start items-center gap-[1rem]">
            <div className="containers">
              <div className="row-1 flex-col flex justify-evenly items-center gap-[0.5rem]">
                <div
                  className={clsx(
                    "container group cursor-pointer border rounded-[20px] border-[#454545] h-[15vh] w-[70vw] transition-all duration-700 ease p-[1rem] flex flex-col justify-start items-start",
                    dark ? "hover:border-[#eec200]" : "hover:border-[#9b00ca]"
                  )}
                >
                  <div
                    className={clsx("top flex flex-row justify-between w-full")}
                  >
                    <div
                      className={clsx(
                        "title text-xl font-bold",
                        dark ? "text-[#eec200]" : "text-[#9b00ca]"
                      )}
                    >
                      Tajwid
                    </div>
                    <span
                      className={clsx(
                        "material-symbols-outlined transition-all duration-700 ease rotate-45 ms-2",
                        dark
                          ? "text-white group-hover:text-[#eec200]"
                          : "text-black group-hover:text-[#9b00ca]"
                      )}
                    >
                      arrow_upward
                    </span>
                  </div>

                  <div
                    className={clsx(
                      "desc w-full text-start line-clamp-2 hover:underline",
                      dark ? "text-white" : "text-black"
                    )}
                  >
                    Tajwid is a coawiknma acpwomapwomc aapwcomawpcomawcp
                    cwpaomcawpawcoiawhjcoiawcnoiawcnmoiawnoiacnioa
                    aowcnaowicnoaw
                  </div>
                </div>
                <div
                  className={clsx(
                    "container group cursor-pointer border rounded-[20px] border-[#454545] h-[15vh] w-[70vw] transition-all duration-700 ease p-[1rem] flex flex-col justify-start items-start",
                    dark ? "hover:border-[#eec200]" : "hover:border-[#9b00ca]"
                  )}
                >
                  <div
                    className={clsx("top flex flex-row justify-between w-full")}
                  >
                    <div
                      className={clsx(
                        "title text-xl font-bold",
                        dark ? "text-[#eec200]" : "text-[#9b00ca]"
                      )}
                    >
                      Tajwid
                    </div>
                    <span
                      className={clsx(
                        "material-symbols-outlined transition-all duration-700 ease rotate-45 ms-2",
                        dark
                          ? "text-white group-hover:text-[#eec200]"
                          : "text-black group-hover:text-[#9b00ca]"
                      )}
                    >
                      arrow_upward
                    </span>
                  </div>

                  <div
                    className={clsx(
                      "desc w-full text-start line-clamp-2 hover:underline",
                      dark ? "text-white" : "text-black"
                    )}
                  >
                    Tajwid is a coawiknma acpwomapwomc aapwcomawpcomawcp
                    cwpaomcawpawcoiawhjcoiawcnoiawcnmoiawnoiacnioa
                    aowcnaowicnoaw
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
