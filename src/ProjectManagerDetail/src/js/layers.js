var layerPosition = 0;
var layerCurrent = 1;

function resetLayer(layer) {
    let ready = 'ready' + layer;
    document.getElementById(ready).style.zIndex = 0;
    let progress = 'progress' + layer;
    document.getElementById(progress).style.zIndex = 0;
    let review = 'review' + layer;
    document.getElementById(review).style.zIndex = 0;
    let production = 'production' + layer;
    document.getElementById(production).style.zIndex = 0;
}

function setReady(layer) {
    resetLayer(layer);    
    let ready = 'ready' + layer;
    document.getElementById(ready).style.zIndex = 1;
}

function setProgress(layer) {
    resetLayer(layer);    
    let progress = 'progress' + layer;
    document.getElementById(progress).style.zIndex = 1;
}

function setReview(layer) {
    resetLayer(layer);    
    let review = 'review' + layer;
    document.getElementById(review).style.zIndex = 1;
}

function setProduction(layer) {
    resetLayer(layer);    
    let production = 'production' + layer;
    document.getElementById(production).style.zIndex = 1;
}