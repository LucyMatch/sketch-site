let cam
let w, h

function preload(){

}

function setup(){
  w = windowWidth
  h = windowHeight - (windowHeight / 8)

  createCanvas( w, h )

  cam = createCapture( VIDEO )

  cam.size( w, h)
  cam.hide()
}

function draw(){
  image(cam, 0, 0, w, h)
  filter(THRESHOLD )
}

function windowResized() {
  w = windowWidth
  h = windowHeight - (windowHeight / 8)
  resizeCanvas(w, h);
}