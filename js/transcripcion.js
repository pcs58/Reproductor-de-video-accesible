function alternaTituloYbuscar() {
  if (!tituloTranscripcion.classList.contains("hidden")) {
    tituloTranscripcion.classList.add("hidden")
    buscarTranscripcion.classList.remove("hidden")
    transcripcionBuscarInput.focus()
  } else {
      // transcripcionBuscarInput.focus()
        tituloTranscripcion.classList.remove("hidden")
        buscarTranscripcion.classList.add("hidden")
    }
}

function irATiempo() {
  const tiempo = String(this.id).substring(2);
  video.currentTime = tiempo;
  // video2.currentTime = tiempo;
  barraProgreso.value = tiempo;
  progreso.value = tiempo;
}

function inicializaTranscripcion() {
  var i = 0
  for (const track of video.textTracks) {
    if (compruebaTipoTextTrack("subtitles", i)) {
      const b = document.createElement("button")
      b.classList.add("seleccion-transcripcion")
      b.classList.add("hidden")
      b.setAttribute("aria-label", `${elegido.lIdiomaTranscripcion} ${track.language}`)
      b.id = `${track.language}-transcripcion`
      b.innerHTML = track.label;
      seleccionaTranscripcion.appendChild(b);
    }
    i++;
  }
}

function quitarSeleccion() {
  [...seleccionTranscripcion].map((sc) => {
      sc.classList.add("hidden")
      sc.classList.remove("seleccionado-transcripcion")}
    )
}

function noMostrarNoSeleccionado() {
  [...seleccionTranscripcion].map((sc) => {
    if(!sc.classList.contains("seleccionado-transcripcion"))
      sc.classList.add("hidden")
  })  
}
function mostrarSeleccionables() {
  [...seleccionTranscripcion].map((sc) => {
      sc.classList.remove("hidden")
    })
}

function actualizaFocus() {

  [...elementosBotonCue].map((bc) => {
    if (Math.round(video.currentTime) == Math.round(String(bc.id).substring(2))) {
      [...elementosBotonCue].map((e) => e.classList.remove("transcripcion-marcada"))
      var coord = bc.getBoundingClientRect();
      bc.classList.add("transcripcion-marcada");
      if(coord.top >=400) {
        var sA = coord.top;
        transcripcionCues.scrollTo({
          top: sA,
          left: 0,
          behavior: 'smooth'
        })
      }
    }
  })
}

function mostrarTranscripcion() {
  if (transcripcionActiva>=0) {
    if (mostrandoTranscripcion != this.srclang) {
      transcripcionCues.innerHTML = "";
      transcripcionCues.classList.add("hidden");
      mostrandoTranscripcion = this.srclang;
      transcripcionCues.classList.remove("hidden");
      [...video.textTracks[transcripcionActiva].cues].map((cue) => {
        const tiempo = formatTime(cue.startTime)

        const b = document.createElement("button")
        const d1 = document.createElement("div")
        const d2 = document.createElement("div")
        b.classList.add("boton-cue")
        b.id = `t-${cue.startTime}`
        d1.id = "tiempo-transcripcion";
        d2.id = "texto-transcripcion"
        d1.innerHTML = `${tiempo.minutes}:${tiempo.seconds}`;
        d2.innerHTML = cue.text;
        b.appendChild(d1);
        b.appendChild(d2);
        transcripcionCues.appendChild(b)

        });
        [...elementosBotonCue].map((bc) => bc.addEventListener('click', irATiempo));
        video.addEventListener('timeupdate', actualizaFocus);
    }
    else {
      mostrandoTranscripcion = "";
    }
  }else {
    transcripcionCues.innerHTML = "";
    transcripcionCues.classList.add("hidden");
    mostrandoTranscripcion = "";
  }
}

function desactivarTranscripcion() {
  for (let i = 0; i < video.textTracks.length; i++) {
    if (compruebaTipoTextTrack("subtitles",i)) {
      video.textTracks[i].mode = "disabled";
    }
  }
  transcripcionActiva = -1;
  // ocultaHr("activaSubtitulos");
  // cargarTranscripcion();
}


