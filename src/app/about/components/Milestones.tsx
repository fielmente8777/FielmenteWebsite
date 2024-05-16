import React from "react";

function Milestones() {
  return (
    <div className="grid lg:grid-cols-3 gap-10">
      <div>
        <h2 className="md:text-6xl text-4xl font-normal text-black text-center">
          120
        </h2>
        <h3 className="text-lg text-black text-center">COMPLETED PROJECTS</h3>
      </div>
      <div>
        <h2 className="md:text-6xl text-4xl font-normal text-black text-center">
          95%
        </h2>
        <h3 className="text-lg text-black text-center">SATISFACTION RATE</h3>
      </div>
      <div>
        <h2 className="md:text-6xl text-4xl font-normal text-black text-center">
          8+
        </h2>
        <h3 className="text-lg text-black text-center">YEARS OF EXPERIENCE</h3>
      </div>
    </div>
  );
}

export default Milestones;
