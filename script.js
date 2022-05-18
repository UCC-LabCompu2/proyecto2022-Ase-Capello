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