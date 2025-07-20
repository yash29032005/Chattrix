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
        className="col-8 d-flex flex-column"
      >
        <Messageprofile />
        <Messagedisplay />
        <Messageinputsend />
      </div>
    </>
  );
}

export default Messagesection;
