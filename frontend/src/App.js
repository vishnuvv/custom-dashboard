import "./App.css";
import React from "react";
import AddWidgetLayout from "./layout/AddWidgetLayout.js";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

function App() {
  return (
    <div className="App">
      <div className="ui segments">
        <div
          className="ui segment"
          style={{ backgroundColor: "rgb(245, 245, 245)" }}
        >
          <img
            alt="Cambium Logo"
            src="http://linkplanner.cambiumnetworks.com/anp_import/static/media/logo.c419a1da.png"
            style={{ width: "150px", height: "auto", fontSize: ".92857143rem" }}
          />
        </div>
        <div
          className="ui inverted segment"
          style={{ backgroundColor: "rgb(0, 58, 112)", lineHeight: "0.6" }}
        >
          <span style={{ fontSize: "0.9rem", fontWeight: "700" }}>
            Configurable Dashboard
          </span>
          <span
            style={{ fontSize: "0.9rem", fontWeight: "700", float: "right" }}
          >
            v1.0.0
          </span>
        </div>
      </div>
      <AddWidgetLayout />
    </div>
  );
}

export default App;
