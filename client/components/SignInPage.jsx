import React, { useState } from 'react';



const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }




    return (
        <div>
            <h2>Sign In</h2>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Sigh In</button>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign up.</button>
        </div>
    )

    
}

export default SignIn
