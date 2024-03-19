import React, { useEffect } from 'react';
import { checkAuth } from '../utils/authFunctions';
import { useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authResponse = await checkAuth();
        console.log('Réponse de l\'authentification:', authResponse);
        if (authResponse === undefined) {
          navigate('/');
        }
      } catch (error) {
        console.error('Erreur lors de l\'appel à checkAuth:', error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <section className='bg-[#F4F4F4] h-screen'>
        <Navigation />
        <p>Home Page</p>
      </section>
    );
};

export default Home;