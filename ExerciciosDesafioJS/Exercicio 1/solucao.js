var vm = document.getElementById ("vermelho");
var vd = document.getElementById ("verde");
var az = document.getElementById ("azul");
var am = document.getElementById ("amarelo")

vm.addEventListener('click', function() {
    document.body.style.backgroundColor = "red";
  });
  
  vd.addEventListener('click', function() {
    document.body.style.backgroundColor = "green";
  });
  
  az.addEventListener('click', function() {
    document.body.style.backgroundColor = "blue";
  });
  
  am.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
  });