/* global L */
var Lab7map = L.map('Lab7map').setView([38.88, -77.03], 4)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(Lab7map)
var washingtonMonument = L.marker([38.88, -77.03]).addTo(Lab7map)
var circle = L.polygon([
  [38.89, -77.0365],
  [38.88, -77.0502],
  [38.88, -77.0326]
]).addTo(Lab7map)
circle.bindPopup('A view of Washington DC.')
washingtonMonument.bindPopup('This is the Washington Monument.')
