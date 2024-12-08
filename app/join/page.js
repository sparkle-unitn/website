import React from "react";
import sparkle from "../../public/images/loghi/sparkle.png";

function Join() {
  return (
    <div className="text-white">
      <a href="/">
        <img src={sparkle.src} className="w-44 mt-8 m-auto" alt="logo" />
      </a>
      <div className="flex flex-col items-center m-auto p-10 md:w-1/2">
        <div className="mt-4">
          <h3 className="text-l font-bold">Who can join?</h3>
          <p className="mt-2 text-base leading-relaxed break-normal">
            The project is open to bachelor students, master student and
            doctorates. (Thesis)
          </p>

          <h3 className="mt-6 text-l font-bold">Where we are?</h3>
          <p className="mt-2 text-base leading-relaxed break-normal">
            We have our main hub at Povo 0, University of Trento
          </p>

          <h3 className="mt-6 text-l font-bold">What are we looking for?</h3>
          <p className="mt-2 text-base leading-relaxed break-normal">
            The projects involves a multi-discipline team. We offer different
            roles and task, you can choose which area you want ot work on.
          </p>
          <ul className="list-disc">
            <li className="m-2">Management</li>
            <li className="m-2">Eletronics</li>
            <li className="m-2">Software</li>
            <li className="m-2">Mechanical</li>
            <li className="m-2">Scientific Perfomance</li>
            <li className="m-2">Outreach</li>
          </ul>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScBZJ8Kjq3tQJMPcDoOy2oODw19kt7WJxhj5ZVQwys7PWJYHw/viewform?embedded=true"
          height="956"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className="mt-10 w-[440px] md:w-[640px] lg:w-[780px]"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
}

export default Join;
