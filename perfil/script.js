const contador = localStorage.getItem('contadorMapa') || 0;
const contadorSubmit = localStorage.getItem('contadorSubmit') || 0;

//chegar pra ver se está logado
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        // Redireciona para a página de login se o usuário não estiver logado
        window.location.href = "../login/index.html";
    }
});

//quantidade de vezes que a pagina recarregou
document.getElementById('contadorMapaDisplay').innerText = 
            `Os mapas foram usados ${contador} vezes.`;

//quantas vezes o botao enviar do formulario foi clicado
document.getElementById('contadorDisplay').innerText = 
            `Você fez a diferença na comunidade ${contadorSubmit} vezes (posts).`;


//mostra o email do localstorage
function displayEmail() {
    let email = localStorage.getItem('email');
    if (email) {
        document.getElementById("userEmailDisplay").textContent = `Bem-vindo, ${email}`;
    }
}

displayEmail()

let data = localStorage.getItem("data_criacao");

if (data) {
    // Converte a string ISO para um objeto Date
    let dataFormatada = new Date(data);

    // Extrai apenas a data (AAAA-MM-DD)
    let dataSomente = dataFormatada.toISOString().split('T')[0];

    // Atualiza o conteúdo no HTML
    document.getElementById("exibeData").innerText = `Data da criação da conta: ${dataSomente}`;
}

let buttonVoltar = document.getElementById('voltar')

    buttonVoltar.addEventListener('click', function() {
        window.location.href = "../inicio/pagina_inicial.html";
    })