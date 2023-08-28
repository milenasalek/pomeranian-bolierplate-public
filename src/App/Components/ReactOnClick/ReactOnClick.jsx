import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  const [value, setValue] = useState(' ');

  function handleClick() {
    setValue(' ');
  }

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div>
      <h1>Cześć!</h1>

      <input tpe="text" value={value} onChange={handleChange} />

      <p>
        <strong>{value}</strong>
      </p>
    </div>
  );
};
