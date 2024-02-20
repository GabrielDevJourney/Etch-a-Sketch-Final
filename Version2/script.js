//*INSTRUCTIONS WINDOW APPEAR AND FADEOUT FUNCTION

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

