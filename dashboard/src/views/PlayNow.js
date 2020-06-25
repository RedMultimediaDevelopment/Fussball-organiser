import React from 'react';
import {Header } from '../components/Header';
import {PrevButton } from '../components/PrevButton';

import {ChoosePlayers} from '../components/ChoosePlayers';
import {ChooseTable} from '../components/ChooseTable';
import {StartGame} from '../components/StartGame';


import { withRouter } from "react-router";
import {Link
} from "react-router-dom";

export class PlayNow extends React.Component {


render() {
  return (
    <div>
    <Header />

    <Link to="/playGame">
    <PrevButton />
    </Link>

    <ChoosePlayers />
    <ChooseTable />

    <Link to="/dashboard">
    <StartGame />
    </Link>

    </div>
    );
  }
}
