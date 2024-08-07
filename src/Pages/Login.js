import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const { login, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        console.log(result.user.email);
        form.reset();
        // setAuthToken(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    googleSignIn().then((res) => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200 align-middle w-100">
      <div className="hero-content grid lg:grid-cols-2 ">
        {/* left side decor */}
        <div className="text-center lg:text-left ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>

        {/* login form */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 align-middle ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info" type="submit">
                Login
              </button>
            </div>
            <div className="btn btn-warning" onClick={handleGoogleLogin}>
              or login with google
            </div>
          </form>
          <p className="text-center">
            New to Tutor Review ?{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
