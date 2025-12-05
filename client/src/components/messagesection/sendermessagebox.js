function Sendermessagebox({ time, text }) {
  return (
    <div className="d-flex justify-content-end">
      <div
        className="text-white p-3 rounded-4 shadow-sm text-wrap"
        style={{ maxWidth: "75%", background: "var(--tertiary-color)" }}
      >
        <p className="mb-0">{text}</p>
        <div className="text-end small mt-1" style={{ color: "grey" }}>
          {time ||
            new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
        </div>
      </div>
    </div>
  );
}

export default Sendermessagebox;
