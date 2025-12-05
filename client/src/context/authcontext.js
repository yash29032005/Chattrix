import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
import { socket } from "../utils/socket";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
<<<<<<< HEAD
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
=======
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f

  useEffect(() => {
    if (user && user._id) {
      socket.emit("register-user", user._id);
    }
  }, [user]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/auth/me`,
          {
            withCredentials: true,
          }
        );
        setUser(res.data.user);
<<<<<<< HEAD
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;
=======
        navigate("/");
      } catch (error) {
        toast.error(error.response?.data?.error || "Unexpected error");
        setUser(null);
      }
    };

    checkAuth();
  }, [navigate]);
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
