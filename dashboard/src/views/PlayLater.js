import React from 'react';
import {Header } from '../components/Header';
import {PrevButton } from '../components/PrevButton';

import { withRouter } from "react-router";
import {Link
} from "react-router-dom";

export class PlayLater extends React.Component {


render() {
  return (
    <div>
    <Header />

    <Link to="/playGame">
    <PrevButton />
    </Link>

    </div>
    );
  }
}
