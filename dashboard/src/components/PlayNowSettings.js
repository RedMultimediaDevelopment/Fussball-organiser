import React from 'react';
import './PlayNowSettings.css'

export class PlayNowSettings extends React.Component {

  render() {
    return (
      

      <div className="PlayNowSettings">

        <div className="PlayNowSettings_players">

          <div className="PlayNowSettings_players_text">
          <h3>Aantal</h3>
          </div>

          <div className="PlayNowSettings_players_v">

             <div className="PlayNowSettings_players_1v1">
             </div>

             <div className="PlayNowSettings_players_2v2">
             </div>

          </div>
          
        </div>




        <div className="PlayNowSettings_table">

            <div className="PlayNowSettings_table_text">
            <h3>Tafel</h3>
            </div>

            <div className="PlayNowSettings_table_t">

            <div className="PlayNowSettings_table_t1">
            </div>

            <div className="PlayNowSettings_table_t2">
            </div>

            </div>
        </div>
        
        <div className="PlayNowSettings_start">
        START WEDSTRIJD
        </div>
          
      </div>

        );

      }


    }
