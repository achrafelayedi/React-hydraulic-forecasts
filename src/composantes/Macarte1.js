import { defaults } from "chart.js";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  LayersControl,
  GeoJSON,
  Marker,
  Popup,
  TileLayer,
  MapContainer,
} from "react-leaflet";
import L from "leaflet";
import noeud from "./../data/Noeud.json";
import noeud_image from "./../img/noeud.png";
import barrage_image from "./../img/ico_barrage.png";
import usine_image from "./../img/usine.png";
import PK_image from "./../img/PK.png";
import PR_image from "./../img/PR_icon.png";
import station_hydro_image from "./../img/pont.png";
import modele from "./../data/Modele_sault_brenaz.json";
import casier from "./../data/casier.json";
import Pc11 from "./../data/Pc11.json";
import Pc12 from "./../data/Pc12.json";
import Pc13 from "./../data/Pc13.json";
import Pc21 from "./../data/Pc21.json";
import Pc22 from "./../data/Pc22.json";
import Pc23 from "./../data/Pc23.json";
import section from "./../data/section.json";
import P63800 from "./../data/P63800.json";
import P78000 from "./../data/P78000.json";
import Section63800 from "./../composantes/Section63800";
import P91250 from "./../data/P91250.json";
import PTCORDON from "./../data/PTCORDON.json";
import PTGROLE from "./../data/PTGROLE.json";
import branche_bleue from "./../data/branche_bleue.json";
import branche_marron from "./../data/branche_marron.json";
import branche_verte from "./../data/branche_verte.json";
import branche_orange from "./../data/branche_orange.json";
import branche_bleue_fonce from "./../data/branche_bleu_fonce.json";
import Rhone from "./../data/Rhone.json";
import barrage from "./../data/barrage.json";
import usine from "./../data/usine.json";
import PK from "./../data/PK.json";
import PR from "./../data/PR.json";
import station_hydro from "./../data/station_hydro.json";
import Calendar from "./Calendar";
import Comobox from "./Comobox";
import Comobox1 from "./Comobox1";
import Comobox2 from "./Comobox2";
import Comobox3 from "./Comobox3";
import Comobox4 from "./Comobox4";
import Comobox5 from "./Comobox5";
import Comobox6 from "./Comobox6";
import Comobox7 from "./Comobox7";
import Comobox8 from "./Comobox8";
import Comobox9 from "./Comobox9";
import Comobox10 from "./Comobox10";
//import test_polygon from "./../data/test_polygon.json";
import Comobox11 from "./Comobox11";
import Comobox12 from "./Comobox12";
import Comobox13 from "./Comobox13";
import Comobox14 from "./Comobox14";
import Comobox15 from "./Comobox15";
import Comobox16 from "./Comobox16";
import Comobox17 from "./Comobox17";
import Comobox18 from "./Comobox18";
import Comobox19 from "./Comobox19";
import Comobox20 from "./Comobox20";
import Comobox21 from "./Comobox21";

const { BaseLayer, Overlay } = LayersControl;

const center = [45.7133, 5.52826];
const noeud_icon = L.icon({
  iconUrl: noeud_image,
  iconSize: [10, 10],
});

const barrage_icon = L.icon({
  iconUrl: barrage_image,
  iconSize: [20, 20],
});

const usine_icon = L.icon({
  iconUrl: usine_image,
  iconSize: [20, 20],
});

const PK_icon = L.icon({
  iconUrl: PK_image,
  iconSize: [10, 10],
});

const PR_icon = L.icon({
  iconUrl: PR_image,
  iconSize: [15, 15],
});

const station_hydro_icon = L.icon({
  iconUrl: station_hydro_image,
  iconSize: [20, 20],
});

function modele_style() {
  return {
    fillColor: "transparent",
    color: "black",
  };
}

function casier_style() {
  return {
    fillColor: "transparent",
    color: "red",
  };
}

/* function test_polygon_style() {
  return {
    fillColor: "transparent",
    color: "red",
  };
} */

function section_style() {
  return {
    color: "black",
  };
}

/*   function branche_style() {
    return {
      color: "orange",
    };
  } */

function branche_bleue_style() {
  return {
    color: "#00FFFF",
  };
}

function branche_marron_style() {
  return {
    color: "#A52A2A",
  };
}

function branche_verte_style() {
  return {
    color: "#32CD32",
  };
}

function branche_orange_style() {
  return {
    color: "#FFA500",
  };
}

function branche_bleue_fonce_style() {
  return {
    color: "#00BFFF",
  };
}

