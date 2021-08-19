import React from "react";

class Testy extends React.Component {
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

  getSeconds() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  }

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
      <div className="navigation">
        <div className="imgreact">
          <img
            style={{ height: 110, width: 100 }}
            src={require("./../img/react_img.png").default}
          ></img>
          <h1 className="Title">
            Système d'information pour visualiser les prévisions hydrauliques
          </h1>
        </div>

        <div className="App">
          <div className="timer-container">
            <span className="bloc-timer"> {this.getHours()}</span>
            <span className="bloc-timer"> :{this.getMinutes()}</span>
            <span className="bloc-timer"> :{this.getSeconds()}</span>
          </div>
          <div>
            <button
              onClick={this.state.isActive ? this.pauseTime : this.startTime}
            >
              Start/Pause
            </button>
            <button onClick={this.resetTime}>Reset</button>
          </div>
        </div>

        <div className="infoLogciels">
          <div className="imgcnr">
            <a href="http://cnr.tm.fr">
              <img
                style={{ height: 110, width: 100 }}
                src={require("./../img/cnr_logo.png").default}
              ></img>
            </a>
          </div>
          <div className="imgcnr1">
            <span className="membre">[DEFAULT]</span>
            <br />
            <span className="version">VERSION : 1</span>
            <br />
            <span className="web_gis_OSCAR">WEB GIS OSCAR</span>
            <br />
            <span className="version">Heure Locale</span>
            <div>
              <input
                className="img_uk_fr"
                type="image"
                src={require("./../img/uk.png").default}
              ></input>
              <input
                className="img_uk_fr"
                type="image"
                src={require("./../img/fr.png").default}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testy;
