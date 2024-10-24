/* CRIAÇAÕ DE VARIÁVEIS */

let button = document.getElementById("botao2");
let button_documentacao = document.getElementById("botao1")
let button2 = document.getElementById("botao3");
let button4 = document.getElementById('botao4');
let button5 = document.getElementById('botao5');


/* BOTAO PARA IR AOS POSTS */

button4.addEventListener('click', function () {
    window.location.href = "../posts/index.html";
})

/* BOTAO DE INFORMAÇÕES */

button5.addEventListener('click', function () {
    window.location.href = "../informacoes/index.html";
})


/* BOTAO PRA IR PRO MAPA SELETIVA*/

button.addEventListener('click', function () {

    let resultado = confirm("Ao prosseguir você aceita que leu a documentação: ");

    if (resultado) {
        console.log("Usuário escolheu 'OK'");

        window.location.href = ("../mapas/coleta_seletiva/mapa.html")

    } else {
        console.log("Usuário escolheu 'Cancelar'");
    }

})

/* BOTAO PRA IR PRO MAPA DOMICILIAR */

button2.addEventListener('click', function () {
    let resultado = confirm("Ao prosseguir você aceita que leu a documentação: ");

    if (resultado) {
        console.log("Usuário escolheu 'OK'");

        window.location.href = ("../mapas/coleta_domiciliar/mapa.html")

    } else {
        console.log("Usuário escolheu 'Cancelar'");
    }

})

/* BOTAO DA DOCUMENTAÇ]AO */

button_documentacao.addEventListener('click', function () {
    window.location.href = "../documentacao/index.html";
})