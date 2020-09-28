const inpEvtName = document.querySelector("#event-name");
const inpEvtDate = document.querySelector("#event-date");
const inpEvtLoc = document.querySelector("#location");
const inpEvtImg = document.querySelector("#event-image");
const DIV = document.querySelector("#event-list");
const FORM = document.querySelector("#form");
const BTN = document.querySelector("#btn");

function createEvt(evt) {
    evt.preventDefault();
    DIV.style.backgroundColor = "white";
    DIV.innerHTML = `
        <img src="${inpEvtImg.value}">
        <ul><li><h1>${inpEvtName.value}</h1></li>
        <li><h2>${inpEvtDate.value} at ${inpEvtLoc.value}</li></h2>
        
    `;
  
    inpEvtName.value = "";
    inpEvtImg.value = "";
    inpEvtLoc.value = "";
    inpEvtDate.value = "";


};

BTN.onclick = createEvt;





















//FORM.addEventListener("submit", createEvt);


















//OLD STUFF BELOW 
//inpEvtName.value= "";


//inpEvtName.addEventListener("change", createEvt);

  //document.body.innerHTML += `
    //<div><h1>${inpEvtName.value}</h1></div>
    //`