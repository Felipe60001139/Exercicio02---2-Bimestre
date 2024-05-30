function calcular() {
    let dolar = parseFloat(document.getElementById('dolar').value);
    
    if (isNaN(dolar)) {
        alert("Digite um valor válido para a cotação do dólar.");
        return;
    }
    
    let aumento1 = dolar * 1.01;
    let aumento2 = dolar * 1.02;
    let aumento5 = dolar * 1.05;
    let aumento10 = dolar * 1.10;

    document.getElementById('aumento1').innerText = aumento1.toFixed(2);
    document.getElementById('aumento2').innerText = aumento2.toFixed(2);
    document.getElementById('aumento5').innerText = aumento5.toFixed(2);
    document.getElementById('aumento10').innerText = aumento10.toFixed(2);
}