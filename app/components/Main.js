import React from "react";
import Spline from "@splinetool/react-spline";
import { ReactTyped } from "react-typed";
import logo from "../../public/images/loghi/sparkle.png";
import Social from "./Social";
function Main() {
  return (
    <div className="md:h-screen overflow-hidden flex flex-col bg-[#030303]">
      <div className="py-5 px-8 flex flex-row justify-between items-center">
        <img src={logo.src} className="w-24" />
        <Social />
        <div className="md:hidden">
          <button className="bg-white text-black py-2 px-3 rounded-lg">
            <a href="/join">Join Us</a>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:h-full flex justify-center items-center">
          {/* left titles */}
          <div className=" text-center p-14 md:text-left md:p-28 m-auto ">
            <h1 class="mb-4 tracking-wide text-6xl font-extrabold text-white lg:text-7xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Sparkling
              </span>{" "}
              Explorers
            </h1>
            <h4 className="mb-4 text-xl md:text-2xl lg:text-3xl tracking-wide font-extralight text-white">
              <ReactTyped
                strings={["Let's explore space together"]}
                typeSpeed={50}
              />
            </h4>
            <div className="hidden md:block">
              <button className="bg-white text-black text-xl py-2 px-3 rounded-lg">
                <a href="/join">Join Us</a>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 w-full md:w-1/2 md:h-full relative">
          <div>
            <div
              className="absolute inset-0 z-10 md:hidden"
              style={{ pointerEvents: "none" }}
            ></div>
            <Spline scene="https://prod.spline.design/nOapboAC2hmr-dBu/scene.splinecode" />
          </div>
          <div className="py-8 md:py-0">
            <h3 className="p-4 text-lg font-normal text-center text-gray-400 md:mt-3 lg:text-xl sm:px-16 xl:px-48">
              A compact versatile detector for gamma-rays and charged particles.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
