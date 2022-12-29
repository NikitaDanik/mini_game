const board = document.querySelector('#board')
const colors = ['#191970','#00FFFF','#4B0082','#E0FFFF','#00FF7F']
const SQUARES_NUMBER = 360

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 3px ${color}, 0 0 15px ${color}`
    }

    function removeColor(element){
        element.style.backgroundColor = '#1d1d1d'
        element.style.boxShadow = `0 0 2px #000`
    }




    function getRandomColor(){
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }