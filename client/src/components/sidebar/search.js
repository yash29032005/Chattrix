import { useState } from "react";
import GroupModal from "../../utils/groupmodal";

function Search() {
  const [opengroupmodal, setOpengroupmodal] = useState(false);
  return (
    <>
      <div>
        <h3 className="ms-1">Online Users</h3>
        <div className="d-flex mb-3 gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search user"
          />
          <button
            className="rounded-3 text-white border-0 px-3 py-2"
            style={{ background: "var(--tertiary-color)" }}
            onClick={() => setOpengroupmodal(true)}
          >
            Group
          </button>
        </div>
        {opengroupmodal ? <GroupModal /> : null}
        <hr />
      </div>
    </>
  );
}

export default Search;
