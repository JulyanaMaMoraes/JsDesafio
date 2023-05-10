var botao = document.getElementById('botao');
var texto = document.getElementById('texto');

botao.addEventListener('click', function() {
    if (texto.style.display === 'none') {
      texto.style.display = 'block';
      botao.textContent = 'Ocultar';
    } else {
      texto.style.display = 'none';
      botao.textContent = 'Mostrar';
    }
  });