import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = createRef();

const Course = () => {
  const course = useLoaderData();

  const {
    _id,
    title,
    picture,
    description,
    author,
    price,
    sale,
    rating,
    category,
  } = course;
  return (
    <div className="">
      <div className=" w-3/4 mx-auto mt-10">
        <div className="card w-full bg-base-100 shadow-xl" ref={ref}>
          <figure>
            <img className="w-full" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body gap-4">
            <h2 className="card-title">{title}</h2>
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-4 w-full">
                <img
                  className="w-10 rounded-full"
                  src={author.picture}
                  alt=""
                />
                <h4>{author.name}</h4>
              </div>
              <p className="text-xl">{price}</p>
            </div>
            <p>{description}</p>
            <div className="card-actions items-center justify-between">
              <p>Category: {category}</p>
              <p>Total Sale: {sale}</p>
              <p>Rating: {rating}</p>
              <Link to={`/checkout/${_id}`} className="btn btn-primary">
                Get Premium Access
              </Link>
            </div>
            <Pdf targetRef={ref} filename="course-details.pdf">
              {({ toPdf }) => (
                <button onClick={toPdf} className="btn btn-primary">
                  Download
                </button>
              )}
            </Pdf>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
