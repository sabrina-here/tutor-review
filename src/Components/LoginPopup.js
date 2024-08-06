import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// onClick={() => document.getElementById("my_modal_1").showModal()}

function LoginPopup() {
  useEffect(() => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }
  }, []);
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press Login to continue!</p>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default LoginPopup;
