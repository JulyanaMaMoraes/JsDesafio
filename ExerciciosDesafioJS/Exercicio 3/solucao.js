var cores = document.getElementsByName('cor');

for (var i = 0; i < cores.length; i++) {
  cores[i].addEventListener('change', function() {
    var corclicada = this.value;
    console.log('Cor selecionada: ' + corclicada);
    document.body.style.backgroundColor = corclicada;
  });
}