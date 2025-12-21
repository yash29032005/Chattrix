import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      localStorage.removeItem("user");
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
                src={`https://robohash.org/${user.name}`}
                alt="profilepic"
              />
            ) : null}
          </div>
          {user ? (
            <h5 className="ms-3 mb-0">{user.name}</h5>
          ) : (
            <h5 className="ms-3 mb-0">User</h5>
          )}
        </div>

        <div onClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i>
        </div>
      </div>
    </>
  );
}

export default Profile;
