/* eslint-disable */
let getRandomNumber = () => {
  let randomNumberCard = Math.floor(Math.random() * 12 + 1);
  if (randomNumberCard === 1) {
    return "A";
  }
  if (randomNumberCard === 10) {
    return "J";
  }
  if (randomNumberCard === 11) {
    return "Q";
  }
  if (randomNumberCard === 12) {
    return "K";
  }
  return randomNumberCard;
};

let getRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let randomNumberSuit = Math.floor(Math.random() * 4);
  return suit[randomNumberSuit];
};

const getRandomCard = () => {
  let number = getRandomNumber();
  let suit = getRandomSuit();
  document.querySelector(".number").innerHTML = number;
  document.querySelector(".suit").innerHTML = suit;
  document.querySelector(".suit-bottom").innerHTML = suit;
  if (suit === "♦" || suit === "♥") {
    document.querySelector(".suit").style.color = "red";
    document.querySelector(".suit-bottom").style.color = "red";
  } else {
    document.querySelector(".suit").style.color = "black";
    document.querySelector(".suit-bottom").style.color = "black";
  }
};

const tenSecondsForRandomCard = function () {
  getRandomCard();
  setTimeout(tenSecondsForRandomCard, 10000);
};

tenSecondsForRandomCard();

window.onload = getRandomCard();

document
  .querySelector("#new-card-button")
  .addEventListener("click", getRandomCard);

const inputHeight = document.querySelector("#basic-input-height");
const inputWidth = document.querySelector("#basic-input-width");
let arrayAuxHeight = [];
let arrayAuxWidth = [];

inputHeight.addEventListener("keypress", (e) => {
  arrayAuxHeight.push(e.key);
  // console.log(arrayAuxHeight);
  // console.log(arrayAuxHeight[arrayAuxHeight.length - 1]);
  if (arrayAuxHeight[arrayAuxHeight.length - 1] === "Enter") {
    let heightToString = arrayAuxHeight.slice(0, -1).join("");
    console.log(`${heightToString}px`);
    document.querySelector(".card").style.height = `${heightToString}px`;
    arrayAuxHeight = [];
  }
});

inputWidth.addEventListener("keypress", (e) => {
  arrayAuxWidth.push(e.key);
  // console.log(arrayAuxWidth);
  // console.log(arrayAuxWidth[arrayAuxWidth.length - 1]);
  if (arrayAuxWidth[arrayAuxWidth.length - 1] === "Enter") {
    let widthToString = arrayAuxWidth.slice(0, -1).join("");
    console.log(`${widthToString}px`);
    document.querySelector(".card").style.width = `${widthToString}px`;
    arrayAuxWidth = [];
  }
});
