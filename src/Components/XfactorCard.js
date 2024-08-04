import React from "react";

function XfactorCard() {
  return (
    <div className=" text-white">
      <div>
        <div className="card card-side bg-base-100 shadow-xl max-w-3xl mx-auto my-10 p-5 bg-gradient-to-r from-purple-500 to-pink-500 ">
          <div className="card-body">
            <h2 className="card-title">Zero to Topper</h2>
            <p>
              You will get everything from the beginning of your journey until
              you realize your full potential
            </p>
          </div>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl max-w-3xl mx-auto my-10 p-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="card-body">
          <h2 className="card-title">Top Public University Placement.</h2>
          <p>
            About 80% of Simon sir's graduates get a public university placement
            like BUET, Medical, Du etc.
          </p>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl max-w-3xl mx-auto my-10 p-5 bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="card-body">
          <h2 className="card-title">Unlimited Live support</h2>
          <p>
            You can join One to One live support sessions three times a day. You
            are guaranteed to find answers within 10 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default XfactorCard;
