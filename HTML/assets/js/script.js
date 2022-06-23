var nome = window.document.getElementById('nome')
var nomeOk = false
var email = document.querySelector('#email')
var emailOk = false

function validarNome() {
    let TxtNome = document.querySelector('#TxtNome')
    if (nome.value.length < 2) {
        TxtNome.innerHTML = 'Nome Inválido! 😢'
        TxtNome.style.color = 'red'
        nomeOk = false
    } else {
        TxtNome.innerHTML = 'Nome Válido! 😃'
        TxtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail() {
    let TxtEmail = document.querySelector('#TxtEmail')
    if (email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0) {
        TxtEmail.innerHTML = 'E-mail Válido! 😃'
        TxtEmail.style.color = 'green'
        emailOk = true
    } else {
        TxtEmail.innerHTML = 'E-mail Inválido! 😢'
        TxtEmail.style.color = 'red'
        emailOk = false
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true) {
        alert('Preenchido corretamente, enviado!')
    } else {
        alert('Preencha o campo corretamente')
    }
}