import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  const { title, picture, price } = course;
  return (
    <div className="card flex-col md:flex-row m-5 card-side bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <p>{price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
