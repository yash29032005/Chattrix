function Usercard({ otheruser }) {
  return (
    <>
      <div
        style={{
          height: "15%",
          background: "var(--tertiary-color)",
          position: "relative",
        }}
        className="rounded-4 d-flex align-items-center mb-4 p-3"
      >
        <div style={{ position: "relative" }}>
          <img
            style={{
              height: "50px",
              width: "50px",
              background: "var(--primary-color)",
            }}
            className="rounded-circle"
            src={`https://robohash.org/${otheruser.username}`}
            alt="profilepic"
          />
          <span
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              height: "12px",
              width: "12px",
              backgroundColor: "#28a745",
              border: "2px solid white",
              borderRadius: "50%",
            }}
          />
        </div>
        <h5 className="ms-4 mt-2">{otheruser.username}</h5>
      </div>
    </>
  );
}

export default Usercard;
