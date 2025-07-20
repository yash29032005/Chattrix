import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signup`,
        {
          fullname,
          username,
          email,
          password,
        }
      );
      setFullname("");
      setUsername("");
      setEmail("");
      setPassword("");
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.error || "Unexpected error");
    }
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background: "black",
          overflow: "hidden",
        }}
        className="d-flex align-items-center justify-content-center text-white"
      >
        <form
          className="rounded-4 p-4 w-50"
          style={{
            background: "var(--secondary-color)",
            overflow: "auto",
            height: "80%",
          }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-center">Signup</h2>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputFullname">Full name</label>
            <input
              type="text"
              className="form-control"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              id="exampleInputFullname"
              placeholder="Enter fullname"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputUsername">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              id="exampleInputUsername"
              placeholder="Enter username"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div>
            <Link to="/login">Already have an account?</Link>
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
        </form>
      </div>
    </>
  );
}

export default Signup;
