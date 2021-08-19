//import logo from './logo.svg';
//import react from "react";
//import {MapContainer, TileLayer} from 'react-leaflet';

import "./App.css";
//import Mymap from "./components/Mymap";
import Macarte from "./composantes/Macarte";
//import Graphe from "./composantes/Graphe";
import Calendar from "./composantes/Calendar";
import ExclReader from "./composantes/ExclReader";
//import Testgraphe from "./composantes/Testgraphe";
import Comobox from "./composantes/Comobox";
import Loading from "./components/Loading";
import Macarte1 from "./composantes/Macarte1";
import Navbar from "./composantes/Navbar";
import Decoration from "./composantes/Decoration";
//import Testy from "./composantes/Testy";

function App() {
  return (
    <div className="App">
      {/* <ExclReader /> */}
      {/* <Calendar /> */}
      {/* <Graphe /> */}
      {/* <Comobox /> */}
      {/* <Navbar /> */}
      <Decoration />
      <Macarte1 />
    </div>
  );
}

export default App;
