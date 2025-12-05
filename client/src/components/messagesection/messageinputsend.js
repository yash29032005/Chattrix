import { useState } from "react";
import { socket } from "../../utils/socket";
import { useAuth } from "../../context/authcontext";
import { usePage } from "../../context/pagecontext";

function Messageinputsend() {
  const [message, setMessage] = useState("");
  const { user } = useAuth();
  const { selecteduser } = usePage();

  const handleSendMessage = () => {
    socket.emit("frontend-message", {
      senderId: user._id,
      receiverId: selecteduser._id,
      text: message,
    });
  };

  return (
    <>
      <div className="d-flex p-3" style={{ width: "100%" }}>
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
          placeholder="Type a message..."
          className="input-group px-2 rounded-3 w-100 me-2"
        />
        <button className="btn btn-dark" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </>
  );
}
export default Messageinputsend;
