import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Toast from "./Toast";

function AddReview({ data }) {
  const { user } = useContext(AuthContext);
  const [reviewAdded, setReviewAdded] = useState(false);

  const [reviews, setReviews] = useState({
    sub_id: data._id,
    sub_name: data.sub_name,
    user_name: user.displayName,
    email: user.email,
    user_uid: user.uid,
    photo: user.photoURL,
  });
  const inputRef = useRef(null);
  const nameRef = useRef(null);

  const handleOnChange = (e) => {
    setReviews({ ...reviews, [e.target.name]: e.target.value });
    // console.log(reviews);
  };

  const handleSubmit = () => {
    console.log(reviews);

    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setReviewAdded(true);
          inputRef.current.value = "";
          nameRef.current.value = "";
        }
      });
  };

  return (
    <div>
      {/* TOAST */}
      <Toast condition={reviewAdded} setCondition={setReviewAdded}></Toast>

      {/* REVIEW ADDING TEXTAREA */}
      <div className="mb-3 flex w-100 justify-between">
        <textarea
          className="textarea textarea-bordered w-full "
          id="exampleFormControlTextarea1"
          placeholder="Write a review"
          name="review"
          onChange={handleOnChange}
          rows="3"
          ref={inputRef}
        ></textarea>
        <div
          className="btn btn-success border-primary mb-3 p-3"
          onClick={handleSubmit}
        >
          POST
        </div>
      </div>
    </div>
  );
}

export default AddReview;
