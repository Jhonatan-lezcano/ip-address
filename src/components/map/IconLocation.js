import L from "leaflet";

const IconLocation = L.icon({
  iconUrl: require("../../assets/location_icon.svg"),
  iconRetinaUrl: require("../../assets/location_icon.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowAnchor: null,
  shadowSize: null,
  iconSize: [65, 65],
  className: "leaflet-venue-icon",
});

export default IconLocation;
