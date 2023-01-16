

////////////////////////////////// Subtitulos inicializar
function inicializaSubitulos () {
    // trackEn.kind = "subtitles";
    // trackEn.label = "English";
    // trackEn.srclang = "en";
    // trackEn.src = "assets/The Godfather_en.vtt";

    // trackEs.kind = "subtitles";
    // trackEs.label = "Español";
    // trackEs.srclang = "es";
    // trackEs.src = "assets/The Godfather_es.vtt";
    // video.appendChild(trackEn);
    // video.appendChild(trackEs);

    listarSubtitulos();
    inicializaOpcionesSubtitulos();
}


//////////////////////////////////////// Funcionalidades de subtítulos
function seleccionarSubtitulos() {
  var id = this.children[0].id;
  for (let i = 0; i < video.textTracks.length; i++) {
    if (compruebaTipoTextTrack("subtitles",i)) {
      video.textTracks[i].mode = "disabled";
      if (id == video.textTracks[i].language) {
        activaSubtitulos.classList.remove("hidden");
        video.textTracks[i].mode = "showing"
        subtituloActivo = i;
        if (transcripcionActiva != -1)
          transcripcionActiva = i;
        cerrarVentanaSubtitulos();
        alternarBotonSeleccionSubtitulos(i);
      }
    }
  }
  trackEn.removeEventListener('cuechange', mostrarTranscripcion)
  trackEs.removeEventListener('cuechange', mostrarTranscripcion)
  if (subtituloActivo == 0) { 
    trackEn.addEventListener('cuechange',mostrarCues)
  }
  if (subtituloActivo == 1) trackEs.addEventListener('cuechange',mostrarCues)
}

function alternarSubtitulos() {
  // cerrarVentanaSignos()
  // cerrarVentanaAD()
  if (ventanaSubtitulos.classList.contains("hidden")) {
    // cerrarTodoSubtitulos();
    cerrarTodasVentanas();
    ventanaSubtitulos.classList.remove("hidden");
  }
  else{
    ventanaSubtitulos.classList.add("hidden");

  } 
}

