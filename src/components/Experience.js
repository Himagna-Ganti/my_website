import React from "react";

const workEx = [
  {
    company: "University of Ottawa",
    position: "Lorem ipsum dolor sit amet",
    duration: " May 2023 - Current",
    summary: ["ebrfje", "vfchawevc", "gwcbukebce"],
  },
  {
    company: "Proxima Systems",
    position: "Backend Web development Intern",
    duration: " Feb 2022 - Jun 2022 ",
    summary: ["ebrfje", "vfchawevc", "gwcbukebce"],
  },
];
function Experience() {
  return (
    <div className="border-2 border-white w-[screen] mx-[40px] h-[700px] text-white px=[10px] mb-[200px]">
      <div className="flex justify-center">
        <h1 className="text-code text-[40px]">Experience</h1>
      </div>
      <div>
        {workEx.map(function (data) {
          return (
            <div className="w-[100%] px-[20px] h-[330px] border-2 border-white flex flex-col">
              <div className="mb-[5px]">
                <h1 className="text-rose-700 text-[24px]">{data.company}</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="text-white text-[18px]">{data.position}</h1>
                <h1 className="text-white text-[18px]">{data.duration}</h1>
              </div>

              <div className="m-[20px] ml-[100px]">
                {data.summary.map(function (data) {
                  return <li className="text-[18px]">{data}</li>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
