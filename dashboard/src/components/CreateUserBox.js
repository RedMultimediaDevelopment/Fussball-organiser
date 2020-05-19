import React from 'react';
import './LoginBox.css'
import { withRouter } from "react-router";

const CreateUserInput = ({onChange, value, placeholder, password}) => (
  <div className="wrap-input100 validate-input m-b-10" data-validate="password is required">
    <input onChange={onChange} password={password} value={value} class="input100 placeholder0 s1-txt1" type="text" placeholder={placeholder} />
    <span class="focus-input100"></span>
  </div>
)


export class CreateUserComponent extends React.Component {


 constructor(props){
   super(props);
   this.state = { username: '',password: '' };
 }

 onUsernameChange = ({ target }) => {
    this.setState({ username: target.value })
 };
 onPasswordChange = ({ target }) => {
    this.setState({ password: target.value })
 };

 createUser = () => {
   const { username, password } = this.state;


   fetch('/v1/user', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ username, password }),

   })

 }
  render() {
    const {
      username,
      password,

    } = this.state;

    return (

      <div id="LoginBox" class="bg0 wsize1 bor1 p-l-45 p-r-45 p-t-50 p-b-18 p-lr-15-sm">
        <h3 className="l1-txt3 txt-center p-b-43">
        <h3>Create User</h3>
        </h3>

        <div class="w-full validate-form" >
          <CreateUserInput onChange={this.onUsernameChange} value={username} placeholder={'Username'}/>
          <CreateUserInput onChange={this.onPasswordChange} value={password} password="Password" placeholder={'Password'}/>

          <button class="flex-c-m size2 s1-txt2 how-btn1 trans-04" onClick={this.createUser}>
        Create User
          </button>
        </div>
      </div>
    );
  }
}



export const CreateUser = withRouter(CreateUserComponent);
