import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

const hero = document.getElementsByClassName('fullHero__foreground fullListenHero__foreground')[0]

console.log(hero)


var buyButton = document.createElement('button');
hero.appendChild(buyButton);
buyButton.innerText = 'Buy';

buyButton.addEventListener('click', (e) => {
    console.log('Buy: ', document.location.href)
})
