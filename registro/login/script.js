document.addEventListener("DOMContentLoaded", displayEmail);

// BOTAO " NÃO POSSUO CONTA "

async function handleSubmit(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data = {email, senha}
    console.log(data);

    const response = await fetch('http://localhost:3005/api/store/entrar', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();   
    
    if(content.success){
        window.location.href = "../mapas/pagina_inicial.html";
        alert("Sucesso")
    }else{
        alert("Não")
    }
}

function login(event) {
    event.preventDefault();
    window.location.href = "../cadastro/index.html";
    console.log('Redirecionando para login...');
}
