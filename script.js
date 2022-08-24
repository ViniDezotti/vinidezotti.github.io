var valor = 0;
var operacao = false;
var qntPontos = 0;

function reset(){
  document.getElementById('tela').value = '0';
  operacao=false;
  qntPontos = 0;
}

function escreveNumero(char){
  if(document.getElementById('tela').value == '0'){
    apagar();
  }
  document.getElementById('tela').value = document.getElementById('tela').value + char;
}

function escreveSinal(char){
  if(operacao == false){
    document.getElementById('tela').value = document.getElementById('tela').value + char;
    operacao = true;
  }
}

function apagar(){
  if(document.getElementById('tela').value.substr(-1) == '.') qntPontos--;
  var texto = document.getElementById('tela').value.slice(0,-1);
  document.getElementById('tela').value = texto;
  texto.slice(0,-1);
}

function decimal(){
  if(qntPontos < 1 ){
    document.getElementById('tela').value = document.getElementById('tela').value + '.';
    qntPontos++;
  }
  else if(qntPontos == 1 && operacao == true){
    document.getElementById('tela').value = document.getElementById('tela').value + '.';
    qntPontos++;
  }
}

function calculaResultado(){
  valor = document.getElementById('tela').value;
  valor = eval(valor);
  document.getElementById('tela').value = valor;
  operacao=false;
  
  if((valor % 1) == 0)qntPontos = 0;
  // document.getElementById('tela').value = valor.toFixed(3); se quiser arredondar
}