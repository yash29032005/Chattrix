import { usePage } from "../../context/pagecontext";

function Usercard({ otheruser }) {
  const { setShowmessagesection, setSelecteduser } = usePage();
  return (
    <>
      <div
        style={{ height: "15%", background: "var(--tertiary-color)" }}
        className="rounded-4 d-flex align-items-center mb-4 p-3 "
        onClick={() => {
          setShowmessagesection(true);
          setSelecteduser(otheruser);
        }}
      >
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
        <h5 className="ms-4 mt-2">{otheruser.fullname}</h5>
      </div>
    </>
  );
}
export default Usercard;
