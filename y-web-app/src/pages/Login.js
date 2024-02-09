import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoginBg from '../assets/img/login_bg.png';
import Google from '../assets/img/google.svg';
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
    <section className='flex bg-[#F4F4F4]'>
      <div className='flex-1 overflow-hidden'>
        <img className='object-cover object-center w-full h-full' src={LoginBg} alt="login background"></img>
      </div>
      <div className='relative flex flex-col flex-1 h-screen justify-center text-center text-black'>
        <h1 className='font-bold text-5xl'>Welcome back</h1>
        <p>Enter your email and password to access your account</p>
        <form className='flex flex-col text-start mx-32 mt-12' onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <label className='text-lg' htmlFor="username">Email</label>
          <input className='input w-full bg-[#EEEEEE] mb-4' type="text" name='username' id='username' placeholder="Enter your email" required onChange={handleChange} />
          <label className='text-lg' htmlFor="password">Password</label>
          <input className='input w-full bg-[#EEEEEE] mb-4' type="password" name='password' id='password' placeholder="Enter your password" required onChange={handleChange} />
          <div className='flex justify-between'>
            <label className='mb-4 label cursor-pointer'>
              <input className='checkbox' type='checkbox' id='remember' name='remember' />
              <span className='label-text ml-2 text-base' htmlFor="remember">Remember me</span>
            </label>
            <a className='text-[#00ACFF] font-semibold py-2' href="/forgot-password">Forgot password ?</a>
          </div>
          <button className='btn btn-wide btn-neutral text-white font-bold bg-black hover:bg-[#2D2D2D]' type="submit">Sign in</button>
        </form>
        <button className='btn btn-outline font-bold mx-32 my-4 hover:bg-black hover:border-none' type="submit"><img className='w-6 h-8' src={Google} alt='logo google'></img> Sign in with google</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p className='absolute bottom-6 inset-x-1/4'>Don't have an account ? <a className='text-[#00ACFF] font-bold' href="/register">Sign up</a></p>
      </div>
    </section>
  );
};

export default Login;
