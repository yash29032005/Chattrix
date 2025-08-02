import { usePage } from "../../context/pagecontext";

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
  );
}
export default Messageprofile;
