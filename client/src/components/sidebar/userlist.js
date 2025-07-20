import { useEffect, useState } from "react";
import Usercard from "./usercard";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../context/authcontext";

function Userlist() {
  const [userlist, setUserslist] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/users/${user._id}`
        );
        setUserslist(res.data.userlist);
      } catch (error) {
        toast.error(error.response?.data?.error);
      }
    };
    fetchUsers();
  }, [user?._id]);

  return (
    <>
      <ul className="list-group" style={{ listStyle: "none" }}>
        {userlist.map((otheruser, index) => (
          <li key={index} className="list-group-items">
            <Usercard otheruser={otheruser} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default Userlist;
