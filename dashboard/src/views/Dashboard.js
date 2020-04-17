import React from 'react';
import {Header } from '../components/Header';
import {BurgerMenu } from '../components/BurgerMenu';
import {Leaderboard} from '../components/Leaderboard';
import {PlayButton} from '../components/PlayButton';
import {ProfileButton} from '../components/ProfileButton';

export class Dashboard extends React.Component {


render() {
  return (
    <div>
    <Header />
    <BurgerMenu />
    <Leaderboard />
    <PlayButton />
    <ProfileButton />

    </div>
    );
  }
}
