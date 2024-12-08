import React from "react";
import app from "../../public/images/loghi/app.png";
import fablab from "../../public/images/loghi/fablab.png";
import fbk from "../../public/images/loghi/fbk.png";
import hit from "../../public/images/loghi/hit.png";
import ifac from "../../public/images/loghi/ifac.png";
import inaf from "../../public/images/loghi/inaf.png";
import prom from "../../public/images/loghi/prom.png";
import tifpa from "../../public/images/loghi/tifpa.png";
import unitn from "../../public/images/loghi/unitn.png";
import vrt from "../../public/images/loghi/vrt.png";

export default function Sponsor() {
  return (
    <div className="mt-4 pb-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-12 py-12 px-4 bg-[#FFFFFF]">
        <p className="w-full mb-4 -mt-4 text-center text-base font-semibold uppercase text-black tracking-wider ">
          Our Collaborations
        </p>

        <div className="flex items-center justify-center w-32">
          <img src={app.src} alt="" />
        </div>
        <div className="flex items-center justify-center w-32">
          <img src={fablab.src} alt="" />
        </div>
        <div className="flex items-center justify-center w-32">
          <img src={fbk.src} alt="" />
        </div>
        <div className="flex items-center justify-center w-32">
          <img src={hit.src} alt="" />
        </div>
        <div className="flex items-center justify-center w-32">
          <img src={ifac.src} alt="" />
        </div>
        <div className="flex items-center justify-center w-32">
          <img src={inaf.src} alt="" />
        </div>
        <div className="flex items-center justify-center w-32">
          <img src={prom.src} alt="" />
        </div>
        <div className="flex items-center justify-center w-32">
          <img src={tifpa.src} alt="" />
        </div>
        <div className="flex items-center justify-center w-32">
          <img src={unitn.src} alt="" />
        </div>
        <div className="flex items-center justify-center w-32">
          <img src={vrt.src} alt="" />
        </div>
      </div>
    </div>
  );
}
