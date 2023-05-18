import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark w-100"
            />
          </div>
        </div>
      </form>
      <h1>London, UK</h1>
      <div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="ClearSky"
        />
      </div>
      <div className="temp-value">
        <span className="temperature">15</span>
        <span className="unit">°C</span>
      </div>

      <div className="row">
        <div className="col-6">
          <ul>
            <li>Friday 23:15</li>
            <li>Clear Sky</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 74%</li>
            <li>Wind: 28km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
