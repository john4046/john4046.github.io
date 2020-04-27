/* global L */
/* global jQuery */
/* global map3 */
/* global data */
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map3)
var states = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(states, function (data) {
  L.geoJSON(data).addTo(map3)
})
var object = function (feature) {
  var tenth = feature.properties.AGE
  var olive = 'olive'
  if (tenth < 38) { olive = 'green' }
  return {
    color: olive,
    weight: 1,
    fillOpacity: 0.2
  }
}
var fish = {
  style: object,
  onEachFeature: tile
  // contents of the function
}
L.geoJSON(data, fish).addTo(map3)
var tile = function (feature, layer) {
}
var tile = function (feature, layer) {
  var name = feature.properties.Louisiana
  var age = feature.properties.AGE
  layer.bindPopup('age of Louisiana' + name + ': ' + age + '<br>National average: 38')
}
