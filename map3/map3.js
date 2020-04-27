/* global L jQuery */
/* global map3 */
/* global data */
/* global statesLayerObject */
/* global basemapsObject */
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(Lab9map)
var data = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(data, function (data) {
  L.geoJSON(data).addTo(Lab9map)
})
  var style = function (feature) {
    var tenth = feature.properties.Age
    var color = 'olive'
    if (tenth < 38) { color = 'green' }
    return {
      color: color,
      weight: 1,
      fillOpacity: 0.5
    }
  }
  var object = {
    style: style,
    onEachFeature: dog
  }
  L.geoJSON(data, object).addTo(Lab9map)
})
var dog = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var age = feature.properties.AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
  statesLayerObject.addLayer(layer)
}
var layersObject = {
  'Age by state': statesLayerObject
}
L.control.layers(basemapsObject, layersObject).addTo(Lab9map)
