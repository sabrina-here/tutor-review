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
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
