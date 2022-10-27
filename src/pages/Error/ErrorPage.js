import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">Page not found</p>
          <p className="py-6">
            The site configured at this address does not contain the requested
            file.
          </p>
          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
