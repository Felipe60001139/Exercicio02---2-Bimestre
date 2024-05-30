function calcularPedido() {
    let sabor1 = document.getElementById("sabor1").value;
    let sabor2 = document.getElementById("sabor2").value;
    let sabor3 = document.getElementById("sabor3").value;
    let sabor4 = document.getElementById("sabor4").value;
    let refrigerantes = parseInt(document.getElementById("refrigerantes").value);
    
    if (!sabor1 || !sabor2 || !sabor3 || !sabor4 || isNaN(refrigerantes) || refrigerantes < 0) {
        alert(" Preencha todos os campos corretamente.");
        return;
    }

    let precoPizza = 12.00;
    let precoRefrigerante = 7.00;

    let totalPizza = 4 * precoPizza;
    let totalRefrigerantes = refrigerantes * precoRefrigerante;
    let total = totalPizza + totalRefrigerantes;

    let saboresList = `
        <li>${sabor1}</li>
        <li>${sabor2}</li>
        <li>${sabor3}</li>
        <li>${sabor4}</li>
    `;

    document.getElementById("sabores").innerHTML = saboresList;
    document.getElementById("total").innerText = total.toFixed(2);
}