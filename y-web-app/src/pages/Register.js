import React, { useState } from 'react';
import axios from 'axios';
import Icon from '../assets/img/icon.png';
import LoginBg from '../assets/img/login-bg.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    full_name: ''
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
    <section className='login-section'>
      <div className='login-div'>
        <img src={Icon} alt="Icon"></img>
        <h1>Create a new account</h1>
        <form className='login-form' onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
          <div>
            <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
            <input type="text" name="full_name" placeholder="Full Name" required onChange={handleChange} />
          </div>
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <input type="password" name="confirm_password" placeholder="Confirm password" required onChange={handleChange} />
          <button type="submit">Register</button>
        </form>
        {error && <p style={{ color: errorColor }}>{error}</p>}
        <p>Already a member ? <a href="/login">Log in</a></p>
      </div>
      <img src={LoginBg} alt="Login Background" className='background-login-image'></img>
      <p className='copyright'>© Copyright 2023 YMedia</p>
    </section>
  );
};

export default Login;
