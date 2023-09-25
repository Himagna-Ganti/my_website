import React from "react";
import Terminal from "./Terminal";

function Header() {
  return (
    <section className="m-10 flex">
      <div className="flex flex-col w-[50%] h-[500px] px-2 border-white border-2  items-center justify-center  ">
        {/* Hero section */}
        <h3 className="text-lg text-code">Hi all. My name is,</h3>
        <h1 className="text-7xl text-rose-500">Himagna Ganti</h1>
        <br></br>
        <h2 className="text-2xl text-slate-50  text-justify">
          I love building things just like I do it with lego. I’m a creative,
          driven, and curious person who loves to play with technology and has a
          passion for software engineering to build meaningful user experiences.
        </h2>
      </div>
      <Terminal />
    </section>
  );
}

export default Header;
