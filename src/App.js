//import logo from './logo.svg';
//import react from "react";
//import {MapContainer, TileLayer} from 'react-leaflet';
import "./App.css";
//import Mymap from "./components/Mymap";
import Macarte from "./composantes/Macarte";

function App() {
  return (
    <div className="App">
      <Macarte />
      {/* <MapContainer center={[45.6936, 5.52826]} zoom={13}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
      </MapContainer> */}
    </div>
  );
}

export default App;
