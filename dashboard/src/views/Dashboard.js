import React from 'react';
import {Header } from '../components/Header';
import {BurgerMenu } from '../components/BurgerMenu';
import {Leaderboard} from '../components/Leaderboard';
import {PlayButton} from '../components/PlayButton';
import {ProfileButton} from '../components/ProfileButton';
import {NextGames} from '../components/NextGames';
import {PreGames} from '../components/PreGames';
import {Events} from '../components/Events';

import { withRouter } from "react-router";
import {Link
} from "react-router-dom";

export class Dashboard extends React.Component {


render() {
  return (
    <div>
    <Header />
    <BurgerMenu />
    <Leaderboard />

    <Link to="/playGame">
    <PlayButton />
    </Link>

    <ProfileButton />
    <NextGames />
    <PreGames />
    <Events />

    </div>
    );
  }
}
