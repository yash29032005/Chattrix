import { useEffect, useState } from "react";
import Usercard from "./usercard";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../context/authcontext";
import { socket } from "../../utils/socket";

function Userlist() {
  const [userlist, setUserslist] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    socket.on("online-users", async (onlineUserIds) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/users/`,
          { ids: onlineUserIds }
        );
<<<<<<< HEAD
=======
        setUserslist(res.data.userlist);
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
        setUserslist(res.data.userlist.filter((u) => u._id !== user._id));
      } catch (error) {
        toast.error(error.response?.data?.error);
      }
    });
    return () => {
      socket.off("online-users");
    };
<<<<<<< HEAD
    // eslint-disable-next-line react-hooks/exhaustive-deps
=======
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
  }, []);

  return (
    <>
      <ul className="list-group" style={{ listStyle: "none" }}>
        {userlist.length > 0 ? (
          userlist.map((otheruser, index) => (
            <li key={index} className="list-group-items">
              <Usercard otheruser={otheruser} />
            </li>
          ))
        ) : (
          <h5 className="text-center" style={{ color: "grey" }}>
            No Users Online
          </h5>
        )}
      </ul>
    </>
  );
}
export default Userlist;
