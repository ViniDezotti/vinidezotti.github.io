function updateButton() {
  if (nro0.value === 'Start machine') {
    nro0.value = 'Stop machine';
    paragraph.textContent = 'The machine has started!';
  } else {
    nro0.value = 'Start machine';
    paragraph.textContent = 'The machine is stopped.';
  }
}

var nro0 = document.querySelector('#nro0');
nro0.addEventListener('click', updateButton);

