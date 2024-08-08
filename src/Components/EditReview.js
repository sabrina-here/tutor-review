import React, { useContext, useRef, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Toast from "./Toast";
import { AuthContext } from "../Contexts/AuthProvider";

function EditReview() {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviewAdded, setReviewAdded] = useState(false);

  const [reviews, setReviews] = useState({
    _id: data._id,
    review: data.review,
  });
  const inputRef = useRef(null);

  const handleOnChange = (e) => {
    setReviews({ ...reviews, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/review/${reviews._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: reviews.review }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setReviewAdded(true);
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1 className="text-5xl my-10">Edit Review</h1>

      <Toast
        condition={reviewAdded}
        setCondition={setReviewAdded}
        text={"review updated successfully"}
      ></Toast>

      <div className="mb-3  w-2/4 mx-auto">
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text">Subject Name</span>
          </label>
          <input
            type="text"
            value={data.sub_name} // Fix the value here
            name="sub_name"
            className="input input-bordered"
            readOnly // Make the field read-only
          />
        </div>
        <label className="label">
          <span className="label-text">Review</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full "
          id="exampleFormControlTextarea1"
          placeholder={data.review}
          name="review"
          onChange={handleOnChange}
          rows="3"
          ref={inputRef}
        ></textarea>
        <div
          className="btn btn-success border-primary mb-3 p-3"
          onClick={(event) => handleSubmit(event)}
        >
          UPDATE
        </div>
      </div>
    </div>
  );
}

export default EditReview;
