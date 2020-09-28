const INP = document.getElementsByTagName("input");
const inpNAME = INP[0];
const inpMSG = INP[1];
const BTN = document.getElementById("btn");
const outputName = document.querySelector("#outputName");
const outputMSG = document.querySelector("#outputMSG");

function message() {
    outputName.innerHTML = inpNAME.value;
    outputMSG.innerHTML = inpMSG.value;

}

BTN.onclick = message;

