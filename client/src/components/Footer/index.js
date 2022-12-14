import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-info p-4">
      <div className="container text-center text-light mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-info mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          © Currency$Conversations.com 2022
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
