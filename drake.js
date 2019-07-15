function drawDrake() {
    // set drake image at bottom of screen behind ellipse (collision detection)
    ratio = drakeWidth/ drakeHeight
    image(drake, drakeX-45, drakeY-40, ratio * 80, 80)
  
    // noFill()
  
    noStroke()
    ellipse(drakeX, drakeY, 80, 80)
  }