import React from 'react';
import {Header } from '../components/Header';
import {BurgerMenu } from '../components/BurgerMenu';
import {Leaderboard} from '../components/Leaderboard';

export class Dashboard extends React.Component {


render() {
  return (
    <div>
    <Header />
    <BurgerMenu />
    <Leaderboard />

    </div>
    );
  }
}
