import React from "react";
import gh from "../assets/gh.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <div className="h-[120px] flex flex-col justify-center  mt-[30px] bg-card">
      <div className=" text-white text-lg h-[80px]  mx-[50px] flex items-center justify-between ">
        <div className="w-[300px] mx-[10px] h-[100px]  flex items-center  ">
          <span className="text-rose-700 text-[20px]">
            &copy; Himagna Ganti
          </span>
        </div>
        <div className="w-[300px] mx-[10px] h-[100px]  flex items-center justify-end  space-x-6">
          <div className="h-[37px] w-[37px]">
            <a
              target="_blank"
              href="https://github.com/Himagna-Ganti"
              rel="noreferrer"
              className="pt-[5px]"
            >
              <img src={gh} alt="" />
            </a>
          </div>
          <div className="h-[45px] w-[45px]">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/himagna-ganti-500b0b235/"
              rel="noreferrer"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-rose-700 text-md flex justify-center mb-[20px]">
        <span>
          All trademarks belong to the respective owners. Icons provided by
          <span>&#160;</span>
          <a
            href="https://www.svgrepo.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            svgrepo
          </a>
        </span>
      </div>
    </div>
  );
}
export default Footer;
