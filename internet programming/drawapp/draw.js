var canvas = document.getElementById('mycanvas');
var c = canvas.getContext('2d');
// setting canvas full screen 
canvas.width = 800;
canvas.height = 600;

c.strokeStyle = "#000000"
// end of line is rounded
c.lineJoin = "round";
c.lineCap = "round";
c.lineWidth = 5;

var isDrawing = false;
var lastX = 0;
var lastY = 0;

function draw(e) {

    if(!isDrawing) {
        return; //stop the function when mouse is not pressed

    }
    else{
        console.log(e); 
        c.beginPath();
        c.moveTo(lastX, lastY);
        c.lineTo(e.offsetX, e.offsetY);
        c.stroke();

        // updating last X and lastY

        lastX = e.offsetX;
        lastY = e.offsetY;
    }
    
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;

});

function clearCanvas(){
    c.clearRect(0,0, canvas.width, canvas.height);
}

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);