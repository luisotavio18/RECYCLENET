async function handleSubmit(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data = { email, senha };
    console.log(data);

    const response = await fetch('http://localhost:3005/api/store/entrar', {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json();
    
    console.log(content);
    
    if (content.data[0]) {
        // Salva o estado de login e os dados no localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', content.data[0].email);
        localStorage.setItem('data_criacao', content.data[0].created_at);
        
        if(data.email === content.data[0].email && data.senha === content.data[0].senha){
            alert("Sucesso");
            window.location.href = "../../inicio/pagina_inicial.html";
        }
    } else {
        alert("Email ou senha incorretos");
    }
}

function login(event) {
    event.preventDefault();
    window.location.href = "../cadastro/index.html";
    console.log('Redirecionando para login...');
}