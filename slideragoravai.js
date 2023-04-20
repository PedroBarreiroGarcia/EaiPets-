let count = 1;
document.getElementById("radio1").checked = true;
setInterval( function(){
    nextImage();
}, 2000)
function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

function show_cachorros() {
    document.getElementById("camada_cachorros").style.visibility="visible";
    document.getElementById("camada_gatos").style.visibility="hidden";
    document.getElementById("camada_passaros").style.visibility="hidden";
    document.getElementById("camada_peixes").style.visibility="hidden";
    document.getElementById("camada_outros_pets").style.visibility="hidden";
}

function show_gatos() {
    document.getElementById("camada_cachorros").style.visibility="hidden";
    document.getElementById("camada_gatos").style.visibility="visible";
    document.getElementById("camada_passaros").style.visibility="hidden";
    document.getElementById("camada_peixes").style.visibility="hidden";
    document.getElementById("camada_outros_pets").style.visibility="hidden";
}

function show_passaros() {
    document.getElementById("camada_cachorros").style.visibility="hidden";
    document.getElementById("camada_gatos").style.visibility="hidden";
    document.getElementById("camada_passaros").style.visibility="visible";
    document.getElementById("camada_peixes").style.visibility="hidden";
    document.getElementById("camada_outros_pets").style.visibility="hidden";
}

function show_peixes() {
    document.getElementById("camada_cachorros").style.visibility="hidden";
    document.getElementById("camada_gatos").style.visibility="hidden";
    document.getElementById("camada_passaros").style.visibility="hidden";
    document.getElementById("camada_peixes").style.visibility="visible";
    document.getElementById("camada_outros_pets").style.visibility="hidden";
}

function show_outros_pets() {
    document.getElementById("camada_cachorros").style.visibility="hidden";
    document.getElementById("camada_gatos").style.visibility="hidden";
    document.getElementById("camada_passaros").style.visibility="hidden";
    document.getElementById("camada_peixes").style.visibility="hidden";
    document.getElementById("camada_outros_pets").style.visibility="visible";
}

function someTudo(){
    document.getElementById("camada_cachorros").style.visibility="hidden";
    document.getElementById("camada_gatos").style.visibility="hidden";
    document.getElementById("camada_passaros").style.visibility="hidden";
    document.getElementById("camada_peixes").style.visibility="hidden";
    document.getElementById("camada_outros_pets").style.visibility="hidden";
}