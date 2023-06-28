import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { ApplicationContext } from '../AppContext';

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState();

  const { setUser_id } = useContext(ApplicationContext);

  const handleSubmit = async event => {
    event.preventDefault();

    const user = {
      username: event.target[0].value,
      password: event.target[1].value,
    };

    try {
      const res = fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify(user),
      });

      if ((await res).ok) {
        //  Call setUser_id() and pass in the id of the user
        navigate('/wishlist');
      } else {
        setLoginError(<span>Invalid username or password</span>);
      }
    } catch (err) {
      console.log(`Error in Login.jsx: ${err}`);
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" placeholder="Username..." />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Password..." />
        {loginError}
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
