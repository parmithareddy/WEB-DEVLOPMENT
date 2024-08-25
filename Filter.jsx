import React, { useState } from 'react';
import './Filter.css';

const Filter = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredResponse, setFilteredResponse] = useState('');
    const [selectedOption, setSelectedOption] = useState('Numbers');

    const handleSubmit = () => {
        try {
            const data = JSON.parse(inputValue).data;
            let filteredData = [];

            if (selectedOption === 'Alphabets') {
                filteredData = data.filter(item => isNaN(item) && /^[A-Za-z]+$/.test(item));
            }
            if (selectedOption === 'Numbers') {
                filteredData = data.filter(item => !isNaN(item));
            }
            if (selectedOption === 'Highest Lowercase Alphabet') {
                const lowerCaseLetters = data.filter(item => /^[a-z]+$/.test(item));
                if (lowerCaseLetters.length > 0) {
                    const maxLetter = lowerCaseLetters.reduce((a, b) => (a > b ? a : b));
                    filteredData.push(maxLetter);
                }
            }
            setFilteredResponse(filteredData.join(','));
        } catch (error) {
            console.error('Invalid input:', error);
        }
    };

    return (
        <div className="inputs">
            <h3>Sample Output:</h3>
            <div className="input-section">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Enter JSON data'
                    className="json-input"
                />
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="dropdown"
                >
                    <option value="Alphabets">Alphabets</option>
                    <option value="Numbers">Numbers</option>
                    <option value="Highest Lowercase Alphabet">Highest Lowercase Alphabet</option>
                </select>
                <button onClick={handleSubmit} className="submit-btn">Submit</button>
            </div>
            <div className="response-section">
                <h4>Filtered Response</h4>
                <p>{filteredResponse}</p>
            </div>
        </div>
    );
};

export default Filter;
