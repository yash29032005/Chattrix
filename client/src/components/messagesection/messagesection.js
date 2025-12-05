import Messagedisplay from "./messagedisplay";
import Messageinputsend from "./messageinputsend";
import Messageprofile from "./messageprofile";

function Messagesection() {
  return (
    <>
      <div
        style={{
          background: "var(--primary-color)",
          height: "100vh",
        }}
        className="p-3 col-12 col-lg-8 d-flex flex-column"
      >
        <div
          className="rounded-5 d-flex flex-column"
          style={{
            height: "100%",
            background: "var(--secondary-color)",
          }}
        >
          <Messageprofile />
          <Messagedisplay />
          <Messageinputsend />
        </div>
      </div>
    </>
  );
}

export default Messagesection;
