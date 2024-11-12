/*
async function mostrarNome() {

    const response1 = await fetch('http://localhost:3005/api/store/entrar', {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },

    });

    let content1 = await response1.json();

    if (content1.success) {
        let postHtml = document.getElementById("nome");

        content1.data.map(post => {

            postHtml.innerHTML += "<div class='post'> " +
                " <h2>" + post.email + "</h2>" 
                " </div> ";
        });

    } else {

        alert("get erro")
    }
}

mostrarNome();
*/
let data = localStorage.getItem("data_criacao")
document.getElementById("exibeData").innerText = `Data da criação da conta: ${data}`;

let buttonVoltar = document.getElementById('voltar')

    buttonVoltar.addEventListener('click', function() {
        window.location.href = "../inicio/pagina_inicial.html";
    })