function elegirTranscripcion() {
  quitarSeleccion()
  desactivarTranscripcion();
  
  transcripcionActiva = -1
  for (let i = 0; i < video.textTracks.length; i++) {
    if (compruebaTipoTextTrack("subtitles",i)) {
      if(video.textTracks[i].label == this.innerHTML) {
        video.textTracks[i].mode = "showing";
        transcripcionActiva=i;
      }
    }
  }
  if (video.paused && !reproducido && transcripcionActiva>=0) {
    alternarPlay();
  }

  if (transcripcionActiva == 0) {
    trackEn.addEventListener('cuechange',mostrarTranscripcion);
  }
  if (transcripcionActiva == 1){
    trackEs.addEventListener('cuechange',mostrarTranscripcion)
  }if (transcripcionActiva == -1) mostrarTranscripcion();
  // for (const track of video.textTracks) {
  //   if(track.label == this.innerHTML) {
  //     track.mode = "showing"
  //   }
  // }
  this.classList.remove("hidden")
  this.classList.add("seleccionado-transcripcion")
}

function busquedaTranscripcion() {
    const valorInput = transcripcionBuscarInput.value;
    var cont = 0;
    mensajeRespuesta.innerHTML = "";
    document.querySelectorAll(".boton-cue").forEach(cue => {
      if (!cue.textContent.toLowerCase().includes(valorInput.toLowerCase())) {
        cue.classList.add("hidden");
      } else {
        cue.classList.remove("hidden");
        cont++;
      }
    })
    
    if (cont == 0) {
      mensajeRespuesta.classList.remove("hidden")
      mensajeRespuesta.innerHTML = "No se han encontrado resultados";
    }else {
      mensajeRespuesta.classList.add("hidden")

    }
  
}

// function cargarTranscripcion() {
//     var tContainerCues = document.getElementById('t-container-cues')
//     document.getElementById('t-mensaje').innerHTML = ""
//     tContainerCues.innerHTML = ''
//     t_transcripcion = []
//     for (let i = 0; i < video.textTracks.length; i++) {
//         const textrack = video.textTracks[i];
//         if (textrack.mode == "showing") {
//         for (let j = 0; j < video.textTracks[i].cues.length; j++) {
//             const tiempo = video.textTracks[i].cues[j].startTime;
//             console.log(tiempo)
//             const texto = video.textTracks[i].cues[j].text;
//             t_transcripcion.push(texto)
//             var minutos = Math.floor((tiempo / 60) % 60);
//             minutos = (minutos < 10) ? '0' + minutos + ':' : minutos + ':';
//             var segundos = Math.round(tiempo % 60);
//             segundos = (segundos < 10) ? '0' + segundos : segundos;
//             var horas = ''
//             if (tiempo >= 3600) {
//             horas = Math.floor(tiempo / 3600);
//             horas = (horas < 10) ? '0' + horas + ':' : horas + ':';
//             }
//             var cue =
//             `
//             <div class="cue" id="${tiempo}">
//             <div>
//                 <span class="cue-temp" id="${tiempo}">${horas + minutos + segundos}</span> 
//             </div>
//             <div class="cue-text " id="${tiempo}">${texto}</div>
//             </div>
//             `
//             console.log(cue)
//             tContainerCues.innerHTML += cue
//         }
//         }
//     }
// }

function borrarBusquedaTranscripcion() {
    tBuscarInput.value = "";
    mostrarXenInput()
}

function mostrarXenInput() {
    if (tBuscarInput.value != "")
      borrarTexto.style.display = "inline"
    else
      borrarTexto.style.display = "none"
}

function transcripcionEstaActiva() {
  return (transcripcionEstaActiva)
}

function mostrarOcultarTranscripcion() {
  if (transcripcionContainer.classList.contains("hidden")) {
    // transcripcionActiva=1;
    activaTranscripcion.classList.remove("hidden");
    transcripcionContainer.classList.remove("hidden");
    container.classList.remove("no-transcripcion");
  }else {
    activaTranscripcion.classList.add("hidden");
    // transcripcionActiva=-1;
    // container.classList.remove("transcripcion-abajo");
    // container.classList.remove("transcripcion-al-lado");
    container.classList.add("no-transcripcion");
    transcripcionContainer.classList.add("hidden");
  }
}

// function callback(mutationsList, observer) {
//   console.log('Mutations:', mutationsList)
//   console.log('Observer:', observer)
// }

// const observadorMutacion = new MutationObserver(MutationRecord => {
//   console.log(MutationRecord)
//   MutationRecord.

// })

// function mostrarOcultarTranscripcion() {
//     var todo = document.getElementById('transcripcion')
  
//     if (trancripcionContainer.style.display != "none") {
//       trancripcionContainer.style.display = "none"
//       todo.classList.remove("transcripcion")
//       cerrarVentanaSubtitulos()
//     } else {
//       cargarTranscripcion()
//       // seleccionarSubtitulos("es")
  
//       todo.classList.add("transcripcion")
//       trancripcionContainer.style.display = "inline"
//     }
//   }