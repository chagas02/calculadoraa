let Visor = document.getElementById('visor');


function selecionarNumero(numero) {
//quantidade de caracteres
if (Visor.innerHTML.length > 9){
  return;
}
if (Visor.innerHTML == 0) {
    Visor.innerHTML = numero;
      return ;

  }
  Visor.innerHTML += numero;

}
