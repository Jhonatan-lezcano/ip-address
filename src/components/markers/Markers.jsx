import React, { useContext } from "react";
import { Marker } from "react-leaflet";
import IconLocation from "./IconLocation";
import { IpAddressContext } from "../../context/IpAddressContext";

const Markers = () => {
  const { ipAddress } = useContext(IpAddressContext);
  const { lat, lng } = ipAddress;
  return <Marker position={[lat, lng]} icon={IconLocation}></Marker>;
};

export default Markers;
