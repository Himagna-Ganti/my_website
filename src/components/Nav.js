import React from "react";
import propic from "../assets/100x100.jpg";
function Nav() {
  return (
    <nav className="flex justify-between py-5 px-12 w-screen  ">
      <div className=" mt-5 space-x-10 h-[70px] w-[400px] flex ">
        <div className=" relative -top-5">
          {/* Image */}
          <img
            src={propic}
            alt="propic"
            className="w-[100%] h-[100%] rounded-full"
          />
        </div>
        <div className="text-code text-lg">
          {/* Name */}
          Ganti, Himagna
        </div>
      </div>

      <div className="mt-5">
        <ul className="flex justify-around text-slate-50 text-lg space-x-10  ">
          <li className="hover:text-buttons  duration-300 ">About Me</li>
          <li className="hover:text-buttons duration-300">Skills</li>
          <li className="hover:text-buttons duration-300"> Experience</li>
          <div className="relative group ">
            <div className="absolute -inset-0.5  bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg blur-sm opacity-50 group-hover:opacity-80 transition duration-1000 group-hover:duration-300"></div>
            <li className="relative">
              <a
                href="github.com"
                className="block font-semibold text-lg no-underline px-2  tracking-tighter bg-buttons shadow-xl text-slate-50 rounded-lg"
              >
                Resume
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
