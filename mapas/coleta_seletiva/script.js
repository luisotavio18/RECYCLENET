let button = document.getElementById("botao_info")

button.addEventListener('click', function(){
    alert('COLETA SELETIVA: \nHorário: das 8h às 17h30')
})

var map = L.map('map').setView([-29.765013289584562, -51.13489581599416], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    
}).addTo(map);


function addMarker(lat, lng, txt) {
    var marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(txt).openPopup();
}

/* PONTO DAS COORDENADAS DE CADA LUGAR --------------------------------------------*/

addMarker(-29.773298513426983, -51.16367441799755, "- Vincentina - <br>FREQUENCIA: Quinta-feira <br> HORÁRIO: das 8h às 17h30")
addMarker(-29.76666091013486, -51.1465783594642, "- Centro e Fião - <br>FREQUENCIA: Segundo à sabado <br> HORÁRIO: das 8h às 17h30 <br> ")
addMarker(-29.757733066884942, -51.09839226209659, "- Feitoria Seller - <br>FREQUENCIA: Quinta-feira <br> HORÁRIO: das 8h às 17h30 <br><br> INFORMAÇÕES ADICIONAIS:<br> Feitoria Seller sentido -> Integração")
addMarker(-29.77414719456732, -51.150947275623295, "- Centro e Fião - <br>FREQUENCIA: Segundo à sabado <br> HORÁRIO: das 8h às 17h30 <br> ")
addMarker(-29.76638870966359, -51.145615017891515, "- Rua Independência - <br>FREQUENCIA: Sexta-feira <br> HORÁRIO: das 8h às 17h30")
addMarker(-29.779957697665118, -51.1397671895036, "- Morro do Espelho - <br>FREQUENCIA: Segunda-feira<br> HORÁRIO: das 8h às 17h30 <br> ")
addMarker(-29.767563199241575, -51.13544963998137, "- São José - <br>FREQUENCIA: Sexta-feira <br> HORÁRIO: das 8h às 17h30")