const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function (type, coords) {
    // Your Code Here
const markerDomEl = document.createElement("div");
markerDomEl.style.width = "25px";
markerDomEl.style.height = "28px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
markerDomEl.style.backgroundImage = "url(iconURLs[type])";

const marker =  new mapboxgl.Marker(markerDomEl).setLngLat(coords);
return marker;
};

module.exports = buildMarker;