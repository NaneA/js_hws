document.addEventListener('DOMContentLoaded', () =>{
const grid = document.querySelector('.grid');
let timerId;
const scoreDisplay = document.querySelector('#score')
const startBtn = document.querySelector('#start-button')
const width = 10;
const height = 20;
let score = 0;

let squares = [];
createBoard();


  //The Tetrominoes
  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
const colors = [
  'grey',
  'green',
  'blue',
  'purple',
  'pink'
]
  let currentPosition = 4
  let currentRotation = 0;
  let random = Math.floor(Math.random()*theTetrominoes.length);
  let current = theTetrominoes[random][0];
 

function draw(){
    current.forEach(index => {
      
        squares[currentPosition+index].classList.add('tetromino')
        
        squares[currentPosition+index].style.backgroundColor = colors[random]
    })
   
}

function unDraw(){
    current.forEach(index => {
      
        squares[currentPosition+index].classList.remove('tetromino')
           
        squares[currentPosition+index].style.backgroundColor = ''
    })
}

draw();

// timerId = setInterval(moveDown,500);
function control(e) {
    if(e.keyCode === 37) {
      moveLeft()
    } else if (e.keyCode === 38) {
      rotate()
    } else if (e.keyCode === 39) {
      moveRight()
    } else if (e.keyCode === 40) {
      moveDown()
    }
  }
document.addEventListener('keyup', control);

function moveDown(){
    unDraw();
    currentPosition+=10;
    draw()
    stop();
    addScore()
    gameOver();
}

function stop(){
    // if(squares[currentPosition+10].classList.contains('full')){
     
    //   squares[currentPosition+10].classList.add('full')
    //  currentPosition =4;
    //  draw();
    // }
 
    if(current.some(index => squares[currentPosition+width+index].classList.contains('full'))){
      
        current.forEach(index => squares[currentPosition+index].classList.add('full'))
         random = Math.floor(Math.random()*theTetrominoes.length);
        current = theTetrominoes[random][currentRotation];
        currentPosition = 4;
        draw();
       
    }


}

 //move the tetromino left, unless is at the edge or there is a blockage
 function moveLeft() {
    unDraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if(!isAtLeftEdge) currentPosition -=1
    if(current.some(index => squares[currentPosition + index].classList.contains('full'))) {
      currentPosition +=1
    }
    draw()
  }

  function moveRight() {
    unDraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
    if(!isAtRightEdge) currentPosition +=1
    if(current.some(index => squares[currentPosition + index].classList.contains('full'))) {
      currentPosition -=1
    }
    draw()
  }

  function rotate(){
      unDraw();
      console.log('hereikk');
     
      if(current.some(index => (index+currentPosition)%10 == 9)){
        currentRotation++;
        if(currentRotation === theTetrominoes[0].length){
          currentRotation=0;
      }
        current = theTetrominoes[random][currentRotation];
        if(current.some(index => (index+currentPosition)%10 == 0)){
          if(random==4)
          currentPosition-=2;
          else
            currentPosition-=1;
       }
        }
       else if(current.some(index => (index+currentPosition)%10 == 0)){
          currentRotation++;
          if(currentRotation === theTetrominoes[0].length){
            currentRotation=0;
        }
          current = theTetrominoes[random][currentRotation];
          if(current.some(index => (index+currentPosition)%10 == 9)){
            if(random==4)
            currentPosition+=2;
            else
              currentPosition+=1;
         }
          }

        else{
          currentRotation++;
          if(currentRotation === theTetrominoes[0].length){
            currentRotation=0;
        }
          current = theTetrominoes[random][currentRotation];
          if(current.some(index => squares[currentPosition + index].classList.contains('full'))){
            if(currentRotation == 0){
              currentRotation = 3;
            } else
            currentRotation-=1;
            current = theTetrominoes[random][currentRotation]
          }
        }
      draw();
  }

startBtn.addEventListener('click',()=> {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  } else {
    draw()
    timerId = setInterval(moveDown, 200)
}}
);

function addScore() {
  for (let i = 0; i < 199; i +=width) {
    const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

    if(row.every(index => squares[index].classList.contains('full'))) {
      score +=10
      scoreDisplay.innerHTML = score
      row.forEach(index => {
        squares[index].classList.remove('full')
        squares[index].classList.remove('tetromino')
        squares[index].style.backgroundColor = ''
      })
      const squaresRemoved = squares.splice(i, width)
      squares = squaresRemoved.concat(squares)
      squares.forEach(cell => grid.appendChild(cell))
    }
  }
}


function gameOver() {
  if(current.some(index => squares[currentPosition + index].classList.contains('full'))) {
    scoreDisplay.innerHTML = 'Game Over'
    clearInterval(timerId)
  }
} 


function createBoard(){
    for(let i=0;i<width*height+10;i++){
       const square = document.createElement('div');
       square.style.borderColor = 'black'
         grid.appendChild(square);
        
    }
   squares = Array.from(document.querySelectorAll('.grid div'));
   for(let i = squares.length-10; i<squares.length; i++){
    squares[i].classList.add('full');
}

}
} );