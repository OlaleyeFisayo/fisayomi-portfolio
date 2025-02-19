import { Layers, MoveRight } from "lucide-react";
import AppCard from "../ui/app-card";
import { CardContent, CardHeader } from "../ui/card";
import JavaScript from "@/assets/javascript.png";
import TypeScript from "@/assets/typescript.png";
import React from "@/assets/react.png";
import Express from "@/assets/express.png";
import Vue from "@/assets/vue.png";
import MongoDB from "@/assets/mongodb.png";

export default function MyStack() {
  const stacks = [
    {
      language: "JavaScript",
      img: JavaScript,
      link: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      language: "TypeScript",
      img: TypeScript,
      link: "https://en.wikipedia.org/wiki/TypeScript",
    },
    {
      language: "React",
      img: React,
      link: "https://en.wikipedia.org/wiki/React_(software)",
    },
    {
      language: "Express",
      img: Express,
      link: "https://en.wikipedia.org/wiki/Express.js",
    },
    {
      language: "Vue",
      img: Vue,
      link: "https://en.wikipedia.org/wiki/Vue.js",
    },
    {
      language: "MongoDB",
      img: MongoDB,
      link: "https://en.wikipedia.org/wiki/MongoDB",
    },
  ];

  return (
    <AppCard>
      <CardHeader className="flex flex-row gap-2 text-gray1 items-center justify-center">
        <Layers className="text-purple-700" />
        <h1>My Stack</h1>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {stacks.map((stack, index) => (
          <a
            href={stack.link}
            target="_blank"
            key={index}
            className="flex gap-2.5 items-center bg-black3 border-[1px] border-black4 p-3 text-gray1 rounded-lg"
            id="ref-hover"
          >
            <div className="w-[45px] h-[45px] bg-gray3 p-2 rounded-sm">
              <img className="w-full h-full object-contain" src={stack.img} />
            </div>
            <div className="w-full h-full flex justify-between items-center">
              <h1>{stack.language}</h1>
              <MoveRight size={20} id="arrow" />
            </div>
          </a>
        ))}
      </CardContent>
    </AppCard>
  );
}
