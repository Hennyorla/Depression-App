import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((state) => state.userState);
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-lg-6">
          <h3>
            {user?.firstName} {user?.lastName}
          </h3>
          <p>{user?.email}</p>
          <p>{user?.role === "professional" && "verified"}</p>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
};

export default UserProfile;
