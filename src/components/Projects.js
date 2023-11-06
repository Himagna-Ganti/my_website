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
  {
    title: "F1 through the years",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, saepe iure tempora nemo enim minima amet odio impedit magnam mollitia fugiat est eligendi facere tempore nisi, dolore deleniti! Cumque, aut doloribus! Debitis, suscipit! Minus reprehenderit fugit nihil quis a! Laudantium amet neque vero alias architecto quisquam corporis, culpa magni dicta",
    image: p1,

    tech_stack: [rct, node, js, postgresql, openstack, tailwind, html5],
  },
  {
    title: "Netflix Stock price prediction",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, saepe iure tempora nemo enim minima amet odio impedit magnam mollitia fugiat est eligendi facere tempore nisi, dolore deleniti! Cumque, aut doloribus! Debitis, suscipit! Minus reprehenderit fugit nihil quis a! Laudantium amet neque vero alias architecto quisquam corporis, culpa magni dicta",
    image: p1,

    tech_stack: [rct, node, js, postgresql, openstack, tailwind, html5],
  },
];
function Projects() {
  return (
    <div className=" m-10 h-[1100px]  w-[screen] flex-col content-center justify-center ">
      <div className="flex justify-center">
        <h1 className="text-[40px] text-code">Projects</h1>
      </div>
      {projects.map(function (info) {
        return (
          <Card
            title={info.title}
            description={info.description}
            image={info.image}
            tech_stack={info.tech_stack}
          />
        );
      })}
    </div>
  );
}
export default Projects;
