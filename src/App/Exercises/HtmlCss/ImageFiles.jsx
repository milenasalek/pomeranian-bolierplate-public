import './styles.css';

import first from './1.jpeg';
import second from './2.png';
import third from './3.svg';

export const ImageFiles = () => {
  return (
    <div className="images">
      <img src={first} alt="potwór" />
      <img src={second} alt="pies" />
      <img src={third} alt="kiwi" />
    </div>
  );
};
