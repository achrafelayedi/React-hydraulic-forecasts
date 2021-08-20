import React, { Component, Fragment, useEffect, useState } from "react";
import Defaultgraphesection from "./Defaultgraphesection";
import Sec78 from "./Sec78";

class Comobox12 extends Component {
  state = {
    selectedCardType: "12/05/2021 9:46",
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
          Séléctionner une simulation OSCAR --{" "}
        </label>
        <select
          className="card-selector form-control"
          onChange={(e) => this.setState({ selectedCardType: e.target.value })}
        >
          <option>12/05/2021 9:46</option>
          <option>12/05/2021 8:46</option>
          <option>11/05/2021 11:46</option>
        </select>
      </div>
    );
  }

  renderSelectedCard(selectedCardType) {
    /*  if (!selectedCardType)
      return <AngryJoe text="Séléctionner un jour s'il vous plaît" />; */
    if (selectedCardType === "12/05/2021 9:46") {
      return <Sec78 />;
    } else if (selectedCardType === "12/05/2021 8:46") {
      return <Defaultgraphesection />;
    } else if (selectedCardType === "11/05/2021 11:46") {
      return <Defaultgraphesection />;
    } else return <Sec78 />;
  }
}

export default Comobox12;
