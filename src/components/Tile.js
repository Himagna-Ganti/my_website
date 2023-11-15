import React from "react";

function Tile(props) {
  if (props.learning === "1") {
    console.log(props.learning);
    return (
      <>
        <div className=" bg-code border-2 border-code max-w-max h-[40px] rounded-lg flex items-center justify-center">
          <h1 className="text-white font-bold text-xl px-[5px]">
            {props.data}
          </h1>
        </div>
      </>
    );
  } else {
    console.log(props.learning);
    console.log(typeof props.learning);
    return (
      <>
        <div className=" bg-transparent border-2  hover:animate-bounce   border-white max-w-max h-[40px] rounded-lg flex items-center justify-center">
          <h1 className="text-white text-xl font-bold px-[5px]">
            {props.data}
          </h1>
        </div>
      </>
    );
  }
}

export default Tile;
