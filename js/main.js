if (videoCompatible) {
    video.controls = false;
    videoControles.classList.remove('hidden');
}

if (videoCompatible2) {
    video2.controls = false;
    videoControles.classList.remove('hidden');
  }



video.onloadedmetadata = inicializaVideo;

// Inicializa la duración del video se mostrará cuando se hayan cargado los metadatos del video

// window.addEventListener('resize', posicionamiento720);

// Mostrar controles
gridVideos.addEventListener('mouseenter', muestraControles);
videoControles.addEventListener('mouseenter', muestraControles);
divCues.addEventListener('mouseenter', muestraControles);
gridVideos.addEventListener('mouseleave', ocultaControles);
videoControles.addEventListener('mouseleave', ocultaControles);
divCues.addEventListener('mouseleave', ocultaControles);

// Eventos de reproduccion 
botonPlay.addEventListener('click', alternarPlay);
video.addEventListener    ('play', actualizaBotonPlay);
video.addEventListener    ('pause', actualizaBotonPlay);


// lanzar efecto de animación play
video.addEventListener('click', efectoAnimacionPlay);
divCues.addEventListener('click',efectoAnimacionPlay)
// gridVideos.addEventListener('click', alternarPlay);
// para cuando haya grdiVideos
gridVideos.addEventListener('click', alternarPlay);
divCues.addEventListener('click', alternarPlay);

// Actualizar progreso
window.addEventListener('load', inicializaVideo); 
video.addEventListener('playing', intervaloDeProgreso);
video.addEventListener('pause', acabaIntervaloDeProgreso);
video.addEventListener('ended', acabaIntervaloDeProgreso);
video.addEventListener('play',playPip);
video.addEventListener('pause', pausePip);

// Barra de reproducción
video.addEventListener('timeupdate', actualizaTiempoTranscurrido);
// video.addEventListener('timeupdate', actualizaProgreso);
progreso.addEventListener('mousemove', actualizaConPosicionInfoProgreso);
progreso.addEventListener('input', skipAhead);
// barraProgreso.addEventListener('click', skipAhead);
// progreso.addEventListener('mouseover', hoverProgress);
// progreso.addEventListener('mouseleave', hoverNotProgress);


// Barra de volumen
volumen.addEventListener('input', actualizaVolumen);
botonVolumen.addEventListener('click', alternaMute);
video.addEventListener('volumechange', actualizaBotonVolumen);
video.addEventListener('click', actualizaVolumen);
// window.addEventListener('load', inicializarVolumen);

// Volumen Audio Descripción

// tono Audio Descripción


// Pantalla Completa
botonPantallaCompleta.addEventListener('click', alternaPantallaCompleta);
botonPantallaCompleta.addEventListener('click', actualizaBotonPantallaCompleta);
gridVideos.addEventListener('dblclick', alternaPantallaCompleta);
gridVideos.addEventListener('dblclick', actualizaBotonPantallaCompleta);
// videoControles.addEventListener('dblclick', alternaPantallaCompleta);
// videoControles.addEventListener('dblclick', actualizaBotonPantallaCompleta);
divCues.addEventListener('dblclick', alternaPantallaCompleta);
divCues.addEventListener('dblclick', actualizaBotonPantallaCompleta);


// Pip
pipButton.addEventListener('click', togglePip);
// video.addEventListener('volumechange', actualizaVolumenDesdePip);
video.addEventListener('leavepictureinpicture', dejarDeActualizarProgresoDesdePip);


// Subitulos

window.addEventListener("load", inicializaSubitulos);
bntSubtitulos.addEventListener('click', alternarSubtitulos);
cerrarVentanSubtitulos.addEventListener('click', cerrarVentanaSubtitulos);
// document.addEventListener('loadedmetadata', listarSubtitulos()); 
window.addEventListener('load', desactivarSubtitulos);
subtitulosDesactivados.addEventListener('click', desactivarSubtitulos);
btnOpcionesSubtitulos.addEventListener('click', alternarOpcionesSubtitulos);
colorFuente.addEventListener('click',alternarOpcionesColorFuente);
tamanoFuente.addEventListener('click',alternarOpcionesTamanoFuente);
colorFondo.addEventListener('click',alternarOpcionesColorFondo);
opacidadFondo.addEventListener('click',alternarOpcionesOpacidadFondo);
opacidadFuente.addEventListener('click',alternarOpcionesOpacidadFuente);
[...volverOpciones].map((vp) => vp.addEventListener('click',cerrarVentanaOpcionesOpciones));
volverSubtitulos.addEventListener('click', volverASubtitulos);

