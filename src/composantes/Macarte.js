import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import noeud from "./../data/Noeud.json";
import noeud_image from "./../img/noeud.png";

function Macarte() {
  console.log(noeud);
  const noeud_icon = L.icon({
    iconUrl: noeud_image,
    iconSize: [10, 10],
  });
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
    </MapContainer>
  );
}
export default Macarte;
