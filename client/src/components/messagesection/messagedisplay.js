import { useEffect, useRef, useState } from "react";
import Receivermessagebox from "./receivermessagebox";
import Sendermessagebox from "./sendermessagebox";
import { useAuth } from "../../context/authcontext";
import axios from "axios";

function Messagedisplay() {
  const [messages, setMessages] = useState([]);
  const { user, selectedUser } = useAuth();
  const bottomRef = useRef();

  useEffect(() => {
    async function fetchMessages() {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/message/${selectedUser._id}`,
        {
          withCredentials: true,
        }
      );
      setMessages(res.data);
    }
    fetchMessages();
  }, [selectedUser._id]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <div
        className="flex-grow-1 px-3 py-4 d-flex flex-column gap-3"
        style={{ overflowY: "auto" }}
      >
        {messages.map((msg, idx) =>
          msg.sender._id === user.id ? (
            <Sendermessagebox key={idx} text={msg.content} />
          ) : (
            <Receivermessagebox key={idx} text={msg.content} />
          )
        )}
        <div ref={bottomRef} />
      </div>
    </>
  );
}

export default Messagedisplay;
