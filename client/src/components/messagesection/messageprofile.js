import { usePage } from "../../context/pagecontext";

<<<<<<< HEAD
function Messageprofile({ isTyping }) {
  const { setShowmessagesection, selecteduser } = usePage();

  return (
    <div className="d-flex align-items-center justify-content-between p-2">
      <div className="d-flex align-items-center">
        <img
          style={{
            height: "50px",
            width: "50px",
            background: "var(--primary-color)",
          }}
          className="rounded-circle ms-3"
          src={`https://robohash.org/${selecteduser.username}`}
          alt="profilepic"
        />
        <div className="ms-3">
          <h5 className="m-0">{selecteduser.fullname}</h5>
          {isTyping ? (
            <small style={{ color: "grey" }}>typing...</small>
          ) : (
            <div className="my-4"></div>
          )}
        </div>
      </div>
      <button
        className="btn btn-dark me-3"
        onClick={() => setShowmessagesection(false)}
      >
        Back
      </button>
    </div>
=======
function Messageprofile() {
  const { setShowmessagesection, selecteduser } = usePage();
  return (
    <>
      <div className=" d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            style={{
              height: "50px",
              width: "50px",
              background: "var(--primary-color)",
            }}
            className="rounded-circle ms-3"
            src={`https://robohash.org/${selecteduser.username}`}
            alt="profilepic"
          />
          <h4 className="m-4">{selecteduser.fullname}</h4>
          <hr className="pb-0" />
        </div>
        <button
          className="btn btn-dark me-3"
          onClick={() => {
            setShowmessagesection(false);
          }}
        >
          Back
        </button>
      </div>
    </>
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
  );
}
export default Messageprofile;