function listarSubtitulos() {
  for (let i = 0; i < video.textTracks.length; i++) {
    if (compruebaTipoTextTrack("subtitles",i)) {
      var ss = document.createElement('div');
      ss.classList.add('seleccion-subtitulos');
      ss.setAttribute("id", video.textTracks[i].language)
      ss.setAttribute("aria-label", `${elegido.lIdiomaSubtitulos} ${video.textTracks[i].label}`)
      ss.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cero-opacity check-icon">
      <use href="#check"></use>
      </svg>
      ${video.textTracks[i].label}`
      
      var button = document.createElement('button');
      // button.setAttribute("onclick", `seleccionarSubtitulos(${video.textTracks[i].language})`)
      button.classList.add('ss');
      button.appendChild(ss)
      ventanaSubtitulos.appendChild(button);
    }
  }
}
function alternarBotonSeleccionSubtitulos(indice) {
  for (let i = 0; i < checkIcon.length; i++) {
    if (i == indice +1) checkIcon[i].classList.remove("cero-opacity");
    else checkIcon[i].classList.add("cero-opacity");
  }
}

function desactivarSubtitulos() {
  for (let i = 0; i < video.textTracks.length; i++) {
    if (compruebaTipoTextTrack("subtitles",i)) {
      video.textTracks[i].mode = "disabled";
    }
  }
  subtituloActivo = -1;
  transcripcionActiva = -1;
  ocultaHr("activaSubtitulos");
  borrarCues();
  cerrarVentanaSubtitulos();
  alternarBotonSeleccionSubtitulos(-1)
  // cargarTranscripcion();
}

function cerrarVentanaSubtitulos() {
  if (!ventanaSubtitulos.classList.contains("hidden")) 
    ventanaSubtitulos.classList.add("hidden");
}

function volverASubtitulos() {
  if(!opcionesSubtitulos.classList.contains("hidden")) 
    opcionesSubtitulos.classList.add("hidden");
  alternarSubtitulos();
}


///////////////////////// Mostrar Subtítulos
function borrarCues() {
  if (!divCues.classList.contains("hidden"))  divCues.classList.add("hidden")
  cues.innerHTML = ""
}

function mostrarCues() {
  if (divCues.classList.contains("hidden"))  divCues.classList.remove("hidden")

  if (subtituloActivo>=0) {
    try {
      cues.innerHTML = video.textTracks[subtituloActivo].activeCues[0].text;
    } catch (erro) {
      console.log("")
    }
  }
}


///////////////////////// Opciones de subtítulos
function inicializaOpcionesSubtitulos() {
  infoColorFuente.innerHTML    = elegido.lColorFuenteBlanco;
  infoTamanoFuente.innerHTML   = "100%";
  infoColorFondo.innerHTML     = elegido.lColorFondoNegro;
  infoOpacidadFondo.innerHTML  = "100%";
  infoOpacidadFuente.innerHTML = "100%";
}


function alternarOpcionesColorFuente() {
  cerrarVentanaOpcionesSubtitulos();
  if (optColorFuente.classList.contains("hidden"))
        optColorFuente.classList.remove("hidden")
  else optColorFuente.classList.add("hidden")
}

function alternarOpcionesTamanoFuente() {
  cerrarVentanaOpcionesSubtitulos();
  if (optTamanoFuente.classList.contains("hidden"))
        optTamanoFuente.classList.remove("hidden")
  else optTamanoFuente.classList.add("hidden")
}

function alternarOpcionesColorFondo() {
  cerrarVentanaOpcionesSubtitulos();
  if (optColorFondo.classList.contains("hidden"))
        optColorFondo.classList.remove("hidden")
  else optColorFondo.classList.add("hidden")
}

function alternarOpcionesOpacidadFondo() {
  cerrarVentanaOpcionesSubtitulos();
  if (optOpacidadFondo.classList.contains("hidden"))
        optOpacidadFondo.classList.remove("hidden")
  else optOpacidadFondo.classList.add("hidden")
}

function alternarOpcionesOpacidadFuente() {
  cerrarVentanaOpcionesSubtitulos();
  if (optOpacidadFuente.classList.contains("hidden"))
        optOpacidadFuente.classList.remove("hidden")
  else optOpacidadFuente.classList.add("hidden")
}

function alternarOpcionesSubtitulos () {
  if (!ventanaSubtitulos.classList.contains("hidden")){
    cerrarVentanaSubtitulos();  
  }
  if (opcionesSubtitulos.classList.contains("hidden")){
    opcionesSubtitulos.classList.remove("hidden");
  }else opcionesSubtitulos.classList.add("hidden")
}


  
function cerrarTodoSubtitulos() {
  cerrarVentanaOpcionesOpciones();
  cerrarVentanaOpcionesSubtitulos();
}

function reiniciaMarcadoOpcion(ele, coincidencia) {
  [...ele].map((e)=> {
    if (e.children[1].innerHTML == coincidencia) 
      e.children[0].classList.remove("cero-opacity")
  })
}

function reiniciarOpcionesSubtitulos() {
  inicializaOpcionesSubtitulos();
  configuraSubtitulos("cf", "white");
  configuraSubtitulos("tf", "22.5px");
  configuraSubtitulos("cfo", "black");
  configuraSubtitulos("ofo", "1");
  configuraSubtitulos("of", "1");
  borrarOpciones(eleColorFuente)
  borrarOpciones(eleTamanoFuente)
  borrarOpciones(eleColorFondo)
  borrarOpciones(eleOpaFondo)
  borrarOpciones(eleOpaFuente)
  reiniciaMarcadoOpcion(eleColorFondo, elegido.lColorFondoNegro)
  reiniciaMarcadoOpcion(eleTamanoFuente, "100%")
  reiniciaMarcadoOpcion(eleColorFuente, elegido.lColorFuenteBlanco)
  reiniciaMarcadoOpcion(eleOpaFondo, "100%")
  reiniciaMarcadoOpcion(eleOpaFuente, "100%")
}

function configuraSubtitulos(opt, valor) {
  if (opt == "cf") divCues.style.color = valor
  if (opt == "tf") divCues.style.fontSize = valor
  if (opt == "cfo") cues.style.background = valor
  if (opt == "ofo") cues.style.background = valor
  if (opt == "of") cues.style.opacity = valor
}


function borrarOpciones(elementos) {
  [...elementos].map((cf) => {
    if (!cf.children[0].classList.contains("cero-opacity")) cf.children[0].classList.add("cero-opacity")
  })
}

function obtenerColor(color) {
  if (color == elegido.lColorFondoBlanco) return "255, 255, 255";
  if (color == elegido.lColorFondoAmarillo) return "255, 255, 0";
  if (color == elegido.lColorFondoVerde) return "0, 128, 0";
  if (color == elegido.lColorFondoCian) return "0, 255, 255";
  if (color == elegido.lColorFondoAzul) return "0, 0, 255";
  if (color == elegido.lColorFondoMagenta) return "255, 0, 255";
  if (color == elegido.lColorFondoRojo) return "255, 0, 0";
  if (color == elegido.lColorFondoNegro) return "0, 0, 0";
}



function opcionColorFuente() {
  infoColorFuente.innerHTML    = this.children[1].innerHTML
  borrarOpciones(eleColorFuente);
  this.children[0].classList.remove("cero-opacity");
  configuraSubtitulos("cf", this.id);
  // cerrarTodoSubtitulos();
}

function opcionTamanoFuente() {
  infoTamanoFuente.innerHTML   = this.children[1].innerHTML;
  borrarOpciones(eleTamanoFuente);
  this.children[0].classList.remove("cero-opacity");
  const escala = `${(22.5 * ((String(this.id).substring(4))/100))}px`;
  configuraSubtitulos("tf", escala);
  // cerrarTodoSubtitulos();
}
function opcionColorFondo() {
  const o= String(infoOpacidadFondo.innerHTML)
  const opa = o.substring(0,o.length-1)
  infoColorFondo.innerHTML     = this.children[1].innerHTML;
  borrarOpciones(eleColorFondo);
  this.children[0].classList.remove("cero-opacity");
  if (opa != "100") {
    const color = `rgb(${obtenerColor(infoColorFondo.innerHTML)}, ${opa})`
    configuraSubtitulos("ofo", color);
  } else
    configuraSubtitulos("cfo", this.id);
  // cerrarTodoSubtitulos();
}
function opcionOpacidadFondo() {
  infoOpacidadFondo.innerHTML  = this.children[1].innerHTML;
  borrarOpciones(eleOpaFondo);
  this.children[0].classList.remove("cero-opacity");
  const opa = ((String(this.id).substring(4))/100);
  const color = `rgb(${obtenerColor(infoColorFondo.innerHTML)}, ${opa})`
  configuraSubtitulos("ofo", color);
  // cerrarTodoSubtitulos();
}
function opcionOpacidadFuente() {
  infoOpacidadFuente.innerHTML = this.children[1].innerHTML;
  borrarOpciones(eleOpaFuente);
  this.children[0].classList.remove("cero-opacity");
  const opa = ((String(this.id).substring(4))/100);
  configuraSubtitulos("of", opa);
  // cerrarTodoSubtitulos();
}

function cerrarVentanaOpcionesOpciones() {
  [...opts].map((opt)=> {
    if (!opt.classList.contains("hidden")) 
      opt.classList.add("hidden")
  })
  alternarOpcionesSubtitulos()
}


function cerrarVentanaOpcionesSubtitulos() {
  if (!opcionesSubtitulos.classList.contains("hidden")) 
    opcionesSubtitulos.classList.add("hidden");
}


