import React from 'react';
import { Link } from 'react-router-dom';

//import './style.css';


import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Currency$Conversations</h1>
          </Link>
          <p className="m-0">Your conversational trading one-stop-shop for all things currency!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>User {Auth.getProfile().data.username} is logged in</span>
              <button className="btn btn-lg btn-info m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
