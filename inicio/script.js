// Redireciona para a página de login se o usuário não estiver logado
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = "../login/index.html";
    }

    // Inicializa o contador no localStorage, se ainda não existir
    if (!localStorage.getItem('contadorMapa')) {
        localStorage.setItem('contadorMapa', 0);
    }

    // Incrementa o contador e atualiza no localStorage
    let contador = parseInt(localStorage.getItem('contadorMapa')) || 0;
    contador += 1;
    localStorage.setItem('contadorMapa', contador);

    // Mostra o contador no HTML
    document.getElementById('contadorMapa').innerText = `O mapa foi usado ${contador} vez(es).`;
});

// Botão para ir aos posts
document.getElementById('buttonPost').addEventListener('click', function () {
    window.location.href = '../posts/index.html'; // Substitua pelo caminho correto
});

// Outros botões para navegação
document.getElementById('buttonInformacoes').addEventListener('click', function () {
    window.location.href = "../informacoes/index.html";
});

document.getElementById('buttonDocumentacao').addEventListener('click', function () {
    window.location.href = "../documentacao/index.html";
});
