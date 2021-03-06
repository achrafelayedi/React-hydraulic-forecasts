import React, { Component, Fragment, useEffect, useState } from "react";
import AngryJoe from "./AngryJoe";
//import { Line } from "react-chartjs-2";
import SectionP84600 from "./P84600";
import SectionPTGROLE from "./SectionPTGROLE";
import Section84800 from "./P84800";
import Section63800 from "./Section63800";
import Section638001 from "./Section638001";
import Section638002 from "./Section638002";
import Section638003 from "./Section638003";
import Angry from "./../img/angry.png";

class Comobox extends Component {
  state = {
    selectedCardType: "P84.600",
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
          {/* <option></option> */}
          <option>J</option>
          <option>J-1</option>
          <option>J+1</option>
          <option>J+2</option>
        </select>
      </div>
    );
  }

  renderSelectedCard(selectedCardType) {
    /* if (!selectedCardType)
      return <AngryJoe text="Séléctionner un jour s'il vous plaît" />; */
    if (selectedCardType === "J-1") {
      return <Section638001 />;
    } else if (selectedCardType === "J") {
      return <Section63800 />;
    } else if (selectedCardType === "J+1") {
      return <Section638002 />;
    } else if (selectedCardType === "J+2") {
      return <Section638003 />;
    } else return <Section63800 />;
  }
}

export default Comobox;
