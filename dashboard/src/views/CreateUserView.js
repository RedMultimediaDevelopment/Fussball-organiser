import React from 'react';
import {LoginBox} from '../components/LoginBox';
import {CreateUser} from '../components/CreateUserBox';

export class CreateUserView extends React.Component {

  render() {
    return (
      <div style={{backgroundColor:"#e30514", height:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <CreateUser />
          <div className="copyright">
              <p> Copyright &copy; 2020 ~ Fussball Organiser</p>
          </div>
      </div>
    );
  }
}
