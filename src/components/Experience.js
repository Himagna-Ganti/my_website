import React from "react";

const workEx = [
  {
    company: "University of Ottawa",
    location: "Ottawa, ON",
    position: "Research Assistant",
    duration: " June 2023 - Current",
    summary: [
      "Developed a cloud based portal exclusively to host UAV related datasets.",
      "Utilised cloud resources provided by Digital Research Alliance of Canada to my supervisor, Prof. Miodrag Bolic.",
      "Configured S3 buckets to store data as well as configured S3 APIs for the portal.",
      "Configured Globus platform for easier data sharing between different Compute Canada clusters among research peers under Prof. Bolic.",
    ],
  },
  {
    company: "Proxima Systems",
    location: "Hyderabad, India",
    position: "Backend Web development Intern",
    duration: " Feb 2022 - Jun 2022 ",
    summary: [
      "Part of the team developing back-end functionality for company's internal ticketing system interface using Node.js.",
      "Employed MongoDB for faster query response time.",
      "REST API testing - POSTMAN.",
    ],
  },
  {
    company: "Green Visakha Eco-Friendly Industries",
    location: "Visakhapatnam, India",
    position: "Intern",
    duration: " Jan 2021 -- Feb 2021 ",
    summary: [
      "Developed SCL code for programming Siemens' PLCs.",
      "Maintained conveyor belt ladder logic for a brick factory.",
    ],
  },
];

function Experience() {
  return (
    <div
      className=" w-[screen] mx-[40px] h-[700px] text-white px=[10px] mb-[50px]"
      id="experience"
    >
      <div className="flex justify-center">
        <h1 className="text-code text-[40px]">Experience</h1>
      </div>
      <div className="mt-[20px]">
        {workEx.map(function (data) {
          return (
            <div className="w-[100%] px-[20px] h-[250px]  flex flex-col">
              <div className="mb-[5px] flex flex-row justify-between">
                <h1 className="text-rose-700 text-[24px]">{data.company}</h1>
                <h1 className="text-white text-[16px] pt-[9px]">
                  {data.location}
                </h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="text-white text-[16px]">{data.position}</h1>
                <h1 className="text-white text-[16px]">{data.duration}</h1>
              </div>

              <div className="m-[20px] ml-[100px] ">
                <ul className="text-[18px] list-image-arrow ">
                  {data.summary.map(function (data) {
                    return <li className="  "> {data}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
