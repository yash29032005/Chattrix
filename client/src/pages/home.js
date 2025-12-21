import Defaultpage from "./defaultpage";
import Messagesection from "../components/messagesection/messagesection";
import Sidebar from "../components/sidebar/sidebar";
import { useAuth } from "../context/authcontext";

function Home() {
  const { selectedUser } = useAuth();
  const showmessagesection = !!selectedUser;

  return (
    <>
      <div
        id="Home"
        className="text-white"
        style={{ height: "100vh", background: "var(--primary-color)" }}
      >
        <div className="row m-0">
          <Sidebar />
          {showmessagesection ? <Messagesection /> : <Defaultpage />}
        </div>
      </div>
    </>
  );
}

export default Home;
