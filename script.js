//*INSTRUCTIONS WINDOW
const modal = document.querySelector(".modal");
const iconInstructions = document.querySelector(".info-ico");
const closeBtn = document.querySelector(".close");
modal.style.display = "block";

iconInstructions.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});



//*COLOR PICKER
const colorPicker = document.querySelector('#color-picker')
let currentColor = '#000000' //?inicial color

//*track color change
colorPicker.addEventListener('input', (e) => {
  currentColor = e.target.value
})



//*CANVAS DRAWING FUCNTIONALITY

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2; //*?help inicialize at the middle width
let y = canvas.height / 2; //*?help inicialize at middle height
const step = 4; //*?number of units that the line with move each keypress

function draw(x, y) {
  ctx.beginPath() //? start a new sub-path like lifting a pen so user can change color whenever he wants
  ctx.moveTo(x,y) //? move to specific coordonates
  ctx.strokeStyle = currentColor //? utilize the current color choosen
  ctx.lineTo(x, y); //? draw line to a specific coordonate
  ctx.stroke(); //? render lines in canvas
}

function handleKeysDown(e) {
  const key = e.key || e.keyCode;
  switch (e.key) {
    case "ArrowUp":
    case 38:

      //*?since in canvas the (0,0) is in the top left corner i need to subtract from the height to be able to go upwards
      //*? so when math terms we must think reverse\opposite of the traditional axis so to go up we must subctract weird i know
      //*? i was confused too
      //*?math.max(0) ensures that the line doesnt go below zero in this case doesnt go out of top board

      y = Math.max(0, y - step); 

      //*?this is calculating the new y - coordinate btw so the y-step is attached to the math.max 0 so if the value becomes 0 is because is at the top of the canvas
      //* WHY SO MANY COMMENTS JUST TO ENSURE ITS UNDERSTANDBLE TO MYSELF MOSTLY AHAH */
      break;

    case "ArrowDown":
    case 40:
      //*? As i said before because canvas work the opposite of tradicional Cartesian coordonate we have the max height in the opposite way to i must
      //*?use the canvas.height to refer to the max height of the canvas but use the math.min to ensure that the line doesnt go below the bottom edge
      y = Math.min(canvas.height, y + step);
      break;

    //*? for x axis it work like a normal Cartesian coordanate axis only the y axis is inverted so no need to absurd ammount of comments
    case "ArrowLeft":
    case 37:
      x = Math.max(0, x - step); //*? mathmax 0 used to prevent line to go below x = 0
      break;

    case "ArrowRight":
    case 39:
      x = Math.min(canvas.width, x + step); //*? mathmax 0 used to prevent line to go above x = max width of canvas
  }
  ctx.lineTo(x, y);
  ctx.stroke();
  draw(x, y);
}

//*Steup inicial of the path
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(x, y);

window.addEventListener("keydown", handleKeysDown);

//* GRAB AND SHAKE FUCNTIONALITY

//?REQUIREMENTS
//* CLEAR FUCNTION
//* TRACK THE MOVEMENT TROUGHT THE AXIS FROM WHERE IT WAS TO WHERE IT IS ALL BASED ON THE MOUSE EVENT MOVEMENT
//* WHEN IS MOVE FROM X TO NEW X FROM Y TO NEW Y I WILL CALL THE CLEAR FUCNTION
//* BASED ON A DEFAULT DETERMINE VALUE IF THE MOVEMENT FROM THE OLD TO NEW AXIS IS ABOVE THAT IT WILL CLEAR

//*Clear canvas drawing
function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

let inicialMousePositionX = 0
let inicialMousePositionY = 0

let draggable = false

let inicialFramePositionX = 0
let inicialFramePositionY = 0

const distanceBetweenMouseFrame = 0

const etchFrame = document.querySelector(".etch-frame");

etchFrame.addEventListener('mousedown', (e) => {
  draggable = true
  //? Getting coordonates of inicial mouse position relative to frame
  inicialMousePositionX = e.pageX - distanceBetweenMouseFrame //this help to make the mouse and frame be in the same position for say
  inicialMousePositionY = e.pageY - distanceBetweenMouseFrame

  //?inicial frame coordonates value
  inicialFramePositionX = etchFrame.offsetLeft
  inicialFramePositionY = etchFrame.offsetTop
})

document.addEventListener('mousemove', (e) => {

  //? Calculate movement distance value used math.abs for an absolute number if there is no negative outcome values 
  if(draggable){

    const deltaX = Math.abs(e.pageX - inicialMousePositionX)
    const deltaY = Math.abs(e.pageY - inicialMousePositionY)
  
    const shakeDistance = 350
    if(deltaX > shakeDistance || deltaY > shakeDistance){
      clearCanvas()
    }
  
    etchFrame.style.left = (e.pageX - inicialMousePositionX) + 'px'
    etchFrame.style.top =  (e.pageY - inicialMousePositionY) + 'px'
  }
})

//?reset position after dragging
document.addEventListener('mouseup', ()=>{
  draggable = false
  etchFrame.style.left = 0 + 'px'
  etchFrame.style.top = 0 + 'px'
})

//? disable color picker draggable so doesnt clear canvas when chaging color

colorPicker.addEventListener('mousedown', (e) => {
  e.preventDefault()
  e.stopPropagation()
})