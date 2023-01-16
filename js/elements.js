crossorigin="anonymous"
const titulo                 = document.getElementById('title');
const video                  = document.getElementById('video');
const videoControles         = document.getElementById('video-controles');
// const ancho720               = window.matchMedia('(max-width: 720px)');


const videoCompatible        = !!document.createElement('video').canPlayType

// containers
const videoContainer         = document.getElementById('video-container');

// Reproduccion
const animacionPlay          = document.getElementById('animacion-play');
const iconosPlay             = document.querySelectorAll('.iconos-play use');
const botonPlay              = document.getElementById('play');
const adelantaVideo          = document.getElementById('adelantaVideo');       
const atrasaVideo            = document.getElementById('atrasaVideo');      

// info reproduccion
const duracion               = document.getElementById('duracion');
const tiempoTranscurrido     = document.getElementById('tiempo-transcurrido');

// Barra progreso
const barraProgreso          = document.getElementById('barra-progreso');
const progreso               = document.getElementById('progreso');
const infoProgreso           = document.getElementById('info-progreso');

// Volumen
const volumen                = document.getElementById('volumen');
const volumenC               = document.getElementsByClassName('volumen');
const botonVolumen           = document.getElementById('boton-volumen');
const iconosVolumen          = document.querySelectorAll('.iconos-volumen use');
const volumeMute             = document.querySelector('.iconos-volumen use[href="#volume-mute"]');
const volumeLow              = document.querySelector('.iconos-volumen  use[href="#volume-low"]');
const volumeHigh             = document.querySelector('.iconos-volumen use[href="#volume-high"]');
const asubirVolumen          = document.getElementById('subirVolumen');
const abajarVolumen          = document.getElementById('bajarVolumen');
const mostrarNumero          = document.getElementById('mostrarNumero');


// controles
const activaAd               = document.getElementById('activaAd');
const activaSignos           = document.getElementById('activaSignos');
const activaTranscripcion    = document.getElementById('activaTranscripcion');
const activaSubtitulos       = document.getElementById('activaSubtitulos');
const activaPip              = document.getElementById('activaPip');
const hrActiva               = document.getElementsByClassName('hrActiva');

// Pantalla completas
const botonPantallaCompleta  = document.getElementById('boton-pantalla-completa');
const iconosPantallaCompleta = botonPantallaCompleta.querySelectorAll('use');

// Pip
const pipButton              = document.getElementById('pip-button');

// Subtitulos
const ss                     = document.getElementsByClassName("ss");
const desactivado            = document.getElementById('desactivado');
const tTituloSubtitulos      = document.getElementById("t-titulo-subtitulos")
// const trackEn                = document.createElement("track");
// const trackEs                = document.createElement("track");
const trackEn                = document.getElementById("en_track");
const trackEs                = document.getElementById("es_track");
const bntSubtitulos          = document.getElementById('btn-subtitulos');
const ventanaSubtitulos      = document.getElementById('ventana-subtitulos');
const cerrarVentanSubtitulos = document.getElementById('cerrar-subtitulos');
const subtitulosDesactivados = document.getElementById('subtitulos-desactivados');
const checkIcon              = document.getElementsByClassName('check-icon');
const cues                   = document.getElementById('cues');
const divCues                = document.getElementById('divCues');
const btnOpcionesSubtitulos  = document.getElementById('opcionesSubtitulos');
const opcionesSubtitulos     = document.getElementById('opciones-subtitulos');
const colorFuente            = document.getElementById('color-fuente');
const optColorFuente         = document.getElementById('opt-color-fuente');
var   infoColorFuente        = document.getElementById('info-color-fuente');
const tamanoFuente           = document.getElementById('tamano-fuente');
const optTamanoFuente        = document.getElementById('opt-tamano-fuente');
var   infoTamanoFuente       = document.getElementById('info-tamano-fuente');
const colorFondo             = document.getElementById('color-fondo');
const optColorFondo          = document.getElementById('opt-color-fondo');
var   infoColorFondo         = document.getElementById('info-color-fondo');
const opacidadFondo          = document.getElementById('opacidad-fondo');
const optOpacidadFondo       = document.getElementById('opt-opacidad-fondo');
var   infoOpacidadFondo      = document.getElementById('info-opacidad-fondo');
const opacidadFuente         = document.getElementById('opacidad-fuente');
const optOpacidadFuente      = document.getElementById('opt-opacidad-fuente');
var   infoOpacidadFuente     = document.getElementById('info-opacidad-fuente');
const restablecerAjustes     = document.getElementById('restablecer-ajustes');
const volverOpciones         = document.getElementsByClassName('volver-opciones');
const volverSubtitulos       = document.getElementById('volver-subtitulos');
const opts                   = document.getElementsByClassName('opt');
const eleColorFuente         = document.getElementsByClassName('color-fuente');
const eleTamanoFuente        = document.getElementsByClassName('tamano-fuente');
const eleColorFondo          = document.getElementsByClassName('color-fondo');
const eleOpaFondo            = document.getElementsByClassName('opacidad-fondo');
const eleOpaFuente           = document.getElementsByClassName('opacidad-fuente');
const vs                     = document.getElementById('vs');
const dcf                     = document.getElementById('cf');
const dtf                     = document.getElementById('tf');
const dcfo                     = document.getElementById('cfo');
const dofo                     = document.getElementById('ofo');
const dfo                     = document.getElementById('of');
const dra                     = document.getElementById('ra');
const tcf                     = document.getElementById('tcf');
const cfBlanco                     = document.getElementById('cfBlanco');
const cfAmarillo                     = document.getElementById('cfAmarillo');
const cfVerde                     = document.getElementById('cfVerde');
const cfCian                     = document.getElementById('cfCian');
const cfAzul                  = document.getElementById('cfAzul');
const cfMagenta                     = document.getElementById('cfMagenta');
const cfRojo                     = document.getElementById('cfRojo');
const cfNegro                     = document.getElementById('cfNegro');
const ttf                     = document.getElementById('ttf');
const tcfo                     = document.getElementById('tcfo');
const cfoBlanco                     = document.getElementById('cfoBlanco');
const cfoAmarillo                     = document.getElementById('cfoAmarillo');
const cfoVerde                     = document.getElementById('cfoVerde');
const cfoCian                     = document.getElementById('cfoCian');
const cfoAzul                  = document.getElementById('cfoAzul');
const cfoMagenta                     = document.getElementById('cfoMagenta');
const cfoRojo                     = document.getElementById('cfoRojo');
const cfoNegro                     = document.getElementById('cfoNegro');
const tofo                     = document.getElementById('tofo');
const tof                     = document.getElementById('tof');


