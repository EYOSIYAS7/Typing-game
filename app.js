window.addEventListener("load", start);
const theWord = document.getElementById("word");
const Input = document.getElementById("inputWord");
const score = document.getElementById("scored");
const timeLeft = document.getElementById("timeLeft");
const result = document.getElementById("result");
const highScore = document.getElementById("high-score");
const beginner = document.getElementById("bmode");
const intermediate = document.getElementById("imode");
const advanced = document.getElementById("amode");
const message = document.getElementById("infotime");

let scored = 0;

let isPlaying;
let scoreA = [];
let words = [
  "Input",
  "Score",
  "Word",
  "document",
  "hidden",
  "letter",
  "key",
  "character",
  "output",
  "constant",
  "string",
  "love",
  "wellcome",
  "congratulation",
  "software",
  "task",
  "support",
  "computer",
  "Game",
  "acquiesce",
  "befuddle",
  "burgeon",
  "circumvent",
  "coalesce",
  "deprecate",
  "disparage",
  "disseminate",
  "elucidate",
  "emulate",
  "exasperate",
  "exculpate",
  "expedite",
  "extricate",
  "flaunt",
  "fraternize",
  "galvanize",
  "immolate",
  "inculcate",
  "indemnify",
  "infuriate",
  "inundate",
  "invigorate",
  "irradiate",
  "obfuscate",
  "obviate",
  "occlude",
  "perpetrate",
  "polarize",
  "prevaricate",
  "prognosticate",
  "propagate",
  "punctuate",
  "reciprocate",
  "retrograde",
  "rhapsodize",
  "surreptitiously",
  "transmogrify",
  "truncate",
  "vindicate",
  "vituperate",
];
let num = 5;
function start() {
  showWords(words);

  // time counter
  setInterval(countDown, 1000);

  // start match
  Input.addEventListener("input", match);

  // checkStatus
  setInterval(checkStatus, 800);

  // highScore.innerHTML = "High Score: " + scoreB;

  high();

  beginner.addEventListener("click", () => {
    num = 11;
    message.innerHTML = num - 1;
    message.className = " display-6 text-success";
  });
  intermediate.addEventListener("click", () => {
    num = 6;
    message.innerHTML = num - 1;
    message.className = " display-6 text-info";
  });
  advanced.addEventListener("click", () => {
    num = 4;
    message.innerHTML = num - 1;
    message.className = " display-6 text-danger";
  });
}

function showWords(words) {
  let numW = Math.floor(Math.random() * words.length);

  theWord.innerHTML = words[numW];
}

function countDown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }

  timeLeft.innerHTML = "Time Left: " + time;
}

function match() {
  if (checkMatch()) {
    time = num;
    showWords(words);
    Input.value = "";

    scored++;
  }

  score.innerHTML = "score: " + scored;

  scoreA = JSON.parse(localStorage.getItem("score"));

  if (scored > scoreA) {
    localStorage.setItem("score", scored);
  }
}

function high() {
  scoreA = JSON.parse(localStorage.getItem("score"));
  highScore.innerHTML = "High Score: " + scoreA;
}
function checkMatch() {
  if (Input.value === theWord.innerHTML) {
    return true;
  } else {
    return false;
  }
}

function checkStatus() {
  if (time === 0 && isPlaying === false) {
    result.innerHTML = " Game over! you are out of time";

    high();
    scored = 0;
  } else {
    result.innerHTML = " ";
  }
}

Input.addEventListener("click", () => {
  Input.value = "";
});
