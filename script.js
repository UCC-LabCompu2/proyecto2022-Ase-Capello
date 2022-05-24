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

/**
 * The calculateProjectilEmotion function calculates the time, distance and maximum height of a projectile.
 *
 * @return The time, distance and maximum height of the projectile
 *
 * @author Angelo Carlos Capello
 */

function calculateProjectilEmotion() {
    /* Declaring the variables that will be used in the function. */
    let initialVEL, ang, gravity, initialHT, time, maximumHeight, distance;
    location.href = '#my-canvas';

    /* Getting the values of the input fields. */
    initialVEL = document.getElementById("initial-VEL.").value;
    ang = document.getElementById("ANG.").value;
    gravity = document.getElementById("gravity").value;
    initialHT = document.getElementById("initial-HT.").value;


    /* Checking if the initial height is 0. If it is, it will calculate the time, distance and maximum height of the
    heightless projectile. If not, it will calculate the time, distance and maximum height of the projectile with height. */
    if (initialHT === "0") {
        time = ((2 * initialVEL * (Math.sin(ang * Math.PI / 180))) / gravity).toFixed(2);
        document.getElementById("time").value = time;
        distance = ((Math.pow(initialVEL, 2) * (Math.sin(2 * ang * Math.PI / 180))) / gravity).toFixed(2);
        document.getElementById("DIST.").value = distance;
        maximumHeight = ((Math.pow(initialVEL, 2) * Math.pow((Math.sin(ang * Math.PI / 180)), 2)) / (2 * gravity)).toFixed(2)
        document.getElementById("maximum-HT.").value = maximumHeight;
    } else {
        time = ((initialVEL * (Math.sin(ang * Math.PI / 180)) + Math.sqrt(Math.pow(initialVEL, 2) * Math.pow((Math.sin(ang * Math.PI / 180)), 2) + 2 * gravity * initialHT)) / gravity).toFixed(2);
        document.getElementById("time").value = time;
        distance = ((initialVEL * (Math.cos(ang * Math.PI / 180))) * time).toFixed(2);
        document.getElementById("DIST.").value = distance;
        maximumHeight = (parseFloat(initialHT) + (Math.pow(initialVEL, 2) * Math.pow((Math.sin(ang * Math.PI / 180)), 2) / (2 * gravity))).toFixed(2);
        document.getElementById("maximum-HT.").value = maximumHeight;
    }
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
    document.getElementById("initial-VEL.").value = "0";
    document.getElementById("ANG.").value = "0";
    document.getElementById("initial-HT.").value = "0";
    document.getElementById("gravity").value = "9,81";
    document.getElementById("DIST.").value = "0";
    document.getElementById("maximum-HT.").value = "0";
    document.getElementById("time").value = "0";
}

/*
function checkIfItIsNumber(id, valor) {

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en el campo " + id);
        VelInicial = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }
}
*/
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
