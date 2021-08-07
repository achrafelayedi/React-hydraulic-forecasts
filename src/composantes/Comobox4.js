import React, { Component, Fragment, useEffect, useState } from "react";
import AngryJoe from "./AngryJoe";
import Ptcordon from "./Ptcordon";
import Ptcordon1 from "./Ptcordon1";
import Ptcordon2 from "./Ptcordon2";
import Angry from "./../img/angry.png";

class Comobox4 extends Component {
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
      return <Ptcordon />;
    } else if (selectedCardType === "J+1") {
      return <Ptcordon1 />;
    } else if (selectedCardType === "J+2") {
      return <Ptcordon2 />;
    } else return <Ptcordon />;
  }
}

export default Comobox4;
