import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Icon from '../assets/img/icon.png';
import LoginBg from '../assets/img/login-bg.png';
import checkAuth from '../utils/authFunctions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authResponse = await checkAuth();
        console.log('Réponse de l\'authentification:', authResponse);
        if (authResponse.status === 200) {
          navigate('/');
        }
      } catch (error) {
        console.error('Not connected');
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/users/login', loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });

      if (response.status === 200 && response.data.message === 'Login successful') {
        const authResponse = await checkAuth();
        if (authResponse.status === 200) {
          navigate('/');
        }
      } else {
        setError('Identifiants invalides. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Erreur lors de la connexion. Veuillez réessayer.');
    }
  };

  return (
    <section className='login-section'>
      <div className='login-div'>
        <img src={Icon} alt="Icon"></img>
        <h1>Welcome back</h1>
        <form className='login-form' onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <input type="text" name='username' id='username' placeholder="Username ID / Mail" required onChange={handleChange} />
          <input type="password" name='password' id='password' placeholder="Password" required onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>Don't have an account ? <a href="/register">Sign in</a></p>
      </div>
      <img src={LoginBg} alt="Login Background" className='background-login-image'></img>
      <p className='copyright'>© Copyright 2023 YMedia</p>
    </section>
  );
};

export default Login;
