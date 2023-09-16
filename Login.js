import React from 'react';
import { Link } from 'react-router-dom';
import firebase, { auth } from './firebase'; // Import 'firebase' and 'auth'

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <Link to="/timer">Go to Timer</Link>
    </div>
  );
};

export default Login;

