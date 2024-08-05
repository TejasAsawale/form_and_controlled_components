import React, { useState } from 'react';
import '../components/SettingsForm.css';

const SettingsForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notifications, setNotifications] = useState(false);
    const [theme, setTheme] = useState('light');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleNotificationsChange = (e) => setNotifications(e.target.checked);
    const handleThemeChange = (e) => setTheme(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { username, email, password, notifications, theme };
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="settings-form">
        <h1>Settings Form</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="notifications">Notifications:</label>
            <input
                type="checkbox"
                id="notifications"
                checked={notifications}
                onChange={handleNotificationsChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="theme">Theme:</label>
            <select id="theme" value={theme} onChange={handleThemeChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            </div>
            <div className="form-group">
            <button type="submit">Save Settings</button>
            </div>
        </form>
        </div>
    );
};

export default SettingsForm;
