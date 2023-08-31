import './styles.css';

import logoPomeranian from './pomeranian-icon.png';

import zdjecie from './zdjecie.jpg';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function ImageFiles() {
  return (
    <div>
      <img src={logoPomeranian} alt="Pomeranian logo" />

      <img src={zdjecie} alt="Zdjęcie" />
      <RoundImage src={zdjecie} size={`300px`} />
      <RoundImage src={logoPomeranian} size={`300px`} />
    </div>
  );
}
