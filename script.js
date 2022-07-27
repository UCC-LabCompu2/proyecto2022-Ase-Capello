/**
 * In case the video codec is not supported, remove the first video element and
 * continues with the next resource successively.
 *
 * @method fallback
 *
 * @param video - the video element
 *
 * @author Angelo Carlos Capello
 */
function fallback(video) {
    /* Removing the first video element and continues with the next resource successively. */
    while (video.hasChildNodes()) {
        if (video.firstChild instanceof HTMLSourceElement) video.removeChild(video.firstChild);
        else video.parentNode.insertBefore(video.firstChild, video);
    }
    video.parentNode.removeChild(video);
}

/**
 * Preventing the form from being submitted if it is not valid.
 *
 * @author Angelo Carlos Capello
 */
(() => {
    'use strict';
    /* The next code is adding an event listener to the window object. The event listener is listening for the
    load event. When the load event occurs, the function is executed. */
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

/* The next code is adding an event listener to the window object. The event listener is listening for the load event.
When the load event occurs, the function is executed. */
window.addEventListener('load', function () {

    /**
     * Creating a canvas element and resizing it to match the window size.
     *
     * @author Angelo Carlos Capello
     */
    (function () {
        const // Obtain a reference to the canvas element using its id.
            htmlCanvas = document.getElementById('my_canvas');

        // Start listening to resize events and draw canvas.
        initialize();

        /**
         * The function is called each time the window is resized
         *
         * @method initialize
         *
         * @author Angelo Carlos Capello
         */
        function initialize() {
            // Register an event listener to call the resizeCanvas() function each time the window is resized.
            /* Creating a function that will be called each time the window is resized. */
            window.addEventListener('resize', resizeCanvas, false);
            // Draw canvas border for the first time.
            resizeCanvas();
        }

        // Runs each time the DOM window resize event fires.
        // Resets the canvas dimensions to match window,
        // then draws the new borders accordingly.
        /**
         * The resizeCanvas function resizes the canvas to match the window size.
         *
         * @method resizeCanvas
         *
         * @author Angelo Carlos Capello
         */
        function resizeCanvas() {
            htmlCanvas.width = window.innerWidth;
            htmlCanvas.height = window.innerHeight;
            axes();
        }
    })();
}, false);

/**
 * The checkValidInputs function checks if the value of the input field is a number. If it is not, it will alert
 * the user that the value is invalid, and it will reset all values of input fields to 0. It also checks
 * if initial_speed, angle and initial_height are greater than 100 or 90 respectively. If they are,
 * then an alert message will be displayed to inform them that their values are invalid, and they will be reset to 0.
 * Finally, this function checks if gravity's value is greater than 20; if so an alert message informs them that their
 * values are invalid and resets gravity's value to 9,81 (the default). This function returns nothing because its
 * purpose was only for checking purposes in order for users not enter any incorrect data into our program which would
 * cause errors when running our simulation code later on in this file.
 *
 * @param id Identify the input field that is being validated
 * @param valor Store the value of the input field
 *
 * @method checkValidInputs
 *
 * author Angelo Carlos Capello
 */

function checkValidInputs(id, valor) {

    /* Checking if the value of the input field is a number. If it is not, it will alert the user that the value is
    invalid, and it will reset all the values of the input fields to 0. */
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en el campo " + id);
        reset();
    }

    /* Checking if the value of the input field is greater than 100. If it is, it will alert the user that the value is
    invalid, and it will reset the value of the input field to 0. */
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
 * The convertUnits function converts the units of a given value.
 *
 *
 * @param id Identify the element that is being changed.
 * @param unidad Identifies the unit to which you want to convert
 *
 * @method convertUnits
 *
 * @author Angelo Carlos Capello
 */
function convertUnits(id, unidad) {
    /* The next code convert the speed from one unit to another. */
    if (id === "initial_speed_units_to") {
        /* Converting the speed from m/s to the selected unit. */
        if (document.getElementById("initial_speed_units_from").value === "m/s") {
            if (unidad === "km/h") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 3.6).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "km/h";
            } else if (unidad === "km/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value / 1000).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "km/s";
            } else if (unidad === "ft/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 3.28084).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "ft/s";
            } else if (unidad === "mph") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 2.237).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "mph";
            } else if (unidad === "mps") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value / 1609.344).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "mps";
            }
        }

        /* Converting the speed from km/h to the selected unit. */
        if (document.getElementById("initial_speed_units_from").value === "km/h") {
            if (unidad === "m/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * (1000 / 3600)).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "m/s";
            } else if (unidad === "km/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value / 3600).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "km/s";
            } else if (unidad === "ft/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value / 1.09728).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "ft/s";
            } else if (unidad === "mph") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value / 1.60934).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "mph";
            } else if (unidad === "mps") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value / 1609.344).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "mps";
            }
        }

        /* Converting the speed from km/s to the selected unit. */
        if (document.getElementById("initial_speed_units_from").value === "km/s") {
            if (unidad === "m/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 1000).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "m/s";
            } else if (unidad === "km/h") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 3600).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "km/h";
            } else if (unidad === "ft/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 3280.8398950131).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "ft/s";
            } else if (unidad === "mph") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 2236.9362920544).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "mph";
            } else if (unidad === "mps") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 0.62137119223733).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "mps";
            }
        }

        /* Converting the speed from feet per second to the selected unit. */
        if (document.getElementById("initial_speed_units_from").value === "ft/s") {
            if (unidad === "m/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 0.3048).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "m/s";
            } else if (unidad === "km/h") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 1.09728).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "km/h";
            } else if (unidad === "km/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 0.0003048).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "km/s";
            } else if (unidad === "mph") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 0.68181818181818).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "mph";
            } else if (unidad === "mps") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 0.00018939393939394).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "mps";
            }
        }

        /* Converting the speed from mph to the selected unit. */
        if (document.getElementById("initial_speed_units_from").value === "mph") {
            if (unidad === "m/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 0.44704).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "m/s";
            } else if (unidad === "km/h") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 1.609344).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "km/h";
            } else if (unidad === "km/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 0.00044704).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "km/s";
            } else if (unidad === "ft/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 1.4666666666667).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "ft/s";
            } else if (unidad === "mps") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 0.00027777777777778).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "mps";
            }
        }

        /* Converting the speed from mps to the selected unit. */
        if (document.getElementById("initial_speed_units_from").value === "mps") {
            if (unidad === "m/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 1609.344).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "m/s";
            } else if (unidad === "km/h") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 5793.6384).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "km/h";
            } else if (unidad === "km/s") {
                document.getElementById("initial_speed").value =

                    (document.getElementById("initial_speed").value * 1.609344).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "km/s";
            } else if (unidad === "ft/s") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 5280).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "ft/s";
            } else if (unidad === "mph") {
                document.getElementById("initial_speed").value =
                    (document.getElementById("initial_speed").value * 3600).toFixed(2);
                document.getElementById("initial_speed_units_from").value = "mph";
            }
        }
    }

    /* Converting the angle from degrees to radians and vice versa. */
    if (id === "angle_units_to") {
        /* Converting the angle from degrees to radians. */
        if (document.getElementById("angle_units_from").value === "degree") {
            if (unidad === "rad") {
                document.getElementById("angle").value =
                    (document.getElementById("angle").value * (Math.PI / 180)).toFixed(2);
                document.getElementById("angle_units_from").value = "rad";
            }
        }

        /* Converting the angle from radians to degrees. */
        if (document.getElementById("angle_units_from").value === "rad") {
            if (unidad === "degree") {
                document.getElementById("angle").value =
                    (document.getElementById("angle").value * (180 / Math.PI)).toFixed(2);
                document.getElementById("angle_units_from").value = "degree";
            }
        }
    }

    /* The next code is converting the initial height from one unit to another. */
    if (id === "initial_height_units_to") {
        /* Converting the initial height from meters to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("initial_height_units_from").value === "meter") {
            if (unidad === "kilometer") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 0.001).toFixed(2);
                document.getElementById("initial_height_units_from").value = "kilometer";
            } else if (unidad === "feet") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 3.2808398950131).toFixed(2);
                document.getElementById("initial_height_units_from").value = "feet";
            } else if (unidad === "inches") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 39.370078740157).toFixed(2);
                document.getElementById("initial_height_units_from").value = "inches";
            } else if (unidad === "yards") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 1.0936132983377).toFixed(2);
                document.getElementById("initial_height_units_from").value = "yards";
            }
        }


        /* Converting the initial height from kilometers to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("initial_height_units_from").value === "kilometer") {
            if (unidad === "meter") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 1000).toFixed(2);
                document.getElementById("initial_height_units_from").value = "meter";
            } else if (unidad === "feet") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 3280.8398950131).toFixed(2);
                document.getElementById("initial_height_units_from").value = "feet";
            } else if (unidad === "inches") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 39370.078740157).toFixed(2);
                document.getElementById("initial_height_units_from").value = "inches";
            } else if (unidad === "yards") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 1093.6132983377).toFixed(2);
                document.getElementById("initial_height_units_from").value = "yards";
            }
        }

        /* Converting the initial_height from feet to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("initial_height_units_from").value === "feet") {
            if (unidad === "meter") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 0.3048).toFixed(2);
                document.getElementById("initial_height_units_from").value = "meter";
            } else if (unidad === "kilometer") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 0.0003048).toFixed(2);
                document.getElementById("initial_height_units_from").value = "kilometer";
            } else if (unidad === "inches") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 12).toFixed(2);
                document.getElementById("initial_height_units_from").value = "inches";
            } else if (unidad === "yards") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 0.33333333333333).toFixed(2);
                document.getElementById("initial_height_units_from").value = "yards";
            }
        }

        /* Converting the initial_height from inches to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("initial_height_units_from").value === "inches") {
            if (unidad === "meter") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 0.0254).toFixed(2);
                document.getElementById("initial_height_units_from").value = "meter";
            } else if (unidad === "kilometer") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 0.0000254).toFixed(2);
                document.getElementById("initial_height_units_from").value = "kilometer";
            } else if (unidad === "feet") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 0.08333333333333).toFixed(2);
                document.getElementById("initial_height_units_from").value = "feet";
            } else if (unidad === "yards") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 0.02777777777778).toFixed(2);
                document.getElementById("initial_height_units_from").value = "yards";
            }
        }
        /* Converting the initial_height from yards to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("initial_height_units_from").value === "yards") {
            if (unidad === "meter") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 0.9144).toFixed(2);
                document.getElementById("initial_height_units_from").value = "meter";
            } else if (unidad === "kilometer") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 0.0009144).toFixed(2);
                document.getElementById("initial_height_units_from").value = "kilometer";
            } else if (unidad === "feet") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 3).toFixed(2);
                document.getElementById("initial_height_units_from").value = "feet";
            } else if (unidad === "inches") {
                document.getElementById("initial_height").value =
                    (document.getElementById("initial_height").value * 36).toFixed(2);
                document.getElementById("initial_height_units_from").value = "inches";
            }
        }
    }

    /* Converting the units of gravity. */
    if (id === "gravity_units_to") {
        /* Converting the gravity from m/s² to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("gravity_units_from").value === "m/s²") {
            if (unidad === "gal") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 100).toFixed(2);
                document.getElementById("gravity_units_from").value = "gal";
            } else if (unidad === "ft/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 3.2808398950131).toFixed(2);
                document.getElementById("gravity_units_from").value = "ft/s²";
            } else if (unidad === "km/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.001).toFixed(2);
                document.getElementById("gravity_units_from").value = "km/s²";
            } else if (unidad === "in/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 39.370078740157).toFixed(2);
                document.getElementById("gravity_units_from").value = "in/s²";
            } else if (unidad === "yd/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 1.0936132983377).toFixed(2);
                document.getElementById("gravity_units_from").value = "yd/s²";
            }
        }

        /* Converting the gravity from gal to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("gravity_units_from").value === "gal") {
            if (unidad === "m/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.01).toFixed(2);
                document.getElementById("gravity_units_from").value = "m/s²";
            } else if (unidad === "ft/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.032808398950131).toFixed(2);
                document.getElementById("gravity_units_from").value = "ft/s²";
            } else if (unidad === "km/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.00001).toFixed(2);
                document.getElementById("gravity_units_from").value = "km/s²";
            } else if (unidad === "in/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.39370078740157).toFixed(2);
                document.getElementById("gravity_units_from").value = "in/s²";
            } else if (unidad === "yd/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.010936132983377).toFixed(2);
                document.getElementById("gravity_units_from").value = "yd/s²";
            }
        }

        /* Converting the gravity from ft/s² to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("gravity_units_from").value === "ft/s²") {
            if (unidad === "m/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.3048).toFixed(2);
                document.getElementById("gravity_units_from").value = "m/s²";
            } else if (unidad === "gal") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 30.48).toFixed(2);
                document.getElementById("gravity_units_from").value = "gal";
            } else if (unidad === "km/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.0003048).toFixed(2);
                document.getElementById("gravity_units_from").value = "km/s²";
            } else if (unidad === "in/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 12).toFixed(2);
                document.getElementById("gravity_units_from").value = "in/s²";
            } else if (unidad === "yd/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.33333333333333).toFixed(2);
                document.getElementById("gravity_units_from").value = "yd/s²";
            }
        }

        /* Converting the gravity from km/s² to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("gravity_units_from").value === "km/s²") {
            if (unidad === "m/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 1000).toFixed(2);
                document.getElementById("gravity_units_from").value = "m/s²";
            } else if (unidad === "gal") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 100000).toFixed(2);
                document.getElementById("gravity_units_from").value = "gal";
            } else if (unidad === "ft/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 3280.8398950131).toFixed(2);
                document.getElementById("gravity_units_from").value = "ft/s²";
            } else if (unidad === "in/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 39370.078740157).toFixed(2);
                document.getElementById("gravity_units_from").value = "in/s²";
            } else if (unidad === "yd/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 1093.6132983377).toFixed(2);
                document.getElementById("gravity_units_from").value = "yd/s²";
            }
        }

        /* Converting the gravity from in/s² to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("gravity_units_from").value === "in/s²") {
            if (unidad === "m/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.0254).toFixed(2);
                document.getElementById("gravity_units_from").value = "m/s²";
            } else if (unidad === "gal") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 2.54).toFixed(2);
                document.getElementById("gravity_units_from").value = "gal";
            } else if (unidad === "ft/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.08333333333333).toFixed(2);
                document.getElementById("gravity_units_from").value = "ft/s²";
            } else if (unidad === "km/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.0000254).toFixed(2);
                document.getElementById("gravity_units_from").value = "km/s²";
            } else if (unidad === "yd/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.027777777777778).toFixed(2);
                document.getElementById("gravity_units_from").value = "yd/s²";
            }
        }

        /* Converting the gravity from yd/s² to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("gravity_units_from").value === "yd/s²") {
            if (unidad === "m/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.9144).toFixed(2);
                document.getElementById("gravity_units_from").value = "m/s²";
            } else if (unidad === "gal") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 91.44).toFixed(2);
                document.getElementById("gravity_units_from").value = "gal";
            } else if (unidad === "ft/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 3).toFixed(2);
                document.getElementById("gravity_units_from").value = "ft/s²";
            } else if (unidad === "km/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 0.0009144).toFixed(2);
                document.getElementById("gravity_units_from").value = "km/s²";
            } else if (unidad === "in/s²") {
                document.getElementById("gravity").value =
                    (document.getElementById("gravity").value * 36).toFixed(2);
                document.getElementById("gravity_units_from").value = "in/s²";
            }
        }
    }

    /* The next code is converting the distance from one unit to another. */
    if (id === "distance_units_to") {
        /* Converting the distance from meter to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("distance_units_from").value === "meter") {
            if (unidad === "kilometer") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 0.001).toFixed(2);
                document.getElementById("distance_units_from").value = "kilometer";
            } else if (unidad === "feet") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 3.2808398950131).toFixed(2);
                document.getElementById("distance_units_from").value = "feet";
            } else if (unidad === "inches") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 39.370078740157).toFixed(2);
                document.getElementById("distance_units_from").value = "inches";
            } else if (unidad === "yards") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 1.0936132983377).toFixed(2);
                document.getElementById("distance_units_from").value = "yards";
            }
        }

        /* Converting the distance from kilometer to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("distance_units_from").value === "kilometer") {
            if (unidad === "meter") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 1000).toFixed(2);
                document.getElementById("distance_units_from").value = "meter";
            } else if (unidad === "feet") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 3280.8398950131).toFixed(2);
                document.getElementById("distance_units_from").value = "feet";
            } else if (unidad === "inches") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 39370.078740157).toFixed(2);
                document.getElementById("distance_units_from").value = "inches";
            } else if (unidad === "yards") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 1093.6132983377).toFixed(2);
                document.getElementById("distance_units_from").value = "yards";
            }
        }

        /* Converting the distance from feet to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("distance_units_from").value === "feet") {
            if (unidad === "meter") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 0.3048).toFixed(2);
                document.getElementById("distance_units_from").value = "meter";
            } else if (unidad === "kilometer") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 0.0003048).toFixed(2);
                document.getElementById("distance_units_from").value = "kilometer";
            } else if (unidad === "inches") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 12).toFixed(2);
                document.getElementById("distance_units_from").value = "inches";
            } else if (unidad === "yards") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 0.33333333333333).toFixed(2);
                document.getElementById("distance_units_from").value = "yards";
            }
        }

        /* Converting the distance from inches to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("distance_units_from").value === "inches") {
            if (unidad === "meter") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 0.0254).toFixed(2);
                document.getElementById("distance_units_from").value = "meter";
            } else if (unidad === "kilometer") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 0.0000254).toFixed(2);
                document.getElementById("distance_units_from").value = "kilometer";
            } else if (unidad === "feet") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 0.08333333333333).toFixed(2);
                document.getElementById("distance_units_from").value = "feet";
            } else if (unidad === "yards") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 0.02777777777778).toFixed(2);
                document.getElementById("distance_units_from").value = "yards";
            }
        }

        /* Converting the distance from yards to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("distance_units_from").value === "yards") {
            if (unidad === "meter") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 0.9144).toFixed(2);
                document.getElementById("distance_units_from").value = "meter";
            } else if (unidad === "kilometer") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 0.0009144).toFixed(2);
                document.getElementById("distance_units_from").value = "kilometer";
            } else if (unidad === "feet") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 3).toFixed(2);
                document.getElementById("distance_units_from").value = "feet";
            } else if (unidad === "inches") {
                document.getElementById("distance").value =
                    (document.getElementById("distance").value * 36).toFixed(2);
                document.getElementById("distance_units_from").value = "inches";
            }
        }
    }

    /* Converting the maximum height from one unit to another. */
    if (id === "maximum_height_units_to") {
        /* Converting the maximum height from meter to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("maximum_height_units_from").value === "meter") {
            if (unidad === "kilometer") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 0.001).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "kilometer";
            } else if (unidad === "feet") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 3.2808398950131).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "feet";
            } else if (unidad === "inches") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 39.370078740157).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "inches";
            } else if (unidad === "yards") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 1.0936132983377).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "yards";
            }
        }

        /* Converting the maximum height from kilometer to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("maximum_height_units_from").value === "kilometer") {
            if (unidad === "meter") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 1000).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "meter";
            } else if (unidad === "feet") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 3280.8398950131).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "feet";
            } else if (unidad === "inches") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 39370.078740157).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "inches";
            } else if (unidad === "yards") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 1093.6132983377).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "yards";
            }
        }

        /* Converting the maximum height from feet to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("maximum_height_units_from").value === "feet") {
            if (unidad === "meter") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 0.3048).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "meter";
            } else if (unidad === "kilometer") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 0.0003048).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "kilometer";
            } else if (unidad === "inches") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 12).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "inches";
            } else if (unidad === "yards") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 0.33333333333333).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "yards";
            }
        }

        /* Converting the maximum height from inches to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("maximum_height_units_from").value === "inches") {
            if (unidad === "meter") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 0.0254).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "meter";
            } else if (unidad === "kilometer") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 0.0000254).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "kilometer";
            } else if (unidad === "feet") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 0.08333333333333).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "feet";
            } else if (unidad === "yards") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 0.02777777777778).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "yards";
            }
        }

        /* Converting the maximum height from yards to the unit selected in the dropdown menu by the user. */
        if (document.getElementById("maximum_height_units_from").value === "yards") {
            if (unidad === "meter") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 0.9144).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "meter";
            } else if (unidad === "kilometer") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 0.0009144).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "kilometer";
            } else if (unidad === "feet") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 3).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "feet";
            } else if (unidad === "inches") {
                document.getElementById("maximum_height").value =
                    (document.getElementById("maximum_height").value * 36).toFixed(2);
                document.getElementById("maximum_height_units_from").value = "inches";
            }
        }
    }

    /* The next code is converting the time units from one to another. */
    if (id === "time_units_to") {
        /* Converting seconds to minutes and hours. */
        if (document.getElementById("time_units_from").value === "seconds") {
            if (unidad === "minutes") {
                document.getElementById("time").value =
                    (document.getElementById("time").value * 0.016666666666667).toFixed(2);
                document.getElementById("time_units_to").value = "minutes";
            } else if (unidad === "hours") {
                document.getElementById("time").value =
                    (document.getElementById("time").value * 0.00027777777777778).toFixed(2);
                document.getElementById("time_units_to").value = "hours";
            }
        }

        /* Converting minutes to seconds and hours. */
        if (document.getElementById("time_units_from").value === "minutes") {
            if (unidad === "seconds") {
                document.getElementById("time").value =
                    (document.getElementById("time").value * 60).toFixed(2);
                document.getElementById("time_units_to").value = "seconds";
            } else if (unidad === "hours") {
                document.getElementById("time").value =
                    (document.getElementById("time").value * 0.016666666666667).toFixed(2);
                document.getElementById("time_units_to").value = "hours";
            }
        }

        /* Converting hours to minutes and seconds. */
        if (document.getElementById("time_units_from").value === "hour") {
            if (unidad === "minute") {
                document.getElementById("time").value =
                    (document.getElementById("time").value * 60).toFixed(2);
                document.getElementById("time_units_from").value = "minute";
            } else if (unidad === "second") {
                document.getElementById("time").value =
                    (document.getElementById("time").value * 3600).toFixed(2);
                document.getElementById("time_units_from").value = "second";
            }
        }
    }
}

