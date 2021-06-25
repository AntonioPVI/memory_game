document.addEventListener('DOMContentLoaded', () => {

    //Card options
    const cardArray = [
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const container = document.querySelector('.container');
    const result = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    // Create your board
    function createBoard(params) {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'img/blank.png');
            // Values
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            container.appendChild(card);
        }
    }

    // Function check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/blank.png');
            cards[optionTwoId].setAttribute('src', 'img/blank.png');
            alert('You have clicked the same image!');
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            // cards[optionOneId].setAttribute('src', 'img/white.png');
            // cards[optionTwoId].setAttribute('src', 'img/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png');
            cards[optionTwoId].setAttribute('src', 'img/blank.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        result.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            result.textContent = 'Congratulations! You found them all!';
        }
    }

    // Function flip card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();

});