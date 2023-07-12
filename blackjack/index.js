let firstCard = 9
let secondCard = 12
let cards = [firstCard, secondCard]
let newCard
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
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
    
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`
    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message

}

function getNewCard() {
    newCard = 2
    cards.push(newCard)
    sum += newCard
    renderGame()
}