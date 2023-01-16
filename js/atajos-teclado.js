function keyboardShortcuts(event) {
  
  const { key } = event;
  const { keyCode } = event;
  // comprueba que no se encuentra en focus el input de transcripciones
  if (transcripcionBuscarInput !== document.activeElement) {
      // event.preventDefault();
      switch(keyCode) {
        case 38: // arriba
          if (!volumenEstaFocus()) {
            subirVolumen();
            cerrarTodasVentanas()
            event.preventDefault();
            event.stopPropagation();
          }
          
          break;
          case 40: // Abajo
          if (!volumenEstaFocus()) {
            bajarVolumen();
            cerrarTodasVentanas()
            event.preventDefault();
            event.stopPropagation();
          }
          break;
          case 37: // izquierda
          if (!volumenEstaFocus()){
            atrasarTiempo();
            cerrarTodasVentanas()
            event.preventDefault();
            event.stopPropagation();
          }
          break;
          case 39: // derecha
          if (!volumenEstaFocus()){
            adelantarTiempo();
            cerrarTodasVentanas()
            cerrarTodasVentanas()
            event.preventDefault();
            event.stopPropagation();
          }
          break;
      }
      switch (key) {
        case 'k':
          alternarPlay2();
          efectoAnimacionPlay();
          if (video.paused) {
            muestraControles();
          } else {
            setTimeout(() => {
              ocultaControles();
            }, 2000);
          }
          break;
        case 'm':
          alternaMute();
          break;
        case 'f':
          alternaPantallaCompleta();
          actualizaBotonPantallaCompleta()
          break;
        case 'p':
          togglePip();
          break;
        case 's':
          alternarSubtitulos();
          break;
        case 't':
          mostrarOcultarTranscripcion();
          break;
        case 'l':
          alternarSignos();
          break;
        case 'a':
          alternarAD();
          break;
        case 'h':
          alternarAyuda();
          break;
        case ' ':
          event.preventDefault();
          event.stopPropagation();
          alternarPlay2();
          efectoAnimacionPlay();
          if (video.paused) {
            muestraControles();
          } else {
            setTimeout(() => {
              ocultaControles();
            }, 2000);
          }
          break;
      }


    }
    else {
      switch (key) {
        case "Enter":
          busquedaTranscripcion();
          break;
      }
    }
  }
function keyboardShortcuts2(event) {
    const { key } = event;
    const { keyCode } = event;
    // comprueba que no se encuentra en focus el input de transcripciones
    if (transcripcionBuscarInput !== document.activeElement) {
      switch(keyCode) {
        case 38: // arriba
          if (!volumenEstaFocus()) {
            subirVolumen();
            cerrarTodasVentanas()
            event.preventDefault();
            event.stopPropagation();
          }
          
          break;
          case 40: // Abajo
          if (!volumenEstaFocus()) {
            bajarVolumen();
            cerrarTodasVentanas()
            event.preventDefault();
            event.stopPropagation();
          }
          break;
          case 37: // izquierda
          if (!volumenEstaFocus()){
            atrasarTiempo();
            cerrarTodasVentanas()
            event.preventDefault();
            event.stopPropagation();
          }
          break;
          case 39: // derecha
          if (!volumenEstaFocus()){
            adelantarTiempo();
            cerrarTodasVentanas()
            cerrarTodasVentanas()
            event.preventDefault();
            event.stopPropagation();
          }
          break;
      }
      switch (key) {
        case 'k':
          alternarPlay2();
          efectoAnimacionPlay();
          if (video.paused) {
            muestraControles();
          } else {
            setTimeout(() => {
              ocultaControles();
            }, 2000);
          }
          break;
        case 'm':
          alternaMute();
          break;
        case 'f':
          alternaPantallaCompleta();
          actualizaBotonPantallaCompleta()
          break;
        case 'p':
          togglePip();
          break;
        case 's':
          alternarSubtitulos();
          break;
        case 'l':
          alternarSignos();
          break;
        case 'a':
          alternarAD();
          break;
        case 'h':
          alternarAyuda();
          break;
        case ' ':
          event.preventDefault();
          event.stopPropagation();
          alternarPlay2();
          efectoAnimacionPlay();
          if (video.paused) {
            muestraControles();
          } else {
            setTimeout(() => {
              ocultaControles();
            }, 2000);
          }
          break;
      }
    }
    else {
      switch (key) {
        case "Enter":
          busquedaTranscripcion();
          break;
      }
    }
  }


  function alternarAyuda() {
    if (vAyuda.classList.contains("hidden"))
      vAyuda.classList.remove("hidden");
    else 
      vAyuda.classList.add("hidden");
  }