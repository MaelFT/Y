import React, { useEffect } from 'react';
import { checkAuth } from '../utils/authFunctions';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authResponse = await checkAuth();
        console.log('Réponse de l\'authentification:', authResponse);
        if (authResponse === undefined) {
          navigate('/login');
        }
      } catch (error) {
        console.error('Erreur lors de l\'appel à checkAuth:', error);
      }
    };
    fetchData();
  }, []);

  return <div>
       <p>Home Page</p>
    </div>;
};

export default Home;