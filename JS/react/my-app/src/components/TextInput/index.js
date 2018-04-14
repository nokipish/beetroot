/* REACT */
import React from 'react';

/* STYLES */
import './styles.css';

const TextInput = ({ name, placeholder, value, onChange, errortext }) => (
  <div>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {
      errortext
        ? <p>{errortext}</p>
        : null
    }
  </div>
);

export default TextInput;