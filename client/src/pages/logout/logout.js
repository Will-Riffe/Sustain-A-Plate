import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../utils/auth';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    AuthService.logout();
    setTimeout(() => {
      navigate('/');
    }, 2000); // Navigate after 2 seconds
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
      <p>Please wait while we log you out safely.</p>
    </div>
  );
}

export default Logout;
