function compararIdades() {
    let nome1 = document.getElementById('nome1').value;
    let nascimento1 = parseInt(document.getElementById('nascimento1').value);
    let nome2 = document.getElementById('nome2').value;
    let nascimento2 = parseInt(document.getElementById('nascimento2').value);
    let nome3 = document.getElementById('nome3').value;
    let nascimento3 = parseInt(document.getElementById('nascimento3').value);

    let pessoas = [
        { nome: nome1, ano: nascimento1 },
        { nome: nome2, ano: nascimento2 },
        { nome: nome3, ano: nascimento3 }
    ];

    pessoas.sort((a, b) => a.ano - b.ano);

    let anoAtual = new Date().getFullYear();
    let maisVelha = pessoas[0];
    let doMeio = pessoas[1];
    let maisNova = pessoas[2];

    let result = `
        <p>Pessoa mais velha: ${maisVelha.nome} - ${anoAtual - maisVelha.ano} anos</p>
        <p>Pessoa do meio: ${doMeio.nome} - ${anoAtual - doMeio.ano} anos</p>
        <p>Pessoa mais nova: ${maisNova.nome} - ${anoAtual - maisNova.ano} anos</p>
    `;

    document.getElementById('result').innerHTML = result;
}