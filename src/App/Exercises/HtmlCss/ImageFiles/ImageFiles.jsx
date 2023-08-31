import './styles.css';

import first from './1.jpeg';
import second from './2.png';
import third from './3.svg';
import zdjecie2 from './zdjecie2.png';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export const ImageFiles = () => {
  return (
    <div className="images">
      <img src={first} alt="potwór" />
      <img src={second} alt="pies" />
      <img src={third} alt="kiwi" />
      <ing src={zdjecie2} alt="Zdjecie" />
      <RoundImage src={zdjecie2} />
    </div>
  );
};
