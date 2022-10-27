import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { title, picture, description, price, _id, sale, rating } = course;
  return (
    <div className="p-5">
      <div className="card flex-col md:flex-row card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={picture} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description && description.slice(0, 130)}...</p>
          <div className="card-actions justify-between items-center">
            <p className="">Price: {price}</p>
            <p>Total Sale: {sale}</p>
            <p>Rating: {rating}</p>
            <Link to={`/course/${_id}`} className="btn btn-primary">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