/**
 * The calculateProjectileMotion function calculates the time, distance and maximum height of a projectile with
 * initial velocity,angle, initial Height and gravity and then draws a graph of the projectile's trajectory on a canvas.
 *
 * @method calculateProjectileMotion
 *
 * @author Angelo Carlos Capello
 */
function calculateProjectileMotion() {
    /* Declaring the variables that will be used in the function. */
    let initialVelocity, angle, gravity, initialHeight, time, maximumHeight, distance;
    /* Taking the user to the canvas of the page. */
    location.href = '#my_canvas';

    /* Getting the values of the input fields. */
    if (document.getElementById("initial_speed_units_from").value === "m/s") {
        initialVelocity = document.getElementById("initial_speed").value;
    } else if (document.getElementById("initial_speed_units_from").value === "km/h") {
        initialVelocity = (document.getElementById("initial_speed").value * (1000 / 3600)).toFixed(2);
    } else if (document.getElementById("initial_speed_units_from").value === "km/s") {
        initialVelocity = (document.getElementById("initial_speed").value * 1000).toFixed(2);
    } else if (document.getElementById("initial_speed_units_from").value === "ft/s") {
        initialVelocity = (document.getElementById("initial_speed").value * 0.3048).toFixed(2);
    } else if (document.getElementById("initial_speed_units_from").value === "mph") {
        initialVelocity = (document.getElementById("initial_speed").value * 0.44704).toFixed(2);
    } else if (document.getElementById("initial_speed_units_from").value === "mps") {
        initialVelocity = (document.getElementById("initial_speed").value * 1609.344).toFixed(2);
    }
    if (document.getElementById("angle_units_from").value === "degrees") {
        angle = document.getElementById("angle").value;
    } else if (document.getElementById("angle_units_from").value === "rad") {
        angle = (document.getElementById("angle").value * (180 / Math.PI)).toFixed(2);
    }
    if (document.getElementById("initial_height_units_from").value === "meter") {
        initialHeight = document.getElementById("initial_height").value;
    }
    if (document.getElementById("gravity_units_from").value === "m/s²") {
        gravity = document.getElementById("gravity").value;
    } else if (document.getElementById("gravity_units_from").value === "gal") {
        gravity = (document.getElementById("gravity").value * 0.01).toFixed(2);
    } else if (document.getElementById("gravity_units_from").value === "ft/s²") {
        gravity = (document.getElementById("gravity").value * 0.3048).toFixed(2);
    } else if (document.getElementById("gravity_units_from").value === "km/s²") {
        gravity = (document.getElementById("gravity").value * 1000).toFixed(2);
    } else if (document.getElementById("gravity_units_from").value === "in/s²") {
        gravity = (document.getElementById("gravity").value * 0.0254).toFixed(2);
    } else if (document.getElementById("gravity_units_from").value === "yd/s²") {
        gravity = (document.getElementById("gravity").value * 0.9144).toFixed(2);
    }


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

    /* The above code is creating a canvas and setting the context to 2d. It is also setting the maximum height of the
    canvas and the margins. */
    const canvas = document.getElementById("my_canvas");
    const ctx = canvas.getContext("2d");
    const maximumCanvasHeight = canvas.height;
    const margX = 50;
    const margY = 30;
    let t = 0;
    let nIntervId;

    /* Drawing a red dot on the canvas. */
    ctx.beginPath();
    ctx.fillStyle = "#ff1919";
    ctx.arc(margX + vx * time, maximumCanvasHeight - margY - (initialHeight + (vy * time - 0.5 * 9.8 * (Math.pow(time, 2)))) + maximumCanvasHeight - margY, 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    nintervId = setInterval(() => {
        t += 0.01;
        ctx.beginPath();
        ctx.fillStyle = "#ff1919";
        ctx.arc(margX + vx * t, maximumCanvasHeight - margY - initialHeight - (vy * t - 0.5 * 9.8 * (Math.pow(t, 2))), 1, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        if (t >= time) {
            clearInterval(nintervId);
        }
    }, 5);
    nIntervId = null;
}

/**
 * Resets all the values of the form to 0.
 *
 * @method reset
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
 * @method clearCanvas
 *
 * @author Angelo Carlos Capello
 */
function clearCanvas() {
    const canvas = document.getElementById("my_canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    axes();
}

/**
 * Preventing the user from entering the characters "e", "-" and "+" into the input box.
 *
 * @author Angelo Carlos Capello
 */
window.addEventListener('load', function () {
    const initial_speed_input = document.getElementById("initial_speed");
    const angle_input = document.getElementById("angle");
    const initial_height_input = document.getElementById("initial_height");
    const gravity_input = document.getElementById("gravity");

    const invalidChars = [
        "-",
        "+",
        "e",
    ];

    /* Preventing the user from entering the letter "e" or the dash "-" into the input field. */
    initial_speed_input.addEventListener("input", function () {
        this.value = this.value.replace(/[e\-]/gi, "");
    });
    angle_input.addEventListener("input", function () {
        this.value = this.value.replace(/[e\-]/gi, "");
    });
    initial_height_input.addEventListener("input", function () {
        this.value = this.value.replace(/[e\-]/gi, "");
    });
    gravity_input.addEventListener("input", function () {
        this.value = this.value.replace(/[e\-]/gi, "");
    });

    /* Preventing the user from entering invalid characters into the input field. */
    initial_speed_input.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    });
    angle_input.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    });
    initial_height_input.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    });
    gravity_input.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    });
}, false);

