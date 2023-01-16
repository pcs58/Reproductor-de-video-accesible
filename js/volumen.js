// actualiza el volumen del video y si estaba muteado lo desmutea
function actualizaVolumen() {
  if (video.muted) {
    video.muted = false;
  }
  
  video.volume = volumen.value ;

  volumePAd.value = volumen.value;
  numeroVolumen.textContent = `${Math.round(volumen.value*100)}%`;
}

function volumenEstaFocus() {
  var r=false;
  [...volumenC].map((v) => r = r || document.activeElement == v)
  return r;
}
  


  // Actualiza el icono del volumen y si el volumen es 0 cambia al icono
// de muteado
function actualizaBotonVolumen() {
    iconosVolumen.forEach(icon => {
      icon.classList.add('hidden');
    });
  
    botonVolumen.setAttribute('data-title', elegido.lDTSilenciar)
  
    if (video.muted || video.volume === 0) {
      volumeMute.classList.remove('hidden');
      botonVolumen.setAttribute('data-title', elegido.lDTActivarSonido)
    } else if (video.volume > 0 && video.volume <= 0.5) {
      volumeLow.classList.remove('hidden');
    } else {
      volumeHigh.classList.remove('hidden');
    }
}

  // Mutea y desmutea el video, cuando se desmutea
  // se vuelve al mismo valor que tenía antes de ser muteado
  function alternaMute() {
      if (lSonido == 0) lSonido = 1;
      else lSonido = 0;

      video.muted = !video.muted;
      if (video.volume == 0) video.muted = false;

      if (video.muted) {
        volumen.setAttribute('data-volume', volumen.value);
        volumen.value = 0;
      } else {
        volumen.value = volumen.dataset.volume;
        if (volumen.value == '0.15') video.volume = '0.15';

        if (video.volume == 0 || volumen.value == 0 || volumen.dataset.volume === undefined) {
          volumen.value = '0.15';
          video.volume = '0.15';
        }
      }
  }


function efectoSubirVolumen() {
  asubirVolumen.animate([
    {
      opacity: 1,
      transform: "scale(1)",
    }], {
    duration: 500,
  });
}
function efectoBajarVolumen() {
  abajarVolumen.animate([
    {
      opacity: 1,
      transform: "scale(1)",
    }], {
    duration: 500,
  });
}

function inicializarVolumen () {
  volumen.value = video.volume;
}

function mostrarVolumen() {
  mostrarNumero.textContent = `${Math.round(volumen.value*100)}%`;
  mostrarNumero.animate([
    {
      opacity: 1,
      transform: "scale(1)",
    }], {
    duration: 500,
  });
}

function subirVolumen() {
  efectoSubirVolumen();
  mostrarVolumen();
  if (volumen.value <= 0.95) 
  volumen.value = parseFloat(volumen.value) + 0.05;
  else 
  volumen.value = 1;
  
  video.volume = volumen.value;
}

function bajarVolumen() {
  mostrarVolumen();
  efectoBajarVolumen();
  if (volumen.value >= 0.05)
    volumen.value = parseFloat(volumen.value) - 0.05;
  else 
    volumen.value = 0;

  video.volume = volumen.value;
}