import React from "react";
import Styled from "styled-components";

const Button_Start = Styled.button`
  background-color: blue;
  color: white;
  font-size: 14px;
  margin-left: 2px;
  border-radius: 5px;
  cursor: pointer;
`;
const Button_Reset = Styled.button`
  background-color: blue;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  margin: 8px 20px;
  cursor: pointer;
`;

class Timer extends React.Component {
  state = {
    isActive: false,
    secondsElapsed: 0, //time in seconds
  };

  getHours() {
    return ("0" + Math.floor(this.state.secondsElapsed / 3600)).slice(-2);
  }

  getMinutes() {
    return ("0" + Math.floor((this.state.secondsElapsed % 3600) / 60)).slice(
      -2
    );
  }

  /*  getSeconds() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  } */

  startTime = () => {
    this.setState({ isActive: true });

    this.countdown = setInterval(() => {
      this.setState(({ secondsElapsed }) => ({
        secondsElapsed: secondsElapsed + 1800,
      }));
    }, 1000);
  };

  resetTime = () => {
    clearInterval(this.countdown);
    this.setState({
      secondsElapsed: 0,
      isActive: false,
    });
  };

  pauseTime = () => {
    clearInterval(this.countdown);
    this.setState({ isActive: false });
  };

  render() {
    return (
      <div className="small-navigation">
        <div className="timer-container">
          <p>Animation temporelle</p>
          <span className="bloc-timer1"> {this.getHours()}</span>
          <span className="bloc-timer2"> :{this.getMinutes()}</span>
          {/* <span className="bloc-timer"> :{this.getSeconds()}</span> */}
        </div>
        <div>
          <Button_Start
            className="button-start-pause"
            onClick={this.state.isActive ? this.pauseTime : this.startTime}
          >
            Start/Pause
          </Button_Start>
          <Button_Reset className="button-reset" onClick={this.resetTime}>
            Reset
          </Button_Reset>
        </div>
      </div>
    );
  }
}

export default Timer;
