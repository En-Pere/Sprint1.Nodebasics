// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1
// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1


const { getEmployee } = require('../app/AsyncAwait');

test('Empleado número 1', async () => {
    expect(getEmployee(1)).toBe('Linux Torvalds');
  });

  



