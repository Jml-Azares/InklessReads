import { useContext } from "react";
import { StateContext } from "./contexts/ContextProvider";

const UserProfile = () => {
  const { user } = useContext(StateContext);

  console.log(user);

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
