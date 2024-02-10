import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Navigation from "../Components/Navigation";

function Home() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
      });
  }, []);

  return (
    <div>
      {subjects.map((sub) => (
        <Card key={sub._id} sub={sub}></Card>
      ))}
    </div>
  );
}

export default Home;
