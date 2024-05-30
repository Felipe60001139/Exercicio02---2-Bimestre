function verificarParidade() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (numero % 2 === 0) {
        resultado.innerText = `${numero} é Par.`;
    } else {
        resultado.innerText = `${numero} é Ímpar.`;
    }
}