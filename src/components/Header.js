import React from "react";
import Terminal from "./Terminal";
import gh from "../assets/gh.svg";
import linkedin from "../assets/linkedin.svg";

function Header() {
  return (
    <section className="m-10 flex">
      <div className="flex flex-col w-[50%] h-[500px] px-2 border-white border-2  items-center justify-center  ">
        {/* Hero section */}
        <h3 className="text-lg text-code">Hi all. My name is,</h3>
        <h1 className="text-7xl text-rose-700">Himagna Ganti</h1>
        <br></br>
        <h2 className="text-2xl text-slate-50  text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolore veniam! Exercitationem dicta molestias nostrum alias aut,
          cupiditate aspernatur veniam dignissimos facere vel culpa optio, nisi
          repellat, neque illum voluptate!
        </h2>
        <div className="flex flex-row mt-[50px]  space-x-[20px]">
          <a
            target="_blank"
            href="https://github.com/Himagna-Ganti"
            rel="noreferrer"
            className="pt-[5px]"
          >
            <img src={gh} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/himagna-ganti-500b0b235/"
            rel="noreferrer"
          >
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
      <Terminal />
    </section>
  );
}

export default Header;
