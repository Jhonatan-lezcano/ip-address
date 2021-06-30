import React, { useEffect, useState } from "react";
import getIpAddress from "../services/getIpAddress";

export const IpAddressContext = React.createContext();

export const IpAddressProvider = (props) => {
  const [keyword, setKeyword] = useState("8.8.8.8");
  const [ipAddress, setIpAddress] = useState({
    lat: 37.40599,
    lng: -122.078514,
  });
  const [infoIP, setInfoIP] = useState({});

  useEffect(() => {
    getIpAddress({ keyword }).then((data) => {
      const { lat, lng } = data.location;
      const { city, country, timezone } = data.location;
      const { ip, isp } = data;
      setIpAddress({ ...ipAddress, lat, lng });
      setInfoIP({ ip, city, country, timezone, isp });
      console.log(data);
    });
  }, [keyword]);

  return (
    <IpAddressContext.Provider value={{ setKeyword, ipAddress, infoIP }}>
      {props.children}
    </IpAddressContext.Provider>
  );
};
