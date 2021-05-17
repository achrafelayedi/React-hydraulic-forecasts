import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import noeud from "./../data/Noeud.json";
import noeud_image from "./../img/noeud.png";
import modele from "./../data/Modele_sault_brenaz.json";
import branche from "./../data/Branche.json";

var OpenStreetMap_France = L.tileLayer(
  "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

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
      fillColor: "transparent",
      color: "orange",
    };
  }

  function onEachModele(modele, lay) {
    lay.bindPopup(
      "<p>NOM : " +
        modele.properties.NOM +
        "</p><p>Bief : " +
        modele.properties.Bief +
        "</p><p>Chute : " +
        modele.properties.Chute +
        "</p><p>MOA : " +
        modele.properties.MOA +
        "</p><p>Obj_modele : " +
        modele.properties.Obj_modele +
        "</p><p>Borne_debi : " +
        modele.properties.Borne_debi +
        "</p><p>Borne_de_1 : " +
        modele.properties.Borne_de_1 +
        "</p><p>Proj_refer : " +
        modele.properties.Proj_refer +
        "</p><p>Nivellement : " +
        modele.properties.Nivellemen +
        "</p><p>Modelisate : " +
        modele.properties.Modelisate +
        "</p><p>Dessinateu : " +
        modele.properties.Dessinateu +
        "</p><p>Date_saisi : " +
        modele.properties.Date_saisi +
        "</p><p>Valid : " +
        modele.properties.Valid +
        "</p><p>Shape_Leng : " +
        modele.properties.Shape_Leng +
        "</p><p>Shape_Area : " +
        modele.properties.Shape_Area +
        "</p>"
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
