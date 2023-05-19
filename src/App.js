import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <a
            style={{ color: "#34495e" }}
            href="https://github.com/cashmirB/final-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Cashmir Balajadia
        </footer>
      </div>
    </div>
  );
}
