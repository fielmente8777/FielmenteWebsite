import React from "react";
import Agency from "./components/Agency";
import Hero from "./components/Hero";
import Milestones from "./components/Milestones";
import MakeUsUnique from "./components/MakeUsUnique";
import Form from "./components/Form";

function About() {
  return (
    <div>
      <div className="md:py-20 py-10 bg-gradient">
        <div className="max-width">
          <Agency />
        </div>
      </div>

      <div className="sm:mt-32 max-width">
        <hr />
      </div>

      <div className="md:py-20 py-4">
        <div className="max-width">
          <Hero />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <div className="max-w-[1024px] mx-auto">
          <Milestones />
        </div>
      </div>

      <div className="md:py-20 py-10">
        <MakeUsUnique />
      </div>

      <div className="py-20 bg-blue-dark">
        <div className="max-width">
          <Form title={"Get a free audit report"} />
        </div>
      </div>
    </div>
  );
}

export default About;