/**
 * The axes function draws the axes of a graph.
 *
 * @method axes
 *
 * @author Angelo Carlos Capello
 */
function axes() {
    let i;
    /* The above code is creating a canvas and setting the height and width of the canvas. */
    const canvas = document.getElementById("my_canvas");
    const ctx = canvas.getContext("2d");
    const maximumCanvasHeight = canvas.height;
    const maximumCanvasWidth = canvas.width;
    const margX = 50;
    const margY = 30;
    var valueX = 40;
    var valueY = 20;

    //X axis
    /* Drawing a line from the bottom left corner to the bottom right corner of the canvas. */
    ctx.beginPath();
    ctx.moveTo(margX, maximumCanvasHeight - margY);
    ctx.lineTo(maximumCanvasWidth - margX, maximumCanvasHeight - margY);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //Y axis
    /* Drawing a vertical line on the canvas. */
    ctx.beginPath();
    ctx.moveTo(margX, maximumCanvasHeight - margY);
    ctx.lineTo(margX, margY);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //X axis Arrow
    /* Drawing a line from the bottom right corner of the canvas to the bottom right corner minus 15 pixels in the x
    direction and minus 5 pixels in the y direction. */
    ctx.beginPath();
    ctx.moveTo(maximumCanvasWidth - margX, maximumCanvasHeight - margY);
    ctx.lineTo(maximumCanvasWidth - margX - 15, maximumCanvasHeight - margY - 5);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    /* Drawing a line from the bottom right corner of the canvas to the bottom right corner of the canvas minus 15
    pixels in the x direction and plus 5 pixels in the y direction. */
    ctx.beginPath();
    ctx.moveTo(maximumCanvasWidth - margX, maximumCanvasHeight - margY);
    ctx.lineTo(maximumCanvasWidth - margX - 15, maximumCanvasHeight - margY + 5);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //Y Axis Arrow
    /* Drawing a line from the top left corner of the canvas to the bottom left corner. */
    ctx.beginPath();
    ctx.moveTo(margX, margY);
    ctx.lineTo(margX + 5, margY + 15);
    ctx.stroke();
    ctx.closePath();

    /* Drawing a triangle. */
    ctx.beginPath();
    ctx.moveTo(margX, margY);
    ctx.lineTo(margX - 5, margY + 15);
    ctx.strokestyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //X divisions
    /* Drawing the vertical lines of the grid. */
    ctx.beginPath();
    for (i = margX + 20; i < maximumCanvasWidth - margY - 20; i += 20) {
        ctx.moveTo(i, maximumCanvasHeight + 7 - margY);
        ctx.lineTo(i, maximumCanvasHeight - margY - 7);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    ctx.closePath();

    //X numbers
    /* Drawing the X axis labels. */
    ctx.beginPath();
    for (i = margX + 40; i < maximumCanvasWidth - margY - 40; i += 40) {
        ctx.font = "15px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText(valueX, i, maximumCanvasHeight - 10);
        valueX += 40;
    }
    ctx.closePath();

    //Y divisions
    /* Drawing the vertical lines on the graph. */
    ctx.beginPath();
    for (i = maximumCanvasHeight - margY - 20; i > margY; i -= 20) {
        ctx.moveTo(margX - 7, i);
        ctx.lineTo(margX + 7, i);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    ctx.closePath();

    //Y numbers
    /* Drawing the Y axis labels. */
    ctx.beginPath();
    for (i = maximumCanvasHeight - margY - 20; i > margY; i -= 20) {
        ctx.font = "15px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText(valueY, margX - 33, i);
        valueY += 20;
    }
    ctx.closePath();
}