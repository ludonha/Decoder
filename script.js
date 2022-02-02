var inputCripto = document.querySelector("#btn-cripto");

inputCripto.addEventListener("click", mensagem);

var inputDescripto = document.querySelector("#btn-descripto");

inputDescripto.addEventListener("click", desmensagem);

var caixaMensagem = document.querySelector("#msg");

var texto = document.getElementById("input-texto");

var regex = /^[a-z\s]*$/

function criptografar(texto) {
    if (regex.test(texto)) {
        return texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
    } else {
        alert("Apenas letras minúsculas e sem acentuação!!!");
    }
}
function descripitografar(texto) {
    return texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
}
function mensagem(evento) {
    evento.preventDefault();
    
    var textoCofificado = criptografar(texto.value);
    caixaMensagem.value = textoCofificado;
    if (caixaMensagem.value === "undefined") {
        caixaMensagem.value = "";
    }    
}
function desmensagem(evento) {
    evento.preventDefault();
    
    var textoDescodificado = descripitografar(texto.value);
    caixaMensagem.value = textoDescodificado;
}