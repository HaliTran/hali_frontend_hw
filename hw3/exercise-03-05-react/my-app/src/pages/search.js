import { React, useState } from 'react';
import Home from './Home';

export default function Search(prop) {
  const [inputValue, setInputValue] = useState('');
  const [characterInfo, setCharacterInfo] = useState(false);
  const { character } = prop;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    for (let i = 0; i < character.length; ++i) {
      if (character[i].firstName.toLowerCase() === inputValue.toLowerCase()) {
        const info = {
          fullName: character[i].fullName,
          imageUrl: character[i].imageUrl,
        };
        setCharacterInfo(info);
        return;
      }
    }
    setCharacterInfo(false);
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <div>
      <Home />
      <h1 className='text-center'>Game of Thrones Character</h1>
      <div className='w-50 m-auto mt-3 text-center'>
        <div>
          <label htmlFor='character' className='form-label'>
            Enter a character's first name:
          </label>
          <input
            type='text'
            id='character'
            name='character'
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
            className='form-control'
          />
        </div>
        <div className='mt-3'>
          <button onClick={handleButtonClick} className='btn btn-primary'>
            Search
          </button>
        </div>
      </div>
      {characterInfo && (
        <div className='w-50 m-auto mt-4 text-center'>
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
