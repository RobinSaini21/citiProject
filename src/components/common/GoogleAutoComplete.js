import Autocomplete from "react-google-autocomplete";
import { useState,useEffect } from "react";

const GoogleAuto = ({getPlace}) => {
  const [ places ,setPlaces] = useState({})

useEffect(() =>{
  getPlace(places)
},[places])
    return (
      <Autocomplete
        className="form-control h_90"
        rows="3"
        apiKey={process.env.PLACES_API_KEY}
        onPlaceSelected={(place) => {
          if (place) {
            const places_ = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              place: place,
            };
            setPlaces(
             places_ 
            );
          }
        }}
        types={["geometry"]}
        componentRestrictions={{ country: "us" }}
      />
    );
  };

  export default GoogleAuto
  