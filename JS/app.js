//Shuffle function from stackOverflow
function shuffle(array) {
    let currentIndex = array.length, randomIndex

    // While there remain elementsto shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]]
    }

    return array;
}
// Our code.
var cards = [
    { value: 'AH', image: './Assets/AH.svg', matched: false },
    { value: 'AD', image: './Assets/AD.svg', matched: false },
    { value: 'TD', image: './Assets/TD.svg', matched: false },
    { value: 'QH', image: './Assets/QH.svg', matched: false },
    { value: 'KD', image: './Assets/KD.svg', matched: false },
    { value: 'JH', image: './Assets/JH.svg', matched: false },
    { value: '2H', image: './Assets/2H.svg', matched: false },
    { value: '8D', image: './Assets/8D.svg', matched: false },
    
    { value: 'AH', image: './Assets/AH.svg', matched: false },
    { value: 'AD', image: './Assets/AD.svg', matched: false },
    { value: 'TD', image: './Assets/TD.svg', matched: false },
    { value: 'QH', image: './Assets/QH.svg', matched: false },
    { value: 'KD', image: './Assets/KD.svg', matched: false },
    { value: 'JH', image: './Assets/JH.svg', matched: false },
    { value: '2H', image: './Assets/2H.svg', matched: false },
    { value: '8D', image: './Assets/8D.svg', matched: false }
    ]

var cardEls = document.querySelectorAll('.card')
var firstGuess = null
var canGuess = true
var flippedCards = 0


shuffle(cards)

cardEls.forEach(function (el, index) {
    el.addEventListener('click', function () {
    if(index === firstGuess || cards[index].matched === true || !canGuess) {
        alert('You clicked the same card, guess another card!')
        return
    } if(cards[index].matched === true){
        alert('You have already matched that card!')
    } 
        var clickedCard = cards[index]
        el.setAttribute('src', clickedCard.image)

        if (firstGuess === null) {
            firstGuess = index
        } else {
            if (cards[firstGuess].value === cards[index].value) {
                cards[firstGuess].matched = true
                cards[index].matched = true
                
                // Remove correct cards
                removeCards(firstGuess, index)

                firstGuess = null
                flippedCards += 2

                // Check for win and reset
                if(flippedCards === cards.length) {
                    resetGame()
                }
            } else {
                canGuess = false

                setTimeout(function() {
                    cardEls[firstGuess].setAttribute('src', './Assets/2B.svg')
                    cardEls[index].setAttribute('src', './Assets/2B.svg')
                    firstGuess = null
                    canGuess = true
                }, 1500)
            }
        }
    })
})

function resetGame() {
    canGuess = false

    setTimeout(function() {
        firstGuess = null
        canGuess = true
        flippedCards = 0
    
        cardEls.forEach(function (el, index) {
            el.setAttribute('src', './Assets/2B.svg')
        })
        cards.forEach(function(card, index) {
            card.matched = false 
        })
        shuffle(cards)
    }, 2000)
}

function removeCards(firstCardIndex, secondCardIndex) {
    setTimeout(function() {
        cardEls[firstCardIndex].remove()
        cardEls[secondCardIndex].remove()
        div.parentNode
    }, 1000)
}

document.querySelector('#reset').addEventListener('click', function() {
    alert('The game is resetting!')
    resetGame()
})