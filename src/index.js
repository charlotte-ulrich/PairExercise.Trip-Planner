console.log("This is working!");
import mapboxgl from "mapbox-gl";
import buildMarker from "./marker";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY3VscmljaDkiLCJhIjoiY2ttYXJoYXNsMXVqcjJvcHJkeDM5dXhwcyJ9.pvjx0y8VdOA3E0OctOwxpg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago[-74.009, 40.705]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// const lngLat = map.center;
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);

// module.exports = { map };
