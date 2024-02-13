import React from "react";

function Card({ sub }) {
  console.log(sub);
  const { sub_name, sub_image, description } = sub;
  return (
    <div className="card card-compact w-72 mx-auto bg-base-100">
      <figure>
        <img src={sub_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{sub_name}</h2>
        <p class="truncate max-w-s">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
