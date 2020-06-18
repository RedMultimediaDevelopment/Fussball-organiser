import React from 'react';
import './PlayButton.css';
import pbNormal from '../assets/pb-normal.png';

export class PlayButton extends React.Component {

  render() {
    return (
      <div className="PlayButton">
          <div className="PlayButton_text">
          <h1>Wedstrijd</h1>
          <h1>spelen</h1>
          </div>

      <div className= "PlayButton_background"> </div>

      </div>
        );
      }
    }


