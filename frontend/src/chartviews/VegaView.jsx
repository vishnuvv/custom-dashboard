import React from "react";
import * as vega from "vega";

function VegaView(props) {
  const { id, spec } = props;
  const view = new vega.View(vega.parse(spec), {
    renderer: "canvas", // renderer (canvas or svg)
    container: `#${id}`, // parent DOM container
    hover: true, // enable hover processing
  });
  return view.runAsync();
}

export default VegaView;
