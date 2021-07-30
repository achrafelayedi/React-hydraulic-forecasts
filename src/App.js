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

function App() {
  return (
    <div className="App">
      <ExclReader />
      <Calendar />
      {/* <Graphe /> */}
      <Comobox />
      <Macarte />
    </div>
  );
}

export default App;
