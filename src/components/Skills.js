import React from "react";

import Tile from "./Tile";

let skills = [
  {
    data: "Javascript",
    learning: "0",
  },
  {
    data: "Python",
    learning: "0",
  },
  {
    data: "Java",
    learning: "0",
  },
  {
    data: "Bash",
    learning: "1",
  },
  { data: "C++", learning: "1" },
  {
    data: "HTML",
    learning: "0",
  },
  {
    data: "CSS",
    learning: "0",
  },
  {
    data: "SQL (Postgres)",
    learning: "1",
  },
  {
    data: "Mongo DB",
    learning: "1",
  },
  {
    data: "React",
    learning: "1",
  },
  { data: "Tailwind", learning: "0" },
  {
    data: "Node JS",
    learning: "0",
  },
  {
    data: "Express",
    learning: "0",
  },
  {
    data: "Django",
    learning: "1",
  },
  {
    data: "Git",
    learning: "0",
  },
  {
    data: "Docker",
    learning: "0",
  },
  {
    data: "Ansible",
    learning: "1",
  },
  {
    data: "NGINX",
    learning: "0",
  },
  {
    data: "NPM",
    learning: "1",
  },
  {
    data: "Django-REST",
    learning: "0",
  },
  {
    data: "Postman",
    learning: "1",
  },
  { data: "Data Structures and Algorithms", learning: "0" },
  {
    data: "PowerBI",
    learning: "1",
  },
  {
    data: "jQuery",
    learning: "1",
  },
  {
    data: "NumPy",
    learning: "0",
  },
  {
    data: "Matplotlib",
    learning: "0",
  },
  {
    data: "Plotly",
    learning: "1",
  },
  {
    data: "Streamlit",
    learning: "0",
  },
  {
    data: "RegEx",
    learning: "1",
  },
  {
    data: "Rospy",
    learning: "1",
  },
  {
    data: "Tensorflow",
    learning: "1",
  },
  {
    data: "pandas",
    learning: "0",
  },
  {
    data: "AWS EC2",
    learning: "0",
  },
  {
    data: "Linux",
    learning: "0",
  },
  { data: "AWS S3", learning: "0" },
  {
    data: "OpenStack",
    learning: "1",
  },
  { data: "RHEL(CentOS)", learning: "1" },
];
function Skills() {
  return (
    <div className=" m-10 h-[550px]  w-[screen]">
      <div className="text-code text-[40px] flex justify-center">
        Skills and Interests
      </div>
      <div className=" m-10 h-[340px]  w-[screen] flex justify-center ">
        <div className="  h-[340px] w-[1000px] ml-[-200px] mr-[-200px]  flex flex-wrap space-x-4 justify-center">
          {skills.map(function (info) {
            return <Tile data={info.data} learning={info.learning}></Tile>;
          })}
        </div>
      </div>
      <div className="flex justify-center space-x-3 items-center">
        <div className="h-[30px] w-[30px] rounded-lg bg-code border-code"></div>
        <p className="text-white text-[25px]"> - Still learning</p>
      </div>
    </div>
  );
}

export default Skills;
