async function getPosts() {

    const response1 = await fetch('http://localhost:3005/api/dados', {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },

    });

    let content1 = await response1.json();

    if (content1.success) {
        let postHtml = document.getElementById("posts");

        content1.data.map(post => {
            postHtml.innerHTML += "<div class='post'> " +
                " <h2>" + post.titulo + "</h2>" +
                " <p>" + post.mensagem + "</p> " +
                " </div> ";
        });

    } else {

        alert("get erro")
    }
}

getPosts();

async function postar(event) {
    event.preventDefault();

    let titulo = document.getElementById("titulo").value;
    let mensagem = document.getElementById("mensagem").value;
    let data = { titulo, mensagem }
    console.log(data);

    const response = await fetch('http://localhost:3005/api/store/post', {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
        alert("Sucesso")



    } else {
        alert("Não")
    }
}

/**
 * rota get pra solicitar posts do banco
 * controller para executar select no banco
 * utilizar a função map para listar os dados
 */


let buttonVoltar = document.getElementById('voltar')

buttonVoltar.addEventListener('click', function () {
    window.location.href = "../inicio/pagina_inicial.html";
})

document.getElementById('showFormButton').addEventListener('click', function () {
    document.getElementById('formContainer').style.display = 'block';
});
document.getElementById('showFormButton').addEventListener('click', function () {
    document.getElementById('formContainer').style.display = 'block';
});
document.getElementById('closeFormButton').addEventListener('click', function () {
    document.getElementById('formContainer').style.display = 'none';
});
