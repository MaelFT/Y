import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import checkAuth from '../utils/authFunctions';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const authResponse = await checkAuth();
            console.log('Réponse de l\'authentification:', authResponse);
            axios.post('http://localhost:5000/users/logout', {}, {
              headers: {
                'Content-Type': 'application/json',
              },
              withCredentials: true
            });
          } catch (error) {
            console.error('Erreur lors de l\'appel à checkAuth:', error);
          }
        };
        fetchData();
        navigate('/login');
      }, []);
  return <div>
       <p>Logout</p>
    </div>;
};

export default Logout;