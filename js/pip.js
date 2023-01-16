
// alterna entre el modo video y el modo PictureInPicture
async function togglePip() {
    try {
        if (video !== document.pictureInPictureElement) {
        video2.currentTime = video.currentTime;
        pipButton.disabled = true;
        video.addEventListener("timeupdate", actualizaProgresoDesdePip); 
        // video.addEventListener("play", actualizaProgresoDesdePip); 
        // video2.addEventListener("timeupdate", actualizaProgresoDesdePip); 
        video.addEventListener("volumechange", actualizaVolumenDesdePip); 
        activaPip.classList.remove("hidden");
        await video.requestPictureInPicture();
        
    } else {
        // video.removeEventListener("timeupdate", actualizaProgresoDesdePip); 
        // video.removeEventListener("play", actualizaProgresoDesdePip); 
        
        await document.exitPictureInPicture();
    }
    } catch (error) {
        console.error(error)
    } finally {
        pipButton.disabled = false;
    }
}

function dejarDeActualizarProgresoDesdePip() {
    activaPip.classList.add("hidden");
    video.removeEventListener("volumechange", actualizaVolumenDesdePip); 
    video.removeEventListener("timeupdate", actualizaProgresoDesdePip); 
}

// actualiza el volumen del video y si estaba muteado lo desmutea
function actualizaVolumenDesdePip() {
    if (video.muted) {
      video.muted = false;
    }
  
    volumen.value = video.volume;
    // volumePAd.value = volumen.value;
  }

function playPip() {
    video2.play();
}
function pausePip() {
    video2.pause();
}

function actualizaProgresoDesdePip() {
    progreso.value = video.currentTime;
    barraProgreso.value = video.currentTime;
    
    // video.onplaying = (event) => {
       
    // }
    // video.onpause = (event) => {
        
    // }
    // video2.currentTime = video.currentTime;
}