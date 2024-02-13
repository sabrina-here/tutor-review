import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

function Services() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data);
      });
  }, []);

  return (
    <div className=" grid grid-cols-3 gap-4 my-5">
      {subjects.map((sub) => (
        <Card key={sub._id} sub={sub}></Card>
      ))}
    </div>
  );
}

export default Services;
