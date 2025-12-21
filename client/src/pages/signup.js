import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/authcontext";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setLoading, setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}'/api/auth`,
        (email, username, password)
      );

      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);

      toast.success("Registered successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          background: "black",
          overflow: "hidden",
        }}
        className="d-flex align-items-center justify-content-center text-white"
      >
        <form
          className="rounded-4 p-4 col-9 col-md-5 fs-6"
          style={{
            background: "var(--secondary-color)",
            overflow: "auto",
            maxHeight: "80%",
          }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-center">Signup</h2>

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

          <button type="submit" className="btn btn-dark w-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
