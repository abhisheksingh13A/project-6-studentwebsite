import React from "react";
import Cards from "./Cards";
import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  const CARDS = [
    {
      title: "Bachelor of Architecture (B.Arch.)",
      description:
        "The National Center for Education Statistics does a great job of keeping track of every single degree conferred in the United States. ",
      image: "https://source.unsplash.com/random/300x200?1",
    },
    {
      title: "Bachelor of Computer Science (B.C.S.)",
      description:
        "The National Center for Education Statistics does a great job of keeping track of every single degree conferred in the United States. ",
      image: "https://source.unsplash.com/random/300x200?2",
    },
    {
      title: "Bachelor of Civil Engineering (B.C.E.)",
      description:
        "The National Center for Education Statistics does a great job of keeping track of every single degree conferred in the United States.",
      image: "https://source.unsplash.com/random/300x200?3",
    },
    {
      title: "Bachelor of Civil Science (B.C.S.)",
      description:
        "The National Center for Education Statistics does a great job of keeping track of every single degree conferred in the United States.",
      image: "https://source.unsplash.com/random/300x200?3",
    },
  ];

  return (
    <div>
      <div className="text-center text-3xl font-bold mt-10 drop-shadow-xl">
        <h1>About Us</h1>
      </div>
      <div className="flex flex-row gap-4 justify-center mx-10 mt-10 border-b-8">
        <div>
          <img src="/student7.jpg" alt="imgs"  className="rounded-2xl"/>
        </div>
        <div className="text-2xl font-medium flex flex-col gap-4 p-16">
          <h1 className="text-3xl font-bold">Welcome To Online</h1>
          <h1>Learn With Online Videos</h1>
          <div>
            <ul>
              <li>. Explore a verities of Course</li>
              <li>. Expert Teachers</li>
              <li>. Good Marks</li>
              <li>. Solution Videos</li>
            </ul>
            <button className="px-4 py-1 bg-red-600 text-white font-semibold rounded-3xl mt-8 flex items-center p-2">
              More About <spam className="pl-2"><FaArrowAltCircleRight /></spam>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl font-semibold text-center my-5 drop-shadow-xl">
          <h1>Our Popular Course</h1>
        </div>

        <div className="cards flex flex-row gap-2 justify-center border-blue-400">
          {CARDS.map((card, index) => (
            <Cards key={index} {...card} />
          ))}
        </div>
        <div className="drop-shadow-xl">
            <button  className="px-6 py-2 bg-red-600 text-white font-semibold rounded-3xl mt-6 ml-10 flex items-center">More Courses <spam className="pl-2"><FaArrowAltCircleRight /></spam></button>
        </div>
      </div>
    </div>
  );
};

export default About;