function onEachModele(modele, lay) {
  lay.bindPopup(
    "<table><thead><tr><th>Modèle de Sault-Brénaz</th></tr></thead><tbody></table><tbody><tr><td>Nom : </td><td>" +
      modele.properties.NOM +
      "<br></td></tr><tr><td>Bief : </td><td>" +
      modele.properties.Bief +
      "</td></tr></tbody><br></td></tr><tr><td>Chute : </td><td>" +
      modele.properties.Chute +
      "</td></tr></tbody><br></td></tr><tr><td>MOA : </td><td>" +
      modele.properties.MOA +
      "</td></tr></tbody><br></td></tr><tr><td>Obj_modele : </td><td>" +
      modele.properties.Obj_modele +
      "</td></tr></tbody><br></td></tr><tr><td>Borne_debi : </td><td>" +
      modele.properties.Borne_debi +
      "</td></tr></tbody><br></td></tr><tr><td>Borne_de_1 : </td><td>" +
      modele.properties.Borne_de_1 +
      "</td></tr></tbody><br></td></tr><tr><td>Proj_refer :</td><td>" +
      modele.properties.Proj_refer +
      "</td></tr></tbody><br></td></tr><tr><td>Nivellement : </td><td>" +
      modele.properties.Nivellemen +
      "</td></tr></tbody><br></td></tr><tr><td>Modelisate : </td><td>" +
      modele.properties.Modelisate +
      "</td></tr></tbody><br></td></tr><tr><td>Dessinateu : </td><td>" +
      modele.properties.Dessinateu +
      "</td></tr></tbody><br></td></tr><tr><td>Date_valeu : </td><td>" +
      modele.properties.Date_valeu +
      "</td></tr></tbody><br></td></tr><tr><td>Date_saisi : </td><td>" +
      modele.properties.Date_saisi +
      "</td></tr></tbody><br></td></tr><tr><td>Valid : </td><td>" +
      modele.properties.Valid +
      "</td></tr></tbody><br></td></tr><tr><td>Shape_Leng : </td><td>" +
      modele.properties.Shape_Leng +
      "</td></tr></tbody><br></td></tr><tr><td>Shape_Area : </td><td>" +
      modele.properties.Shape_Area +
      "</td></tr></tbody>"
  );
}

function onEachCasier(casier, layer) {
  layer.bindPopup(casier.properties.NOM);
}

function onEachSection(section, layer) {
  layer.bindPopup(section.properties.NOM);

  /* layer.on({
      click: (event) => {
        return event.target.feature.properties.NOM;
      },
    }); */
}

/* onSectionMouseOver = (event) => {
  event.target.setStyle({
    color: "green",
    fillColor: "yellow",
  });
};

SectionGroup = (section, layer) => {
  layer.bindPopup(section.properties.NOM);

  layer.on({
    mouseover: this.onSectionMouseOver,
  });
}; */

function casier_colored(casier, layer) {
  const color = "red";
  layer.options.fillColor = color;
}

/* setTimeout(() => {
  casier_colored;
}, 3000); */

