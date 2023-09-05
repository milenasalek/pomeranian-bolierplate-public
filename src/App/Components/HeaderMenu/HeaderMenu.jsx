import './styles.css';

import { ToggleArrow } from '../Icons/ToggleArrow';

export const HeaderMenu = () => {
  return (
    <div className="headerMenu">
      <div className="headerMenuIcon"></div>
      <div className="headerUser">
        <p>Radek</p>
        <p>kursant</p>
      </div>
      <ToggleArrow />
    </div>
  );
};
