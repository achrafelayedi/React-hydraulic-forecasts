import { Popup } from "leaflet";
import L from "leaflet";
import React, { Component } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import noeud from "./../data/Noeud.json";

class Mymap extends Component {
  render() {
    return (
      <div>
        <MapContainer className="mymap" center={[45.7133, 5.52826]} zoom={11}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/*           <GeoJSON style={this.modele_style} data={modele.features} />
          <GeoJSON style={this.branche_style} data={branche.features} /> */}
          <GeoJSON data={noeud.features} />
        </MapContainer>
      </div>
    );
  }
}

export default Mymap;

/* import { CircleMarker } from "leaflet";
import { Component } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import modele from "./../data/Modele_sault_brenaz.json";
import noeud from "./../data/Noeud.json";
import branche from "./../data/Branche.json";
 */
/* class Mymap extends Component {
  //state = {};
  /*   componentDidMount() {
    console.log(noeud);
  } */

/*modele_style = {
    fillColor: "transparent",
    color: "black",
  };

  branche_style = {
    color: "orange",
  };

  noeud_style = {};

  render() {
    return (
      <div>
        <MapContainer className="mymap" center={[45.7133, 5.52826]} zoom={11}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON style={this.modele_style} data={modele.features} />
          <GeoJSON style={this.branche_style} data={branche.features} />
          <GeoJSON data={noeud.features} />
        </MapContainer>
      </div>
    );
  }
}

export default Mymap; */
