import React from "react";
import Agency from "./components/Agency";
import Hero from "./components/Hero";
import Milestones from "./components/Milestones";
import MakeUsUnique from "./components/MakeUsUnique";
import Form from "./components/Form";

function About() {
  return (
    <div>
      <div className="py-20 bg-gradient">
        <div className="max-width">
          <Agency />
        </div>
      </div>

      <div className="mt-32 max-width">
        <hr />
      </div>

      <div className="py-20">
        <div className="max-width">
          <Hero />
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-[1024px] mx-auto">
          <Milestones />
        </div>
      </div>

      <div className="py-20">
        <MakeUsUnique />
      </div>

      <div className="py-20 bg-blue-dark">
        <div className="max-width">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default About;
