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

    createBoard();

});