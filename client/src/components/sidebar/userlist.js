import { useEffect, useState } from "react";
import Usercard from "./usercard";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../context/authcontext";

function Userlist() {
  const [userlist, setUserslist] = useState([]);
  const { setSelectedUser } = useAuth();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/user`,
          {
            withCredentials: true,
          }
        );
        setUserslist(res.data);
      } catch (error) {
        toast.error(error.response?.data?.error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <ul className="list-group" style={{ listStyle: "none" }}>
        {userlist.length > 0 ? (
          userlist.map((otheruser, index) => (
            <li
              key={index}
              onClick={() => setSelectedUser(otheruser)}
              className="list-group-items"
            >
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
