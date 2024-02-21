//*INSTRUCTIONS WINDOW 
const modal = document.querySelector(".modal");
const iconInstructions = document.querySelector(".info-ico")
const closeBtn = document.querySelector(".close")
modal.style.display = 'block'

iconInstructions.addEventListener('click', () => {
  modal.style.display = 'block'

})

closeBtn.addEventListener('click', () =>{
  modal.style.display = 'none'
})

//*CANVAS DRAWING FUCNTIONALITY

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const w = 550
const h = 320
let desltaX = 0
let deltaY = 0


canvas.width = w
canvas.height = h

//*Make drawing start in the middle of the board
//*Object with 3 properties x,y,draw
//* draw (method because it performs an action)
const cursor = {
  x : w / 2 - 3 /2, 
  y : h/ 2 - 3 / 2,

//*Based on the input of user x,y values will change to draw
  draw : (x,y) => {

    ctx.beginPath()
  }
}