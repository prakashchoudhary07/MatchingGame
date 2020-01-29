const card = document.querySelectorAll(".cards");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let movesCount = 0;
document.getElementById('score').innerHTML = movesCount;


console.log(card);

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    console.log("clicked" + this);
    this.classList.add("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        if (firstCard.dataset.name === 'X') {
            lockBoard = true;
            alert("GameOver. you have Lost. Please Restart");
        }

        return;
    }

    secondCard = this;
    if (secondCard.dataset.name === 'X') {
        lockBoard = true;
        alert("GameOver. you have Lost. Please Restart");
        return;
    }

    checkForMAtch();
}

function checkForMAtch() {
    movesCount += 1;
    document.getElementById('score').innerHTML = movesCount;
    console.log(movesCount);
    console.log("MAtched called");
    let isMatch = firstCard.dataset.name.toUpperCase() === secondCard.dataset.name.toUpperCase();
    console.log(isMatch);
    isMatch ? disableCard() : unfilpCard();

}

function disableCard() {
    console.log("Dsiable called");
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unfilpCard() {
    console.log("unflipCard called");
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
        resetBoard();
    }, 1000);
}

function resetBoard() {
    console.log("resetBoard called");
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}


card.forEach(card1 => card1.addEventListener('click', flipCard));