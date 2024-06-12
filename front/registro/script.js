let button = document.getElementById("handleSubmit");
 
button.onclick= async function() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let data = {nome, senha}
 
    const response = await fetch('http://localhost:3003/api/store/post', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
});
 
    let content = await response.json();
 
    if(content.sucess){
        window.location('../pagina/index.html');
        alert("Sucesso")
    }else{
        alert("Não")
    }


}