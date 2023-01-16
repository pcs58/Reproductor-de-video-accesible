// muestra la animación de cuando se pausa o se da al play 
function efectoAnimacionPlay() {
    if (!hayVentanasAbiertas()) {
      animacionPlay.animate([
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0,
          transform: "scale(1.3)",
        }], {
        duration: 700,
      });
    }
  }

function alternarPlay() {
  if (hayVentanasAbiertas()) {
    cerrarTodasVentanas()
  } else {
    if (lPlay == 0) lPlay = 1;
    else lPlay = 0;

    if (video.paused || video.ended) {
      reproducido = true;

      video.play();
      video2.play();
      video2.volume= 0;
      seReprodujo = true
    } else {
      // synth.cancel();
      video.pause();
      video2.pause();
      tiempoAnterior = -1
    }
  }
}

function alternarPlay2() {
  if (lPlay == 0) lPlay = 1;
  else lPlay = 0;
  
  if (video.paused || video.ended) {
      video.play();
      video2.play();
      video2.volume= 0;
      seReprodujo = true
    } else {
      synth.cancel()
      video.pause();
      video2.pause();
      tiempoAnterior=-1
    }
}

function actualizaBotonPlay() {
  iconosPlay.forEach(icon => icon.classList.toggle('hidden'));

  // cambia el data-title según el estado del video
  if (video.paused) {
    botonPlay.setAttribute('data-title', elegido.lDTReproducir);
  } else {
    botonPlay.setAttribute('data-title', elegido.lDTPausar);
  }
}



// function cerrarVentanas() {
//   // if(!ventanaSignos.classList.contains("hidden")){
//   //   ventanaSignos.classList.add("hidden");
//   // }
//   // if(!ventanaSubtitulos.classList.contains("hidden")){
//   //   ventanaSubtitulos.classList.add("hidden");
//   // }
//   // if(!ventanaAD.classList.contains("hidden")){
//   //   ventanaAD.classList.add("hidden");
//   // }  
// }

function hayVentanasAbiertas() {
  var r = false;
  [...todasVentanas].map((v) => r =  r || !v.classList.contains("hidden"))
  return r;
}

function muestraControles() {
  divCues.style.bottom = "100px";
  videoControles.classList.remove('hidden');
}

function ocultaControles() {
  if (video.paused) {
    return;
  }
  divCues.style.bottom = '20px';
  videoControles.classList.add('hidden');
}

function ocultaHr (a) {
  [...hrActiva].map((e) => {
    if (e.id == a)
      e.classList.add("hidden")
  });
}

// function posicionamiento720() {
//   if (ancho720.matches) {
//     console.log("se lanza");
//   [...todasVentanas].map((v) => {
//     if (!v.classList.contains('hidden')) {
//       v.style.marginTop = `-${container.offsetHeight - 120}px`;
//     }
//   })
//   }
// }

