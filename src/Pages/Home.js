import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import InstructorSection from "../Components/InstructorSection";
import XfactorCard from "../Components/XfactorCard";

function Home() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/homeServices")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <div>
          <h1 className="text-5xl font-bold my-5">Topics</h1>
        </div>
        <div className="mx-auto my-4 grid grid-cols-3">
          {subjects.map((sub) => (
            <Card key={sub._id} sub={sub}></Card>
          ))}
        </div>
      </div>
      <div className="my-2">
        <button className="btn btn-primary">
          <Link to={"/services"}>See all</Link>
        </button>
      </div>
      <div className="pt-5">
        <h3 className="text-7xl py-10">X-factors of Simon Sir</h3>
        <XfactorCard></XfactorCard>
      </div>
      <div className="my-5 w-4/5 mx-auto">
        <InstructorSection></InstructorSection>
      </div>
    </div>
  );
}

export default Home;
