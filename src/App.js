import './App.css';

import 'leaflet/dist/leaflet.css';


import React from 'react';
import { useMap, MapContainer, TileLayer, useMapEvent } from 'react-leaflet';



export default function App() {

  return (
    <div style={{height: "100%", width: "100%", position: "absolute"}}>
  <MapContainer center={[50.5, 30.5]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      url="http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  </MapContainer>
    </div>
  );
};

