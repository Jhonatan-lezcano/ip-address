import React from "react";
import { IpAddressProvider } from "../../context/IpAddressContext";
import Banner from "../banner/Banner";
import InfoIP from "../infoIP/InfoIP";
import MapView from "../map/MapView";
import Search from "../searchIP/Search";
import "./stylesApp.scss";

const App = () => {
  return (
    <div>
      <Banner />
      <IpAddressProvider>
        <div className="container-search-info">
          <Search />
          <InfoIP />
        </div>
        <MapView />
      </IpAddressProvider>
    </div>
  );
};

export default App;
