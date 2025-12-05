import { useEffect, useRef, useState } from "react";
import Receivermessagebox from "./receivermessagebox";
import Sendermessagebox from "./sendermessagebox";
import { socket } from "../../utils/socket";
import { useAuth } from "../../context/authcontext";
import axios from "axios";
import { usePage } from "../../context/pagecontext";

function Messagedisplay({ isTyping }) {
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();
  const { selecteduser } = usePage();
  const bottomRef = useRef();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/messages/${user._id}/${selecteduser._id}`
        );
        setMessages(res.data);
      } catch (err) {
        console.error("Error loading messages:", err);
      }
    };

    if (user && selecteduser) {
      fetchMessages();
    }
  }, [user, selecteduser]);

  useEffect(() => {
    const handleIncomingMessage = (msgData) => {
      setMessages((prev) => [...prev, msgData]);
    };

    socket.on("backend-message", handleIncomingMessage);

    return () => {
      socket.off("backend-message", handleIncomingMessage);
    };
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [messages]);

  return (
    <>
      <div
        className="flex-grow-1 px-3 py-4 d-flex flex-column gap-3"
        style={{ overflowY: "auto" }}
      >
        {messages.map((msg, idx) =>
          String(msg.senderId || msg.sender) === String(user._id) ? (
            <Sendermessagebox key={idx} text={msg.text} />
          ) : (
            <Receivermessagebox key={idx} text={msg.text} />
          )
        )}

        {isTyping && <Receivermessagebox isTyping={true} />}
        <div ref={bottomRef} />
      </div>
    </>
  );
}

export default Messagedisplay;
