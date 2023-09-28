import React from "react";
import Typed from "react-typed";

function Terminal() {
  return (
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
  );
}

export default Terminal;
