var firstNumber = Math.floor(Math.random() * 11); // Genera un número entero aleatorio de 0 a 10
var secondNumber = Math.floor(Math.random() * 11); // Genera otro número entero aleatorio de 0 a 10

//display numbers on the canvas
$('#primary-number').text(firstNumber);
$('#secondary-number').text(secondNumber);

$('#btn').click(checkSum);

function checkSum() {
    let value = $('#guess').val();

    if (value == total) {
        alert("Correct!");
    }

    else {
        alert("Wrong!")
    }
}