const FORM = document.querySelector("#form");

const DISH_ONE = document.querySelector("#dish-one");

const DISH_TWO = document.querySelector("#dish-two");

const DISH_THREE = document.querySelector("#dish-three");

const ANSWER_LIST = document.querySelector("#answer-list");

//console.log(FORM, DISH_ONE, DISH_TWO, DISH_THREE, ANSWER_LIST);

function showAnswer(evt) {
    evt.preventDefault();
    ANSWER_LIST.innerHTML = `
    <ul><li>Fiske Boller</li>
    <li>${DISH_TWO.value}</li>
    <li>${DISH_THREE.value}</li>
    </ul>
`;

DISH_TWO.value = "";
DISH_THREE.value = "";
DISH_ONE.value = "";

};

FORM.addEventListener("submit", showAnswer);