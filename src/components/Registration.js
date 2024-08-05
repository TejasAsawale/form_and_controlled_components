import React, { useState } from 'react';
import '../components/Registration.css';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
        username,
        email,
        password,
        };
        console.log('User Data:', userData);
    };

    return (
        <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <h2>Register</h2>
        <form className="Register-Container" onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                style={{ width: '100%' }}
                required
                className='UsernameRegister'
            />
            </div>
            <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                style={{ width: '100%' }}
                required
                className='EmailRegister'
            />
            </div>
            <div style={{ marginBottom: '15px' }}>
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                style={{ width: '100%' }}
                required
                className='PasswordRegister'
            />
            </div>
            <button className="RegisterButton" type="submit" style={{ width: '100%' }}>
            Register
            </button>
        </form>
        </div>
    );
};

export default Registration;
