import Messagedisplay from "./messagedisplay";
import Messageinputsend from "./messageinputsend";
import Messageprofile from "./messageprofile";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { socket } from "../../utils/socket";
import { usePage } from "../../context/pagecontext";

function Messagesection() {
  const { selecteduser } = usePage();
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    socket.on("show-typing", ({ senderId }) => {
      if (senderId === selecteduser._id) {
        setIsTyping(true);
      }
    });

    socket.on("hide-typing", ({ senderId }) => {
      if (senderId === selecteduser._id) {
        setIsTyping(false);
      }
    });

    return () => {
      socket.off("show-typing");
      socket.off("hide-typing");
    };
  }, [selecteduser]);
=======

function Messagesection() {
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
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
<<<<<<< HEAD
          <Messageprofile isTyping={isTyping} />
          <Messagedisplay isTyping={isTyping} />
=======
          <Messageprofile />
          <Messagedisplay />
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
          <Messageinputsend />
        </div>
      </div>
    </>
  );
}

export default Messagesection;
