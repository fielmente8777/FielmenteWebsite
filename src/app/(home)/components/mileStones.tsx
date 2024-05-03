import React from "react";

function MileStones() {
  return (
    <section className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-blue-dark text-4xl font-bold">70+</h2>
        <p className="text-lg text-blue-dark">Hoteliers Trust Us</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-blue-dark text-4xl font-bold">90+</h2>
        <p className="text-lg text-blue-dark">Projects Completed</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-blue-dark text-4xl font-bold">89%</h2>
        <p className="text-lg text-blue-dark">Satisfaction Rate</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-blue-dark text-4xl font-bold">15+</h2>
        <p className="text-lg text-blue-dark">Years of Experience</p>
      </div>
    </section>
  );
}

export default MileStones;
