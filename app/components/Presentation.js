import React from "react";
import cad from "../../public/images/cad.png";
import rocket from "../../public/images/rocket.png";

function Presentation() {
  return (
    <div className="bg-[#030303] text-white flex flex-col">
      <h2 className="text-4xl p-4 pt-6 m-auto">The Experiment</h2>
      <div className="flex flex-col lg:flex-row flex-1">
        <div className="p-16 w-full lg:w-1/2 text-lg leading-9 tracking-wide">
          <p>
            Small Particle Recognition Kit for Low Energies will be designed and
            built by a team of italian students, mainly from University of
            Trento. It's part of an ESA educational programme. The team can
            benefit from direct knowledge transfer of ESA technical and
            managerial expertise. SPaRKLE is a miniaturized detector within 1
            CubeSat unit (10 x 10 x 10 cm <sup>3</sup>). It will study phenomena
            such as Gamma-Ray Bursts, Terrestrial Gamma-ray Flashes and charged
            particles and space weather transients. After the completion, the
            payload will be hosted on Space Rider for a 2-month flight in low
            Earth orbit.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={cad.src} className="m-auto " />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
