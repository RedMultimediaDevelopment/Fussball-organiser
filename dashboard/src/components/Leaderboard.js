import React from 'react';
import './Leaderboard.css'

export class Leaderboard extends React.Component {

  render() {
    return (
      <div class="Leaderboard">
          <div className="Leaderboard_header">
          <h1>Algemeen klassement</h1>
          </div>
          <div className="Leaderboard_index">
            <ul>
              <li>#</li>
              <li>Name</li>
              <li>Last 30 days</li>
              <li>All time</li>
            </ul>
          </div>
        <div className="Leaderboard_data">
        <ul>
          <li>1</li>
          <li>Piet</li>
          <li>15</li>
          <li>10</li>
        </ul>
        </div>
      </div>
        );
      }
    }
