function calcularIngredientes() {
    var pessoas = parseInt(document.getElementById('pessoas').value);
    
    if (isNaN(pessoas) || pessoas < 1) {
        alert("Digite um número válido de pessoas.");
        return;
    }
    
    var ovos = pessoas * 2;
    var queijo = pessoas * 50;

    document.getElementById('ovos').innerText = ovos;
    document.getElementById('queijo').innerText = queijo;
}