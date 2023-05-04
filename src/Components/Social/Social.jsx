import React, { useState } from "react";
import app from "../../firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Social = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);

  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        setUser(googleUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGitHubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const githubUser = result.user;
        console.log(githubUser);
        setUser(githubUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("sign out successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h2>social login page</h2>
      <div className="mt-4">
        {user ? (
          <button onClick={handleSignOut} className="btn btn-success">
            Sign out
          </button>
        ) : (
          <div>
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-primary me-4">
              Login google
            </button>
            <button onClick={handleGitHubLogin} className="btn btn-primary">
              github login
            </button>
          </div>
        )}
      </div>
      {user && (
        <div className="mt-4">
          <h3>Name : {user.displayName}</h3>
          <h4>Email : {user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Social;
