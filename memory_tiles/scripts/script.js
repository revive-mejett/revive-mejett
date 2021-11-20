'use strict'


document.addEventListener('DOMContentLoaded', setup) 



let tileSequence; // key = sequencenumber (a number) value = the html id (format: tile-n, n = 1 to 9)

function setup() {


    tileSequence = new Map()
    addToSequence()
    addToSequence()
    addToSequence()
    addToSequence()
    addToSequence()
    lightSequence()
    let allTiles = document.querySelectorAll('td')
    allTiles.forEach(element => {
        element.addEventListener('click', evt => clickTile(evt))
    });
}

//light the tile up upon clicking
function clickTile(evt) {
    const tile = evt.target

    console.log(evt.target)
    tile.style.backgroundColor = 'rgb(0,170,170)'

    
    console.log(tileSequence)
    //set the colour back to the original colour.
    setTimeout(() => {
        tile.style.backgroundColor = 'rgb(66, 48, 32)'
    }, 250);
}

/**generates a random number from 1 to 9 (integer)
 * 
 * @returns {int}
 */
function randomOneToNine() {
    let randomNumber = Math.random() * 9
    return Math.floor(randomNumber) + 1
}


function addToSequence() {
    const randomTileNumber = randomOneToNine()
    tileSequence.set(tileSequence.size + 1, `tile-${randomTileNumber}`)
    
}

function lightSequence() {

    console.log('function light called');
    tileSequence.forEach((value, key) => {
        const tile = document.querySelector(`#${value}`) //get tile using id value of the map
        console.log(tile)
        setTimeout(() => {
            lightTile(tile)
        }, 1000 * key);
        
    })
}

function lightTile(tile) {

    tile.style.backgroundColor = 'rgb(0,170,170)'

    
    console.log(tileSequence)
    //set the colour back to the original colour.
    setTimeout(() => {
        tile.style.backgroundColor = 'rgb(66, 48, 32)'
    }, 250);
}


//each round, add a new tile to the sequence.
function playRound() {
    addToSequence()
    lightSequence() //light up the buttons
}