import React, { useContext, useEffect, useState } from "react";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";

function ReviewDetails({ data }) {
  const { sub_name, description, _id } = data;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, []);

  return (
    <div>
      {/* full description of selected service */}
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

      {/* review adding and viewing section */}
      <div className="mt-20 my-5">
        {/* add review section */}
        <h1 className="font-medium hover:font-bold text-lg">Reviews</h1>
        <AddReview data={data}></AddReview>
        <hr />

        {/* view review section */}
        <div className="">
          {reviews.map((r) => (
            <ReviewCard key={r._id} r={r}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewDetails;
