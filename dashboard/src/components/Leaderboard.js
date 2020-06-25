import React from 'react';
import './Leaderboard.css'

export class Leaderboard extends React.Component {

  render() {
    return (
      <div class="Leaderboard">
          <div className="Leaderboard_text">
          <h1>Algemeen klassement</h1>
          </div>

          <hr className="Leaderboard_line"/>

          <div className="Leaderboard_index">
          Score
          </div>

        <div className="Leaderboard_data">
          <div className="Leaderboard_item">
            <div className="Leaderboard_item_rank">1</div>
            <div className="Leaderboard_item_name">Jan</div>
            <div className="Leaderboard_item_score">560</div>
          </div>
          <div className="Leaderboard_item">
            <div className="Leaderboard_item_rank">2</div>
            <div className="Leaderboard_item_name">Piet</div>
            <div className="Leaderboard_item_score">530</div>
          </div>
          <div className="Leaderboard_item">
            <div className="Leaderboard_item_rank">3</div>
            <div className="Leaderboard_item_name">Mees</div>
            <div className="Leaderboard_item_score">490</div>
          </div>
          <div className="Leaderboard_item">
            <div className="Leaderboard_item_rank">4</div>
            <div className="Leaderboard_item_name">Hans</div>
            <div className="Leaderboard_item_score">420</div>
          </div>
          <div className="Leaderboard_item">
            <div className="Leaderboard_item_rank">5</div>
            <div className="Leaderboard_item_name">Piet</div>
            <div className="Leaderboard_item_score">390</div>
          </div>
          <div className="Leaderboard_item">
            <div className="Leaderboard_item_rank">6</div>
            <div className="Leaderboard_item_name">Erik</div>
            <div className="Leaderboard_item_score">380</div>
          </div>
          <div className="Leaderboard_item">
            <div className="Leaderboard_item_rank">7</div>
            <div className="Leaderboard_item_name">Frans</div>
            <div className="Leaderboard_item_score">320</div>
          </div>
          <div className="Leaderboard_item">
            <div className="Leaderboard_item_rank">8</div>
            <div className="Leaderboard_item_name">Jelle</div>
            <div className="Leaderboard_item_score">300</div>
          </div>
        </div>
      </div>
        );
      }
    }
