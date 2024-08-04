import React, { useEffect, useState } from "react";
import AddReview from "./AddReview";

function ReviewDetails({ data }) {
  const { sub_name, description, _id } = data;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

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
      <div className="mt-20 my-5">
        <h1 className="font-medium hover:font-bold text-lg">Reviews</h1>
        <AddReview id={_id}></AddReview>
        <hr />
        {/* <div className="">
                {bookReviews.map((r) => (
                  <ReviewCard key={r._id} r={r}></ReviewCard>
                ))}
              </div> */}
      </div>
    </div>
  );
}

export default ReviewDetails;
