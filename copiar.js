//   Copiar texto
var botaoCopiar = document.querySelector("#btn-copy");

function copiarTexto() {
    navigator.clipboard.writeText(caixaMensagem.value);
    caixaMensagem.value = "";
    texto.value = "";
    document.getElementsByClassName("invisivel")[0].style.display = "none";
    document.getElementsByClassName("visivel")[0].style.display = "flex";
}
    
botaoCopiar.addEventListener("click", copiarTexto);

//pode também chamar direto no addEventListener
inputCripto.onclick = botaoVisivel;
inputDescripto.onclick = botaoVisivel;

function botaoVisivel() {
    document.getElementsByClassName("invisivel")[0].style.display = "flex";
    document.getElementsByClassName("visivel")[0].style.display = "none";
    //ou botaoCopiar.classList.remove("invisivel");
}