import { useAuth } from "../context/authcontext";
import ProfileCard from "../utils/ProfileCard";

function Profilepage({ setProfilepage }) {
  const { user } = useAuth();

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          zIndex: "4",
        }}
        onClick={() => {
          setProfilepage(false);
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "10%",
          left: "40%",
          zIndex: "5",
        }}
      >
        {user ? (
          <ProfileCard
            name={user.fullname}
            title="Software Engineer"
            handle={user.username}
            status="Online"
            contactText="Update"
            avatarUrl={`https://robohash.org/${user.username}`}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Update clicked")}
          />
        ) : null}
      </div>
    </>
  );
}

export default Profilepage;
