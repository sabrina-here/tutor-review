import React from "react";
import instructor from "../images/george.jpg";

function InstructorSection() {
  return (
    <div>
      <div className="hero bg-gray-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={instructor} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold my-3">George Simon!</h1>
            <p>
              An exceptional, intelligent and inspirational teacher. Mr. Simon's
              passion for teaching and dedication to his students create an
              inspiring and engaging learning environment. His innovative
              methods and genuine care for each student's success make him an
              outstanding educator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
