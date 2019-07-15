// Becky object, there will be three on the screen all moving alike
function bbqBecky(x, y) {
    bbqBeckyWidth = 400;
    bbqBeckyHeight = 323;
  
    this.init = function(){
      this.x = x
      this.y = y
      this.speed = 5;
      this.hits = 0;
    }
    this.render = function (){
      noFill()
      ratio = bbqBeckyWidth/ bbqBeckyHeight;
      if (this.hits < 4){
        image(bbqBecky_img, this.x , this.y, ratio * 80, 80)
        ellipse(this.x + 50, this.y + 40, 80, 80)
        console.log(beckyInPlay.filter(item => item!= this))

      }

  
      if (poopsCount > 0 && random() < .005) {
        newPoop = new poop(-100+ textCol * width/5, this.y)
        textCol ++
        poopsInPlay.push(newPoop)
        poopsCount -= 1
      }
  
  
    }
  
    this.updateRight = function(){
      this.x += this.speed
    }
    this.updateLeft = function() {
      this.x -= this.speed
    }
    this.init()
  }

   
function drawBecky() {
    noFill()
    becky1.render()
    becky2.render()
    becky3.render()
  
    if (beckyMoveLeft === true){
      becky1.updateLeft()
      becky2.updateLeft()
      becky3.updateLeft()
      if(becky1.x < 30){
        beckyMoveLeft = false
        becky1.y += 30
        becky2.y += 30
        becky3.y += 30
      }
    } else {
      becky1.updateRight()
      becky2.updateRight()
      becky3.updateRight()
      if(becky3.x > width - 200){
        beckyMoveLeft = true
      }
    }
  }