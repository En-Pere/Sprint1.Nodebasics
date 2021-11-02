//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const { suma, resta, multiplicacion, division } = require('../app/calculadora');

test('suma 3 + 3 son 6', () => {
  expect(suma(3, 3)).toBe(6)
});

test('resta 3 - 3 son 0', () => {
  expect(resta(3, 3)).toBe(0);
});

test('multiplica 3 * 3 son 9', () => {
  expect(multiplicacion(3, 3)).toBe(9);
});

test('divide 3 / 3 son 1', () => {
  expect(division(3, 3)).toBe(1);
});










