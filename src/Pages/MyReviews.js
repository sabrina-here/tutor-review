import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

function MyReviews() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [myReviews, setMyReviews] = useState(useLoaderData());
  const [showModal, setShowModal] = useState(false);

  const data = useLoaderData();

  const handleDelete = (rid) => {
    const agree = window.confirm(`Are you sure you want to delete:`);
    if (agree) {
      fetch(`http://localhost:5000/review/${rid}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("review deleted successfully");
            const remainingReviews = myReviews.filter((usr) => usr._id != rid);
            setMyReviews(...remainingReviews);
          }
        });
    }
  };

  return (
    <div>
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
