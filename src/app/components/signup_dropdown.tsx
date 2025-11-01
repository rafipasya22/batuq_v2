import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

type signupdropdownProps = {
  dark: boolean;
  hidesignup: boolean;
  togglelogin: () => void;
};

export default function signupdropdown({
  dark,
  hidesignup,
  togglelogin,
}: signupdropdownProps) {
  return (
    <div
      className={clsx(
        "container fixed left-1/2 top-1/2 -translate-x-1/2 transition-transform duration-500 z-40 h-fit h-max-[60vh] w-[50vw] rounded-[10px] flex flex-col justify-start items-center px-[1rem] py-[2rem]",
        dark ? "bg-black text-white" : "bg-white text-black",
        hidesignup ? "-translate-y-[150vh]" : "-translate-y-1/2 "
      )}
    >
      <div className="top w-full h-fit flex flex-row justify-between items-start pb-[0.5rem]">
        <div className="title text-quicksand text-black">
          <h1
            className={clsx(
              "font-[600] text-[20px]",
              dark ? "text-white" : "text-black"
            )}
          >
            Sign Up
          </h1>
          <small
            className={clsx(
              "text-sm",
              dark ? "text-gray-400" : "text-gray-600"
            )}
          >
            Welcome, sign up to start your journey in learning the Quran
          </small>
        </div>
      </div>
      <div className="cred h-full w-full flex flex-col justify-start items-start mt-[0.5rem] mb-[2rem] gap-3">
        <div className="name flex flex-row justify-evenly items-center w-full gap-3 grid-col-2">
          <div className="FirstName flex flex-col justify-start items-start w-[40%] gap-[0.2rem]">
            <div
              className={clsx(
                "text-xs font-medium",
                dark ? "text-[#eec200]" : "text-[#9b00ca]"
              )}
            >
              First Name
            </div>
            <input
              placeholder="Enter your first name here......"
              className={clsx(
                "rounded-[10px] h-[2rem] w-full p-[0.5rem] text-xs outline-none focus:outline-none focus:ring-0",
                dark ? "bg-[#262626]" : "bg-[#c5c5c5]"
              )}
              type="text"
            />
          </div>
          <div className="LastName flex flex-col justify-start items-start w-[60%] gap-[0.2rem]">
            <div
              className={clsx(
                "text-xs font-medium",
                dark ? "text-[#eec200]" : "text-[#9b00ca]"
              )}
            >
              Last Name
            </div>
            <input
              placeholder="Enter your last name here......"
              className={clsx(
                "rounded-[10px] h-[2rem] w-[90%] p-[0.5rem] text-xs outline-none focus:outline-none focus:ring-0",
                dark ? "bg-[#262626]" : "bg-[#c5c5c5]"
              )}
              type="text"
            />
          </div>
        </div>
        <div className="email flex flex-col justify-start items-start w-full gap-[0.2rem]">
          <div
            className={clsx(
              "text-xs font-medium",
              dark ? "text-[#eec200]" : "text-[#9b00ca]"
            )}
          >
            Email Address
          </div>
          <input
            placeholder="Enter your email here......"
            className={clsx(
              "rounded-[10px] h-[2rem] w-[90%] p-[0.5rem] text-xs outline-none focus:outline-none focus:ring-0",
              dark ? "bg-[#262626]" : "bg-[#c5c5c5]"
            )}
            type="text"
          />
        </div>
        <div className="pass-container flex flex-row justify-start items-center w-full gap-3">
          <div className="pass flex flex-col justify-start items-start w-fit gap-[0.2rem]">
            <div
              className={clsx(
                "text-xs font-medium",
                dark ? "text-[#eec200]" : "text-[#9b00ca]"
              )}
            >
              Password
            </div>
            <input
              placeholder="Enter password here......"
              className={clsx(
                "rounded-[10px] h-[2rem] w-[12rem] p-[0.5rem] text-xs outline-none focus:outline-none focus:ring-0",
                dark ? "bg-[#262626]" : "bg-[#c5c5c5]"
              )}
              type="password"
            />
          </div>
          <div className="confpass flex flex-col justify-start items-start w-fit gap-[0.2rem]">
            <div
              className={clsx(
                "text-xs font-medium",
                dark ? "text-[#eec200]" : "text-[#9b00ca]"
              )}
            >
              Confirm Password
            </div>
            <input
              placeholder="Re-enter password here......"
              className={clsx(
                "rounded-[10px] h-[2rem] w-[12rem] p-[0.5rem] text-xs outline-none focus:outline-none focus:ring-0",
                dark ? "bg-[#262626]" : "bg-[#c5c5c5]"
              )}
              type="password"
            />
          </div>
        </div>
      </div>
      <div className="misc flex flex-row w-full justify-between items-start mt-[1.5rem] grid-2">
        <div className="otherway flex flex-col justify-start items-start gap-2">
          <small
            className={clsx(
              "text-xs",
              dark ? "text-gray-400" : "text-gray-600"
            )}
          >
            Or sign up with these account instead:
          </small>
          <div
            className={clsx(
              "hohou flex flex-row gap-3 justify-start items-start"
            )}
          >
            <button
              className={clsx(
                "rounded-full p-[0.1rem] cursor-pointer",
                dark
                  ? "bg-[#eec200] text-black hover:bg-[#997d00]"
                  : "bg-[#9b00ca] text-white hover:bg-[#630081]"
              )}
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </button>
            <button
              className={clsx(
                "rounded-full p-[0.1rem] cursor-pointer",
                dark
                  ? "bg-[#eec200] text-black hover:bg-[#997d00]"
                  : "bg-[#9b00ca] text-white hover:bg-[#630081]"
              )}
            >
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </button>
          </div>
        </div>
        <div className="signinbutton flex flex-col justify-start items-end gap-3">
          <button
            onClick={togglelogin}
            className={clsx(
              "hover:underline font-bold text-xs cursor-pointer",
              dark
                ? "text-[#eec200] hover:text-[#997d00]"
                : "text-[#9b00ca] hover:text-[#630081]"
            )}
          >
            Already have an Account? Sign in!
          </button>
          <button
            className={clsx(
              "font-bold text-xs cursor-pointer rounded-[10px] p-[0.5rem] h-fit w-[8rem]",
              dark
                ? "bg-[#eec200] hover:bg-[#997d00] text-black"
                : "bg-[#9b00ca] hover:bg-[#630081] text-white"
            )}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
