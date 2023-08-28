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

  const test = 'Tom';

  if (test === 'Sam') {
    console.log('Test jest równe Sam');
  }
  if (test === 'Tom') {
    console.log('Test jest równe Tom');
  }
  if (typeof test === 'string') {
    console.log('Test jest stringiem');
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
