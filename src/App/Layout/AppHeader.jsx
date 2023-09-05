import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';

import { SetIcon } from '../Components/Icons/SetIcon';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="headerUserMenu">
        <SetIcon />
        <HeaderMenu />
      </div>
    </header>
  );
}
