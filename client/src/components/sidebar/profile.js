import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Profilepage from "../../pages/profilepage";

function Profile() {
  const [profilepage, setProfilepage] = useState(false);
<<<<<<< HEAD
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

=======

  const navigate = useNavigate();

  const { user, setUser } = useAuth();
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
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
        style={{ background: "var(--secondary-color)" }}
        className="mb-4 d-flex align-items-center justify-content-between rounded-5 p-3"
<<<<<<< HEAD
      >
        {/* Profile info */}
        <div
          className="d-flex align-items-center"
          onClick={() => setProfilepage(true)}
          style={{ cursor: "pointer" }}
        >
          <img
            style={{ height: "60px", background: "var(--primary-color)" }}
            className="rounded-circle"
            src={`https://robohash.org/${
              user?.username || user?.name || "default"
            }`}
            alt="profilepic"
          />
          <h5 className="ms-3 mb-0">
            {user?.username || user?.name || "User"}
          </h5>
        </div>

        {/* Logout */}
        <div onClick={handleLogout} style={{ cursor: "pointer" }}>
          <i className="bi bi-box-arrow-right" title="Logout"></i>
        </div>
      </div>

      {profilepage && <Profilepage setProfilepage={setProfilepage} />}
=======
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
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
    </>
  );
}

export default Profile;
