import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Create a map instance
const map = L.map("app").setView([51.505, -0.09], 13);

// Add the OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

// Define the coordinates for the polyline
const polylineCoordinates: [number, number][] = [
  [51.505, -0.09],
  // [51.51, -0.1],
  [51.51, -0.12],
];

// Create a polyline and add it to the map
L.polyline(polylineCoordinates, { color: "red" }).addTo(map);
