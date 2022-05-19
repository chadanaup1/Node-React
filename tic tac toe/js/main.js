console.log('TIC TAC TOE')

/*

let count = 0
var count = 0
const count = 0



const a1 = document.querySelector('#a1')

a1.addEventListener('click', function() {
    console.log('click on A1')
}
)

*/

const elements = ['X', 'O']
let current_player = 0

const cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('click', (e) =>  {
          //  console.log(e)
          //  e.target.style.background = 'red'
          e.target.innerHTML = elements[current_player]
    })
})

