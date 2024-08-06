import React from "react";

function ReviewCard({ r }) {
  const { email, photo, review, user_name, sub_name } = r;
  const textStyles = {
    fontWeight: "300",
    fontSize: "15px",
  };
  return (
    <div className="border-4 bg-green-900 text-white rounded my-2">
      <div className="container my-3">
        <div className="d-flex">
          <img src={photo} alt="profile" style={{ width: "45px" }} />
          <p className="mt-2 mx-2">{user_name}</p>
          <p className="mt-2 mx-2">{email}</p>
        </div>
        <hr />

        <p className="text-start" style={textStyles}>
          {sub_name}
        </p>
        <p className="text-start" style={textStyles}>
          {review}
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
