import React from "react";
import Autocomplete from "react-google-autocomplete";

function GoogleAutoComplete() {
  return   <Autocomplete
  apiKey={"AIzaSyDSH97Cd0gwAEVDZkYfPEXBRS1PSw2XwBY"}
  onPlaceSelected={(place) => {
    console.log(place);
  }}
/>;
}

export default GoogleAutoComplete