import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100wh",
  height: "550px",
};

const center = {
  lat: -37.45909,
  lng: -67.15362,
};

function MyGoogleMap() {
  return (
    <>
      <div className="mt-5">
        <form class="row g-3">
          <div className="col-4">
            <h4
              for="validationCustom04"
              class="form-label d-flex  justify-content-end mt-5"
            >
              Car Rental Locations
            </h4>
          </div>
          <div className="col-4">
            <input
              class="form-control w-100 mt-5 w-90 ml-3"
              type="text"
              placeholder="Search Location"
              aria-label="default input example"
            ></input>
          </div>
          <div class="col-auto " style={{ marginTop: "4rem" }}>
            <a type="btn" href="#!" class="btn btn-primary mb-3">
              Search
            </a>
          </div>
          <div className="col-4"></div>
        </form>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyBYAgIWLANeKX8jD2h8ElrMRLqS_GVCp9Y">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <></>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default React.memo(MyGoogleMap);
