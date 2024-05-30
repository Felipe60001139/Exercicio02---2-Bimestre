function calcular() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite números inteiros válidos.");
        return;
    }
    
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var multiplicacao = num1 * num2;
    var divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Divisão por zero";

    document.getElementById('soma').innerText = soma;
    document.getElementById('subtracao').innerText = subtracao;
    document.getElementById('multiplicacao').innerText = multiplicacao;
    document.getElementById('divisao').innerText = divisao;
}