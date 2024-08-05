import React, { useState } from 'react';
import '../components/Survey.css';

const Survey = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleFeedbackChange = (e) => setFeedback(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const surveyData = {
        name,
        age,
        gender,
        feedback,
        };
        console.log('Survey Data:', surveyData);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2>Survey Form</h2>
        <form className="Survey-Container" onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                style={{ width: '100%' }}
                required
                className='SurveyName'
            />
            </div>
            <div style={{ marginBottom: '15px' }}>
            <label>Age:</label>
            <input
                type="number"
                value={age}
                onChange={handleAgeChange}
                style={{ width: '100%' }}
                required
                className='SurveyAge'
            />
            </div>
            <div style={{ marginBottom: '15px' }}>
            <label>Gender:</label>
            <select
                value={gender}
                onChange={handleGenderChange}
                style={{ width: '100%' }}
                required
                className='SurveyGender'
            >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
            <label>Feedback:</label>
            <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                style={{ width: '100%' }}
                required
            ></textarea>
            </div>
            <button className='SurveyButton' type="submit" style={{ width: '100%' }}>
            Submit
            </button>
        </form>
        </div>
    );
};

export default Survey;
