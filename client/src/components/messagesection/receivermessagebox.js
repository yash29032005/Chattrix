<<<<<<< HEAD
function Receivermessagebox({ time, text, isTyping = false }) {
=======
function Receivermessagebox({ time, text }) {
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
  return (
    <div className="d-flex justify-content-start">
      <div
        className="text-white p-3 rounded-4 shadow-sm text-wrap"
        style={{ maxWidth: "75%", background: "var(--tertiary-color)" }}
      >
<<<<<<< HEAD
        {!isTyping ? (
          <>
            <p className="mb-0">{text}</p>
            <div className="text-end small mt-1" style={{ color: "grey" }}>
              {time ||
                new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
            </div>
          </>
        ) : (
          <div className="d-flex gap-1">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
      </div>

      {/* animation styles */}
      <style>{`
        .dot {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          display: inline-block;
          animation: blink 1.4s infinite both;
        }
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0% { opacity: 0.2; transform: scale(0.8); }
          20% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.2; transform: scale(0.8); }
        }
      `}</style>
=======
        <p className="mb-0">{text}</p>
        <div className="text-end small mt-1" style={{ color: "grey" }}>
          {time ||
            new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
        </div>
      </div>
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
    </div>
  );
}

export default Receivermessagebox;
