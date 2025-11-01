"use client";

import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/components_dash/navbar";
import Searchbar from "../components/components_dash/searchbar";

export default function Home() {
  const [dark, setdark] = useState(false);
  const [isSearchHidden, hideSearch] = useState(true);
  const [isNotiHidden, hideNoti] = useState(true);
  const [isProfileHidden, hideProfile] = useState(true);
  const refnoti = useRef<HTMLDivElement>(null);
  const refnotibtn = useRef<HTMLButtonElement>(null);
  const refsearchbar = useRef<HTMLDivElement>(null);
  const refsearchbtn = useRef<HTMLButtonElement>(null);
  const refprofile = useRef<HTMLDivElement>(null);
  const refprofilebtn = useRef<HTMLButtonElement>(null);

  function hidesearchbar() {
    hideSearch(true);
  }

  useEffect(() => {
    const oustideclickhandler = (event: any) => {
      const target = event.target as Node;
      if (
        refsearchbar.current?.contains(target) ||
        refsearchbtn.current?.contains(target)
      ) {
        return;
      }
      hideSearch(true);
    };

    document.addEventListener("click", oustideclickhandler);
    return () => document.removeEventListener("click", oustideclickhandler);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        refnoti.current?.contains(target) ||
        refnotibtn.current?.contains(target)
      ) {
        return;
      }
      hideNoti(true);
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleclickoutsideforprofilebtn(event: MouseEvent) {
      const target = event.target as Node;
      if (
        refprofile.current?.contains(target) ||
        refprofilebtn.current?.contains(target)
      ) {
        return;
      }
      hideProfile(true);
    }
    document.addEventListener("click", handleclickoutsideforprofilebtn);
    return () =>
      document.removeEventListener("click", handleclickoutsideforprofilebtn);
  }, []);

  return (
    <div className="dash-main flex justify-start flex-row items-start bg-[#ebebeb] w-screen h-screen">
      <Searchbar
        dark={dark}
        refsearchbar={refsearchbar}
        hidesearch={hidesearchbar}
        ishidden={isSearchHidden}
      />
      <div className="left w-[13vw] w-max-[30%]">
        <Navbar dark={dark} />
      </div>
      <div className="right w-[87vw]">
        <div className="top flex flex-row justify-between items-center w-full px-[1rem] py-[0.5rem]">
          <div className="left flex flex-row justify-start items-center gap-2">
            <div className="level rounded-full p-[0.1rem] h-8 w-8 flex justify-center items-center text-gray-600 font-bold border border-[#9b00ca]">
              17
            </div>
            <div className="deets flex flex-col justify-start items-start gap-1">
              <small className="teks font-bold text-[#9b00ca] text-xs">
                Beginner
              </small>
              <div className="progressbar-container w-[10rem] bg-[#c5c5c5] rounded-[10px] h-[0.5rem] h-max-[0.5rem]">
                <div className="progress w-[60%] bg-[#9b00ca] text-[#9b00ca] rounded-[10px] h-[0.5rem] h-max-[0.5rem] text-[1px] ">
                  w
                </div>
              </div>
              <small className="teks font-medium text-gray-600 text-xs">
                958 XP until level 18
              </small>
            </div>
          </div>
          <div className="right flex flex-row justify-evenly items-center gap-3">
            <button
              ref={refsearchbtn}
              onClick={() => hideSearch(false)}
              className={clsx(
                "searchbtn rounded-full p-[0.3rem] flex items-center text-base justify-center cursor-pointer transition-transform duration-500",
                dark
                  ? "bg-[#ffd000] text-black hover:text-[#ffd000] hover:bg-[#161616]"
                  : "bg-[#9b00ca] text-white hover:text-[#9b00ca] hover:bg-[#ddddddff]",
                isSearchHidden ? "translate-y-0" : "translate-y-[-20vh]"
              )}
            >
              <span className="material-symbols-outlined">search</span>
            </button>
            <div className="noti relative flex flex-col justify-start items-center gap-3">
              <button
                ref={refnotibtn}
                onClick={() => hideNoti(!isNotiHidden)}
                className={clsx(
                  "notibtn rounded-full p-[0.3rem] flex items-center text-base justify-center cursor-pointer",
                  isNotiHidden
                    ? dark
                      ? "text-black bg-[#ffd000] hover:text-[#ffd000] hover:bg-[#161616]"
                      : "text-white bg-[#9b00ca] hover:text-[#9b00ca] hover:bg-[#ddddddff]"
                    : dark
                    ? "text-[#ffd000] bg-[#161616]"
                    : "text-[#9b00ca] bg-[#ddddddff]"
                )}
              >
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div
                ref={refnoti}
                onClick={(e) => e.stopPropagation()}
                className={clsx(
                  "notifications-island flex flex-col justify-start items-center absolute top-10 bg-[#ddddddff] w-70 h-65 z-11 shadow-lg rounded-[10px] border border-[#c5c5c5] transition-all duration-500",
                  isNotiHidden ? "opacity-0" : "opacity-100"
                )}
              >
                <div
                  className={clsx(
                    "top flex justify-start w-full h-fit items-start text-sm font-bold p-3",
                    dark ? "text-[#eec200]" : "text-[#9b00ca]",
                    isNotiHidden ? "cursor-default" : ""
                  )}
                >
                  Notifications
                </div>
                <div
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  className="notification-contents flex flex-col justify-start items-center w-full h-[80%] overflow-scroll scrollbar-none gap-2 mb-2"
                >
                  <style jsx>{`
                    .notification-contents::-webkit-scrollbar {
                      display: none; /* Chrome, Safari, Edge */
                    }
                  `}</style>

                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className={clsx(
                        "flex flex-col justify-start items-start",
                        isNotiHidden ? "cursor-default" : ""
                      )}
                    >
                      <div className={clsx("container hover:bg-[#c5c5c5] flex flex-row items-center justify-between w-full h-fit py-3 px-4",
                        isNotiHidden ? "cursor-default" : "cursor-pointer"
                      )}>
                        <div className="left flex flex-row justify-start items-center gap-2">
                          <div className="notitype bg-[#9b00ca] rounded-full h-8 w-8 flex justify-center items-center">
                            <FontAwesomeIcon icon={faComments} size="sm" />
                          </div>
                          <div className="mid flex text-gray-800 font-regular text-[10px] justify-start items-center w-[70%]">
                            You've got a new reply in the disscussions forum!
                          </div>
                        </div>

                        <div className="right w-[1rem] text-gray-800 font-regular text-[10px]">
                          12s
                        </div>
                      </div>

                      <div className="w-[90%] mt-[0.5rem] mx-auto border-b border-gray-400"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 left-4 h-3 w-3 p-2 text-[13px] rounded-full bg-red-700 cursor-default flex justify-center items-center">
                3
              </div>
            </div>

            <div className="profilecontainer relative flex flex-col justify-start items-center gap-3">
              <button
                ref={refprofilebtn}
                onClick={() => hideProfile(!isProfileHidden)}
                className="profile shadow-sm border border-[#c5c5c5] flex flex-row justify-start items-center gap-2 cursor-pointer bg-[#ddddddff] py-1 px-2 rounded-[10px] duration-300 transition-all "
              >
                <div className="image flex justify-center items-center rounded-full h-8 w-8 font-bold p-[1.1rem] bg-[#ddddddff] text-gray-500 border border-[#9b00ca]">
                  RP
                </div>
                <div className="details flex flex-col justify-start items-start text-gray-600 text-xs">
                  <div className="name flex-row justify-start items-start gap-3">
                    Rafi Pasya
                  </div>
                  <div className="nantola text-[#9b00ca] text-[10px]">
                    Student
                  </div>
                </div>
                <div className="button text-[10px] text-gray-800">
                  <span className="material-symbols-outlined">
                    stat_minus_1
                  </span>
                </div>
              </button>
              <div
                ref={refprofile}
                onClick={(e) => e.stopPropagation()}
                className={clsx(
                  "profile-island flex flex-col justify-start items-center absolute top-12 bg-[#ddddddff] w-35 h-fit z-11 shadow-lg rounded-[10px] border border-[#c5c5c5] transition-all duration-500",
                  isProfileHidden ? "opacity-0" : "opacity-100"
                )}
              >
                <ul className="flex flex-col justify-start items-center gap-3 w-full h-full">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <li
                      key={i}
                      className="h-full w-full text-[#9b00ca] hover:bg-[#c5c5c5] first:rounded-t-[10px] last:rounded-b-[10px] text-sm"
                    >
                      <button
                        className={clsx(
                          "h-full py-2 w-full",
                          isProfileHidden ? "cursor-default" : "cursor-pointer"
                        )}
                      >
                        waduh
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mid flex flex-col justify-start items-start gap-3">
          w
        </div>
      </div>
    </div>
  );
}
