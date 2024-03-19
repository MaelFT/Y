import React, { useState } from 'react';
import axios from 'axios';
import LoginBg from '../assets/img/login_bg.png';
import Google from '../assets/img/google.svg';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const [error, setError] = useState(null);
  const [errorColor, setErrorColor] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = async () => {
    try {
      const response = await axios.post('http://localhost:5000/users/create-user', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      if (data.status === 'error') {
        setErrorColor('red');
      } else {
        setErrorColor('green');
      }
      setError(data.message);
      console.log('Réponse du serveur:', data);
    } catch (error) {
      setError('Une erreur s\'est produite lors de la soumission du formulaire.');
    }
  };

  return (
    <section className='flex bg-[#F4F4F4]'>
      <div className='flex-1 overflow-hidden shadow-2xl'>
        <img className='object-cover object-center w-full h-full' src={LoginBg} alt="login background"></img>
      </div>
      <div className='relative flex flex-col flex-1 h-screen justify-center text-center text-black'>
        <h1 className='font-bold text-5xl'>Create an account</h1>
        <p>Enter your details to create an account</p>
        <form className='flex flex-col mx-32 mt-8' onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
          <label className='text-left block text-lg' htmlFor="username">Username</label>
          <input className='input w-full bg-[#EEEEEE] mb-4' type="text" name="username" placeholder="Enter your username" required onChange={handleChange} />
          <label className='text-left block text-lg' htmlFor="email">Email</label>
          <input className='input w-full bg-[#EEEEEE] mb-4' type="email" name="email" placeholder="Enter your email" required onChange={handleChange} />
          <label className='text-left block text-lg' htmlFor="password">Password</label>
          <input className='input w-full bg-[#EEEEEE] mb-4' type="password" name="password" placeholder="Enter your password" required onChange={handleChange} />
          <label className='text-left block text-lg' htmlFor="confirm_password">Confirm password</label>
          <input className='input w-full bg-[#EEEEEE] mb-4' type="password" name="confirm_password" placeholder="Enter your confirm password" required onChange={handleChange} />
          <button className='btn btn-wide btn-neutral text-white font-bold bg-black hover:bg-[#2D2D2D]' type="submit">Sign up</button>
        </form>

        <button className='btn btn-outline font-bold mx-32 my-4 hover:bg-black hover:border-none' type="submit"><img className='w-6 h-8' src={Google} alt='logo google'></img>Sign up with google</button>
        {error && <p style={{ color: errorColor }}>{error}</p>}
        <p className='absolute bottom-6 inset-x-1/4'>Already a member ? <a className='text-[#00ACFF] font-bold' href="/login">Sign in</a></p>
      </div>
    </section>
  );
};

export default Login;
