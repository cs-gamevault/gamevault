import React, { useState } from "react";



const SignUp = (props) => {
        const [email, setEmail] = useState('');
        const [pass, setPass] = useState('');
        const [name, setName] = useState('');
    


        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(email);
        }
    


        return (
            <div>
                <h2>Sign Up</h2>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            <button className="link-btn" onClick={() => onFormSwitch('login')}>Login here</button>
        </div>
    )
}

  export default SignUp;

