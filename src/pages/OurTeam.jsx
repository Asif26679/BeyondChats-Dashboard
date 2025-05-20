import rahullll from "../assets/rahullll.jpeg";
import amit from "../assets/amit.jpeg";

import React from "react";

const teamMembers = [
  {
    name: "Asif",
    role: "Frontend Developer",
    img: rahullll
  },
  {
    name: "Priya",
    role: "UI/UX Designer",
    img: amit,
  },
  {
    name: "Rahul",
    role: "Backend Developer",
    img: rahullll,
  },
];

const OurTeam = () => {
  return (
    <div className="p-6">
        <h1 className="text-center mb-20 text-5xl text-green-500 font-bold">BeyondChats</h1>
      <h1 className="text-3xl font-bold mb-6">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
