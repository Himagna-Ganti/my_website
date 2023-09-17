import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-darkness overflow-hidden ">
      <Nav />
      <hr className="mx-10 w-[94.5%] h-[0.5px] opacity-40 " />
      <Header />
    </div>
  );
}

export default App;
