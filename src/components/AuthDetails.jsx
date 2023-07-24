import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate, Navigate } from "react-router-dom";

const AuthDetails = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));

    navigate("/");
  };

  // if (!authorized) {
  //   // return <Navigate to="/" />;
  //   // return navigate("/"); // Redirect to the login page if not authorized
  //   return null; // Optional: You might also want to display a loading spinner or a message here.
  // }

  return (
    <>
      {authUser ? (
        <>
          <div className="row py-3">
            <div className="col">
              <p className="text-light py-1 fs-5">{` ${authUser.email}`}</p>{" "}
            </div>
            <div className="col">
              <button className="btn btn-outline-light" onClick={userSignOut}>
                Sign Out
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-light fs-5 py-2">You are Signed Out</p>
      )}
    </>
  );
};

export default AuthDetails;
