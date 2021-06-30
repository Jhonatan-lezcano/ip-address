import React, { useContext } from "react";
import { IpAddressContext } from "../../context/IpAddressContext";
import "./stylesInfoIP.scss";

const InfoIP = () => {
  const { infoIP } = useContext(IpAddressContext);
  return (
    <div className="infoIP-container">
      <div className="infoIP">
        <div>
          <p>IP ADDRESS</p>
        </div>
        <div>
          <h2>{infoIP.ip}</h2>
        </div>
      </div>
      <div className="line"></div>
      <div className="infoIP">
        <div>
          <p>LOCATION</p>
        </div>
        <div>
          <h2>{`${infoIP.city}, ${infoIP.country}`}</h2>
        </div>
      </div>
      <div className="line"></div>
      <div className="infoIP">
        <div>
          <p>TIMEZONE</p>
        </div>
        <div>
          <h2>UTC {infoIP.timezone}</h2>
        </div>
      </div>
      <div className="line"></div>
      <div className="infoIP">
        <div>
          <p>ISP</p>
        </div>
        <div>
          <h2>{infoIP.isp}</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoIP;
