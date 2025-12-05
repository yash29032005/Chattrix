import { useState } from "react";
import Groupmodal from "../../utils/groupmodal";

function Search() {
  const [opengroupmodal, setOpengroupmodal] = useState(false);

  function openModal() {
    setOpengroupmodal(true);
  }

  return (
    <>
      <div>
        <div className="d-flex justify-content-between my-3 align-items-center">
          <h3 className="ms-1">Online Users</h3>
          <button className="btn btn-success" onClick={openModal}>
            + Create group
          </button>
        </div>
        <input type="text" className="form-control" placeholder="Search user" />
        <hr />
      </div>
      {opengroupmodal ? (
        <Groupmodal setOpengroupmodal={setOpengroupmodal} />
      ) : null}
    </>
  );
}

export default Search;
