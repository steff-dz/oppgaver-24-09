const SKJEMA = document.querySelector("#skjema");

const INP_FORNAVN = document.querySelector("#inp-fornavn");

const INP_ETTERNAVN = document.querySelector("#inp-etternavn");

const AVSNITT = document.querySelector("#avsnitt");

//console.log(SKJEMA, INP_ETTERNAVN, INP_FORNAVN, AVSNITT);

function visSkjemaData(evt) {
    evt.preventDefault();
    AVSNITT.innerHTML = `
        Fornavn: ${INP_FORNAVN.value}
        Etternavn: ${INP_ETTERNAVN.value}
    `

    INP_FORNAVN.value= "";
    INP_ETTERNAVN.value = "";
};

SKJEMA.addEventListener("submit", visSkjemaData);