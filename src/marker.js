const mapbox = require("mapbox-gl");

const iconUrls = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
}

const buildMarker = function (type, coords) {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${iconUrls[type]})`;

  const newMarker = new mapbox.Marker(markerDomEl).setLngLat(coords);
  return newMarker;
}

module.exports = buildMarker;
