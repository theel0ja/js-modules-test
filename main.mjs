import switchLayer from './switchLayer.mjs';

mapboxgl.accessToken = "pk.eyJ1IjoidGhlZWwwamEiLCJhIjoiY2poeHAxMTU1MGN3ZDN3bXR5ZjFqaWk3NyJ9.FlC0IRHaG9qMWKMgbtdfUw";

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10'
});

switchLayer("satellite", map);