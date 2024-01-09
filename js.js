// Arreglo para almacenar números y comparaciones
var numeros = [];
var comparacionesVerdaderas = []; // Array para guardar números cuando se cumple la condición 1
var devoluciones = []; // Array para guardar devoluciones cuando se cumple la condición 2
var condicionesTres = []; // Array para guardar condiciones tres cuando se cumple la condición 3

// Contador para el ingreso de números
var contadorIngresos = 0;

// Función para agregar números al historial
function agregarNumero() {
    var numeroInput = document.getElementById('numeroInput');

    // Obtener el valor del número
    var x = parseFloat(numeroInput.value);

    // Verificar si el número es un número válido
    if (!isNaN(x) && x >= 0 && x <= 37) {
        // Incrementar el contador
        contadorIngresos++;

        // Agregar el número al inicio del array (posición 0)
        numeros.unshift(x);

        // Realizar comparaciones si hay al menos tres números ingresados
        if (numeros.length >= 3) {
            // Comparar posición 1 con posición 0
            if (numeros[1] === numeros[0]) {
                comparacionesVerdaderas.push({ ingreso: contadorIngresos, numero: numeros[0] });
            }

            // Comparar posición 2 con posición 0
            if (numeros[2] === numeros[0]) {
                devoluciones.push({ ingreso: contadorIngresos, numero: numeros[2] });
            }

            // Verificar la condición tres
            if (
                (numeros[0] % 2 !== 0 && numeros[0] + 1 === numeros[1]) || 
                (numeros[1] % 2 === 0 && numeros[1] - 1 === numeros[0]) || 
                (numeros[0] === numeros[1] + 1) || 
                (numeros[1] === numeros[0] + 1) ||
                (numeros[0] === 0 && numeros[1] === 37) || 
                (numeros[1] === 0 && numeros[0] === 37)
            ) {
                condicionesTres.push({ ingreso: contadorIngresos, numero: numeros[1] });
            }
        }

        // Actualizar el historial en el textarea
        actualizarHistorial();

        // Limpiar el campo de entrada
        numeroInput.value = '';
        
        // Hacer que el cursor aparezca automáticamente en la caja de texto después de cada operación
        numeroInput.focus();
    } else {
        alert('Ingrese un número válido entre 0 y 37.');
    }
}

// Función para actualizar el historial en el textarea
function actualizarHistorial() {
    var historialTextarea = document.getElementById('historialTextarea');
    historialTextarea.value = '';

    // Iterar sobre los números y agregar al historial
    for (var i = 0; i < numeros.length; i++) {
        historialTextarea.value += 'Número: ' + numeros[i] + ' (Ingreso: ' + (contadorIngresos - i) + ')\n';
    }

    // Mostrar las comparaciones verdaderas en el textarea
    if (comparacionesVerdaderas.length > 0) {
        historialTextarea.value += '\nRepetición: ';
        for (var j = 0; j < comparacionesVerdaderas.length; j++) {
            historialTextarea.value += 'In ' + comparacionesVerdaderas[j].ingreso + ' - Número ' + comparacionesVerdaderas[j].numero + ' ';
        }
    }

    // Mostrar las devoluciones en el textarea
    if (devoluciones.length > 0) {
        historialTextarea.value += '\nDevolucion: ';
        for (var k = 0; k < devoluciones.length; k++) {
            historialTextarea.value += 'In ' + devoluciones[k].ingreso + ' - Número ' + devoluciones[k].numero + ' ';
        }
    }

    // Mostrar las condiciones tres en el textarea
    if (condicionesTres.length > 0) {
        historialTextarea.value += '\nFntPerfect: ';
        for (var l = 0; l < condicionesTres.length; l++) {
            historialTextarea.value += 'In ' + condicionesTres[l].ingreso + ' - Número ' + condicionesTres[l].numero + ' ';
        }
    }
    
}
