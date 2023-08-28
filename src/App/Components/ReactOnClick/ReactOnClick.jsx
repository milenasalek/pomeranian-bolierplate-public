import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  const [value, setValue] = useState(5);

  const [text, setText] = useState('Odliczanie');

  function handleClick() {
    if (value !== 0) {
      setValue(value - 1);
    }
    if (value <= 1) {
      setText('Odliczanie zakonczone');
    }
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <button />

      <span>Odliczanie zakończone</span>
    </div>
  );
};
