var data = require('./data.js');

export default {
  findAllPersons: () => {
    return data.persons;
  },
  findPersonById: (id) => {
    var person = data.persons.filter((person) => person.id === id);
    return (person.length > 0) ? person[0] : null;
  },
  insertPerson: (person) => {
    person.id = data.persons.length;
    data.persons.push(person);
    return person;
  },
  findAllCars: () => {
    return data.cars;
  },
  findCarById: (id) => {
    var car = data.cars.filter((car) => car.id === id);
    return (car.length > 0) ? car[0] : null;
  },
  insertCar: (car) => {
    car.id = data.cars.length;
    data.cars.push(car);
    return car;
  }
};
