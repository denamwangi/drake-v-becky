// Goal: Like Space Invaders. 2 or 3 Beckys at the very top. Drake at bottom shooting balls with space key.
//        Becky will keep track of if she's hit or not. 

// Steps:
// Drake: bottom of screen with ability to move left and right
//        ability to shoot balls out with spacebar press
// Becky: at top of screen moving left and right
//        aware of when she's hit by a ball
// Score: add score that increments
// Becky: have Becky move lower by a step after traversing the row
// 

var state = 0
var poop_img
var unicorn
var drake
var score = 0
var drakeBalls = [];
var drakeBallsIdx = 0;
var drakeBallsInPlay = [];
var poopsCount = 5;
var poopsInPlay = [];
var textContent = [  
  "so like, \nwhat \nare you?",
  "can I touch \nyour hair?",
  "do you \nspeak \nAfrican?",
  "wow you're \nso articulate",
  "you people...",
]
textCol = 1
beckyInPlay = []
var startPlay = false;

function preload() {
  // 997*720
  drake = loadImage("drake_meme.png")
  // 400 x 323
  bbqBecky_img = loadImage("bbq_becky.png")
  unicorn = loadImage("unicorn.png")
  poop_img = loadImage("poop.png")
}

function setup() {
  createCanvas(1000, 900);

  becky1 = new bbqBecky(50, 50)
  becky2 = new bbqBecky(350, 50)
  becky3 = new bbqBecky(650, 50)
  beckyInPlay.push(becky1)
  beckyInPlay.push(becky2)
  beckyInPlay.push(becky3)
  beckyMoveLeft = false;
  drakeWidth = 980;
  drakeHeight = 720;
  drakeX = width/2
  drakeY = height - 40

  for(i=0; i <10000; i++){
    drakeBalls[i] = new drakeBall(becky1, becky2, becky3)
  }

  startPlay = true;
}

function draw() {  
  background(10)

  if(state === 0){
    drawStart()
  } else if (state == 1){
    drawGame()
  } else if (state == 2){
    drawScore()
  }

}

function keyPressed(){
  if(keyCode == 32){
    fill(255)
    drakeBallsInPlay.push(drakeBalls.pop())
  }
}

// THREE POSSIBLE STATES:
// 1) game intro
// 2) game in play
// 3) game over- give score

function drawStart(){
  fill(255)
  textSize(35)
  textAlign(CENTER, CENTER)
  text("Press Enter to help Drake defeat becky. ", width/2, height/2)
  textSize(20)
  text("Left and Right arrows move Drake \nSPACE bar shoots", width/2, height/2+100)
  if(keyIsPressed){
    if(keyCode===ENTER){
      state = 1
    }

  }
}

function drawGame(){
      // set score
      fill(255)
      textSize(20);
      text('score: '+ score, 50, 30)
      noFill()
      // fill(255)
      drawDrake()
      drawDrakeBalls()

      if (keyIsDown(LEFT_ARROW)){
        if( drakeX - 40 > 0){
          drakeX -= 5
        } 
      }
      if (keyIsDown(RIGHT_ARROW)){
        if( drakeX + 55 <= width){
          drakeX += 5
        }

      }
      drawBecky()
      drawPoops()
      beckyInPlay = beckyInPlay.filter(item => item.hits < 4)

      if((drakeBeckyCollide() || (noMoreBecky() && noMorePoops())) && startPlay){
        state = 2;
      }
}
// The game ends if Becky gets to Drake OR Drake kills all the Beckys and clears all the poops
function drakeBeckyCollide() {
  if( drakeY - becky1.y < 120 || drakeY - becky2.y < 120 || drakeY - becky3.y < 120) {
    return true
  }
  return false
}

function noMoreBecky(){
  return beckyInPlay.length == 0;
}

function noMorePoops(){
  return poopsInPlay.length == 0;
}

function drawScore(){
  background(255)
  fill(0,100,50)
  textSize(55)
  textFont('Helvetica')
  textAlign(CENTER, CENTER)
  text('You are magical \n score: '+ score, width/2, height/2 )
  noFill()
  image(unicorn, width/2-150, height/2-300, 300, 200)
  noLoop()
}