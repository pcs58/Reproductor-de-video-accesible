function alternarSignos() {
    // cerrarVentanaSubtitulos()
    // cerrarVentanaAD()
    if(ventanaSignos.classList.contains("hidden")){
      cerrarTodasVentanas()
      ventanaSignos.classList.remove("hidden");
    }
    else{
      ventanaSignos.classList.add("hidden");
    }
  }

function cerrarTodasVentanas() {
  [...todasVentanas].map((tv) => {
      if (!tv.classList.contains("hidden")) {
          tv.classList.add("hidden");
      }
  })
}

  function cerrarVentanaSignos() {
    if (!ventanaSignos.classList.contains("hidden")) 
      ventanaSignos.classList.add("hidden");
  }

function eliminarGrids(){
  for (let i = 0; i < 10; i++) {
    gridVideos.classList.remove(`grid${i+1}`)
  }
}

function reiniciarDisplays() {
  video.style.display = "inline" 
  video2.style.display = "inline" 
}

function marcaSeleccion(e) {
  [...botonesGrids].map((bg) => {
    if (bg.id == e.id)  bg.classList.add("grid-boton-marcado");
    else bg.classList.remove("grid-boton-marcado");
  })
}

function eligeGrid() {
  const eleccion = String(this.id).substring(6);
  eliminarGrids()
  gridVideos.classList.add(`grid${eleccion}`);
  marcaSeleccion(this)
  cerrarTodasVentanas()
  if (eleccion != 9)
    activaSignos.classList.remove("hidden");
  else
    ocultaHr("activaSignos");

  if (eleccion == 7 || eleccion == 8) {
    container.style.maxWidth="70%";
    
  }else {
    container.style.maxWidth="80%";
  }  
  // reiniciarDisplays()
  // if(grid==9) video2.style.display = "none"
  // if(grid==10) video.style.display = "none" 
  // gridVideos.classList.add(`grid${grid}`)
}
//   function cerrarVentanas() {
//     if(!ventanaSignos.classList.contains("hidden")){
//       ventanaSignos.classList.add("hidden");
//     }
//     if(!ventanaSubtitulos.classList.contains("hidden")){
//       ventanaSubtitulos.classList.add("hidden");
//     }
//     if(!ventanaAD.classList.contains("hidden")){
//       ventanaAD.classList.add("hidden");
//     }  
//   }