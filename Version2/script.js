//*INSTRUCTIONS WINDOW APPEAR AND FADEOUT FUNCTION

let modal = document.querySelector(".modal");
modal.style.display = 'block'

function fadeout(){
  let opacity = 1;
  let step = 1 / 50; //*variable determines the size of each step in the opacity decrement, 50 steps for a smoother transition

  let interval = setInterval( function(){

    modal.style.opacity = opacity //*set opacity
    opacity -= step //* decrease opacity

    if (opacity <= 0){
      clearInterval(interval) //* stop interval when reaches 0
      modal.style.display = 'none'
    }
    
  }, 20) //*time to repeat the fucntion until it goes to 0 20milliseconds
}
setTimeout(fadeout, 4000)
