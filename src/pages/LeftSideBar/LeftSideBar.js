import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://learn-hub-server-lac.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="">
      <ul className="menu p-4 overflow-y-auto  w-full text-base-content">
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/category/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
