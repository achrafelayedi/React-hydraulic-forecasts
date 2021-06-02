import React from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import noeud from "./../data/Noeud.json";
import noeud_image from "./../img/noeud.png";
import barrage_image from "./../img/ico_barrage.png";
import usine_image from "./../img/usine.png";
import PK_image from "./../img/PK.png";
import modele from "./../data/Modele_sault_brenaz.json";
import casier from "./../data/casier.json";
import section from "./../data/section.json";
import branche_bleue from "./../data/branche_bleue.json";
import branche_marron from "./../data/branche_marron.json";
import branche_verte from "./../data/branche_verte.json";
import branche_orange from "./../data/branche_orange.json";
import branche_bleue_fonce from "./../data/branche_bleu_fonce.json";
import Rhone from "./../data/Rhone.json";
import barrage from "./../data/barrage.json";
import usine from "./../data/usine.json";
import PK from "./../data/PK.json";

function Macarte() {
  console.log(barrage);

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
  }

  /*   function onEachBranche(branche, lay) {
    lay.bindPopup(
      "<table><thead><tr><th>Branches de Sault-Brénaz</th></tr></thead><tbody></table><tbody><tr><td>Nom modèle : </td><td>" +
        branche.properties.Nom_modele +
        "<br></td></tr><tr><td>Type branche : </td><td>" +
        branche.properties.Type_branc +
        "</td></tr></tbody><br></td></tr><tr><td>Longueur : </td><td>" +
        branche.properties.Longueur +
        "</td></tr></tbody><br></td></tr><tr><td>Section_am : </td><td>" +
        branche.properties.Section_am +
        "</td></tr></tbody><br></td></tr><tr><td>Shape_Leng : </td><td>" +
        branche.properties.Shape_Leng +
        "</td></tr></tbody><br></td></tr><tr><td>Enabled : </td><td>" +
        branche.properties.Enabled +
        "</td></tr></tbody><br></td></tr><tr><td>NOM : </td><td>" +
        branche.properties.NOM +
        "</td></tr></tbody><br></td></tr><tr><td>Nom_noeud_ :</td><td>" +
        branche.properties.Nom_noeud_ +
        "</td></tr></tbody><br></td></tr><tr><td>Nom_noeud1 : </td><td>" +
        branche.properties.Nom_noeud1 +
        "</td></tr></tbody>"
    );
  } */

  //noeud_geojson.addTo(map)
  /*   const iconNoeud = new L.Icon({
    iconUrl: require("./../img/noeud.png"),
  }); */
  return (
    <MapContainer className="map" center={[45.7133, 5.52826]} zoom={11}>
      <LayersControl position="topright" />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
             
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
                    <th> {"Retenue : " + data_barrage.properties.RETENUE} </th>
                  </tr>
                  <tr>
                    <th> {"Version : " + data_barrage.properties.VERSION} </th>
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
                    <th> {"Puissance : " + data_usine.properties.PUISSANCE}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      {" "}
                      {"Type ouvrage : " + data_usine.properties.TYPE_OUV}{" "}
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
      <GeoJSON
        style={section_style}
        data={section.features}
        onEachFeature={onEachSection}
      />
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
export default Macarte;