const blanco = document.getElementsByClassName("blanco");
const amarillo = document.getElementsByClassName("amarillo");
const verde = document.getElementsByClassName("verde");
const cian = document.getElementsByClassName("cian");
const azul = document.getElementsByClassName("azul");
const magenta = document.getElementsByClassName("magenta");
const rojo = document.getElementsByClassName("rojo");
const negro = document.getElementsByClassName("negro");

const tam50 = document.getElementById("tam-50");
const tam75 = document.getElementById("tam-75");
const tam100 = document.getElementById("tam-100");
const tam150 = document.getElementById("tam-150");
const tam200 = document.getElementById("tam-200");
const tam300 = document.getElementById("tam-300");
const tam400 = document.getElementById("tam-400");


const opa0 = document.getElementsByClassName("opa0");
const opa25 = document.getElementsByClassName("opa25");
const opa50 = document.getElementsByClassName("opa50");
const opa75 = document.getElementsByClassName("opa75");
const opa100 = document.getElementsByClassName("opa100");



            



// Transcripción
const tituloTranscripcion    = document.getElementById('titulo-transcripcion');
const buscarTranscripcion    = document.getElementById('buscar-transcripcion');
const buscarTranscripcionFalso = document.getElementById('buscar-transcripcion-falso');
const volverBusquedaTranscripcion = document.getElementById('volver-busqueda-transcripcion');
const seleccionTranscripcion  = document.getElementsByClassName('seleccion-transcripcion');
const seleccionaTranscripcion = document.getElementById("selecciona-transcripcion");
const transcripcionCues      = document.getElementById("transcripcion-cues");
const tiempoTranscripcion    = document.getElementById('tiempo-transcripcion');
const textoTranscripcion     = document.getElementById('texto-transcripcion');

const botonBuscarTranscripcion = document.getElementById('boton-buscar-transcripcion');
const mensajeRespuesta       = document.getElementById('mensaje-respuesta');
const tback                  = document.getElementById('t-back');
const tInput                 = document.getElementById('t-buscar-input');
const tBuscarButton          = document.getElementById('t-buscar-button');
const borrarTexto            = document.getElementById('borrarTexto');
const transcripcionBuscarInput = document.getElementById('transcripcion-buscar-input');
const btnTranscripcion       = document.getElementById('btn-transcripcion');
const transcripcionContainer = document.getElementById('transcripcion-container');
const elementosBotonCue      = document.getElementsByClassName("boton-cue");
const container              = document.getElementById("container");
const tTrans                 = document.getElementById("tTrans");
const tdes                   = document.getElementById("transcripcion-desactivada");



// Lenguaje de signos
const ld                     = document.getElementById("ld");
const g9                     = document.getElementById("b-grid9");
const g1                     = document.getElementById("b-grid1");
const g2                     = document.getElementById("b-grid2");
const g3                     = document.getElementById("b-grid3");
const g4                     = document.getElementById("b-grid4");
const g5                     = document.getElementById("b-grid5");
const g6                     = document.getElementById("b-grid6");
const g7                     = document.getElementById("b-grid7");
const g8                     = document.getElementById("b-grid8");
const g10                     = document.getElementById("b-grid10");
const todasVentanas          = document.getElementsByClassName('ventana');
const ventanaSignos          = document.getElementById('ventana-signos');
const botonSignos            = document.getElementById('btn-signos');
const cerrarSignos           = document.getElementById('cerrar-signos');
const botonesGrids           = document.getElementsByClassName('elige-grid');
const video2                 = document.getElementById('video2');
const gridVideos             = document.getElementById('grid-videos');
const videoCompatible2       = !!document.createElement('video').canPlayType;

