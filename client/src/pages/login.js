import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/authcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoading, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);

      toast.success("Logged in!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

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
          <button type="submit" className="btn btn-dark w-100">
            Submit
          </button>
        </form>{" "}
      </div>
    </>
  );
}

export default Login;
