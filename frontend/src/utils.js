import * as vega from "vega";
export function render(spec, id = "view") {
  const view = new vega.View(vega.parse(spec), {
    renderer: "canvas", // renderer (canvas or svg)
    container: `#${id}`, // parent DOM container
    hover: true, // enable hover processing
  });
  return view.runAsync();
}
