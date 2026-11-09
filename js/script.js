const botaoCriar = document.getElementById("botaoCriar");
const botaoApagar = document.getElementById("botaoApagar");
const retorno = document.getElementById("retorno");

botaoCriar.addEventListener("click", () => {
    retorno.style.backgroundColor = "#fde68a";
    retorno.style.color = "#b45309";
    retorno.style.fontSize = "28px";
    retorno.style.textAlign = "center";
    retorno.style.padding = "10px"
    retorno.style.borderRadius = "8px";
    retorno.textContent = "Olá, meu nome é Lucas!";
});

botaoApagar.addEventListener("click", () => {
    retorno.textContent = "";
    retorno.style.backgroundColor = "";
    retorno.style.color = "";
    retorno.style.fontSize = "";
    retorno.style.padding = "";
    retorno.style.borderRadius = "";
})