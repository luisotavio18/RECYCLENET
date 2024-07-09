/* CRIAÇAÕ DE VARIÁVEIS */

let button = document.getElementById("botao2");
let button_documentacao = document.getElementById("botao1")
let button2 = document.getElementById("botao3");


/* BOTAO PRA IR PRO MAPA SELETIVA*/

button.addEventListener('click', function(){

    let resultado = confirm("Ao prosseguir você aceita que leu a documentação: ");

    if (resultado) {
        console.log("Usuário escolheu 'OK'");
    
        window.location.href = ("./coleta_seletiva/mapa.html")

    } else {
        console.log("Usuário escolheu 'Cancelar'");
    }  

})

/* BOTAO PRA IR PRO MAPA DOMICILIAR */

button2.addEventListener('click', function() {
    let resultado = confirm("Ao prosseguir você aceita que leu a documentação: ");

    if (resultado) {
        console.log("Usuário escolheu 'OK'");
    
        window.location.href = ("./coleta_domiciliar/mapa.html")

    } else {
        console.log("Usuário escolheu 'Cancelar'");
    }  

})

/* BOTAO DA DOCUMENTAÇ]AO */

button_documentacao.addEventListener('click', function(){

    alert("Fica instituído o Plano Operacional de Coleta de Lixo Domiciliar e Coleta Seletiva na zona urbana do Município, tendo como objetivo o aprimoramento das normas de disposição, coleta, transporte e destino final do resíduo ou lixo domiciliar e recicláveis");
    alert("Não são caracterizados como resíduos ou lixo domiciliar, para efeito deste regulamento e desta forma não poderão ser recolhidos pelos órgãos de Limpeza Pública da Prefeitura, os resíduos sólidos industriais, resíduos sólidos especiais, resíduos de serviços de saúde e resíduos sólidos perigosos")
    alert("É vedado dispor resíduo ou lixo domiciliar e resíduo destinado a Coleta Seletiva para fora do imóvel a espera da coleta, descumprindo a freqüência, horário e turno da coleta regular, estabelecidos para os setores e bairros indicados no Plano Operacional da Coleta Ordinária e Coleta Seletiva do Anexo.")
    alert("Para saber mais leia: https://leismunicipais.com.br/a/rs/s/sao-leopoldo/decreto/2018/901/9004/decreto-n-9004-2018-dispoe-sobre-o-plano-operacional-de-coleta-de-lixo-domiciliar-e-seletiva-que-tratam-os-artigos-273-280-290-291-292-293-294-e-295-do-codigo-municipal-de-meio-ambiente-e-da-outras-providencias ")
})