import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./stylesMapView.scss";
import { IpAddressContext } from "../../context/IpAddressContext";
import IconLocation from "./IconLocation";

const MapView = () => {
  const { ipAddress } = useContext(IpAddressContext);
  const { lat, lng } = ipAddress;

  return (
    <div className="map-container">
      <MapContainer center={[lat, lng]} zoom={8}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={IconLocation}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
