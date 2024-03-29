import React from "react";
import { Link } from "react-router-dom";

function Card({ sub }) {
  console.log(sub);
  const { sub_name, sub_image, description, _id } = sub;
  return (
    <div className="card card-compact w-72 mx-auto bg-base-100">
      <figure>
        <img src={sub_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{sub_name}</h2>
        <p class="truncate max-w-s">{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`}>
            {" "}
            <button className="btn btn-primary">details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
