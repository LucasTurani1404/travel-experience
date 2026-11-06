const formulário = document.querySelector(#formCadastro);

formulario.addEvenlistener("submit", function(event){
    event.preventDefalt();

    const nome = document.querySelector("#nome").value;
    const destino = document.querySelector("#destino").value;

    const mensagem = document.querySelector("#mensagem");

    mensagem.textContent =
    "Olá, " + nome + "! Sua próxima aventura será em " + destino + "!";

    formulário.reset();
})