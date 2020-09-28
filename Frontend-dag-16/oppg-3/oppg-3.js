const inpIMG = document.querySelector("#inpIMG");
const dispIMG = document.querySelector("#dispIMG");

const inpSTILLING = document.querySelector("#inpStilling");
const dispTXT = document.querySelector("#dispTXT");

const inpFullName = document.querySelector("#inpFullName");
const dispFullName = document.querySelector("#dispFullName");

const BTN = document.querySelector("#btn");

function submit() {
    dispFullName.innerHTML = inpFullName.value;
    dispTXT.innerHTML = inpSTILLING.value;
    dispIMG.src = inpIMG.value;
}


BTN.onclick = submit;

//TRY TO MAKE THE INPUT GO WHEN PRESSING THE ENTER KEY LATER