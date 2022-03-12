//   Copiar texto
var botaoCopiar = document.querySelector("#btn-copy");

function copiarTexto() {
    navigator.clipboard.writeText(caixaMensagem.value);
    caixaMensagem.value = "";
    texto.value = "";
    document.getElementsByClassName("mensagem__saida")[0].style.display = "none";
    document.getElementsByClassName("botao__copiar")[0].style.display = "none";
    document.getElementsByClassName("mensagem")[0].style.justifyContent = "center";
    document.getElementsByClassName("conteudo__imagem")[0].style.display = "block";
    document.getElementsByClassName("mensagem__conteudo")[0].style.display = "block";
}
    
botaoCopiar.addEventListener("click", copiarTexto);

/*  
Estilização do display texterea e botão copiar 
=>pode também chamar direto no addEventListener
*/

inputCripto.onclick = botaoVisivel;
inputDescripto.onclick = botaoVisivel;

function botaoVisivel() {
    document.getElementsByClassName("mensagem")[0].style.justifyContent = "space-between";
    document.getElementsByClassName("botao__copiar")[0].style.display = "block";
    document.getElementsByClassName("mensagem__saida")[0].style.display = "block";
    document.getElementsByClassName("conteudo__imagem")[0].style.display = "none";
    document.getElementsByClassName("mensagem__conteudo")[0].style.display = "none";
    //ou botaoCopiar.classList.remove("invisivel");
}