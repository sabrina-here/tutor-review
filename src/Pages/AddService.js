import React, { useRef, useState } from "react";
import Toast from "../Components/Toast";

function AddService() {
  const [serviceAdded, setServiceAdded] = useState(false);

  const [newSubject, setNewSubject] = useState({
    average_star: "0",
    description: "",
    sub_image: null,
    sub_name: "",
    total_reviews: "0",
    tutor_name: "goerge simon",
  });

  const descriptionRef = useRef(null);
  const nameRef = useRef(null);

  const handleOnChange = (e) => {
    setNewSubject({ ...newSubject, [e.target.name]: e.target.value });
    // console.log(reviews);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newSubject);

    fetch(`http://localhost:5000/service`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSubject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // alert("subject added successfully");
          setServiceAdded(true);
          descriptionRef.current.value = "";
          nameRef.current.value = "";
        }
      });
  };

  return (
    <div>
      {/* TOAST */}
      <Toast condition={serviceAdded} setCondition={setServiceAdded}></Toast>

      {/* FORM TO ADD SERVICE */}
      <form onSubmit={(event) => handleSubmit(event)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub Name</span>
          </label>
          <input
            type="text"
            placeholder="subject name"
            name="sub_name"
            className="input input-bordered"
            onChange={(event) => handleOnChange(event)}
            ref={nameRef}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full "
            id="exampleFormControlTextarea1"
            placeholder="Write a description"
            name="review"
            rows="3"
            onChange={(event) => handleOnChange(event)}
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info" type="submit">
            Add Subject
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddService;