[...eleColorFuente].map((cf) => cf.addEventListener('click', opcionColorFuente));
[...eleTamanoFuente].map((tf) => tf.addEventListener('click', opcionTamanoFuente));
[...eleColorFondo].map((cfo) => cfo.addEventListener('click', opcionColorFondo));
[...eleOpaFondo].map((ofo) => ofo.addEventListener('click', opcionOpacidadFondo));
[...eleOpaFuente].map((of) => of.addEventListener('click', opcionOpacidadFuente));
restablecerAjustes.addEventListener("click", reiniciarOpcionesSubtitulos);

// const eleColorFuente = document.getElementsByClassName('color-fuente');
// const eleTamanoFuente = document.getElementsByClassName('tamano-fuente');
// const eleColorFondo = document.getElementsByClassName('color-fondo');
// const eleOpaFondo = document.getElementsByClassName('opacidad-fondo');
// const eleOpaFuente = document.getElementsByClassName('opacidad-fuente')




// Transcripción
window.addEventListener('load', inicializaTranscripcion);
window.addEventListener('load', () => {
    [...seleccionTranscripcion].map((et) => et.addEventListener('click', elegirTranscripcion));
    [...seleccionTranscripcion].map((et) => et.addEventListener('click', elegirTranscripcion));
    [...seleccionTranscripcion].map((st) => st.addEventListener('focus', mostrarSeleccionables));
    inicializaLiterales(lOpciones);
    console.log([...ss]);
[...ss].map((s) => s.addEventListener('click', seleccionarSubtitulos));
});


seleccionaTranscripcion.addEventListener('mouseover', mostrarSeleccionables);
// [...seleccionTranscripcion].map((st) => {
//     if (st.id == "es-transcripcion"){
//         consol
//         st.addEventListener('focusout', noMostrarNoSeleccionado)
//     }
// });
seleccionaTranscripcion.addEventListener('mouseleave', noMostrarNoSeleccionado);
buscarTranscripcionFalso.addEventListener('click', alternaTituloYbuscar);
volverBusquedaTranscripcion.addEventListener('click', alternaTituloYbuscar);
botonBuscarTranscripcion.addEventListener('click', busquedaTranscripcion);
// borrarTexto.addEventListener('click', borrarBusquedaTranscripcion);
// tBuscarInput.addEventListener('input', mostrarXenInput);
btnTranscripcion.addEventListener('click', mostrarOcultarTranscripcion);


// Lenguaje de signos
botonSignos.addEventListener('click', alternarSignos);
cerrarSignos.addEventListener('click', cerrarTodasVentanas);
[...botonesGrids].map((bg) => bg.addEventListener('click', eligeGrid))
// observadorMutacion.observe(container, {
    //     attributes: true
    // })
    
    
    
    // Audio Descripcion
window.addEventListener('load', cargarDatosAd);
bntAD.addEventListener('click', alternarAD)
btnVoces.addEventListener('click', mostrarVoces)
btnAdN.addEventListener('click', alternarBotonSeleccionAd)
btnAdE.addEventListener('click', alternarBotonSeleccionAd)
btnAdD.addEventListener('click', alternarBotonSeleccionAd)
cerrarAd.addEventListener('click', cerrarVentanaAD);
dAd.addEventListener('DOMNodeInserted', poblarJsonAd);
// video.addEventListener('cuechange', emiteAudioDescripcion);
// video.addEventListener('timeupdate', emiteAudioDescripcion);
volverAd.addEventListener('click', alternarAD);
// vOpciones.addEventListener('click', cambiarVoz)
window.addEventListener('load', cargarContenidoAD);
window.addEventListener('load', inicializaValoresOpcionesAd);
opcionesAd.addEventListener('click', alternarOpcionesAd);
// bntAtrasAd.addEventListener('click', alternarOpcionesAd);
let utterance = new SpeechSynthesisUtterance("");
volumePAd.addEventListener('input', actualizaVolumen2);
volumeAd.addEventListener('input', actualizaVolumenAd);
tonoAd.addEventListener('input', actualizaTono);
velocidadAd.addEventListener('input', actualizaVelocidadAd);
window.speechSynthesis.cancel();
window.speechSynthesis.speak(utterance);
window.addEventListener('load', inicializaIdiomasAd);
selectAd.addEventListener('input', cambiaIdiomaAd);



// Control por teclado
document.addEventListener('keydown', keyboardShortcuts);
select.addEventListener('input',cambiaIdioma);

// Literales 

// window.addEventListener('load', inicializaLiterales);


// Compartir
bCompartir.addEventListener('click', mostrarIframe);
copiar.addEventListener('click', copiarIframe)

bAyuda.addEventListener('click', alternarAyuda)
cerrarAyuda.addEventListener('click', cerrarTodasVentanas);