import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
<<<<<<< HEAD
        { email, password },
        { withCredentials: true }
=======
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
      );
      setEmail("");
      setPassword("");
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.error || "Unexpected error");
    }
  };

<<<<<<< HEAD
  const handleGoogleLogin = () => {
    window.open(`${process.env.REACT_APP_API_URL}/api/auth/google`, "_self");
  };

  return (
    <div
      style={{ height: "100vh", background: "black" }}
      className="d-flex align-items-center justify-content-center text-white"
    >
      <form
        className="rounded-4 p-4 col-9 col-md-5 fs-6"
        style={{ background: "var(--secondary-color)" }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-center">Please login first!</h2>

        {/* Email login */}
        <div className="form-group mb-4">
          <label>
            Email address <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group mb-4">
          <label>
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Link to={"/signup"}>Don't have an account?</Link>
        </div>

        <div className="form-check mb-4">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">
            Agree to all the terms & conditions
          </label>
        </div>

        <button type="submit" className="btn btn-dark w-100 mb-3">
          Submit
        </button>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn btn-danger w-100"
        >
          Sign in with Google
        </button>
      </form>
    </div>
=======
  return (
    <>
      <div
        style={{ height: "100vh", background: "black" }}
        className="d-flex align-items-center justify-content-center text-white"
      >
        <form
          className="rounded-4 p-4 col-9 col-md-5 fs-6"
          style={{ background: "var(--secondary-color)" }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-center">Please login first!</h2>
          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <Link to={"/signup"}>Don't have an account?</Link>
          </div>
          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Agree to all the terms & conditions
            </label>
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Submit
          </button>
        </form>{" "}
      </div>
    </>
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
  );
}

export default Login;
