import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const { loginUser, providerSignUp } = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    loginUser(email, password)
      .then(() => {
        event.target.reset();
        navigate(from, { replace: true });
        toast.success("Account Create Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogle = () => {
    providerSignUp(googleProvider)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Account Create Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGithub = () => {
    providerSignUp(githubProvider)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Account Create Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login Now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailInputRef}
                  id="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  ref={passwordInputRef}
                  id="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {/* <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label> */}
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Register here
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <hr className="my-3" />
            <div className="flex flex-col gap-3">
              <button onClick={handleGoogle} className="btn btn-outline">
                <FcGoogle className="text-2xl mr-2" /> Continue with Google
              </button>
              <button onClick={handleGithub} className="btn btn-outline">
                <BsGithub className="text-2xl mr-2" /> Continue with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
