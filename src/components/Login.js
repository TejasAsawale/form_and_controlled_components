import React, { useState } from 'react';
import '../components/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <h2>Login</h2>
        <form className="Login-Container" onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                style={{ width: '100%' }}
                required
                className='EmailLogin'
            />
            </div>
            <div style={{ marginBottom: '15px' }}>
            <label>Password:</label>
            <input
                type='password'
                value={password}
                onChange={handlePasswordChange}
                style={{ width: '100%' }}
                required
                className='PasswordLogin'
            />
            </div>
            <button type="submit"  className='LoginButton' style={{ width: '100%' }}>
            Login
            </button>
        </form>
        </div>
    );
};

export default Login;
