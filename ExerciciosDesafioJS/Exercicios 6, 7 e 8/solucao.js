var Fp = document.getElementById ("Fpreto");
var Fb = document.getElementById ("Fbranco");
var Lp = document.getElementById("Lpreta");
var Lb = document.getElementById("Lbranca");
var mai = document.getElementById("Maiusculo");
var min = document.getElementById("Minusculo");
var texto = document.getElementById("texto");




 Fp.addEventListener('click', function() {
    document.body.style.backgroundColor = "black";
  });
  
  Fb.addEventListener('click', function() {
    document.body.style.backgroundColor = "white";
  });

 Lp.addEventListener("click", function() {
    texto.style.color = "black";
  });
  
  Lb.addEventListener("click", function() {
    texto.style.color = "white";
  });

  function Afonte() {
    var tamanho = parseInt(window.getComputedStyle(document.getElementById("texto")).fontSize);
    tamanho += 1;
    document.getElementById("texto").style.fontSize = tamanho + "px";
  }
  
  function Dfonte() {
    var tamanho = parseInt(window.getComputedStyle(document.getElementById("texto")).fontSize);
    tamanho -= 1;
    document.getElementById("texto").style.fontSize = tamanho + "px";
  }

  mai.addEventListener("click", function() {
    texto.style.textTransform = "uppercase";
  });
  
  min.addEventListener("click", function() {
    texto.style.textTransform = "lowercase"
  });