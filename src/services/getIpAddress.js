const apiKey = "at_NhEAtEyp4sNzHcdlL1fLeU9Pxlv0M";

const getIpAddress = async ({ keyword }) => {
  const apiURL = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${keyword}`;
  let res = await fetch(apiURL);
  let data = await res.json();

  return data;
};

export default getIpAddress;
