function poop(x, y) {
  this.radiusX = 100
  this.radiusY = 80

  this.init = function(){
    this.x = x
    this.y = y
    this.speed = 5
    this.text = textContent.shift()
    this.noiseRate = random(150, 200)
  }
  this.render = function(){
    noFill()

    push()

    fill(108,60,11)
    // stroke(0)
    strokeWeight(4)

    ellipse(this.x, this.y, this.radiusX, this.radiusY)
    image(poop_img, this.x-20, this.y-75, 40, 40 )
    pop()

    push()
    fill(255)
    textSize(15)
    textAlign(CENTER, CENTER)
    text('Helvetica')
    textStyle(ITALIC)
    text(this.text, this.x, this.y)
    pop()
    
  }

  this.update = function() {
    this.y = map(noise(frameCount / this.noiseRate ) * height, 0, height, becky1.y+100, height-40)
  }
  this.init();
  this.render()
}

function drawPoops() {
  fill(255)

  for (i=0; i < poopsInPlay.length; i++){
    poopsInPlay[i].update()
    poopsInPlay[i].render()
  }
}