function verificarSituacao() {
    let nota = parseFloat(document.getElementById('nota').value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        document.getElementById('resultado').innerText = "Nota válida entre 0 e 10.";
    } else if (nota >= 6) {
        document.getElementById('resultado').innerText = "Aprovado!";
    } else if (nota > 4) {
        document.getElementById('resultado').innerText = "Precisa fazer prova substitutiva.";
    } else {
        document.getElementById('resultado').innerText = "Reprovado.";
    }
}