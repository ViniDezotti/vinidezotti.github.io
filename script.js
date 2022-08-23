
function reset(){
    document.getElementById('teste').value='';
}

function escreve(int){
  if(document.getElementById('teste').value.length <= 7){
    document.getElementById('teste').value = document.getElementById('teste').value + int;
  }
  else alert('limite de caracteres excedido!');
}