export default class Macarte1 extends Component {
  render() {
    return (
      <MapContainer center={center} zoom={11}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="Google Satellite">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            />
          </BaseLayer>
          <BaseLayer name="BlackAndWhite">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </BaseLayer>
        </LayersControl>
        {noeud.features.map((data_noeud) => (
          <Marker
            icon={noeud_icon}
            position={{
              lat: data_noeud.geometry.coordinates[1],
              lng: data_noeud.geometry.coordinates[0],
            }}
          >
            <Popup>
              <div>
                {/*<h1> {"Nom modèle : " + data_noeud.properties.Nom_modele} </h1>*/}
                <h1> {"Noeud : " + data_noeud.properties.NOM} </h1>
              </div>
            </Popup>
          </Marker>
        ))}
        {PK.features.map((data_PK) => (
          <Marker
            icon={PK_icon}
            position={{
              lat: data_PK.geometry.coordinates[1],
              lng: data_PK.geometry.coordinates[0],
            }}
          >
            <Popup>
              <div>
                {/*<h1> {"Nom modèle : " + data_noeud.properties.Nom_modele} </h1>*/}
                <h1> {data_PK.properties.VPRO_A_NOM} </h1>
              </div>
            </Popup>
          </Marker>
        ))}
        {PR.features.map((data_PR) => (
          <Marker
            icon={PR_icon}
            position={{
              lat: data_PR.geometry.coordinates[1],
              lng: data_PR.geometry.coordinates[0],
            }}
          >
            <Popup>
              <div>
                {/*<h1> {"Nom modèle : " + data_noeud.properties.Nom_modele} </h1>*/}
                <h1> {data_PR.properties.VPRO_A_NOM} </h1>
              </div>
            </Popup>
          </Marker>
        ))}
        {station_hydro.features.map((data_station_hydro) => (
          <Marker
            icon={station_hydro_icon}
            position={{
              lat: data_station_hydro.geometry.coordinates[1],
              lng: data_station_hydro.geometry.coordinates[0],
            }}
          >
            <Popup>
              <div>
                {/*<h1> {"Nom modèle : " + data_noeud.properties.Nom_modele} </h1>*/}
                <h1> {data_station_hydro.properties.STA_NOM} </h1>
              </div>
            </Popup>
          </Marker>
        ))}
        {barrage.features.map((data_barrage) => (
          <Marker
            icon={barrage_icon}
            position={{
              lat: data_barrage.geometry.coordinates[1],
              lng: data_barrage.geometry.coordinates[0],
            }}
          >
            <Popup>
              <div>
                <h1>{data_barrage.properties.NOM}</h1>
                <table>
                  <thead>
                    <tr>
                      <th> {"Titre : " + data_barrage.properties.TITRE}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        {"Retenue : " + data_barrage.properties.RETENUE}{" "}
                      </th>
                    </tr>
                    <tr>
                      <th>
                        {" "}
                        {"Version : " + data_barrage.properties.VERSION}{" "}
                      </th>
                    </tr>
                    <tr>
                      <th> {"Ref : " + data_barrage.properties.REF} </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Popup>
          </Marker>
        ))}
        {usine.features.map((data_usine) => (
          <Marker
            icon={usine_icon}
            position={{
              lat: data_usine.geometry.coordinates[1],
              lng: data_usine.geometry.coordinates[0],
            }}
          >
            <Popup>
              <div>
                <h1>{data_usine.properties.NOM}</h1>
                <table>
                  <thead>
                    <tr>
                      <th>
                        {" "}
                        {"Puissance : " + data_usine.properties.PUISSANCE}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        {" "}
                        {"Type ouvrage : " +
                          data_usine.properties.TYPE_OUV}{" "}
                      </th>
                    </tr>
                    <tr>
                      <th> {"Version : " + data_usine.properties.VERSION} </th>
                    </tr>
                    <tr>
                      <th> {"Ref : " + data_usine.properties.REF} </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Popup>
          </Marker>
        ))}
        {/* <GeoJSON
        style={branche_style}
        data={branche.features}
        onEachFeature={onEachBranche}
      /> */}
        <GeoJSON
          style={modele_style}
          data={modele.features}
          onEachFeature={onEachModele}
        />
        <GeoJSON
          style={casier_style}
          data={casier.features}
          onEachFeature={onEachCasier}
        />
        {/* <GeoJSON
          style={test_polygon_style}
          data={test_polygon.features}
          onEachFeature={onEachCountry}
        /> */}
        <GeoJSON
          style={casier_style}
          data={Pc11.features}
          //onEachFeature={casier_colored}
        >
          <Popup className="popupPc11">
            <div>
              {/* <Comobox5 /> */}
              <Comobox16 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON
          style={casier_style}
          data={Pc12.features}
          //onEachFeature={casier_colored}
        >
          <Popup className="popupPc12">
            <div>
              {/* <Comobox6 /> */}
              <Comobox17 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON
          style={casier_style}
          data={Pc13.features}
          //onEachFeature={casier_colored}
        >
          <Popup className="popupPc12">
            <div>
              {/* <Comobox7 /> */}
              <Comobox18 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON
          style={casier_style}
          data={Pc21.features}
          //onEachFeature={casier_colored}
        >
          <Popup className="popupPc12">
            <div>
              {/* <Comobox8 /> */}
              <Comobox19 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON
          style={casier_style}
          data={Pc22.features}
          //onEachFeature={casier_colored}
        >
          <Popup className="popupPc12">
            <div>
              {/* <Comobox9 /> */}
              <Comobox20 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON
          style={casier_style}
          data={Pc23.features}
          //onEachFeature={casier_colored}
        >
          <Popup className="popupPc12">
            <div>
              {/* <Comobox10 /> */}
              <Calendar />
              <Comobox21 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON
          style={section_style}
          data={section.features}
          onEachFeature={onEachSection}
          /* onEachFeature={this.SectionGroup} */
        />
        <GeoJSON style={section_style} data={P63800.features}>
          <Popup className="popupP63800">
            <div>
              {/* <Comobox /> */}
              <Comobox11 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON style={section_style} data={P78000.features}>
          <Popup className="popup78000">
            <div>
              {/* <Comobox1 /> */}
              <Comobox12 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON style={section_style} data={P91250.features}>
          <Popup className="P91250">
            <div>
              {/* <Comobox3 /> */}
              <Comobox14 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON style={section_style} data={PTCORDON.features}>
          <Popup className="PTCORDON">
            <div>
              {/* <Comobox4 /> */}
              <Comobox15 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON style={section_style} data={PTGROLE.features}>
          <Popup className="PTGROSLE">
            <div>
              {/* <Comobox2 /> */}
              <Comobox13 />
            </div>
          </Popup>
        </GeoJSON>
        <GeoJSON data={Rhone.features} />
        <GeoJSON style={branche_bleue_style} data={branche_bleue.features} />
        <GeoJSON style={branche_marron_style} data={branche_marron.features} />
        <GeoJSON style={branche_verte_style} data={branche_verte.features} />
        <GeoJSON style={branche_orange_style} data={branche_orange.features} />
        <GeoJSON
          style={branche_bleue_fonce_style}
          data={branche_bleue_fonce.features}
        />
      </MapContainer>
    );
  }
}
