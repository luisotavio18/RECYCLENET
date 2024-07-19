document.addEventListener("DOMContentLoaded", displayEmail);


async function cadastrar(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data = {email, senha}
    console.log(data);

    const response = await fetch('http://localhost:3003/api/store/post', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();   
    
    if(content.success){
        window.location.href = "../../inicio/pagina_inicial.html";
        alert("Sucesso")
    }else{
        alert("Não")
    }
}

