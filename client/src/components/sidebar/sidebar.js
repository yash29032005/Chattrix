import Profile from "./profile";
import Search from "./search";
import Userlist from "./userlist";

function Sidebar() {
  return (
    <>
      <div
        style={{ background: "var(--secondary-color)", overflow: "auto" }}
        className="col-4 p-3"
      >
        <Profile />
        <Search />
        <Userlist />
      </div>
    </>
  );
}

export default Sidebar;
