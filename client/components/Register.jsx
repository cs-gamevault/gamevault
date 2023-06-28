import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';



const Register = () => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      username: event.target[0].value,
      password: event.target[1].value,
    };

    try {
      const res = fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify(user)
      })

      if ((await res).ok) {
        navigate('/wishlist');
      }
      else {
        setRegisterError(<span>Username already exists</span>);
      }
    }
    catch (err) {
      console.log(`Error in Register.jsx: ${err}`)
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" placeholder="Username..." />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Password..." />
        {registerError}
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
