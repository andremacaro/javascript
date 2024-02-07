function criarDisciplina(idNota1, idNota2, exMedia) {
    const nota1 = document.getElementById(idNota1);
    const nota2 = document.getElementById(idNota2);
    const mediaElement = document.getElementById(exMedia);

    nota2.addEventListener('keyup', calcularMedia);

    function calcularMedia() {
        const valor1 = parseFloat(nota1.value);
        const valor2 = parseFloat(nota2.value);
        const media = (valor1 + valor2) / 2;

        atualizarMedia(media);
    }

    function atualizarMedia(media) {
        mediaElement.innerText = media;

        mediaElement.classList.remove('aprovado', 'reprovado');
        mediaElement.classList.add(media >= 60 ? 'aprovado' : 'reprovado');
    }

    return {
        calcularMedia,
        atualizarMedia
    };
}

// Crie as instâncias das disciplinas
const matematica = criarDisciplina('nota1mat', 'nota2mat', 'mediaMat');
const fisica = criarDisciplina('nota1fis', 'nota2fis', 'mediaFis');
const quimica = criarDisciplina('nota1qui', 'nota2qui', 'mediaQui');
const biologia = criarDisciplina('nota1bio', 'nota2bio', 'mediaBio');
const historia = criarDisciplina('nota1his', 'nota2his', 'mediaHis');
const geografia = criarDisciplina('nota1geo', 'nota2geo', 'mediaGeo');
