import React from "react";

const FAQ = () => {
  return (
    <div className="">
      <h2 className="text-center text-2xl font-bold mb-3">
        Frequently Asked Question
      </h2>
      <div className="card flex-col md:flex-row m-5 card-side bg-base-100 shadow-xl">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            1. What is JavaScript?
          </div>
          <div className="collapse-content">
            <p>
              JavaScript is a very powerful client-side scripting language.
              JavaScript is used mainly for enhancing the interaction of a user
              with the webpage. In other words, you can make your webpage more
              lively and interactive, with the help of JavaScript. JavaScript is
              also being used widely in game development and Mobile application
              development.
            </p>
          </div>
        </div>
      </div>
      <div className="card flex-col md:flex-row m-5 card-side bg-base-100 shadow-xl">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2. Enumerate the differences between Java and JavaScript?
          </div>
          <div className="collapse-content">
            <p>
              Java is a complete programming language. In contrast, JavaScript
              is a coded program that can be introduced to HTML pages. These two
              languages are not at all inter-dependent and are designed for
              different intent. Java is an object-oriented programming (OOPS) or
              structured programming languages like C++ or C, whereas JavaScript
              is a client-side scripting language.
            </p>
          </div>
        </div>
      </div>
      <div className="card flex-col md:flex-row m-5 card-side bg-base-100 shadow-xl">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            3. What is the use of isNaN function?
          </div>
          <div className="collapse-content">
            <p>
              isNan function returns true if the argument is not a number;
              otherwise, it is false.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
