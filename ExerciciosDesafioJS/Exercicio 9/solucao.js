var lo = document.getElementById('Login');
var se = document.getElementById('Senha');
var confs = document.getElementById('Csenha');


function validar() {
   
    if (lo.value == "" || se.value == "" || confs.value == "") {
        alert("Preencha todos os campos.");
        return false;
    }

    if (se.value != confs.value) {
        alert("As senhas digitadas precisam ser iguais.");
        return false;
    }

    if (se.value.length < 6 || se.value.length > 10) {
        alert("A senha deve possuir entre 6 e 10 caracteres.");
        return false;
    }

    alert("Cadastro concluido com sucesso.");
    return true;
}