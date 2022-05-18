/**
 * En caso de no soportar el codec del video, elimina el primer elemento <video> y
 * continua con el siguiente recurso sucesivamente.
 * @param video - el elemento <video>
 */
function fallback(video) {
    // replace <video> with its contents
    while (video.hasChildNodes()) {
        if (video.firstChild instanceof HTMLSourceElement)
            video.removeChild(video.firstChild);
        else
            video.parentNode.insertBefore(video.firstChild, video);
    }
    video.parentNode.removeChild(video);
}