import React from "react";

function PlaceAndDates() {
  return (
    <>
      <form className="d-flex align-items-center">
        <div className="form-group">
          <label>
            <img src="img/earth_icon.svg" alt="" />
            Place
          </label>
          <input type="text" className="form-control" placeholder="Any where" />
        </div>
        <div className="form-group d-none d-md-block">
          <label>
            <img src="img/calendar_icon.svg" alt="" />
            Dates
          </label>
          <input type="Date" className="form-control" placeholder="Anytime" />
        </div>
        <div className="form-group d-none d-md-block">
          <label>
            <img src="img/hemburger_icon.svg" alt="" />
            Others
          </label>
          <input type="text" className="form-control" placeholder="Anything" />
        </div>
        <button
          type="button"
          className="btn d-flex align-items-center justify-content-center"
        >
          <img src="img/search_white.svg" alt="" />
        </button>
      </form>
    </>
  );
}

export default PlaceAndDates;
