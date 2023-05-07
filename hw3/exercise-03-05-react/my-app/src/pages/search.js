import React, { useEffect, useState } from 'react';
import Home from './Home';
import axios from 'axios';

export default function Search() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [characterInfo, setCharacterInfo] = useState(false);

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
  };

  const handleButtonClick = () => {
    let info;

    for (let i = 0; i < data.length; ++i) {
      if (data[i].firstName.toLowerCase() === inputValue.toLowerCase()) {
        info = {
          fullName: data[i].fullName,
          imageUrl: data[i].imageUrl,
        };
        setCharacterInfo(info);
        return;
      }
    }
    setCharacterInfo(false);
  };

  return (
    <div>
      <Home />
      <h1>Game of Thrones Character</h1>
      <div>
        <label htmlFor='character'>Enter a character name: </label>
        <input
          type='text'
          id='character'
          name='character'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Search</button>
      </div>
      {characterInfo && (
        <div>
          <h1>{characterInfo.fullName}</h1>
          <img
            src={characterInfo.imageUrl}
            alt={`GOT character ${characterInfo.fullName}`}
          />
        </div>
      )}
    </div>
  );
}
