import { useState } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  window.navigator.geolocation.getCurrentPosition(
    position => setLat(position.coords.latitude),
    err => setErrorMessage(err.message)
  );

  return [lat, errorMessage];
};
