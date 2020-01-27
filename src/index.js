const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");
const marker = buildMarker("activities", [-74.009, 40.705]); // Fullstack Academy
const markerHotel = buildMarker("hotels", [-74.0101248, 40.7087217]);

mapboxgl.accessToken = "pk.eyJ1Ijoidm9zdGVycyIsImEiOiJjazV3b2UzbjkwOHlvM21uZXFyZ284aHpwIn0.un88saIlpUDz2HeES4wxpg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

marker.addTo(map); // [-87.641, 41.895] for Chicago
markerHotel.addTo(map);
buildMarker("restaurants", [-73.985664, 40.748440]).addTo(map); // Empire State Building
