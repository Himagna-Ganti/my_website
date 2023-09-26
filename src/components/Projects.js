import React from "react";
import Card from "./Card";
import p1 from "../assets/p1.png";
import rct from "../assets/react.svg";
import node from "../assets/node.svg";
import tailwind from "../assets/tailwind.svg";
import html5 from "../assets/html5.svg";
import js from "../assets/js.svg";
import postgresql from "../assets/postgresql.svg";
import openstack from "../assets/openstack.svg";

const projects = [
  {
    title: "UAV4Everyone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, saepe iure tempora nemo enim minima amet odio impedit magnam mollitia fugiat est eligendi facere tempore nisi, dolore deleniti! Cumque, aut doloribus! Debitis, suscipit! Minus reprehenderit fugit nihil quis a! Laudantium amet neque vero alias architecto quisquam corporis, culpa magni dicta",
    image: p1,
    tech_stack: [rct, node, js, postgresql, openstack, tailwind, html5],
  },
];
function Projects() {
  return (
    <div className="border-2 border-white m-10 h-[1000px]  w-[screen] flex-col content-center justify-center ">
      <div className="flex justify-center">
        <h1 className="text-[40px] text-code">Projects</h1>
      </div>
      <Card
        title={projects[0].title}
        description={projects[0].description}
        image={projects[0].image}
        tech_stack={projects[0].tech_stack}
      />
    </div>
  );
}
export default Projects;
