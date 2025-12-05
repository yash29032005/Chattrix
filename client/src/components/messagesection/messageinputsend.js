import { useState } from "react";
import { socket } from "../../utils/socket";
import { useAuth } from "../../context/authcontext";
import { usePage } from "../../context/pagecontext";

function Messageinputsend() {
  const [message, setMessage] = useState("");
  const { user } = useAuth();
  const { selecteduser } = usePage();

  const handleSendMessage = () => {
<<<<<<< HEAD
    if (!message.trim()) return;

=======
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
    socket.emit("frontend-message", {
      senderId: user._id,
      receiverId: selecteduser._id,
      text: message,
    });
<<<<<<< HEAD

    // stop typing after sending
    socket.emit("stop-typing", {
      senderId: user._id,
      receiverId: selecteduser._id,
    });
    setMessage("");
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);

    // tell backend user is typing
    socket.emit("typing", { senderId: user._id, receiverId: selecteduser._id });

    // auto stop after 2s of inactivity
    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(() => {
      socket.emit("stop-typing", {
        senderId: user._id,
        receiverId: selecteduser._id,
      });
    }, 2000);
  };

  return (
    <div className="d-flex p-3" style={{ width: "100%" }}>
      <input
        value={message}
        onChange={handleTyping}
        type="text"
        placeholder="Type a message..."
        className="input-group px-2 rounded-3 w-100 me-2"
      />
      <button className="btn btn-dark" onClick={handleSendMessage}>
        Send
      </button>
    </div>
=======
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
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
  );
}
export default Messageinputsend;
