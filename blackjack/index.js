
let player = {
    "name": "Bob",
    "chips": 145
}
let cards = []
let newCard
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


function generateRandomCard(){
    let min = 1;
    let max = 13;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumber === 1) {
        randomNumber = 11
        return randomNumber
    }
    if ([11, 12, 13].includes(randomNumber)){
        randomNumber = 10
        return randomNumber
    }
    return randomNumber
}

function startGame() {
    isAlive = true
    let firstCard = generateRandomCard()
    let secondCard = generateRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Blackjack! You won!"
        hasBlackJack = true
    }
    else {
        message = "You busted!"
        isAlive = false
    }
    


    cardsEl.textContent = `Cards: `
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += ' ' + cards[i]
    }
    
    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message
    playerEl.textContent = `${player.name}: $${player.chips}`

}

function getNewCard() {
    if (hasBlackJack === false && isAlive === true){
        newCard = generateRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
} 
