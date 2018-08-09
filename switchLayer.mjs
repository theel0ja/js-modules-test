export default function switchLayer(layer, map) {
  map.setStyle('mapbox://styles/mapbox/' + layer + '-v9');
}
