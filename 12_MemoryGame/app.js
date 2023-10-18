const cardArray = [
    {
        name: "pizza",
        img: "Images/pizza.png",
    },
    {
        name: "cheeseburger",
        img: "Images/cheeseburger.png",
    },
    {
        name: "fries",
        img: "Images/fries.png",
    },
    {
        name: "hotdogs",
        img: "Images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "Images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "Images/milkshake.png",
    },
    {
        name: "pizza",
        img: "Images/pizza.png",
    },
    {
        name: "cheeseburger",
        img: "Images/cheeseburger.png",
    },
    {
        name: "fries",
        img: "Images/fries.png",
    },
    {
        name: "hotdogs",
        img: "Images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "Images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "Images/milkshake.png",
    },
]


cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
const screenDisplay = document.querySelector("body");
const gameDisplay = document.querySelector("#game");
let cardChoosen = [];
let cardChoosenIds = [];
const cardsWon = [];

gridDisplay.style.display = "grid";
gridDisplay.style.width = "400px";
gridDisplay.style.height = "300px";
gridDisplay.style.gap = "10px";
gridDisplay.style.gridTemplateColumns = "repeat(4, 1fr)";
gridDisplay.style.gridTemplateRows = "repeat(3, 1fr)";
screenDisplay.style.background = "url(Images/background-imgg.jpg)";
screenDisplay.style.padding = "120px";
gameDisplay.style.display = "flex";
gameDisplay.style.flexDirection = "column";
gameDisplay.style.alignItems = "center";


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "Images/blank.png");
        card.setAttribute("data-id", i);
        gridDisplay.appendChild(card);
        card.addEventListener("click", flipCard);
    }
}


createBoard();


function checkMatch() {
    const cards = document.querySelectorAll("#grid img");
    console.log("check for  match");
    console.log(cards);

    if (cardChoosen[0] == cardChoosen[1]) {
        cards[cardChoosenIds[0]].setAttribute("src", "Images/blank.png");
        cards[cardChoosenIds[1]].setAttribute("src", "Images/blank.png");
        console.log("You clicked the same card.");
    }
    if (cardChoosen[0] === cardChoosen[1]) {
        console.log("Yay!! found a match.");
        cards[cardChoosenIds[0]].setAttribute("src", "Images/white.png");
        cards[cardChoosenIds[1]].setAttribute("src", "Images/white.png");
        cards[cardChoosenIds[0]].removeEventListener("click", flipCard);
        cards[cardChoosenIds[1]].removeEventListener("click", flipCard);
        cardsWon.push(cardChoosen);
    }
    else {
        cards[cardChoosenIds[0]].setAttribute("src", "Images/blank.png");
        cards[cardChoosenIds[1]].setAttribute("src", "Images/blank.png");
        console.log("Try again mate~~");
    }
    resultDisplay.textContent = cardsWon.length;
    cardChoosen = [];
    cardChoosenIds = [];

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Congratulation!! You found them all.";
        screenDisplay.style.background = "url(Images/confetti-img.jpg)"
    }
}


function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenIds.push(cardId);
    console.log(cardChoosen);
    console.log(cardChoosenIds);
    this.setAttribute("src", cardArray[cardId].img);

    if (cardChoosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
}