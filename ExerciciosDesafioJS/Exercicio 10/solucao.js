
var nome = document.getElementById('nomeCompleto');
var cpf = document.getElementById('cpf');
var cnpj = document.getElementById('cnpj');
var dataNas = document.getElementById('dataNascimento');
var end = document.getElementById('end');
var cep = document.getElementById('cep');
var email = document.getElementById('email');
var tel = document.getElementById('telefone');
var tpessoa = document.querySelectorAll('input[name="pessoa"]');

function validarFormulario() {
  

  if (nome.value === '') {
    alert('Por favor, preencha o campo nome.');
    return false;
  }

  if (!cpf.disabled && cpf.value === '') {
    alert('Por favor, preencha o campo CPF.');
    return false;
  }

  if (!cnpj.disabled && cnpj.value === '') {
    alert('Por favor, preencha o campo CNPJ.');
    return false;
  }

  if (end.value === '') {
    alert('Por favor, preencha o campo endereço.');
    return false;
  }

  if (cep.value === '') {
    alert('Por favor, preencha o campo CEP com números válidos.');
    return false;
  }

  if (tel.value === '') {
    alert('Por favor, preencha o campo telefone.');
    return false;
  }

  if (email.value === '') {
    alert('Por favor, preencha o campo email.');
    return false;
  }

  return true;
}

window.addEventListener('load', function() {

  tpessoa.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (radio.value === 'fisica') {
        cpf.disabled = false;
        cnpj.disabled = true;
        dataNas.disabled = false;
      } else {
        cpf.disabled = true;
        cnpj.disabled = false;
        dataNas.disabled = true;
      }
    });
  });

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    if (validarFormulario()) {
      alert('Cadastro concluído com sucesso!');
      document.querySelector('form').submit();
    } else {
      alert('Por favor, corrija os campos inválidos.');
    }
  });
});

