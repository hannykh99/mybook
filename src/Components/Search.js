import React, { useState } from 'react';
import data from '../Components/ListData.json';
import './Search.css';

export default function Search() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log('search', searchTerm);
  };

  return (
    <div className="search-container">
    
      <div className="search-inner ">
        <input type="text" value={value} onChange={onChange} />
        <button onClick={() => onSearch(value)}>search</button>
      </div>
      <div className="dropdown">
        {data
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const fullName = item.full_name.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              key={item.full_name}
              onClick={() => onSearch(item.full_name)}
              className="dropdown-row"
            >
              {item.full_name}
            </div>
          ))}
      </div>
    </div>
  );
}