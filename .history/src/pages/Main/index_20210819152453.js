import React, { Component } from 'react';
import './main.css';
import TextField from '@material-ui/core/TextField';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      isLoginView: true,
      user_id: '',
      pwd: '',
    };

    this.changeBtnNum = this.changeBtnNum.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  // 로그인 화면에서 가입버튼 누르면
  changeBtnNum() {
    this.setState({ isLoginView: false });
  }

  // 가입버튼 누르면 id 중복체크 하고 insert
  signUp() {
    this.setState({ isLoginView: true });
  }

  goDiary = (e) => {
    // e.preventDefault();

    if (
      this.state.user_id === '' ||
      this.state.user_id === 'null' ||
      this.state.pwd === '' ||
      this.state.pwd === 'null'
    ) {
      e.preventDefault();
    }

    fetch('http://localhost:3003/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: this.state.user_id,
        pwd: this.state.pwd,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    this.setState({
      user_id: '',
      pwd: '',
    });
  };

  render() {
    return (
      <div id="container">
        <div>
          <TextField
            id="loginput_box"
            label="ID"
            name="user_id"
            value={this.state.user_id}
          />
          {/* <input type="text" placeholder='ID'></input> */}
        </div>
        <div>
          <TextField
            id="loginput_box"
            label="PW"
            name="pwd"
            value={this.state.pwd}
          />
          {/* <input type="text" placeholder="PW"></input> */}
        </div>

        {this.state.isLoginView ? (
          <div id="btn_box">
            <button id="sign_up_btn" onClick={this.changeBtnNum}>
              가입
            </button>
            <button id="login_btn" onClick={this.goDiary}>
              일기
            </button>
          </div>
        ) : (
          <div id="btn_box">
            <button id="sign_up_btn" onClick={this.signUp}>
              가입
            </button>
          </div>
        )}
      </div>
    );
  }
}
