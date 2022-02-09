const cards = document.querySelectorAll('.card');
let hasFlipCard = false;
let fristCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    if(this === fristCard) return;

    this.classList.add('flip');
    if(!hasFlipCard) {
        hasFlipCard = true;
        fristCard = this;
        return;
    }

    secondCard = this;
    hasFlipCard = false;
    checkForMath()
}

function checkForMath() {
    if(fristCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unFlipCards();
}

function disableCards() {
    fristCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unFlipCards() {
    lockBoard = true;

    setTimeout(() => {
        fristCard.classList.remove('flip');
        secondCard.classList.remove('flip');
  
     resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlipCard, lockBoard] = [false, false];
    [fristCard, secondCard] [null, null];
}

(function shuffle() {
    cards.forEach((card) =>{
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition; 
    })
})() ;

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});