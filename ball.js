
// Balls that Drake shoots at Becky
function drakeBall(becky1, becky2, becky3, poop) {
    this.size = 20;
    this.speed = 5;
  
  
    this.init = function(){
      this.x = drakeX;
      this.y = drakeY - 20;
      this.color = color(255)
      
    }
    this.render = function() {
      push()
      // fill(255,0,0)
      ellipse(this.x, this.y, this.size, this.size)
      pop()
    };
  
    this.updateInPlay = function() {
      this.y -= this.speed;
      fill(this.color)
    }
    this.update = function(){
      this.x = drakeX;
      this.y = drakeY - 20;
    }
  
    this.checkHits = function() {
      if (this.hasHitTarget(becky1)){
  
        return true
      } else if (this.hasHitTarget(becky2)){
        return true
      }else if (this.hasHitTarget(becky3)){
        return true
      }
      // return this.hasHitTarget(becky1) || this.hasHitTarget(becky2) || this.hasHitTarget(becky3)
    }
  
    this.hasHitPoop = function() {
      for (p=0; p<poopsInPlay.length; p++){
        hitRange = dist(this.x, this.y, poopsInPlay[p].x, poopsInPlay[p].y)
        if(hitRange < this.size/2 +50){
          hit = poopsInPlay.splice(p, 1)
          return true 
        }
      }
    }
  
    this.hasHitTarget = function(target) {
      hitRange = dist(this.x, this.y, target.x + 50, target.y + 40)
      if (hitRange < this.size/2 + 40) {
          target.hits ++;
        return true;
      }
  
    }
    this.init()
  }

  function drawDrakeBallsInPlay() {
    if (drakeBallsInPlay.length > 0) {
      for(i=0; i < drakeBallsInPlay.length; i++) {
        drakeBallsInPlay[i].updateInPlay()
        
        drakeBallsInPlay[i].render()
  
        if (drakeBallsInPlay[i].checkHits()  || drakeBallsInPlay[i].hasHitPoop() ){
          drakeBallsInPlay[i].init()
          drakeBalls.push(drakeBallsInPlay.splice(i, 1)[0])
          score += 20         
        } else if (drakeBallsInPlay[i].y < -20){
          drakeBallsInPlay[i].init()
          drakeBalls.push(drakeBallsInPlay.splice(i, 1)[0])
        }
      }
    }
  }

  function drawDrakeBalls(){
    for(i=0; i< drakeBalls.length; i++){
      drakeBalls[i].update()
    }
    drawDrakeBallsInPlay()
  }