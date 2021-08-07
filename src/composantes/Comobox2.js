import React, { Component, Fragment, useEffect, useState } from "react";
import AngryJoe from "./AngryJoe";
import Ptgrole from "./Ptgrole";
import Ptgrole1 from "./Ptgrole1";
import Ptgrole2 from "./Ptgrole2";
import Angry from "./../img/angry.png";
import Loading from "./../components/Loading";

class Comobox2 extends Component {
  state = {
    selectedCardType: "P78.000",
  };

  render() {
    //console.log(Graphs);
    return (
      <Fragment>
        <section className="app-section container">
          {this.renderCardSelector()}

          <div /* className="top-margin-small" */>
            {this.renderSelectedCard(this.state.selectedCardType)}
          </div>
        </section>
      </Fragment>
    );
  }

  renderCardSelector() {
    return (
      <div className="form-group top-margin-small">
        <label className="card-selector-label">Séléctionner un jour -- </label>
        {/* <div className="hey">
          <h1>Dernière simulation OSCAR : 12/05/2021 9:46</h1>
        </div> */}
        <select
          className="card-selector form-control"
          onChange={(e) => this.setState({ selectedCardType: e.target.value })}
        >
          <option>J</option>
          <option>J+1</option>
          <option>J+2</option>
        </select>
      </div>
    );
  }

  renderSelectedCard(selectedCardType) {
    /*  if (!selectedCardType)
      return <AngryJoe text="Séléctionner un jour s'il vous plaît" />; */
    if (selectedCardType === "J") {
      return <Ptgrole />;
    } else if (selectedCardType === "J+1") {
      return <Ptgrole1 />;
    } else if (selectedCardType === "J+2") {
      return <Ptgrole2 />;
    } else {
      return <Ptgrole />;
    }
  }
}

export default Comobox2;
