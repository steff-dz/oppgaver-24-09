const IMG_TITLE = document.querySelector("#img-title");
const IMG_URL = document.querySelector("#img-url");
const BTN = document.querySelector("#btn");
const TITLE = document.querySelector ("#title");
const OUT_IMG = document.querySelector("#output-image");
const UP_FILE = document.querySelector ("#upload-file");
//console.log(IMG_TITLE, IMG_URL, BTN);
//const DIV = document.createElement('div');


function submit() {
    //document.createElement('div');
    //`<div>${IMG_TITLE.value}</div>`;
    
    //DIV.innerHTML = IMG_TITLE.value;
    //`<h1>${IMG_TITLE.value}</h1>//`;
    
    TITLE.innerHTML = IMG_TITLE.value;
    OUT_IMG.src = IMG_URL.value;
    //OUT_IMG.src = UP_FILE.value;

    IMG_TITLE.value= "";
    IMG_URL.value = "";
}

BTN.onclick = submit;