import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../Contexts/AuthProvider";

function Card({ sub }) {
  const { user } = useContext(AuthContext);
  const { sub_name, sub_image, description, _id } = sub;
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef();

  const handleDetailsClick = () => {
    if (user) {
      navigate(`/service/${_id}`);
    } else {
      setShowLoginPopup(true);
    }
  };

  const handleLoginClick = () => {
    setShowLoginPopup(false);
    navigate(`/login`);
  };

  return (
    <div className="card card-compact w-72 mx-auto bg-base-100">
      {/* pop up alert when user not logged in */}
      {/* TOAST */}
      <div>
        {showLoginPopup && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-success">
              <span>Please Login to add review.</span>
              <div>
                <button
                  className="btn btn-info"
                  onClick={() => handleLoginClick()}
                >
                  Login
                </button>
              </div>
              <div>
                <button
                  className="btn btn-error"
                  onClick={() => setShowLoginPopup(false)}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ------- SERVICE CARD ------------ */}
      <PhotoProvider>
        <PhotoView src={sub_image}>
          <img src={sub_image} alt={sub_name} />
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="card-title">{sub_name}</h2>
        <p className="truncate max-w-s">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleDetailsClick}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
