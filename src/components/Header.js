import React from "react";
import Typed from "react-typed";

function Header() {
  return (
    <section className="m-10 flex">
      <div className="flex flex-col w-[50%] h-[500px] px-2 border-white border-2  items-center justify-center  ">
        {/* Hero section */}
        <h3 className="text-lg text-code">Hi all. My name is,</h3>
        <h1 className="text-7xl text-slate-500">Himagna Ganti</h1>
        <br></br>
        <h2 className="text-2xl text-slate-50  text-justify">
          I love building things just like I do it with lego. I’m a creative,
          driven, and curious person who loves to play with technology and has a
          passion for software engineering to build meaningful user experiences.
        </h2>
      </div>
      <div className="w-[51%] h-[500px] flex flex-row  border-white border-2 items-center justify-center">
        <div className="w-[90%] h-[450px] drop-shadow-lg border-[1px] border-gray-500 bg-zinc-900 rounded-lg flex flex-col ">
          <div className="w-[100%] h-[20px]  bg-neutral-700 rounded-t-md  flex justify-center items-center">
            <div className="text-stone-300 text-xs font-bold ">
              portfolio@devserver: ~
            </div>
          </div>
          <div className="px-1 pt-1 text-green-500 text-sm font-monaco">
            <Typed
              strings={["portfolio@devserver:~$"]}
              showCursor={false}
              typeSpeed={20}
            />
            &nbsp;
            <Typed
              className="text-slate-100"
              strings={["whoami"]}
              startDelay={1700}
              showCursor={false}
              typeSpeed={20}
            />
            <br />
            <Typed
              className="text-slate-100"
              strings={["himagna"]}
              typeSpeed={20}
              startDelay={3000}
              showCursor={false}
            />
            <br />
            <Typed
              strings={["portfolio@devserver:~$"]}
              startDelay={4700}
              showCursor={false}
              typeSpeed={20}
            />
            &nbsp;
            <Typed
              className="text-slate-100"
              strings={["cat ~/about_me/Bio.txt"]}
              startDelay={6400}
              showCursor={false}
              typeSpeed={20}
            />
            <br />
            <Typed
              className="text-slate-100"
              strings={[
                "I grew up in a small city called Vizag on the southern coast of India. ",
              ]}
              startDelay={9000}
              showCursor={false}
              typeSpeed={20}
            />
            <br />
            <Typed
              className="text-slate-100"
              strings={[
                "Now, I am pursuing a Master's in Electrical and Computer Engineering from the University of Ottawa. I have a Bachelor's in Instrumentation from India, where I developed an enthusiasm for software engineering.",
              ]}
              startDelay={12800}
              showCursor={false}
              typeSpeed={20}
            />
            <br />
            <Typed
              strings={["portfolio@devserver:~$"]}
              startDelay={25000}
              showCursor={false}
              typeSpeed={20}
            />
            &nbsp;
            <Typed
              className="text-slate-100"
              strings={["cat ~/about_me/Tidbits.txt"]}
              startDelay={28000}
              showCursor={false}
              typeSpeed={20}
            />
            <br />
            <Typed
              className="text-slate-100"
              strings={[
                "-> I am a National level Table Tennis player back in India.",
              ]}
              startDelay={30000}
              showCursor={false}
              typeSpeed={20}
            />
            <br />
            <Typed
              className="text-slate-100"
              strings={["-> C is the first programming language I learned."]}
              startDelay={34000}
              showCursor={false}
              typeSpeed={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
