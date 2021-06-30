import React, { useContext, useState } from "react";
import "./stylesSearch.scss";
import iconArrow from "../../assets/icon_arrow.svg";
import { IpAddressContext } from "../../context/IpAddressContext";

const Search = () => {
  const [ipInput, setIpInput] = useState("");
  const { setKeyword } = useContext(IpAddressContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(ipInput);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for any IP address or domain"
        value={ipInput}
        onChange={(e) => setIpInput(e.target.value)}
      />
      <button className="btn-search">
        <img src={iconArrow} alt="submit" />
      </button>
    </form>
  );
};

export default Search;
