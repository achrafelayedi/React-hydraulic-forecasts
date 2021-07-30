import React, { Component, Fragment, useEffect, useState } from "react";
import AngryJoe from "./AngryJoe";
//import * as Graphs from "./graphs";
import { Line } from "react-chartjs-2";
//import Desc from "./graphs/Desc";
import SectionP48600 from "./P84600";
import SectionPTGROLE from "./SectionPTGROLE";
import Section84800 from "./P84800";
import Angry from "./../img/angry.png";

class Comobox extends Component {
  state = {
    selectedCardType: "",
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
        <label className="card-selector-label">
          Séléctionner une section --
        </label>
        <select
          className="card-selector form-control"
          onChange={(e) => this.setState({ selectedCardType: e.target.value })}
        >
          <option></option>
          <option>P84.600</option>
          <option>PTGROLE</option>
          <option>P84.800</option>
        </select>
      </div>
    );
  }

  renderSelectedCard(selectedCardType) {
    if (!selectedCardType)
      return <AngryJoe text="Séléctionner une section s'il vous plaît" />;
    else if (selectedCardType === "P84.600") {
      return <SectionP48600 />;
    } else if (selectedCardType === "PTGROLE") {
      return <SectionPTGROLE />;
    } else if (selectedCardType === "P84.800") {
      return <Section84800 />;
    }
  }
}

export default Comobox;
