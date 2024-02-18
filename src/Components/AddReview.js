import React, { useRef, useState } from "react";

function AddReview() {
  const [reviews, setReviews] = useState({});
  const inputRef = useRef(null);
  const nameRef = useRef(null);

  const handleOnChange = (e) => {
    setReviews({ ...reviews, [e.target.name]: e.target.value });
    console.log(reviews);
  };

  const handleSubmit = () => {
    console.log(reviews);

    //   fetch(`http://localhost:5000/review`, {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(reviews),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.acknowledged) {
    //         alert("review added successfully");
    //         inputRef.current.value = "";
    //         nameRef.current.value = "";

    //       }
    //     });
  };

  return (
    <div>
      <div className="flex w-100 justify-between">
        <div className="mb-3">
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            id="exampleFormControlInput1"
            placeholder="Enter name"
            required
            name="name"
            onChange={handleOnChange}
            ref={nameRef}
          />
        </div>
        <div
          className="btn btn-success border-primary mb-3"
          onClick={handleSubmit}
        >
          POST
        </div>
      </div>
      <div className="mb-3">
        <textarea
          className="textarea textarea-bordered w-full "
          id="exampleFormControlTextarea1"
          placeholder="Write a review"
          name="review"
          onChange={handleOnChange}
          rows="3"
          ref={inputRef}
        ></textarea>
      </div>
    </div>
  );
}

export default AddReview;
