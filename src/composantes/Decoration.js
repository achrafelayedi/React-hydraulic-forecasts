import React from "react";
import { FaAlignRight } from "react-icons/fa";
import Timer from "./Timer";

export default function Decoration() {
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

      <div className="animation-tempo">
        <Timer />
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
