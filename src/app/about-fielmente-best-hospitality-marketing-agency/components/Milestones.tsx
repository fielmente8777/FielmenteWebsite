import React from "react";

function Milestones() {
  const data = [
    {
      number: "120",
      title: "COMPLETED PROJECTS",
    },
    {
      number: "95%",
      title: "SATISFACTION RATE",
    },
    {
      number: "8+",
      title: "YEARS OF EXPERIENCE",
    },
  ];
 
  return (
    <div className="grid lg:grid-cols-3 gap-10">
      
      {data.map((item, index) => (
        <div key={index}>
          <h2 className="md:text-5xl text-3xl font-normal text-black text-center">
            {item.number}
          </h2>
          <h3 className="text-lg text-black text-center">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Milestones;
