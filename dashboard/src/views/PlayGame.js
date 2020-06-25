import React from 'react';
import {Header } from '../components/Header';
import {PrevButton } from '../components/PrevButton';
import {PlayNow } from '../components/PlayNow';
import {PlayLater } from '../components/PlayLater';

import { withRouter } from "react-router";
import {Link
} from "react-router-dom";

export class PlayGame extends React.Component {


render() {
  return (
    <div>
    <Header />

    <Link to="/dashboard">
    <PrevButton />
    </Link>

    <Link to="/playNow">
    <PlayNow />
    </Link>

    <Link to="/playLater">
    <PlayLater />
    </Link>

    </div>
    );
  }
}
