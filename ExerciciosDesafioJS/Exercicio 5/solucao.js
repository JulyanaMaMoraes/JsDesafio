const caixas = document.querySelectorAll('input[type="checkbox"]');
const button = document.getElementById('botao');

caixas.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    const escrever = document.querySelectorAll('input[type="checkbox"]:checked');
    if (escrever.length >= 2) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});