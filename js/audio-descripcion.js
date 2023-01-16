function compruebaTipoTextTrack(type, id) {
  return video.textTracks[id].kind == type;
}

function cargarContenidoAD() {

    
  
    if(typeof speechSynthesis === 'undefined') {
      return;
    }
  
    var voices = speechSynthesis.getVoices();
    voces.innerHTML = " "
    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('button');
      option.classList.add('v-opciones')
      option.setAttribute("id", `voz${i}`)
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      // console.log(voices[i])
      if(voices[i].default) {
        option.classList.add("voz-seleccionada")
        voz = voices[i]
      }
      
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voces.appendChild(option);
  
    }
    cambiarVoz(voices)
    
    
  }
  
  function alternarVoces(indice) {
    for (let i = 0; i < vOpciones.length; i++) {
      if (i == indice) vOpciones[i].classList.add("voz-seleccionada");
      else vOpciones[i].classList.remove("voz-seleccionada");
      // console.log(svg)
    }
  }
  
  function cambiarVoz(voices) {
    document.querySelectorAll(".v-opciones").forEach(el => {
      el.addEventListener("click", e => {
        var id = e.target.getAttribute("id");
        voz = voices[id.substring(3)]
        alternarVoces(id.substring(3))
        mostrarVoces()
      });
    })
  }
  
  function mostrarVoces() {
    if(voces.classList.contains("hidden"))
     voces.classList.remove("hidden");
    else
     voces.classList.add("hidden");
  }
  
  function cargarDatosAd() {
    // datosAd.then(json => {
    //   json.forEach(line => {
    //     const row = document.createElement('div')
    //     row.in
    //     row.classList.add('rowAd') 
    //     const a =document.createElement('div')
    //     const b =document.createElement('div')
    //     a.textContent = line.tiempo
    //     b.textContent = line.mensaje
    //     row.appendChild(a)
    //     row.appendChild(b)
    //     dAd.appendChild(row)
    //   })
    // })
  }
  
  function poblarJsonAd() {
    // jsonAd.length = 0
    // const hijos = dAd .childNodes
    // for (let i = 0; i < hijos.length; i++) { 
    //   var hijo = hijos[i].childNodes
    //   json = {"tiempo": hijo[0].innerText, "mensaje": hijo[1].innerText} 
    //   const obj = JSON.stringify(json);
    //   // console.log(obj)
    //   jsonAd.push(json)
    // }
  }
  
  function mensajeAdCoincidente(tiempo) {
    // return jsonAd.filter(
    //   function (data) {
    //     return data.tiempo == tiempo
    //   }
    // )
  }
  
  function audioDescripcion() {
    if(!video.paused && !video.ended) {
      if (compruebaTipoTextTrack("descriptions",descripcionActivaId)) {
        try {
          let utterance = new SpeechSynthesisUtterance(video.textTracks[descripcionActivaId].activeCues[0].text);
          utterance.rate = varVelocidadAd;
          utterance.pitch = tono;
          utterance.volume = volumenAd;
          utterance.voice = voz;
          window.speechSynthesis.speak(utterance);
        } catch (e) {
          console.log("")
        }
      }
    }
  }
  function reanudarVideo() {
    video.play();
    video2.play();
    video2.volume= 0;
    seReprodujo = true
  }

  function pausarVideo() {
    video.pause();
    video2.pause();
  }
  
  function audioDescripcionExtendida() {
    if(!video.paused && !video.ended && compruebaTipoTextTrack("descriptions",descripcionActivaId)) {
      try {
        let utterance = new SpeechSynthesisUtterance(video.textTracks[descripcionActivaId].activeCues[0].text);
        utterance.addEventListener('start',pausarVideo);
        utterance.rate = varVelocidadAd;
        utterance.pitch = tono;
        utterance.volume = volumenAd;
        utterance.voice = voz;
        window.speechSynthesis.speak(utterance);
        utterance.addEventListener('end', reanudarVideo);
      } catch (e) {
        console.log("")
      }
    }
  }

  function inicializaIdiomasAd() {
    [...descripciones].map((d) => {
      var o = document.createElement("option");
      o.text = `${d.label} (${d.srclang})`;
      o.classList.add('iAD');
      o.setAttribute("value", d.srclang);
      if (d.srclang == "es") {
        descripcionActiva = "es";
        descripcionActivaId = 2;
        inicializaIdiomaTrackAd();
        o.setAttribute("selected", "selected");
      }  
      idiomasAd.appendChild(o);
    })

    for (let i = 0; i < video.textTracks.length; i++) {
      if (compruebaTipoTextTrack("descriptions",i)) {
        descripcionesTrack.push(video.textTracks[i])
      }
    }
  }

  function inicializaIdiomaTrackAd() {
    var i = 0;
    for (const track of video.textTracks) {
      if (compruebaTipoTextTrack("descriptions",i)) {
        if (descripcionActiva == track.language ){
          track.mode = "showing";
        }else track.mode = "disabled";
      } 
      i++;
    }
  }

  function cambiaIdiomaAd() {
    var opt = this.options[this.selectedIndex].value;
    var i = 0;
    for (const track of video.textTracks) {
      if (compruebaTipoTextTrack("descriptions",i)) {
        if (opt == track.language ){
          descripcionActiva = opt;
          descripcionActivaId = i;
          track.mode = "showing";
        }else track.mode = "disabled";
      } 
      i++;
    }

    if (tipoAD != 0) {
      [...descripcionesTrack].map((d) =>  {
        d.removeEventListener('cuechange', emiteAudioDescripcion)
      });
      [...descripcionesTrack].map((d) => {
        if (d.language == descripcionActiva)
          d.addEventListener('cuechange', emiteAudioDescripcion);
      })
    }
  }

  function inicializaValoresOpcionesAd() {
    numeroVolumen.textContent = `${Math.round(volumen.value*100)}%`;
    numeroVolumenAd.textContent =  `${Math.round(volumenAd*100)}%`;
    numeroTono.textContent =  `${Math.round(tono*100)}%`;
    numeroVelocidad.textContent =  `${varVelocidadAd}x`;
  }
  
  function emiteAudioDescripcion() {
    if(tipoAD == 1) {
      audioDescripcion()
    }
    if(tipoAD == 2) {
      audioDescripcionExtendida()
    }
  }
  
  function actualizaVolumen2() {
    if (video.muted) {
      video.muted = false;
    }
    
    video.volume = volumePAd.value;
    volumen.value = volumePAd.value;
    numeroVolumen.textContent =  `${Math.round(volumen.value*100)}%`;
  }
  
  function actualizaVolumenAd() {
    volumenAd = volumeAd.value;
    numeroVolumenAd.textContent =  `${Math.round(volumenAd*100)}%`;
  }
  
  function actualizaTono() {
    tono = tonoAd.value;
    numeroTono.textContent =  `${Math.round(tono*100)}%`;
  }
  
  function actualizaVelocidadAd() {
    varVelocidadAd = velocidadAd.value;
    numeroVelocidad.textContent =  `${varVelocidadAd}x`;

}

  function alternarBotonSeleccionAd(indice) {
    const i = indice.currentTarget;
    [...descripcionesTrack].map((d) =>  {
      d.removeEventListener('cuechange', emiteAudioDescripcion)
    })
    if(i !== undefined){
      if (i.getAttribute('id') == 'ad-desactivada') {
        indice = -1;
        tipoAD = 0;
      }
      if (i.getAttribute('id') == 'ad-activada') { 
        indice = 0;
        tipoAD = 1;
        [...descripcionesTrack].map((d) => {
          if (d.language == descripcionActiva)
            d.addEventListener('cuechange', emiteAudioDescripcion);
        })
      }
      if (i.getAttribute('id') == 'ad-extendida') { 
        indice = 1;
        tipoAD = 2;
        [...descripcionesTrack].map((d) => {
          if (d.language == descripcionActiva)
            d.addEventListener('cuechange', emiteAudioDescripcion);
        })
      }
      if (indice >= 0) 
        activaAd.classList.remove("hidden");
      else 
        ocultaHr("activaAd");
      
      cerrarTodasVentanas();
    }
    for (let i = 0; i < adCheckIcon.length; i++) {
      if (i == indice +1) adCheckIcon[i].classList.remove("cero-opacity");
      else adCheckIcon[i].classList.add("cero-opacity");
    }
  
  }

  function alternarAD() {
    if (ventanaAD.classList.contains("hidden")) {
      cerrarTodasVentanas()
      ventanaAD.classList.remove("hidden");
    } else {
      ventanaAD.classList.add("hidden");
    }
  }
  
  
  function alternarOpcionesAd() {
    cerrarTodasVentanas();
    if(configAd.classList.contains("hidden"))
      configAd.classList.remove("hidden")
    else
      configAd.classList.add("hidden")
  }  

  function cerrarVentanaAD() {
    if (!ventanaAD.classList.contains("hidden")) 
    ventanaAD.classList.add("hidden");
  }