async function postar(event) {
  event.preventDefault();
  
  let titulo = document.getElementById("titulo").value;
  let mensagem = document.getElementById("mensagem").value;
  let data = {titulo, mensagem}
  console.log(data);

  const response = await fetch('http://localhost:3005/api/store/post', {
      method: "POST",
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(data)
  });

  let content = await response.json();   
  
  if(content.success){
      alert("Sucesso")
      /* -- COLOCAR AQUI OQ ACONTECER DEPOIS DE ENVIAR O FORMULARIO PRO SQL */
  }else{
      alert("Não")
  }
}

let buttonVoltar = document.getElementById('voltar')

buttonVoltar.addEventListener('click', function() {
    window.location.href = "../inicio/pagina_inicial.html";
})

document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
});
document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
});
document.getElementById('closeFormButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'none';
});