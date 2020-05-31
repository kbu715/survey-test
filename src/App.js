import React, { Component } from 'react';
import './App.css';

class Sex extends Component {
  constructor() {
    super();

    this.state = {
      sex: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      sex: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    alert(`당신은 ${this.state.sex}.`);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>당신의 성별은?</p>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="남자"
                  checked={this.state.sex === "남자"}
                  onChange={this.handleChange}
                />
            남자
          </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="여자"
                  checked={this.state.sex === "여자"}
                  onChange={this.handleChange}
                />
            여자
          </label>
            </li>
          </ul>

          <button type="submit">선택</button>
        </form>
      </div>
    );
  }
}

class Animal extends Component {
  constructor() {
    super();

    this.state = {
      animal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      animal: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    alert(`당신은 ${this.state.animal}를 좋아합니다.`);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>당신이 좋아하는 동물은?</p>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="호랑이"
                  checked={this.state.animal === "호랑이"}
                  onChange={this.handleChange}
                />
            호랑이
          </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="코끼리"
                  checked={this.state.animal === "코끼리"}
                  onChange={this.handleChange}
                />
            코끼리
          </label>
            </li>
          </ul>

          <button type="submit">선택</button>
        </form>
      </div>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <Sex></Sex>
        <Animal></Animal>
      </div>
    );
  }
}

export default App;


