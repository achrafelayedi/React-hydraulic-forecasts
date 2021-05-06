import react, {Component} from "react";
import {MapContainer, TileLayer} from 'react-leaflet';


function Mymap () {
    return (

            <MapContainer className="mymap" center={[45.6936, 5.52826]} zoom={13}>
                <TileLayer
                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>

    );
}

export default Mymap;
