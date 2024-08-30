//DOM ELEMENTS --------------------

const textAreaEl = document.querySelector(".textarea");
const numberOFWordsEl = document.querySelector(".stat__number--words");
const numberOFCharactersEl = document.querySelector(".stat__number--characters");
const statTwitterEl = document.querySelector(".stat__number--twitter");
const statFacebookrEl = document.querySelector(".stat__number--facebook");




//STATE VARIABLES --------------------
let numOfWords = 0;
let numOfChar = 0;
let twitterLimit;
let facebookLimit;

textAreaEl.addEventListener("input", (e) => {
    numOfChar = e.target.value;
    numOfWords = numOfChar.trim().split(" ");

    twitterLimit = 280 - numOfChar.length;
    facebookLimit = 2200 - numOfChar.length;

    numberOFWordsEl.textContent = numOfWords[0] === "" ? 0 : numOfWords.length;
    numberOFCharactersEl.textContent = numOfChar.length;
    statTwitterEl.textContent = twitterLimit;
    statFacebookrEl.textContent = facebookLimit;

})