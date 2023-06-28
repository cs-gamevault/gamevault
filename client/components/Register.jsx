import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';



const Register = () => {
  const navigate = useNavigate();
  
  const handleSubmit = e => {
    e.preventDefault();
    const userInfo = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    console.log('NEW USER: ', userInfo);
    fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(userInfo),
    })
      .then(res => {
        if (res.ok) {
          navigate('/wishlist');
        }
        if (!res.ok) {
          console.log('Username already exists.')
        }
      })
      .catch(err => console.log('error from Join-Post-Request ERROR: ', err));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" placeholder="Username..." />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Password..." />
        <Button variant="contained" type="submit">
          Register
        </Button>

        <NavLink to="/">
          <Button variant="outlined">Return to Login</Button>
        </NavLink>
      </form>
    </div>
  );
};

export default Register;
