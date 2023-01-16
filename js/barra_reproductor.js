// Actualiza el tiempo transcurrido en los controles
function actualizaTiempoTranscurrido() {
    const time = formatTime(video.currentTime);
    tiempoTranscurrido.innerText = `${time.minutes}:${time.seconds}`;
    tiempoTranscurrido.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
  }
  
  // actualiza el tiempo actual del video tanto en la barra de progreso como en el input range
  function actualizaProgreso() {
    progreso.value = video.currentTime;
    barraProgreso.value =video.currentTime;
    // console.log(progreso.value);
    // console.log(barraProgreso.value);
  }
// Esta función utiliza la posición del cursor en el en el seek-tooltip para
// calcular aproximadamente en qué parte del rango de entrada se desplaza el
// usuario almacena la posición en  data-seek 
function actualizaConPosicionInfoProgreso(event) {
    var anchoBarra = (event.offsetX / event.target.clientWidth); // valor entre 0 y 1
    if (anchoBarra <= 1 && anchoBarra >= 0) {
      var skipTo = anchoBarra * event.target.getAttribute('max');
      // console.log("hola" + skipTo)
      progreso.setAttribute('data-seek', skipTo)
      const t = formatTime(skipTo);
      infoProgreso.textContent = `${t.minutes}:${t.seconds}`;
      const rect = container.getBoundingClientRect();
      infoProgreso.style.left = `${event.pageX - (30 + rect.left)}px`;
    }
}
// Esta funciona salta a las diferentes partes del video cuando se clica en el div
// seek-tooltip
function skipAhead(event) {
  tiempoAnterior = -1
  // var progres = progreso.getAttribute('data-seek')
  // var skipTo = progres


  const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;

  video.currentTime = skipTo;
  video2.currentTime = skipTo;
  barraProgreso.value = skipTo;
  progreso.value = skipTo;
}

// Pasa el tiempo en segundos a formato minutos segundos
// lo devuelve en un objeto {minutes, seconds} 
function formatTime(timeInSeconds) {
  if (!timeInSeconds) return { minutes: '00', seconds: '00' }
  
  const date = new Date(timeInSeconds * 1000);
  const result = date.toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
};

// Inicializa el tiempo de duración en los controles
function inicializaVideo() {
  const duracionVideo = video.duration;
  progreso.value = 0;
  progreso.setAttribute('max', duracionVideo);
  barraProgreso.setAttribute('max', duracionVideo);
  const time = formatTime(duracionVideo);
  duracion.innerText = `${time.minutes}:${time.seconds}`;
  // duracion.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

// Actualiza el tiempo transcurrido en los controles
function actualizaInfoProgreso() {
  if (video.play) {
    progreso.value = video.currentTime;
    barraProgreso.value = video.currentTime;
    // video2.currentTime = video.currentTime
  }
}

function intervaloDeProgreso() {
  // document.addEventListener('loadedmetadata', listarSubtitulos()); 
  intervaloProgreso = setInterval(actualizaInfoProgreso, tasaRefresco)
}

function acabaIntervaloDeProgreso() {
  clearInterval(intervaloProgreso)
  intervaloProgreso = null
}

function efectoAdelantarTiempo() {
  adelantaVideo.animate([
    {
      opacity: 1,
      transform: "scale(1)",
    }], {
      duration: 400,
    });
  }
  function efectoAtrasarTiempo() {
    atrasaVideo.animate([
      {
        opacity: 1,
        transform: "scale(1)",
      }], {
        duration: 400,
      });
    }
    
    
function adelantarTiempo() {
  efectoAdelantarTiempo();
  if (Math.round(video.currentTime)+5 <= Math.round(video.duration)) {
    video.currentTime = parseFloat(video.currentTime) + 5;
    video2.currentTime = parseFloat(video.currentTime) + 5; 
  }
  else {
    video.currentTime = video.duration;
    video2.currentTime = video2.duration;
  } 
  
  progreso.value = video.currentTime;
  barraProgreso.value = video.currentTime;
}
function atrasarTiempo() {
  efectoAtrasarTiempo();
  if (Math.round(video.currentTime)-5 >= 0) {
    video.currentTime = parseFloat(video.currentTime) - 5;
    video2.currentTime = parseFloat(video.currentTime) - 5; 
  }
  else {
    video.currentTime = 0;
    video2.currentTime = 0;
  } 
  
  progreso.value = video.currentTime;
  barraProgreso.value = video.currentTime;
}
