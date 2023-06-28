import React, { useState } from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";


const Register = () => {
    const handleSubmit = e => {
      e.preventDefault();
      const userInfo = {
        username: e.target[0].value,
        password: e.target[1].value,
      };
      console.log('NEW USER: ', userInfo);
      fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify(userInfo),
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
        <h2>Register</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="Username..." />
          <label htmlFor="password">Password</label>
          <input id="password" type="text" placeholder="Password..." />
          <Button variant="contained" type="submit" onClick={e => handleSubmit(e)}>
            Register
          </Button>
          <NavLink to="/">
            <Button variant="outlined">Return to Login</Button>
          </NavLink>
        </form>
      </div>
    );
}

  export default Register;

