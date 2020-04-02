import React from 'react';
import './BurgerMenu.css'
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
      <a className="menu-item" href="#"><FontAwesomeIcon icon={faUser} /> Account</a>
      </Menu>
    );
  }
}
