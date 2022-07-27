let context = htmlCanvas.getContext('2d');

window.addEventListener('load', function () {
    (function () {
        /* The above code is getting the canvas element from the HTML file. */
        const canvas = document.getElementById("my_canvas");
        const ctx = canvas.getContext("2d")

// Start listening to resize events and draw canvas.
        initialize();

        function initialize() {
            // Register an event listener to call the resizeCanvas() function
            /* Creating a function that will be called each time the window is resized. */
// each time the window is resized.
            window.addEventListener('resize', resizeCanvas, false);
            resizeCanvas();
        }

        function resizeCanvas() {
            const s = getComputedStyle(canvas);
            const w = s.width;
            const h = s.height;
            canvas.width = w.split("px")[0];
            canvas.height = h.split("px")[0];
            axes();
        }
    })();
}, false);

// Display custom canvas. In this case it's a blue, 5 pixel
// border that resizes along with the browser window.
function redraw() {
    context.strokeStyle = 'blue';
    context.lineWidth = '5';
    context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
}

ctx.beginPath();
ctx.fillStyle = "#26ce00";
ctx.arc(margX + vx * time, altMax - margY - initialHeight - (vy * time - 0.5 * 9.8 * (Math.pow(time, 2))), 5, 0, 2 * Math.PI);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(margX, altMax - margY);
ctx.quadraticCurveTo((distance / 2) + margX, altMax - margY - maximumHeight, distance + margX, altMax - margY);
ctx.strokeStyle = "#2a54fd";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();


const anchoMax = canvas.width;


function dibujarCuadriculado() {
    let canvas = document.getElementById("my_canvas")
    let ctx = canvas.getContext("2d");
    let anchoMax = canvas.width;
    let alturaMax = canvas.height;


    //Dibujar lineas horizontales
    ctx.beginPath();
    for (let i = 0; i < alturaMax; i += 20) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#2319ff";
        ctx.stroke();
    }
    ctx.closePath();

    //Dibujar lineas verticales
    ctx.beginPath();
    for (let i = 0; i < anchoMax; i += 20) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#2319ff";
        ctx.stroke();
    }
    ctx.closePath();

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMax / 2);
    ctx.lineTo(anchoMax, alturaMax / 2);
    ctx.strokeStyle = "#ff1919";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax / 2, 0);
    ctx.lineTo(anchoMax / 2, alturaMax);
    ctx.strokeStyle = "#ff1919";
    ctx.stroke();
    ctx.closePath();
}