import { usePage } from "../context/pagecontext";
import Defaultpage from "../components/defaultpage/defaultpage";
import Messagesection from "../components/messagesection/messagesection";
import Sidebar from "../components/sidebar/sidebar";

function Home() {
  const { showmessagesection } = usePage();

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
