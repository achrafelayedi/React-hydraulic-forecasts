import React from "react";
import angry from "./../img/angry.png";

export default ({ text }) => (
  <aside className="angry-joe center top-margin">
    <h1>
      {text} <img src={angry} height="25" width="25" />
    </h1>

    <i className="ico-angry-joe far fa-angry"></i>
  </aside>
);
