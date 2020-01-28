const card = document.querySelectorAll(".cards");

let hasFlippedCard = false;
let firstCard, secondCard;

console.log(card);

function flipCard() {
    this.classList.add("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    } else {

        hasFlippedCard = false;
        secondCard = this;
    }

    checkForMAtch();
}

function checkForMAtch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

    } else {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }
}





card.forEach(card1 => card1.addEventListener('click', flipCard));