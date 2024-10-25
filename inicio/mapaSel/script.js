var mapSel = L.map('mapSel').setView([-29.765013289584562, -51.13489581599416], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

}).addTo(mapSel.removeControl(mapSel.zoomControl));

fetch('./mapaSel/markersSel.json')
    .then(response => response.json())
    .then(data => {
        // Adiciona os marcadores no mapa
        data.forEach(markerData => {
        var marker = L.marker([markerData.lat, markerData.lng]).addTo(mapSel)
                .bindPopup(`<b>${markerData.title}</b><br>${markerData.description}`);
        });
    })
    .catch(error => console.log('Erro ao carregar o arquivo JSON: ', error));