const importmap = {
  imports: {
    d3: "./node_modules/d3/src/index.js",
    "d3-array": "./node_modules/d3-array/src/index.js",
    "d3-axis": "./node_modules/d3-axis/src/index.js",
    "d3-chord": "./node_modules/d3-chord/src/index.js",
    "d3-brush": "./node_modules/d3-brush/src/index.js",
    "d3-color": "./node_modules/d3-color/src/index.js",
    "d3-contour": "./node_modules/d3-contour/src/index.js",
    "d3-delaunay": "./node_modules/d3-delaunay/src/index.js",
    "d3-dispatch": "./node_modules/d3-dispatch/src/index.js",
    "d3-drag": "./node_modules/d3-drag/src/index.js",
    "d3-dsv": "./node_modules/d3-dsv/src/index.js",
    "d3-ease": "./node_modules/d3-ease/src/index.js",
    "d3-fetch": "./node_modules/d3-fetch/src/index.js",
    "d3-force": "./node_modules/d3-force/src/index.js",
    "d3-format": "./node_modules/d3-format/src/index.js",
    "d3-geo": "./node_modules/d3-geo/src/index.js",
    "d3-hierarchy": "./node_modules/d3-hierarchy/src/index.js",
    "d3-interpolate": "./node_modules/d3-interpolate/src/index.js",
    "d3-path": "./node_modules/d3-path/src/index.js",
    "d3-polygon": "./node_modules/d3-polygon/src/index.js",
    "d3-quadtree": "./node_modules/d3-quadtree/src/index.js",
    "d3-random": "./node_modules/d3-random/src/index.js",
    "d3-scale": "./node_modules/d3-scale/src/index.js",
    "d3-scale-chromatic": "./node_modules/d3-scale-chromatic/src/index.js",
    "d3-selection": "./node_modules/d3-selection/src/index.js",
    "d3-shape": "./node_modules/d3-shape/src/index.js",
    "d3-time": "./node_modules/d3-time/src/index.js",
    "d3-time-format": "./node_modules/d3-time-format/src/index.js",
    "d3-timer": "./node_modules/d3-timer/src/index.js",
    "d3-transition": "./node_modules/d3-transition/src/index.js",
    "d3-zoom": "./node_modules/d3-zoom/src/index.js",
    internmap: "./node_modules/internmap/src/index.js",
    delaunator: "./node_modules/delaunator/index.js",
    "robust-predicates": "./node_modules/robust-predicates/index.js",
  },
};

const injectImportmap = (importmap) => {
  const element = document.createElement("script");
  element.type = "importmap";
  element.textContent = JSON.stringify(importmap);
  document.currentScript.after(element);
};

injectImportmap(importmap);