// Audio Descripcion

const ventanaAd              = document.getElementById('ventana')
const bntAD                  = document.getElementById('btn-ad');
const btnVoces               = document.getElementById('btn-voces');
const btnAdN                 = document.getElementById('ad-activada');
const btnAdE                 = document.getElementById('ad-extendida');
const btnAdD                 = document.getElementById('ad-desactivada');
const cerrarAd               = document.getElementById('cerrar-ad');
const dAd                    = document.getElementById('datosAd');
const vOpciones              = document.getElementsByClassName('v-opciones');
const contenidoAd            = document.getElementById('contenido-ad');
const opcionesAd             = document.getElementById('opciones-ad');
const bntAtrasAd             = document.getElementById('btn-atras-ad');
const configAd               = document.getElementById('config-ad');
const tonoAd                 = document.getElementById('tono-ad-input');
const volumePAd              = document.getElementById('volumen-principal-input');
const volumeAd               = document.getElementById('volumen-ad-input');
const velocidadAd            = document.getElementById('velocidad-ad-input');
const ventanaAD              = document.getElementById('ventana-audio-descripcion');
const adCheckIcon            = document.getElementsByClassName('ad-check-icon');
const volverAd               = document.getElementById('volver-ad');
const numeroVolumen          = document.getElementById('numero-volumen');
const numeroVolumenAd        = document.getElementById('numero-volumen-ad');
const numeroVelocidad        = document.getElementById('numero-velocidad');
const numeroTono             = document.getElementById('numero-tono');
const tad                    = document.getElementById('tad');
const tvoces                 = document.getElementById('tvoces');
const adDesactivada          = document.getElementById('adDesactivada');
const adad                   = document.getElementById('adad');
const adade                  = document.getElementById('adade');
const tadvolver              = document.getElementById('tadvolver');
const adna                   = document.getElementById('adna');
const tadap                  = document.getElementById('tadap');
const tcad                   = document.getElementById('tcad');
const tcpad                  = document.getElementById('tcpad');
const tcv                    = document.getElementById('tcv');
const ttono                  = document.getElementById('ttono');
const idiomasAd              = document.getElementById('idiomasAd');
const selectAd               = document.getElementById("idiomasAd");
const descripciones          = document.getElementsByClassName('descripciones');
var   descripcionesTrack     = []



var tituloAd                 = document.getElementById('titulo-ad');
var hTitutloAd               = document.getElementById('h-titulo-ad');
var voces                    = document.getElementById('voces');
var seReprodujo              = false;
var descripcionActiva        = "";
var descripcionActivaId      = -1;
var datosAd                  = fetch("./assets/audio-descripcion.json")
.then(response => {
  return response.json();
})
.then(jsondata => {return jsondata});
var jsonAd                   = []
var tipoAD                   = 0
var tiempoAnterior           = -1
var synth                    = window.speechSynthesis;
var voz                      //;
var tono                     = tonoAd.value;
var volumenAd                = volumeAd.value;
var varVelocidadAd           = velocidadAd.value



// idiomas  y compartir
const select                 = document.getElementById("idiomas");
const tidiomas               = document.getElementById("tidiomas");
const tcomparte              = document.getElementById("tcomparte");
const copiar                 = document.getElementById("copiar");
const bCompartir             = document.getElementById("bCompartir");
const infoIframe             = document.getElementById('infoIframe');
const copiado                = document.getElementById('copiado');



// ventana de ayuda
const bAyuda                 = document.getElementById('b-ayuda');
const cerrarAyuda            = document.getElementById('cerrar-ayuda');
const vAyuda                 = document.getElementById('ventana-ayuda');

const tva                    = document.getElementById("tva");
const tvaa                   = document.getElementById("tvaa");
const tecla                  = document.getElementById("tecla");
const accion                 = document.getElementById("accion");
const sv                     = document.getElementById("sv");
const bv                     = document.getElementById("bv");
const avi                    = document.getElementById("avi");
const advi                   = document.getElementById("advi");
const espacio                = document.getElementById("espacio");
const arp                    = document.getElementById("arp");
const arp2                   = document.getElementById("arp2");
const ams                    = document.getElementById("ams");
const apf                    = document.getElementById("apf");
const apip                   = document.getElementById("apip");
const mvs                    = document.getElementById("mvs");
const mvt                    = document.getElementById("mvt");
const mvsi                   = document.getElementById("mvsi");
const mvad                   = document.getElementById("mvad");
const mva                    = document.getElementById("mva");














let intervaloProgreso
var tiempoAnterior = -1;
const tasaRefresco = 1/60;
var seReprodujo = false
var subtituloActivo = -1;
var transcripcionActiva = -1;
var mostrandoTranscripcion = "";
var lPlay = 0;
var lFullScreen = 0;
var lSonido = 0;
var reproducido = false;
const sleep                  = ms => new Promise(r => setTimeout(r, ms));
var dateIsValid              = (date) => !Number.isNaN(new Date(date).getTime());


