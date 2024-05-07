var firstNumber = Math.floor(Math.random() * 11);  // Genera un número entero aleatorio de 0 a 10
var secondNumber = Math.floor(Math.random() * 11);  // Genera otro número entero aleatorio de 0 a 10

// Mostrar los números en los elementos del DOM
document.getElementById('primary-number').textContent = firstNumber;
document.getElementById('secondary-number').textContent = secondNumber;

// Obtener el elemento button y asignar el evento click
document.getElementById('btn').addEventListener('click', checkSum);

// Función para verificar la suma
function checkSum() {
    var guess = document.getElementById('guess').value; // Obtiene el valor ingresado por el usuario
    var total = firstNumber + secondNumber;

    if (parseInt(guess) === total) {
        document.querySelector('#message').textContent = "¡La suma es correcta!";
    } else {
        document.querySelector('#message').textContent = `La suma es incorrecta. La suma correcta era ${total}`;
    }
}