import { usePage } from "../context/pagecontext";
import Defaultpage from "../components/defaultpage/defaultpage";
import Messagesection from "../components/messagesection/messagesection";
import Sidebar from "../components/sidebar/sidebar";

function Home() {
  const { showmessagesection } = usePage();

  return (
    <>
      <div
        className="d-flex text-white"
        style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
      >
        <Sidebar />
        {showmessagesection ? <Messagesection /> : <Defaultpage />}
      </div>
    </>
  );
}

export default Home;
