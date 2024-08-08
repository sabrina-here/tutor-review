import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Toast from "../Components/Toast";

function MyReviews() {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [myReviews, setMyReviews] = useState(data);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = (rid) => {
    fetch(`http://localhost:5000/review/${rid}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setDeleted(true);
          const remainingReviews = myReviews.filter((usr) => usr._id != rid);
          setMyReviews(...remainingReviews);
        }
      });
  };

  return (
    <div>
      {/* TOAST */}
      <Toast
        condition={deleted}
        setCondition={setDeleted}
        text={"review deleted successfully"}
      ></Toast>

      {/* PAGE TITLE */}
      <h1>My Reviews</h1>

      {/* TABLE FOR DISPLAYING REVIEWS */}
      <div className="my-10 ml-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Review</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myReviews?.map((rev) => (
                <tr key={rev._id}>
                  <td>{rev.sub_name}</td>
                  <td>{rev.review}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        navigate(`/service/${rev.sub_id}`);
                      }}
                    >
                      Details
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-accent">
                      <Link to={`/editReview/${rev._id}`}>Edit</Link>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(rev._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyReviews;
