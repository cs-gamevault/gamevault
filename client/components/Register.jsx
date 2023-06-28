import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ApplicationContext } from '../AppContext';

import './LoginRegister.scss';

const Register = () => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState();

  const { setUser_id } = useContext(ApplicationContext);

  const handleSubmit = async event => {
    event.preventDefault();

    const user = {
      username: event.target[0].value,
      password: event.target[1].value,
    };

    try {
      const res = fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify(user),
      });

      if ((await res).ok) {
        //  Call setUser_id() and pass in the id of the user
        setUser_id(res.user_id);
        navigate('/wishlist');
      } else {
        setRegisterError(<span>Username already exists</span>);
      }
    } catch (err) {
      console.log(`Error in Register.jsx: ${err}`);
    }
  };

  return (
    <div class='loginregister'>
      <h2>Register</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='input'>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" placeholder="Username" />
        </div>
        <div className='input'>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Password" />
        </div>
        {registerError}
        <div className='buttons'>
          <Button variant="contained" type="submit">Register</Button>
          <NavLink to="/"><Button variant="outlined">Login</Button></NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
