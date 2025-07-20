import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Profilepage from "../../pages/profilepage";

function Profile() {
  const [profilepage, setProfilepage] = useState(false);

  const navigate = useNavigate();

  const { user, setUser } = useAuth();
  if (!user) return <Navigate to="/login" />;

  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/logout`, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.error || "Logout failed");
    }
  };

  return (
    <>
      <div
        style={{ height: "15%", background: "var(--tertiary-color)" }}
        className="mb-4 d-flex align-items-center justify-content-between rounded-5 p-3"
        onClick={() => {
          setProfilepage(true);
        }}
      >
        <div className="d-flex align-items-center">
          <div>
            {user ? (
              <img
                style={{
                  height: "60px",
                  background: "var(--primary-color)",
                }}
                className="rounded-circle"
                src={`https://robohash.org/${user.username}`}
                alt="profilepic"
              />
            ) : null}
          </div>
          {user ? (
            <h5 className="ms-3 mb-0">{user.username}</h5>
          ) : (
            <h5 className="ms-3 mb-0">User</h5>
          )}
        </div>

        <div onClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i>
        </div>
      </div>
      {profilepage ? <Profilepage setProfilepage={setProfilepage} /> : null}
    </>
  );
}

export default Profile;
