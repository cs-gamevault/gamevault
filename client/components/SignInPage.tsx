import React, { useState } from 'react';



interface LoginProps {
    onFormSwitch: (formType: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onFormSwitch }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>
            <h2>Login</h2>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            <button className="link-btn" onClick={() => onFormSwitch('register')}>Don't have an account? Sight up here.</button>
        </div>
    )

export default SignIn