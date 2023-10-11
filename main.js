function tocaSomPom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio' ) {
    elemento.play();
  }
  else{
     //alert('Elemento não encontrado');
  console.log('Elemento não encontrado ou seletor inválido');
  }
}
 
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


for (let contador = 0; contador < listaDeTeclas.length;contador ++) {

const tecla = listaDeTeclas[contador];
 const instrumento = tecla.classlist[1];
const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
     tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {

    if (evento.code === 'Space' || evento.code === 'Enter') {
    tecla.classlist.add('ativa');
  }

 }

tecla.onkeyup = function () {
  tecla.classlist.remove('ativa')
}

}

  

