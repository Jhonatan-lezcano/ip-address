import React, { useContext, useEffect, useState } from "react";
import { IpAddressContext } from "../../context/IpAddressContext";
import Banner from "../banner/Banner";
import InfoIP from "../infoIP/InfoIP";
import MapView from "../map/MapView";
import Search from "../searchIP/Search";
import "./stylesApp.scss";

const App = () => {
  const { setIpAddress } = useContext(IpAddressContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        console.log(position);
        setIpAddress({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div>
      <Banner />
      <div className="container-search-info">
        <Search />
        <InfoIP />
      </div>
      <MapView />
    </div>
  );
};

export default App;
