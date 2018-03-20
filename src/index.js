console.log("Greetings from World Javascript!!");

const buildMarker = require("./marker");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoibGlseWVteDMiLCJhIjoiY2plenR4cGRmMGY3NzJ4cWo5ejZkcmxmciJ9.aUCb7nht21-pwOAIXzHExg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "25px";
// markerDomEl.style.height = "28px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);