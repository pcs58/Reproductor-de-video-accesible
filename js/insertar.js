function mostrarIframe() {
    infoIframe.value = `
    <iframe width="720" height="410" src="iframe.html" title="Reproductor de video accesible" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    copiar.classList.remove("hidden")
}
function copiarIframe() {
    copiado.classList.remove("hidden")
    navigator.clipboard.writeText(infoIframe.value)
}