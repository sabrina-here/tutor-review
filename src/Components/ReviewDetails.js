import React from "react";

function ReviewDetails({ data }) {
  const { sub_name, description } = data;
  return (
    <div>
      <div className="hero bg-gray-300">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={data.sub_image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold my-3">{sub_name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewDetails;
