const BOARD_SIZE = 400;
var slider;

function setup(){
    createCanvas(BOARD_SIZE, BOARD_SIZE);
    slider = createSlider(0, TWO_PI, PI/4, .01)
}

function draw(){
    background(220);
    translate(BOARD_SIZE/2, BOARD_SIZE);
    angle = slider.value();
    branch(100, 10);
    
}

function branch(len, n){
    line(0, 0 , 0, -len);
    translate(0, -len);
    
    if (n > 0){
        push();
        rotate(angle);
        branch(len*.67, n-1);
        pop();
        push();
        rotate(-angle);
        branch(len*.67, n-1)
        pop();
    }
}