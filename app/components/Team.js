import React from "react";
import team from "../../public/images/team.jpg";
function Team() {
  return (
    <div className="bg-[#030303] text-white flex flex-col">
      <h2 className="text-4xl p-4 m-auto">The Team</h2>
      <div className="m-auto mt-2 flex justify-center">
        <img src={team.src} className="w-3/4 md:w-1/2" />
      </div>
      <div>
        <p className="px-24 py-12 text-lg">
          The project is being made by an interdisciplinary team with Phd,
          Master's and Bachelor's students of different fields, such as physics,
          aerospace engineering, artificial intelligence, industrial engineering
          and information engineering.
        </p>
      </div>
    </div>
  );
}

export default Team;
