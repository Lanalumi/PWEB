const inputTexto = document.getElementById('meuTexto');
const radioMaiuscula = document.getElementById('opcaoMaiuscula');
const radioMinuscula = document.getElementById('opcaoMinuscula');

function transformarTexto() {
    let textoAtual = inputTexto.value;

    if (radioMaiuscula.checked) {
        inputTexto.value = textoAtual.toUpperCase();
    } else if (radioMinuscula.checked) {
        inputTexto.value = textoAtual.toLowerCase();
    }
}

radioMaiuscula.addEventListener('change', transformarTexto);
radioMinuscula.addEventListener('change', transformarTexto);