function compararNumeros() {
   let numero1 = parseInt(document.getElementById('numero1').value);
   let numero2 = parseInt(document.getElementById('numero2').value);
   let resultado = document.getElementById('resultado');

    if (numero1 > numero2) {
        resultado.innerText = `${numero1} é maior que ${numero2}.`;
    } else if (numero1 < numero2) {
        resultado.innerText = `${numero1} é menor que ${numero2}.`;
    } else {
        resultado.innerText = `${numero1} é igual a ${numero2}.`;
    }
}