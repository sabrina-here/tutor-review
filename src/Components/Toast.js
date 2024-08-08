import React from "react";

function Toast({ condition, setCondition }) {
  return (
    <div>
      <div>
        {condition && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-success">
              <span>Review added successfully.</span>
              <div>
                <button
                  className="btn btn-error"
                  onClick={() => setCondition(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Toast;
