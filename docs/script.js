console.log("passei por aqui");
function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valoremReal = valorEmDolarNumerico * 4.83;
  var valorConvertido = "";
  if (valoremReal > 0) {
    valorConvertido = "O resultado em real é R$ " + valoremReal;
    elementoValorConvertido.innerHTML = valorConvertido;
    elementoValorConvertido.style.color = "black";
  } else {
    valorConvertido = "Digite um valor primeiro!";
    elementoValorConvertido.innerHTML = valorConvertido;
    elementoValorConvertido.style.color = "red";
  }
}
