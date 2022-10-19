const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', { once: true})
})

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    //Check for win
    //Check for Draw
    //Switch Turns
}

function placeMark (cell, currentClass) {
    cell.classList.add(currentClass)
}