let Visor = document.getElementById('visor');


function selecionarNumero(numero) {
  if (Visor.innerHTML == 0) {
    Visor.innerHTML = numero;
      return ;

  }
  Visor.innerHTML += numero;

}
