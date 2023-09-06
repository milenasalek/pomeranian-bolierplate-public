import './styles.css';
import obrazek from './zdjecie.jpg';

export const RWD = () => {
  return (
    <div>
      <img src={obrazek} className="mediaQueriesBox" />
    </div>
  );
};
