function dividirTurmas() {
    let alunos = parseInt(document.getElementById('alunos').value);
    let turmas = parseInt(document.getElementById('turmas').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(alunos) || isNaN(turmas) || alunos <= 0 || turmas <= 0) {
        resultado.innerText = "Por favor, insira valores válidos para o número de alunos e de turmas.";
        return;
    }

    let alunosPorTurma = Math.floor(alunos / turmas);
    let alunosSemTurma = alunos % turmas;

    resultado.innerText = `Cada turma terá ${alunosPorTurma} alunos.\nAlunos sem turma: ${alunosSemTurma}.`;
}