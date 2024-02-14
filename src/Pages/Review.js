import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewDetails from "../Components/ReviewDetails";

function Review() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="my-5 w-4/5 mx-auto">
        <ReviewDetails data={data}></ReviewDetails>
      </div>
    </div>
  );
}

export default Review;
