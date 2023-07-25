import { useContext } from "react";
import { StateContext } from "./contexts/ContextProvider";

const UserProfile = () => {
  const { user } = useContext(StateContext);

  console.log(user);

  return (
    <>
      <div>
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <p>{user.contact_number}</p>
        <p>{user.email}</p>
      </div>
    </>
  );
};
export default UserProfile;
