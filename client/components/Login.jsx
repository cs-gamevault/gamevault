import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const loginInfo = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    console.log('NEW LOGIN: ', loginInfo);
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(loginInfo),
    })
      .then(res => {
        if (res.ok) {
          const navigate = useNavigate();
          navigate('/wishlist');
        }
      })
      .catch(err => console.log('error from Join-Post-Request ERROR: ', err));
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" placeholder="Username..." />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Password..." />
        <Button variant="contained" type="submit">
          Log In
        </Button>

        <NavLink to="/register">
          <Button variant="outlined">Register</Button>
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
