document.addEventListener('DOMContentLoaded', ()=>{

    //Card options
    const cardArray = [
        {
            name: 'fries',
            img:'img/fries.png'
        },
        {
            name: 'fries',
            img:'img/fries.png'
        },
        {
            name: 'cheeseburger',
            img:'img/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img:'img/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img:'img/hotdog.png'
        },
        {
            name: 'hotdog',
            img:'img/hotdog.png'
        },
        {
            name: 'ice-cream',
            img:'img/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img:'img/ice-cream.png'
        },
        {
            name: 'milkshake',
            img:'img/milkshake.png'
        },
        {
            name: 'milkshake',
            img:'img/milkshake.png'
        },
        {
            name: 'pizza',
            img:'img/pizza.png'
        },
        {
            name: 'pizza',
            img:'img/pizza.png'
        },
    ]

    const container = document.querySelector('.container');
    const result = document.querySelector('#result');
    let cardChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    
    // Create your board
    function createBoard(params) {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'img/blanck.png');
            // Values
            card.setAttribute('data-i', i);
            //card.addEventListener('click', flipcard)
            container.appendChild(card);
        }
    }

    // Function check for matches
    function checkForMatch() {
        let cards = document.querySelector('img');
        const optionOneId = cardChosen[0];
        const optionTwoId = cardChosen[1];

        if (cardChosen[0] === cardChosen[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'img/white.png');
            cards[optionTowId].setAttribute('src', 'img/white.png');

            cardsWon.push(cardChosen);
        }else {
            cards[optionOneId].setAttribute('src', 'img/blanck.png');
            cards[optionTowId].setAttribute('src', 'img/blanck.png');
            alert('Sorry, try again')
        }

        cardChosen = [];
        cardsChosenId = [];
        result.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length/2) {
            result.textContent = 'Congratulations! you found them all!';
        }
    }

    // Function flip card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();

});