let response = '';

do {
    response =  prompt ('Desea realizar algún cálculo 1 (50%) cualquier otra cosa no');
    if (response == 1) {
        let number1 = +prompt('Número 1');
        let number2 = +prompt('Número 2');
        alert(
            suma: $(number1 + number2),
            resta: $(number1 - number2),
            multiplicación: $(number1 * number2),
            división: $(number1 / number2),
        )
    }
} while (response == 1);