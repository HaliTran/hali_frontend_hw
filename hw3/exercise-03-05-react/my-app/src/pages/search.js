import React, { useEffect, useState } from 'react';
import Home from './Home';
import axios from 'axios';

export default function Search() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://thronesapi.com/api/v2/Characters'
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log('The input value has changed!');
  };

  const handleButtonClick = () => {
    console.log('The button has been clicked');
  };

  return (
    <div>
      <Home />
      <h1>This is the Search Page!</h1>
      <div>
        <label htmlFor='character'>Enter a character name</label>
        <input
          type='text'
          id='character'
          name='character'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Search</button>
      </div>
    </div>
  );
}
