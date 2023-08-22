import { useContext } from "react";
import { StateContext } from "./contexts/ContextProvider";
import { Navigate } from "react-router-dom";

const UserProfile = () => {
  const { user, token } = useContext(StateContext);

  console.log(user);
  console.log(token);
  if (!token) {
    return <Navigate to="/Login" />;
  }

  return (
    <>
      <div className="card text-center p-5">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">
                User Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Change Password
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <p className="card-text">
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p>{user.contact_number}</p>
            <p>{user.email}</p>
          </p>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
