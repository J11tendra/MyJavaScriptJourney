const cardArray = [
    {
        name: "blank",
        img: "Images/blank.png",
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
        img: "Images/hotdogs.png",
    },
    {
        name: "ice-cream",
        img: "Images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "Images/milkshake.png",
    },
    // {
    //     name: "white",
    //     img: "Images/white.png",
    // }
    {
        name: "blank",
        img: "Images/blank.png",
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
        img: "Images/hotdogs.png",
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
const cardChoosen = [];

const gridDisplay = document.querySelector("#grid");
gridDisplay.style.display = "grid";
gridDisplay.style.width = "400px";
gridDisplay.style.height = "300px";
gridDisplay.style.gridTemplateColumns = "repeat(4, 1fr)";
gridDisplay.style.gridTemplateRows = "repeat(3, 1fr)";



function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "Images/blank.png");
        card.setAttribute("data-id", i);
        gridDisplay.appendChild(card);
        card.addEventListener("click", flipCard);
        // console.log(card);
    }
}

createBoard();

function checkMatch() {
    console.log("check for match")
}

function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardChoosen.push(cardArray[cardId].name);
    this.setAttribute("src", cardArray[cardId].img);

    if (cardChoosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
}