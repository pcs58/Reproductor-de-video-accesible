// esta funcion pone el video en pantalla completa obteniendo todo el DOM y poniendolo a pantall acompleta a excepción del navegador safari
function alternaPantallaCompleta() {
  if (lFullScreen == 0) lFullScreen = 1
  else lFullScreen = 0;

  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
    // Need this to support Safari     
    document.webkitExitFullscreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    // Need this to support Safari     
    videoContainer.webkitRequestFullscreen();
  } else {
    videoContainer.requestFullscreen();
  }
}

// Actualiza el botón de pantalla completa cuando se pulse, ademas actualiza el titulo de la barra de control
function actualizaBotonPantallaCompleta() {
    iconosPantallaCompleta.forEach(icon => icon.classList.toggle('hidden'));
    if (!document.fullscreenElement) {
      botonPantallaCompleta.setAttribute('data-title', elegido.lDTSalirPantallaCompleta)
    } else {
      botonPantallaCompleta.setAttribute('data-title', elegido.lDTPantallaCompleta)
    }
  }