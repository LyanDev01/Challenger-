let Personagem = document.querySelector(".Person");
let texto = document.querySelector(".texto__Caixa");
let resultado = document.querySelector(".texto_resultado");
let botaocriptografar = document.querySelector(".Criptografar");
let botaodescriptografar = document.querySelector(".Descriptografar");
let copiarTexto = document.querySelector(".copiar__Texto");

botaocriptografar.onclick = criptografar;
botaodescriptografar.onclick = descriptografar;


ocultarCopiarTexto();

copiarTexto.addEventListener("click", () => {
    var contido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contido);
    console.log("Copiado para a área de transferência");
});

function criptografar() {
    ocultarLayout();
    let textoOriginal = document.getElementById("textoOriginal").value;
    let textoCriptografado = criptografarTexto(textoOriginal);
    resultado.textContent = textoCriptografado;
    ocultarCopiarTexto();
}

function descriptografar() {
    ocultarLayout();
    let textoCriptografado = document.getElementById("textoOriginal").value;
    let textoDescriptografado = descriptografarTexto(textoCriptografado);
    resultado.textContent = textoDescriptografado;
    ocultarCopiarTexto();
}

function ocultarCopiarTexto() {
    let resultadoTexto = resultado.textContent.trim();
    if (resultadoTexto !== "") {
        copiarTexto.classList.remove("ocultar");
    } else {
        copiarTexto.classList.add("ocultar");
    }
}

function ocultarLayout() {
    Personagem.classList.add("ocultar");
    texto.classList.add("ocultar");
}

function recuperarTexto() {
    var textoOriginal = document.querySelector(".caixa__de__texto").value;
    return textoOriginal;
}

function criptografarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function descriptografarTexto(textoCriptografado) {
    return textoCriptografado.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');
}


