import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="bg-darkness overflow-hidden ">
      <Nav />
      <hr className="mx-10 w-[95%] h-[0.5px] opacity-40 " />
      <Header />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
