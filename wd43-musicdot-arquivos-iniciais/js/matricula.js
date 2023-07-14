var $tdTotalCursos = document.querySelector('.js-total-de-cursos')
var $tdTotalHoras = document.querySelector('.js-total-de-horas')
var $buttonConfirmar = document.querySelector('.js-botao-matricula')
var totalHoras = 0
var totalCursos = 0

function adicionaCursos(checkbox) {
    totalCursos ++
    totalHoras += parseInt(checkbox.value)
}