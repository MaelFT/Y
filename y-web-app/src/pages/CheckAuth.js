import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckAuthComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users/check-auth', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      console.log(response);

      if (response.status === 200) { 
        
        const data = response.data;
        console.log(data);
        setIsAuthenticated(data.authenticated);
      } else {
        console.error('Error checking authentication');
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <p>Utilisateur connecté</p>
      ) : (
        <p>Utilisateur non connecté</p>
      )}
    </div>
  );
};

export default CheckAuthComponent;
