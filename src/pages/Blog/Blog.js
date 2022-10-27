import React from "react";

const Blog = () => {
  return (
    <div className=" ">
      <div className="card m-5 bg-base-100 shadow-xl">
        <h2 className="text-center text-2xl font-bold mb-3">
          Question and Answer
        </h2>
        <div className="card-body">
          <h2 className="card-title">1. What is cors?</h2>
          <p className="pl-5">
            Cross-origin resource sharing (CORS) is a browser mechanism which
            enables controlled access to resources located outside of a given
            domain. It extends and adds flexibility to the same-origin policy
            (SOP). However, it also provides potential for cross-domain attacks,
            if a website's CORS policy is poorly configured and implemented.
            CORS is not a protection against cross-origin attacks such as
            cross-site request forgery (CSRF).
          </p>
        </div>
      </div>
      <div className="card m-5 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p className="pl-5">
            Firebase provides tools to grow your app and business, for startups
            & global enterprises. Get your app up and running quickly & securely
            with fully managed backend infrastructure. Customize Your App.
            Accelerate Development. Cross-Platform Solutions. Usually,
            authentication by a server entails the
          </p>
          <p className="pl-5">
            use of a user name and password. Other ways to authenticate can be
            through cards, retina scans, voice recognition, and fingerprints.
          </p>
        </div>
      </div>
      <div className="card m-5 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">3. How does the private route work?</h2>
          <p className="pl-5">
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </div>
      </div>
      <div className="card m-5 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">4 What is Node? How does Node work?</h2>
          <p className="pl-5">
            It is a used as backend service where javascript works on the
            server-side of the application.
          </p>
          <p className="pl-5">
            This way javascript is used on both frontend and backend. Node.
          </p>
          <p className="pl-5">
            js runs on chrome v8 engine which converts javascript code into
            machine code, it is highly scalable, lightweight, fast, and
            data-intensive. Working of Node.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
