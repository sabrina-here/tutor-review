import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../Contexts/AuthProvider";
import LoginPopup from "./LoginPopup";

function Card({ sub }) {
  const { user } = useContext(AuthContext);
  const { sub_name, sub_image, description, _id } = sub;
  const [showLoginPopup, setShowLoginPopup] = useState("false");
  const navigate = useNavigate();
  const modalRef = useRef();

  const handleDetailsClick = () => {
    console.log("clicked");
    if (user) {
      navigate(`/service/${_id}`);
    } else {
      // setShowLoginPopup("true");
      // console.log("here");
      // document.getElementById("my_modal_1").showModal();
      alert("please login");
    }
  };

  return (
    <div className="card card-compact w-72 mx-auto bg-base-100">
      {/* pop up modal when user not logged in */}
      {/* {showLoginPopup && (
        <dialog ref={modalRef} id="my_modal_1" className="modal" show >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press Login to continue!</p>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowLoginPopup(false)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )} */}

      {/* <dialog
        ref={modalRef}
        id="my_modal_1"
        className="modal"
        show={showLoginPopup}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press Login to continue!</p>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <div className="modal-action">
            <button className="btn" onClick={() => setShowLoginPopup("false")}>
              Close
            </button>
          </div>
        </div>
      </dialog> */}

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
