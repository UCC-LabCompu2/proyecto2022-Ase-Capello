/**
 * In case the video codec is not supported, remove the first <video> element and
 * continues with the next resource successively.
 * @param video - the <video> element
 *
 * @author Angelo Carlos Capello
 */
function fallback(video) {
    /* Removing the first video element and continues with the next resource successively. */
    while (video.hasChildNodes()) {
        if (video.firstChild instanceof HTMLSourceElement) video.removeChild(video.firstChild); else video.parentNode.insertBefore(video.firstChild, video);
    }
    video.parentNode.removeChild(video);
}

/* A self-invoking function. */
(() => {
    'use strict';
    /* Waiting for the page to load before executing the code. */
    window.addEventListener('load', function () {

        /* Selecting all the forms that have the class `needs-validation`. */
        const forms = document.querySelectorAll('.needs-validation')

        /* A function that prevents the form from being submitted if it is not valid. */
        Array.from(forms)
            .forEach(function (form) {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    }, false);
})();

window.addEventListener('load', function () {
    /*  (function () {
          /* The above code is getting the canvas element from the HTML file. */
    /*const canvas = document.getElementById("my_canvas");
    const ctx = canvas.getContext("2d");

    // Start listening to resize events and draw canvas.
    initialize();

    function initialize() {
        // Register an event listener to call the resizeCanvas() function
        /* Creating a function that will be called each time the window is resized. */
    // each time the window is resized.
    /*window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
}

function resizeCanvas() {
    const s = getComputedStyle(canvas);
    const w = s.width;
    const h = s.height;
    canvas.width = w.split("px")[0];
    canvas.height = h.split("px")[0];
    ejes();
}*/

    (function () {
        var
            // Obtain a reference to the canvas element using its id.
            htmlCanvas = document.getElementById('my_canvas'),
            // Obtain a graphics context on the canvas element for drawing.
            context = htmlCanvas.getContext('2d');

        // Start listening to resize events and draw canvas.
        initialize();

        function initialize() {
            // Register an event listener to call the resizeCanvas() function
            /* Creating a function that will be called each time the window is resized. */
            // each time the window is resized.
            window.addEventListener('resize', resizeCanvas, false);
            // Draw canvas border for the first time.
            resizeCanvas();
        }

        // Display custom canvas. In this case it's a blue, 5 pixel
        // border that resizes along with the browser window.
        function redraw() {
            context.strokeStyle = 'blue';
            context.lineWidth = '5';
            context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
        }

        // Runs each time the DOM window resize event fires.
        // Resets the canvas dimensions to match window,
        // then draws the new borders accordingly.
        function resizeCanvas() {
            htmlCanvas.width = window.innerWidth;
            htmlCanvas.height = window.innerHeight;
            ejes();
        }
    })();
}, false);

/**
 * The checkValidInputs function checks if the value of the input field is a number. If it is not, it will alert
 * the user that the value is invalid and it will reset all values of input fields to 0. It also checks if
 * initial_speed, angle and initial_height are greater than 100 or 90 respectively. If they are, then an alert message
 * will be displayed to inform them that their values are invalid and they will be reset to 0. Finally, this function checks
 * if gravity's value is greater than 20; if so an alert message informs them that their values are invalid and resets gravity's
 * value to 9,81 (the default). This function returns nothing because its purpose was only for checking purposes in order for users
 * not enter any incorrect data into our program which would cause errors when running our simulation code later on in this file.
 *
 * @param id Identify the input field that is being validated
 * @param valor Store the value of the input field
 *
 * @return The value of the input field
 *
 * @docauthor Trelent
 */

function checkValidInputs(id, valor) {

    /* Checking if the value of the input field is a number. If it is not, it will alert the user that the value is invalid,
   and it will reset all the values of the input fields to 0. */
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en el campo " + id);
        reset();
    }

    /* Checking if the value of the input field is greater than 100. If it is, it will alert the user that the value is
    invalid and it will reset the value of the input field to 0. */
    if (id === "initial_speed" && valor > 100) {
        alert("Ingrese un valor entre 0 y 100 en el campo " + id);
        document.getElementById("initial_speed").value = "0";
    }

    /* Checking if the value of the input field is greater than 90. If it is, it will alert the user that the value is
    invalid, and it will reset the value of the input field to 0. */
    if (id === "angle" && valor > 90) {
        alert("Ingrese un valor entre 0 y 90 en el campo " + id);
        document.getElementById("angle").value = "0";
    }

    /* Checking if the value of the input field is greater than 30. If it is, it will alert the user that the value is
    invalid, and it will reset the value of the input field to 0. */
    if (id === "initial_height" && valor > 30) {
        alert("Ingrese un valor entre 0 y 30 en el campo " + id);
        document.getElementById("initial_height").value = "0";
    }

    /* Checking if the value of the input field is greater than 20. If it is, it will alert the user that the value is
    invalid, and it will reset the value of the input field to 9,81. */
    if (id === "gravity" && valor > 20) {
        alert("Ingrese un valor entre 0 y 20 en el campo " + id);
        document.getElementById("gravity").value = "9.81";
    }
}

/**
 * The calculateProjectileMotion function calculates the time, distance and maximum height of a projectile.
 *
 * @return The time, distance and maximum height of the projectile
 *
 * @author Angelo Carlos Capello
 */

function calculateProjectileMotion() {
    /* Declaring the variables that will be used in the function. */
    let initialVelocity, angle, gravity, initialHeight, time, maximumHeight, distance;
    location.href = '#my_canvas';

    /* Getting the values of the input fields. */
    initialVelocity = document.getElementById("initial_speed").value;
    angle = document.getElementById("angle").value;
    gravity = document.getElementById("gravity").value;
    initialHeight = document.getElementById("initial_height").value;

    /* Calculating the x and y components of the initial velocity. */
    const vx = initialVelocity * Math.cos(angle * Math.PI / 180);
    const vy = initialVelocity * Math.sin(angle * Math.PI / 180);


    /* Checking if the initial height is 0. If it is, it will calculate the time, distance and maximum height of the
    heightless projectile. If not, it will calculate the time, distance and maximum height of the projectile with height. */
    if (initialHeight === "0") {
        time = ((2 * initialVelocity * (Math.sin(angle * Math.PI / 180))) / gravity).toFixed(2);
        document.getElementById("time").value = time;
        distance = parseFloat(((Math.pow(initialVelocity, 2) * (Math.sin(2 * angle * Math.PI / 180))) / gravity).toFixed(2));
        document.getElementById("distance").value = distance;
        maximumHeight = ((Math.pow(initialVelocity, 2) * Math.pow((Math.sin(angle * Math.PI / 180)), 2)) / (2 * gravity)).toFixed(2)
        document.getElementById("maximum_height").value = maximumHeight;
    } else {
        time = ((initialVelocity * (Math.sin(angle * Math.PI / 180)) + Math.sqrt(Math.pow(initialVelocity, 2) * Math.pow((Math.sin(angle * Math.PI / 180)), 2) + 2 * gravity * initialHeight)) / gravity).toFixed(2);
        document.getElementById("time").value = time;
        distance = parseFloat(((initialVelocity * (Math.cos(angle * Math.PI / 180))) * time).toFixed(2));
        document.getElementById("distance").value = distance;
        maximumHeight = (parseFloat(initialHeight) + (Math.pow(initialVelocity, 2) * Math.pow((Math.sin(angle * Math.PI / 180)), 2) / (2 * gravity))).toFixed(2);
        document.getElementById("maximum_height").value = maximumHeight;
    }

    const canvas = document.getElementById("my_canvas");
    const ctx = canvas.getContext("2d");
    const altMax = canvas.height;
    const anchoMax = canvas.width;
    const margX = 50;
    const margY = 30;
    let t = 0;
    //alert(initialHeight + (vy * time - 0.5 * 9.8 * (Math.pow(time, 2))) + altMax - margY)
    //alert(altMax - margY - (initialHeight + (vy * time - 0.5 * 9.8 * (Math.pow(time, 2)))))
    ctx.beginPath();
    ctx.fillStyle = "#ff1919";
    ctx.arc(margX + vx * time, altMax - margY - (initialHeight + (vy * time - 0.5 * 9.8 * (Math.pow(time, 2)))) + altMax - margY, 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    if (t < time) {
        setInterval(() => {
            t += 0.01;
            ctx.beginPath();
            ctx.fillStyle = "#ff1919";
            ctx.arc(margX + vx * t, altMax - margY - initialHeight - (vy * t - 0.5 * 9.8 * (Math.pow(t, 2))), 1, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }, 10);
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
}

/**
 * The reset function resets all the values of the form to 0.
 *
 * @return The values of the input fields to 0
 *
 * @author Angelo Carlos Capello
 */
function reset() {
    /* Resetting the values of the input fields to 0. */
    document.getElementById("initial_speed").value = "0";
    document.getElementById("angle").value = "0";
    document.getElementById("initial_height").value = "0";
    document.getElementById("gravity").value = "9.81";
    document.getElementById("distance").value = "0";
    document.getElementById("maximum_height").value = "0";
    document.getElementById("time").value = "0";
}

/**
 * The clearCanvas function clears the canvas by setting all pixels to white.
 *
 * @return A string of the value &quot;undefined&quot;
 *
 * @author Angelo Carlos Capello
 */
function clearCanvas() {
    const canvas = document.getElementById("my_canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ejes();
}

window.addEventListener('load', function () {
    var inputBox = document.getElementById("initial_speed");

    var invalidChars = [
        "-",
        "+",
        "e",
    ];

    inputBox.addEventListener("input", function () {
        this.value = this.value.replace(/[e\-]/gi, "");
    });


    inputBox.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    });
}, false);


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


function ejes() {
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext("2d");
    var altMax = canvas.height;
    var anchoMax = canvas.width;
    var margX = 50;
    var margY = 30;
    var valorX = 40;
    var valorY = 20;

    //Eje X
    ctx.beginPath();
    ctx.moveTo(margX, altMax - margY);
    ctx.lineTo(anchoMax - margX, altMax - margY);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(margX, altMax - margY);
    ctx.lineTo(margX, margY);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //Flecha Eje X
    ctx.beginPath();
    ctx.moveTo(anchoMax - margX, altMax - margY);
    ctx.lineTo(anchoMax - margX - 15, altMax - margY - 5);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(anchoMax - margX, altMax - margY);
    ctx.lineTo(anchoMax - margX - 15, altMax - margY + 5);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //Flecha Eje Y
    ctx.beginPath();
    ctx.moveTo(margX, margY);
    ctx.lineTo(margX + 5, margY + 15);
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.moveTo(margX, margY);
    ctx.lineTo(margX - 5, margY + 15);
    ctx.strokestyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //divisiones X
    ctx.beginPath();
    for (i = margX + 20; i < anchoMax - margY - 20; i += 20) {
        ctx.moveTo(i, altMax + 7 - margY);
        ctx.lineTo(i, altMax - margY - 7);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    ctx.closePath();

    //numeros X
    ctx.beginPath();
    for (i = margX + 40; i < anchoMax - margY - 40; i += 40) {
        ctx.font = "15px Arial";
        ctx.fillText(valorX, i, altMax - 10);
        valorX += 40;
    }
    ctx.closePath();

    //divisiones Y
    ctx.beginPath();
    for (var i = altMax - margY - 40; i > margY; i -= 40) {
        ctx.moveTo(margX - 7, i);
        ctx.lineTo(margX + 7, i);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    ctx.closePath();

    //Numeros Y
    ctx.beginPath();
    for (var i = altMax - margY - 40; i > margY; i -= 40) {
        ctx.font = "15px Arial";
        ctx.fillText(valorY, margX - 33, i);
        valorY += 20;
    }
    ctx.closePath();
}

/*
function cambiarUnidadesVelocidadInicial(id, valor) {
    let VelInicial;
    let ms, kmh, kms, fts, mph, mps;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    let VelInicial;
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en el campo " + id);
        VelInicial = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }
}*/

/*
function input1(valor) {

}
*/
/*
let neke = document.getElementById("Unidades Vel. Inicial").value;

let Kms;
let ms;
if (neke === "m/s") {
    ms = document.getElementById("Vel. Inicial").value;
    document.getElementById("Vel. Inicial").value = Math.round(ms);
} else if (neke === "Km/h"){
    Kms = (document.getElementById("Vel. Inicial").value *3.6;
    document.getElementById("Vel. Inicial").value = Math.round(Kms);
}
document.getElementById("Vel. Inicial").value = Kms;*/

/*
function input2() {
    neke = document.getElementById("chose2").value;

    if (neke == "C") {
        fahr = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(fahr);
    } else {
        cels = (document.getElementById("f").value - 32) * 5 / 9;
        document.getElementById("c").value = Math.round(cels);
    }

}*/
