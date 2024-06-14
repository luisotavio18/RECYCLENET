let button = document.getElementById("handleSubmit");

function Navegar(){
    window.location.href = '../mapas/pagina_inicial.html'
}

button.onclick= async function() {
    
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data = {email, senha}
 
    const response = await fetch('http://localhost:3003/api/store/post', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
});

    let content = await response.json();
    
    if(content.sucess){
        window.location("./mapa/index.html")
        alert("Sucesso")
    }else{
        alert("Não")
    }
}

