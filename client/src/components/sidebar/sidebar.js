import Profile from "./profile";
import Search from "./search";
import Userlist from "./userlist";

function Sidebar() {
  return (
    <>
      <div
        style={{ overflow: "auto", height: "auto" }}
        className="col-12 col-lg-4 p-3"
      >
        <div className="row-2">
          <Profile />
        </div>
        <div
          className="p-3 row-8 rounded-5"
          style={{ background: "var(--secondary-color)" }}
        >
          <Search />
          <Userlist />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
