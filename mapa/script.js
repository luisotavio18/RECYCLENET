var map = L.map('map').setView([-29.765013289584562, -51.13489581599416], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function addMarker(lat, lng, txt) {
    var marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(txt).openPopup();
}

addMarker(-29.747365484263874, -51.10144941399005, "COLETA DOMICILIAR diurno - ter, qui e sab Início às 07horas")