let button = document.getElementById("botao_info")
let button2 = document.getElementById("botao_documento")

button.addEventListener('click', function () {
    alert('COLETA SELETIVA: \nHorário: das 8h às 17h30')
})

button2.addEventListener('click', function() {
    alert('Link do documento completo: \n\nhttps://leismunicipais.com.br/a/rs/s/sao-leopoldo/decreto/2018/901/9004/decreto-n-9004-2018-dispoe-sobre-o-plano-operacional-de-coleta-de-lixo-domiciliar-e-seletiva-que-tratam-os-artigos-273-280-290-291-292-293-294-e-295-do-codigo-municipal-de-meio-ambiente-e-da-outras-providencias ')
})

var map = L.map('map').setView([-29.765013289584562, -51.13489581599416], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

}).addTo(map.removeControl(map.zoomControl));


/* Função para adicionar marcadores do arquivo "markers.json" */

fetch('markers.json')
    .then(response => response.json())
    .then(data => {
        // Adiciona os marcadores no mapa
        data.forEach(markerData => {
            var marker = L.marker([markerData.lat, markerData.lng]).addTo(map)
                .bindPopup(`<b>${markerData.title}</b><br>${markerData.description}`);
        });
    })
    .catch(error => console.log('Erro ao carregar o arquivo JSON: ', error));