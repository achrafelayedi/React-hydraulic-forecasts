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
import modele from "./../data/Modele_sault_brenaz.json";
import branche from "./../data/Branche.json";
import { FeatureGroup } from "leaflet";

function Macarte() {
  console.log(noeud);
  const noeud_icon = L.icon({
    iconUrl: noeud_image,
    iconSize: [10, 10],
  });

  function modele_style() {
    return {
      fillColor: "transparent",
      color: "black",
    };
  }

  function branche_style() {
    return {
      color: "orange",
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

  function onEachBranche(branche, lay) {
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
  }

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
      <GeoJSON
        style={branche_style}
        data={branche.features}
        onEachFeature={onEachBranche}
      />
      <GeoJSON
        style={modele_style}
        data={modele.features}
        onEachFeature={onEachModele}
      />
    </MapContainer>
  );
}
export default Macarte;
