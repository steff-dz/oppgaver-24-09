const INPUT_TEXT = document.querySelector("#input-text");

const AVSNITT = document.querySelector("#avsnitt");

function visTekst() {
    AVSNITT.innerHTML = INPUT_TEXT.value;
};

//INPUT_TEXT.addEventListener("input",visTekst);

INPUT_TEXT.addEventListener("change", visTekst);
