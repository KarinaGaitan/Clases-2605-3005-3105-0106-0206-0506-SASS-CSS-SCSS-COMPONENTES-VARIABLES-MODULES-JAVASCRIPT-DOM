console.log(typeof 8);
console.log(typeof 'Karina');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof function () { });

/*typeof es un operador que nos permite saber que tipo de dato estoy ingresando*/

console.log(8 + 8);
console.log('8' + 8);

/*Si pongo texto con un más es para concatenar*/
/*8 + 8: es una expresión porque da un resultado*/
/*console.log (8 + 8) es una sentencia porque está antes de un ; */

console.log('8' * 8);

/*como 8 es texto se asume que es un número*/

console.log('8' > 8);

/*resultado es true o false boleano*/

console.log(false && true);
console.log(false || true);

/*operador lógico: cuando es la segunda opción con o basta que haya un true se asume como verdadero pero el & basta que uno sea falso, todo es falso*/

console.log(1 + 'Karina Gaitán');

/*operador de concatenación*/

var firstName;
let lastName;
const MONTHS_OF_THE_YEAR = 12;

/*se usa mayúsculas para usar sentencias constantes, no varían*/
/*establecimiento de variables con palabras reservadas*/

console.log(firstName);
console.log(lastName);

/*indefinido en console no significa que no existe la variable, no tiene valor en la sentencia*/

firstName = 'Karina';
console.log(firstName);

firstName = 'Karina'
Age = 38
console.log(firstName);
console.log(age);
console.log(MONTHS_OF_THE_YEAR);

const person = {
    firstName: 'Karina',
    lastName: 'Gaitán',
    single: true,
    special: () => { }
}

/*Un objeto es la colección de propiedades y las propiedades están compuestas por clave y valor*/
/*Para que se muestre en consola poner console.log(person)*/
/*Javascript es con , */

console.log(person);
console.log(person.firstName);
console.log(person.single);

/*Para acceder a un atributo siempre poner person. y agregar a lo que quiero acceder*/
/*Con console  SI se utiliza ; */

console.log(console);

/*Si quiero ir concantenando nombre y apellido*/
console.log('Nombre: ' + person.firstName + ', Apellido:' + person.lastName);
console.log(`
    Nombre: ${person.firstName},
    Apellido: ${person.lastName}
    Edad: ${person.age}
    Soltero: Sí,
`);

/*si quiero hacer un objeto e insertar una variable considerar comillas invertidas Alt + 96 de inicio a fin*/
