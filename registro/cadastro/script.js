document.addEventListener("DOMContentLoaded", displayEmail);

// BOTAO " JÁ TENHO CONTA "

function login(event) {
    event.preventDefault();
    window.location.href = "../login/index.html";
    console.log('Redirecionando para login...');
}

// API

async function cadastrar(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data = {email, senha}
    console.log(data);

    const response = await fetch('http://localhost:3005/api/store/login', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();    
    
    if(content.success){
        window.location.href = "../login/index.html";
        alert("Sucesso")
    }else{
        alert("Não")
    }
}

